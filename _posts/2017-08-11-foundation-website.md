---
layout: post
title: "Foundation website generation on MacOS"
excerpt: "Install a complete development environment for generating a website using the flexible UI Foundation Framework top UI pros use"
tags: [UI, MacOS, setup, Foundation]
date: "2107-08-11"
file: "foundation-website"
image:
# foundation-yeti-point-1900x500-26464.jpg
  feature: https://user-images.githubusercontent.com/300046/30966202-5e660962-a415-11e7-9347-4af25029af26.jpg
  credit: Zurb
  creditlink: https://www.zurb.org
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This is a hands-on step-by-step tutorial on the quickest way for "newbies" to install Foundation Framework on a MacOS machine, using my Bash script or manually.

## About Foundation Framework

As its website address shows, the Foundation Framework's home page at https://foundation.zurb.com is from Zurb, a web design services firm based in the Silicon Valley since 1998.

<a target="_blank" href="https://zurb.com/responsive">
Look at Zurb's showcase</a> of websites, web apps, and emails. Some run on a WordPress backend. Zurb's publicly named customers include Slack, Asana, Amazon, Disney, eBay, National Geographic, etc.

Zurb's on-going work for <a target="_blank" href="https://foundation.zurb.com/showcase/brands.html">big brand clients</a> with money is the sustainable business model for continuous improvement. That's why Foundation can legitimately call itself "the most advanced responsive front-end framework in the world."


## Competitors

<a target="_blank" href="https://blog.templatetoaster.com/bootstrap-vs-foundation/">NOTE</a>: According to BuiltWith, among the top million websites <a target="_blank" href="https://trends.builtwith.com/docinfo/Twitter-Bootstrap">a steady 20.7% use Bootstrap</a> vs. <a target="_blank" href="https://trends.builtwith.com/framework/Foundation">1.8% (but growing) use the Foundation Framework</a>. 112k starred Bootstrap on Github vs. 25.8k stars for Foundation on Github. Indeed reports more job postings for Bootstrap. <a target="_blank" href="https://github.com/jhipster/generator-jhipster/issues/1039">
Support for Foundation in JHipster</a> was requested in Jan 2016 and closed because it uses Twitter's Bootstrap instead.  

Some feel Foundation is more intuitive to change and more "customizable" than Bootstrap.

The lack of a cross-platform mobile + web app development approach is what may limit its potential in the future against:

   * React + React Native

   * PWA (Progressive Web App)

   * NativeScript
   <br /><br />

## Social

<a target="_blank" href="https://foundation.zurb.com/learn/responsive-reading">
Sign-up for Zurb's monthly newsletter</a> and Design Trends PDF on responsive design.

Follow <a target="_blank" href="https://twitter.com/ZURBfoundation">
@ZURBfoundation</a>

<a target="_blank" href="https://foundation.zurb.com/forum">
https://foundation.zurb.com/forum</a>

(No Slack, LinkedIn, Facebook, Instagram, etc. ?)


## Foundation Suite

Foundation is actually a family of responsive front-end frameworks that make it easy to design beautiful responsive experiences that look amazing on any device. Foundation is semantic, readable, flexible, and completely customizable.

* [Foundation for Sites](http://foundation.zurb.com/sites) (websites) consists of Node.js packages. The framework provides a XY Grid and coded UI components. It provides fine-grained control of font typography and forms. The ZURB Stack (ZURB template) uses Gulp to compresses JavaScripts, watches for file changes to rerun. 

   * Gulp task runner (instead of Grunt)
   * <a target="_blank" title="14:52" href="https://www.youtube.com/watch?v=P_uT3wnR7yo">Panini</a> generates flat files using the <a target="_blank" href="http://handlebarsjs.com/">Handlebars</a> templating engine (see https://github.com/zurb/panini). It uses a layout like Jekyll, Middleman, or Assemble. JSON or YML files are used instead of a database like WordPress needs.
   * <a target="_blank" href="https://www.youtube.com/watch?v=JlarIkhBj54">SCSS</a>
   * Zepto, a lighter substitute for jQuery
   * Foundation's own XY Grid, a customized CSS Grid so it works on older browsers
   * Browsersync
   * Bower to download front-end UI modules dependencies to custom Node.Js code
   * Motion UI
   <br /><br />

* Foundation for web apps refers to the Apps Controller Using <strong>AngularJS</strong>.

* Foundation for Emails refers to the tool that creates HTML used to display beautifully formatted email bodies.



## Get Yourself on GitHub

   The following steps require switching between GitHub and Terminal, by pressing command+Tab until the icon for the app you want is highlighted.

   The following instructions assumes this is the first time you're running this.

0. On an internet browser on <a target="_blank" href="https://www.github.com/">GitHub.com</a>, create an account if you don't already have one. 

   Throughout this tutorial, you will be replacing your own account name with the stand-in example of:

   <pre><strong>hotwilson</strong></pre>


   ### SSH Key into GitHub

0. Switch to a Terminal to create a public and private key. To use default parameters:

   <tt><strong>ssh-keygen
   </strong></tt>

   The response:

   <pre>
Generating public/private rsa key pair.
Enter file in which to save the key (/Users/hotwilson/.ssh/id_rsa): 
   </pre>

0. Press Enter repeatedly to accept defaults until you see:

   <pre>
Your public key has been saved in /Users/hotwilson/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:lsjVHl3cuL/xRvbFzyWtSaFxVI59oDNyAuxicJeWqOs hotwilson@Wilsons-MacBook-Pro.local
The key's randomart image is:
+---[RSA 2048]----+
|       o.o   .o+.|
|    . o *o . o+=.|
|     + +. = *...+|
|    ..oo.o =.o+ .|
|     oo.S .  + = |
|    .  .    . o.O|
|   .         . BO|
|    E         o.*|
|               . |
+----[SHA256]-----+
   </pre>   

   PROTIP: The account name shown above would be substituted with your own account name. But it doesn't matter because it's the certificates generated that are used for authentication.

0. Get the public key in the .ssh folder into your Mac's clipboard:

   <tt><strong>cat ~/.ssh/id_rsa.pub | pbcopy
   </strong></tt>

0. Press command+Tab to switch back to the internet browser showing GitHub.
0. Click the icon for your account at the upper-right of the screen to select <strong>Settings</strong>.
0. Click on <strong>SSH and GPG keys</strong>.
0. Click on <strong>New SSH key</strong> green button.
0. Click inside the field labeled <strong>Key</strong> so its border turns blue.

   PROTIP: You can leave the Label field blank. Others put a date there.

   PROTIP: Enterprise versions of GitHub use single-sign-on capabilities that leverage corporate authentication mechanisms where you don't have to do this.

0. Click on <strong>Add SSH key</strong> green button.

   You can now upload from your laptop to any repo for your GitHub account.


   ### Create container path

0. In a Terminal window:
0. Create a folder to house your development projects:

   <tt><strong>mkdir ~/gits && cd gits
   </strong></tt>

   PROTIP: Instead of `gits`, some use `dev` or `Sites` or `Projects` to house related software development work, separate from other folders such as "Desktop" and "Document" under your MacOS user account folder.

0. Create a folder representing your GitHub account to house new websites to be created (substituting "hotwilson" with your GitHub user name):

   <tt><strong>mkdir hotwilson
   </strong></tt>

0. Set permissions for your MacOS user to write to the new folder (subsituting your own user instead of "wilsonmar" and GitHub account name instead of "hotwilson"):

   <tt><strong>
   sudo chown -R wilsonmar hotwilson<br />
   sudo chmod -R +rwx hotwilson
   </strong></tt>

0. Type in your password when prompted.

0. Navigate into the containing folder where a new directory is automatically built:

   <tt><strong>cd ~/gits/hotwilson
   </strong></tt>



   ### Get batch utility from GitHub

0. Get the Bash script that automates the instructions described below:

   <tt><strong>
   wget https://github.com/wilsonmar/git-utilities/blob/master/foundation-website-init.sh
   </strong></tt>

   The response ends with a line like this:

   <pre>
   2017-09-28 03:26:42 (441 KB/s) - ‘foundation-website-init.sh’ saved [46178]
   </pre>

   Alternately, download the whole repo:
   
   <tt><strong>
   git clone https://github.com/wilsonmar/git-utilities \-\-depth=1
   && git checkout HEAD foundation-website-init.sh
   </strong></tt>

0. Open for edit the file using the nano text editing program that comes with MacOS:

   <tt><strong>
   nano foundation-website-init.sh
   </strong></tt>

   Alternately, you can use subl, atom, vscode, or IDE already installed.

0. Edit the file to specify your account and website name:

   <pre>
  GITHUB_USER="hotwilson"
  REPONAME='website1'
   </pre>

0. Save the changes.

0. Run the script that performs what is described below:

   <tt><strong>
   ./foundation-website-init.sh
   </strong></tt>




## Processing

The following steps are performed either manually or by the Bash script downloaded above.

0. Navigate into the containing folder for Foundation to build a new directory, such as:

   <tt><strong>cd ~/gits/hotwilson
   </strong></tt>

   ### Starting over?
   
   If you already created a folder using the script or manually...

0. If you have a Terminal window running the localhost website, click on that Terminal screen and press <strong>control+C</strong>.

0. Remove (delete) the generated folder (replacing "website1" with your site's name):

   <tt><strong>rm -rf website1
   </strong></tt>

   By deleting the whole folder, makes the automation script "idempotent". In other words, running it would end up the same.


   ### Get website local

0. <strong>Create a folder</strong> containing your repo in GitHub (subsituting "hotwilson/website1" with your own account and repo name):

   <tt><strong>
   git clone https://github.com/hotwilson/website1
   </strong></tt>

   The response for just .git folder and README.md in the repo:

   <pre>
Cloning into 'website1'...
remote: Counting objects: 3, done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), done.
   </pre>

   ### gitignore website folder

   Make sure that folders are not uploaded

0. Create or open for edit the .gitignore file using the nano text editing program that comes with MacOS:

   <tt><strong>
   nano .gitignore
   </strong></tt>

   Alternately, you can use subl, atom, vscode, or IDE already installed.

0. Edit the file to specify your account and website name:

   <pre>
   website1
   </pre>

0. Save the changes.


   ### Foundation Installation

0. Install Node and NPM if it's not already installed.

0. Install the latest version of Foundation <strong>on any directory</strong>:

   <tt><strong>
   npm install -g foundation-cli
   </strong></tt>

   The response at time of writing:

   <pre>
/usr/local/bin/foundation -> /usr/local/lib/node_modules/foundation-cli/bin/foundation.js
+ foundation-cli@2.2.3
added 376 packages in 37.966s
&nbsp;
   ╭─────────────────────────────────────╮
   │                                     │
   │   Update available 5.3.0 → 5.4.2    │
   │     Run npm i -g npm to update      │
   │                                     │
   ╰─────────────────────────────────────╯
   </pre>

0. Update to the latest:

   <tt><strong>
   npm i -g npm
   </strong></tt>

   The response repeats the update message, which you can now ignore:

   <pre>
/usr/local/bin/npm -> /usr/local/lib/node_modules/npm/bin/npm-cli.js
/usr/local/bin/npx -> /usr/local/lib/node_modules/npm/bin/npx-cli.js
+ npm@5.4.2
added 21 packages, removed 22 packages and updated 19 packages in 16.456s
&nbsp;
   ╭─────────────────────────────────────╮
   │                                     │
   │   Update available 5.3.0 → 5.4.2    │
   │     Run npm i -g npm to update      │
   │                                     │
   ╰─────────────────────────────────────╯
   </pre>


0. Verify the version of Foundation CLI installed:

   <tt><strong>
   foundation -version
   </strong></tt>


   ### New Foundation site

   To create a new site folder on the path above using a CLI command:

0. You can run this command without parameters so you are prompted to supply then manually:

   <tt><strong>
   foundation new
   </strong></tt>

   Alternately, specify pararmeters and feed in the variable automatically when prompted:

   <tt><strong>
   foundation new \-\-framework sites \-\-template zurb <${WEBSITE_NAME}
   </strong></tt>

   "sites" and "zurb" are keywords recognize by Foundation.
   https://foundation.zurb.com/sites/docs/starter-projects.html

   Template "zurb" is pulled from:
   https://github.com/zurb/foundation-zurb-template 
   and described in <a target="_blank" href="https://youtu.be/3Uj74uJ3GSQ">this video</a>.

   Alternately, specify <a target="_blank" href="https://youtu.be/ofSZUKkjPRY">basic</a>.

0. If you are prompted, manually type it in, then press Enter. For example:

   <pre>
? What's the project called? (no spaces) <strong>website1</strong>
   <pre>

0. If the framework and template parameters were not specified, you would need to manually click the keyboard cursor to select:

   <pre>
? Which template would you like to use? ZURB Template: includes Handlebars templates and Sass/JS compilers
&nbsp;
            .
           /|     ,
      , /|/  \/| /|       Thanks for using ZURB Foundation for Sites!
     /|/       |/ |       -------------------------------------------
 |___|            |___|   Let's set up a new project.
 \___|  ^^   ^^   |___/   It shouldn't take more than a minute.
     | -[O]--[O]- |
     |    ___,    |
     |    ...     |
      \__________/
&nbsp;
Downloading the project template...
Done downloading!
   </pre>

0. Wait for the website base to be generated, culminating in:

   <pre>
You're all set!
&nbsp;
 ✓ New project folder created.
 ✓ Node modules installed.
 ✓ Bower components installed.
&nbsp;
Now run foundation watch while inside the folder created.
   </pre>

   ### What are the files?

0. Open in an text editor that shows the folders of the name specified:

   <tt><strong>
   atom website1
   </strong></tt>

   Among the 861.6 MB created:

   * `.babelrc` defines Babel for ES6 JavaScript
   * `.bowerrc` defines Bower modules
   * `.DS_Store` is created by MacOS to be ignored
   * `.gitignore` is for GitHub
   * `config.yml` 
   * `gulpfile.babel.js` is used by the Gulp task running when `npm start` is run
   * `package.json` is for NPM to know what dependencies to download
   * `readme.md` is for people to read.
   <br /><br />


   ### Download dependencies

0. Install dependencies to the `node_modules` folder based on specifications in the `package.json`:

   <tt><strong>npm install
   </strong></tt>

   The response at time of writing:

   <pre>
npm notice created a lockfile as package-lock.json. You should commit this file.
up to date in 11.122s
   </pre>   

   PROTIP: From here on you can work in a cave with no internet. But only edit what's under the `src` folder to make it your own.
   Since folder `dist` is generated, its contents should not be edited.


0. Start a web server (after it runs Gulp task runner):

   <tt><strong>npm start
   </strong></tt>

   <pre>
[Browsersync] Access URLs:
 ----------------------------------
       Local: http://localhost:8000
    External: http://10.0.0.4:8000
 ----------------------------------
          UI: http://localhost:3001
 UI External: http://10.0.0.4:3001
 ----------------------------------
[Browsersync] Serving files from: dist
   </pre>


   ### Watch

   PROTIP: The Browsersync UI at port 3001 is for configuring detection of file changes for auto-refresh of the browser.

0. Open another Terminal to the folder (in a different color) and cd to your working folder.

   The script automatically establish a watch on the pwd to watch for changes to files and invoke Gulp as part of npm start, so there is no need to:

   <tt><strong>
   foundation watch
   </strong></tt>


   ### Open localhost

0. Open the default internet browser to "Welcome" page generated:

   <pre><strong>open http://localhost:8000
   </strong></pre>

   Internally the default `index.html` is displayed.

0. For documentation about formatting HTML and CSS (with videos), see 
   <a target="_blank" href="https://foundation.zurb.com/sites/docs/">
   https://foundation.zurb.com/sites/docs</a>


   ### UI Themes

0. In a browser, sign-up to receive UI templates by providing your email at 
   <a target="_blank" href="https://foundation.zurb.com/templates.html">
   https://foundation.zurb.com/templates.html</a> 

0. In your email client, open the email with subject "Download Your Foundation 6 Templates" and click "Download Templates" - the `all-f6-templates.zip` to your Downloads folder.

0. In Finder, double-click on the zip file to expand it.
0. Open the demo page for each

   * <a target="_blank" href="https://foundation.zurb.com/templates-previews-sites-f6/agency.html">agency.html</a>
   * <a target="_blank" href="https://foundation.zurb.com/templates-previews-sites-f6/blog-simple.html">blog-simple.html</a> (single column)
   * <a target="_blank" href="https://foundation.zurb.com/templates-previews-sites-f6/blog.html">blog.html</a> (with sidebar)
   * <a target="_blank" href="https://foundation.zurb.com/templates-previews-sites-f6/ecommerce.html">ecommerce.html</a>
   * <a target="_blank" href="">marketing-site.html</a>
   * <a target="_blank" href="https://foundation.zurb.com/templates-previews-sites-f6/news-magazine.html">news-magazine.html</a>
   * <a target="_blank" href="https://foundation.zurb.com/templates-previews-sites-f6/portfolio.html">portfolio.html</a>
   * <a target="_blank" href="https://foundation.zurb.com/templates-previews-sites-f6/product-page.html">product-page.html</a>
   * <a target="_blank" href="https://foundation.zurb.com/templates-previews-sites-f6/real-estate.html">real-estate.html</a>
   <br /><br />

   Within these html files are placeholder assets:

   * CSS stylesheetes are from ... cloudfront.net/cdn/sites/foundation.min.css
   * images are obtained from http://placehold.it/750x350
   * links go nowhere
   <br /><br />

   PROTIP: Create a GitHub repo containing your customized starter set.


   ### Replace index.html

0. To use a particular demo template, open a Terminal window to the demo file:

   <tt><strong>
   cd ~/Downloads/all-f6-templates
   </strong></tt>

0. Copy the file into your website1 folder such that it substitute the index.html. For example:

   <tt><strong>
   cp blog.html ~/gits/hotwilson/website1/src/pages
   </strong></tt>

0. Navigate to the website source folder:

   <tt><strong>cd ~/gits/hotwilson/website1
   </strong></tt>

0. Move (backup) the existing index.html to another name:

   <tt><strong>mv index.html generated.index.html
   </strong></tt>

0. Rename the template:

   <tt><strong>mv blog.html index.html
   </strong></tt>

0. The watch should referesh the browser automatically showing the new page.

0. You can still see the original generated page:

   <tt><strong>http://localhost:8001/generated.index.html
   </strong></tt>

   
   ### TODO: Fuller sample   

   For a fuller sample site with images, we overlay files from GitHub which contains the same structure as Foundation's sample site.

0. You can still see the original generated page:

   <tt><strong>git clone https://github.com/hotwilson/bthosting.com
   </strong></tt>

   This site was forked from Brad Traversy's <a target="_blank" href="https://github.com/bradtraversy/bthosting_foundation">sample website on GitHub</a>, which he <a target="_blank" href="https://www.youtube.com/watch?v=aQuVW55zhmU">
   explains in a video</a>.

   ### Foundation folder structure

0. Open the website directory with a text editor that displays folders:

   <tt><strong>atom bthosting.com
   </strong></tt>

   The repo's files and empty folders:

   # dist # generated by Gulp
   # etc  # empty
   # node_modules. # filled by npm install referencing package.json.
   * src/assets/img
   * src/assets/js/app.js
   * src/assets/js/lib/foundation-explicit-pieces.js  # 
   * src/assets/scss/\_settings.scss  # CSS source for the custom app to be compiled
   * src/assets/scss/_custom.scss # added for app.
   * src/assets/scss/app.scss # defines variables for CSS
   * src/assets/scss/components/.gitkeep  # Git can't stand empty folders
   * src/data  # empty
   * src/partials/.gitkeep  #
   * src/layouts/default.html # the base where other html are inserted.
   # etc  #empty
   <br /><br />

   The repo adds the font-awesome SVG icons:

   * src/fonts/font-awesome
   <br /><br />

0. Repeat install of Node.js  dependencies to the `node_modules` folder based on specifications in the `package.json`:

   <tt><strong>npm install 
   </strong></tt>

   <tt><strong>npm start
   </strong></tt>

   ### Other UI templates

   Consider using other templates:

   * http://foundation.zurb.com/develop/resources.html

   * http://zurb.com/playground

   * <a target="_blank" href="https://foundationpress.olefredrik.com">
   https://foundationpress.olefredrik.com</a>
   FoundationPress "the ultimate WordPress starter theme built on Foundation 6"

   * <a target="_blank" href="https://themeforest.net/collections/3435762-zurb-foundation-templates">
   ThemeForest</a> $15-$69 

   * http://patterntap.com/code

   * http://codepen.io/search?q=foundation&limit=all&depth=everything&show_forks=false

   * <a target="_blank" href="http://es-di.com/foundation/">
   es-di.com</a> has 6 free basic themes.
   * <a target="_blank" href="https://www.template.net/web-templates/foundation-template/">
   Template.net has v5 themes from $6 to $69</a>

   * https://www.foundationdeck.com has v6 themes but links are broken.


   ### Foundation Framer

   <a target="_blank" href="http://www.coffeecup.com/help/articles/foundation-framer-themes/">v6 Themes</a> created using <a target="_blank" href="https://www.coffeecup.com/foundation-framer/">
   $99 Foundation Framer</a> for code-free CSS and Google web fonts.
   From CoffeeCup.com, which also sells a Web Form Builder and other tools for UX pros.

   <a target="_blank" href="https://rapidweavercommunity.com/addons/themes/foundation">
   $99.95 RapidWeaver</a> created a Foundation <a target="_blank" href="https://foundationstacks.com/theme/">theme</a> which adds Font Awesome icons and Animate.css to work with <a target="_blank" href="http://joeworkman.net">Joe Workman</a>'s <a target="_blank" href="http://yourhead.com/stacks">Stacks plugin</a> that add CMS, SEO, e-commerce, and other functionality.



   ### Testing

   https://github.com/zurb/foundation-sites
   notes that Foundation has three kinds of tests: JavaScript, Sass, and visual regression. 
   
   https://github.com/zurb/foundation-sites/wiki/Testing-Guide

   These commands will run the various tests:

   <pre>
npm run test:sass
npm run test:javascript:phantomjs
npm run test:visual
   </pre>


## Up to GitHub

   <a name="gitignore"></a>

   ### .gitignore file

   Entries in the .gitignore file keeps the node_modules and dist folders from being uploaded to GitHub.

0. Edit the `.gitignore` file:

   <pre>
.DS_Store
node_modules
npm-debug.log
bower_components
dist
\*.swp
   </pre>

0. Add the `.gitignore` file:

0. Get the site up to GitHub:

   <tt><strong>git init && git add . && git commit -m"Initial"
   </strong></tt>

   PROTIP: Upload to GitHub as well to avoid going through the above again.


## Build for Production

0. Create compressed, production-ready assets, run 

   <tt><strong>npm run build
   </strong></tt>

   The response:

   <pre>
> foundation-zurb-template@1.0.0 build /Users/hotwilson/gits/hotwilson/foundation/website1
> gulp build --production
&nbsp;
[12:38:46] Requiring external module babel-register
[12:38:52] Using gulpfile ~/gits/hotwilson/foundation/website1/gulpfile.babel.js
[12:38:52] Starting 'build'...
[12:38:52] Starting 'clean'...
[12:38:52] Finished 'clean' after 5.3 ms
[12:38:52] Starting 'pages'...
[12:38:52] Starting 'sass'...
[12:38:52] Starting 'javascript'...
[12:38:52] Starting 'images'...
[12:38:52] Starting 'copy'...
[12:38:53] gulp-imagemin: Minified 0 images
[12:38:53] Finished 'images' after 1.49 s
[12:38:53] Finished 'pages' after 1.59 s
[12:38:53] Finished 'copy' after 1.59 s
[12:38:56] Finished 'sass' after 4.19 s
[12:38:59] Version: webpack 2.7.0
 Asset    Size  Chunks                    Chunk Names
app.js  678 kB       0  [emitted]  [big]  app
[12:38:59] Finished 'javascript' after 7.71 s
[12:38:59] Starting 'styleGuide'...
[12:38:59] Finished 'styleGuide' after 32 ms
[12:38:59] Finished 'build' after 7.75 s
   </pre>   


   <a name="Upload2GitHub"></a>

   ### Upload

   <a target="_blank" href="https://zurb.com/university/lessons/zero-to-website-guide-br-part-6-br-deploying-your-site">
   VIDEO: Deploying Your Site to GitHub</a>

0. Send your changes to GitHub:

   <tt><strong>
   git add . && git commit -m"update" && git push
   </strong></tt>



## Learning resources

So if you aspire to be a world-class pro, get on the long path to earn a certification class/test for $500.

Skills development include their $99 design sketching class.

<a target="_blank" href="https://www.youtube.com/channel/UC01kRrdHtuWrzerp4BcAsYg">
Videos on Zurb's YouTube channel</a> 

<a target="_blank" href="https://zurb.com/university/foundation-intro">
Zurb's $299 Foundation intro class</a>

Brad raversy's (<a target="_blank" href="http://www.traversymedia.com">traversymedia.com</a>) <a target="_blank" href="https://www.youtube.com/watch?v=DEu5xYEZx18">Foundation Framework Crash Course</a>


### Flexbox for XY Grid

https://zurb.com/university/lessons/learn-the-flexbox-based-powerhouse-xy-grid


<a target="_blank" href="https://webdesign.tutsplus.com/series/learn-foundation--cms-1227">Tuts+ has a course</a>

<a target="_blank" href="https://app.pluralsight.com/library/courses/building-websites-foundation-6/table-of-contents">
Building Websites with Foundation 6 (for sites)</a> [1:42] 23 May 2017
by Gary Simon (<a target="_blank" href="https://www.garysimon.com/">garysimon.com</a>)
shows use of Node v6.10.0.



