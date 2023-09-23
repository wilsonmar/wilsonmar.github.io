---
layout: post
title: "JAM-stack website project plan"
excerpt: "Fast, scalable websites with cart and social reach, step-by-step"
tags: [website]
date: "2016-08-16"
file: "jam-stack-website-project-plan"
image:
# drawing blue messaging icons flow 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/15797012/6c3aa21a-29c7-11e6-8fbd-ef15a86df580.jpg
  credit: IT Management
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

<amp-youtube data-videoid="Cf29Q0c6_7s" layout="responsive" width="480" height="270"></amp-youtube>

Here are the sequence of specific steps to build a website using
(what Mathias Biilmann of static hosting service Netlify 
<a target="_blank" href="https://vimeo.com/163522126">calls</a>)
coined a <a target="_blank" href="https://jamstack.org/">"JAM stack"</a> 
-- a set of software to create websites that are fast, scalable, and simple to work with. 
JAM stands for JavaScript, APIs, and Markup.
JavaScript on the site makes calls to API (Application Programming Interfaces) web services in the cloud
to manage subscription forms and email campaigns.
Content for the site is written in semi-technical markup language text stored on GitHub.com.

See Redpoint's JAMstack Ecocystem.

We have here a way for artists to manage and display their <strong>portfolio</strong> of 
photos in <strong>file folders</strong> distributed across the internet for fast retrieval anywhere in the world.

We want the photos to show up in a <strong>list or table</strong> on a web page 
visitors obtain by typing in a <strong>topic</strong> on their web browser.

The Portfolio listing is used to select files for 
<strong>processes</strong> such as identifying file sizes plus compression and watermarking of each photo.

The program may also load the portfolio file into a 
<strong>database</strong> for other programs to access online.

Metadata, such as a description about each work in the portfolio, 
are usually entered by hand or via audio recording.

The portfolio file is in .csv (comma separated values) format 
which is <strong>text</strong> that can be edited by any text editor.
Many prefer to edit such files locally using a spreadsheet program such as Microsoft Excel.
And storing files in <strong>GitHub</strong> allows us to 
go back to each complete version at various points in time.
Complete copies of a repository are obtained from GitHub.

What's amazing about GitHub is that it 
not only hosts websites for free,
it runs a program called <strong>Jekyll</strong> that applies
colors and fonts and layouts specified in <strong>templates</strong> 
to each <strong>topic</strong>.

We like to use the Jekyll program because it 
<strong>generates</strong> an index.html file for each topic.
It puts all the files for a website within a 
<strong>_site</strong> folder published to the internet.

The file for a topic can contain text which replace
<strong>variables</strong> defined in the main section of that page.

Before it does all that, we have a <strong>parser</strong> 
program that can generate a file for each item in the portfolio,
or create a <strong>text file</strong>
which replaces the <strong>{include}</strong> tag in a topic file.

Coding in web pages interact with a 
<strong>form processing API</strong> on a server to handle 
both generic portfolio data and data specific to each visitor

A <strong>publisher</strong> program can match the interests of those who <strong>register</strong>
with <strong>Tags</strong> describing each portfolio item when it
sends out emails, Instagram, Twitter, or other social network messages, on a schedule.

So here you have it, a way to create a website that allows local editing,
have versioned backups, speed from pre-distributed static files, and 
audience interaction from social media attraction.

<amp-img layout="responsive" alt="jekyll-data-driven-website-v04 650x345-187kb.jpg" width="650" height="345" src="https://cloud.githubusercontent.com/assets/300046/17890075/ff60faf4-68f0-11e6-9349-cbb33c3c7192.jpg"></amp-img>

Phil Hawksworth (@philhawksworth) 
<a target="_blank" href="https://www.hawksworx.com/blog/isomorphic-rendering-on-the-jam-stack/">
sums up JAM's architecture this way</a>:

* A consumable page of content at every URL without the need for JavaScript to display things in the browser
* A valid, bookmark-able entry point to the site at every URL
* Client-side rendering with JavaScript as an enhancement for reduced data over the wire and rapid (and perhaps fancy) page transition
* Simple server-side architecture which could be served from any static web server
* Content management through a CMS outside of a development environment

Others:

* https://www.smashingmagazine.com/2015/11/modern-static-website-generators-next-big-thing/

* https://www.smashingmagazine.com/2015/11/static-website-generators-jekyll-middleman-roots-hugo-review/

<hr />

This project plan is structured by groups of tasks, in rough priority order.

## Design decisions

0. Contact details (phone, email, facebook, twitter, instagram)
0. Work agreement (contract)
0. Copyrights, license

   ## Accounts

0. Setup email account
0. Setup Twitter account using email

0. Setup Github organization and github.io repo holding website
0. Setup Github account for each contributor
0. In Github grant permission to each contributor

0. Get an AWS account with a credit card: Keith[1 hr]
0. Create an AWS worker account. Keith+Wilson[1 hr]


   ## Development environment

   Out of scope:

   * Install git (use online GitHub)
   * Install repo viewer


   ### Site Design

0. Look through <a href="#WebsitesLiked">other websites</a> to identify what's to like
0. Pre-defined theme?
0. Scheme of color, fonts, layout
0. Theme in GitHub
0. Style Guide: A simple style guide is extremely beneficial for any website owner, points to consider include:

   * Font Styles
   * Image Sizes
   * Tone of Voice
   * Colors
   * Imagery Style
   * Layout
   <br /><br />


   ### Site Logo

0. Custom icon (10x10 favico.ico/png) appearing on browser tabs

   SEE: http://www.uxbrainstorm.org/thoughts-on-logo-creation/

0. Mobile app icons for Android & Apple Touch
0. Windows 10 desktop tile images


   ### Navigation

0. Top of page menu text (sections)
0. FontAwesome icon for each section

   Out of scope:

   * Visual site map
   * Breadcrumb trail

   ## Social #

0. Facebook account setup in _config.yml
0. Twitter setup in _config.yml
0. Position social buttons (<a target="_blank" href="http://www.jqueryscript.net/social-media/jQuery-Plugin-For-Floating-Social-Share-Contact-Sidebar.html">always visible on left side of page</a>)

   Out of scope:

   * GitHub
   * Google
   * LinkedIn
   * Instagram

   * Visitor comments using Disqus
   * ICS (contacts) file with logo


   ## Subscription capture #

0. Setup AWS account for EmailOctopus
0. Setup EmailOctopus account
0. Setup AWS permissions for EmailOctopus
0. Position subscription form (always visible on right side of page)

0. Error messages in form
0. Pop-up subscription offer form
0. CAPTCHA in form

0. Commenting buttons to create a post on Twitter, Facebook, Google+, etc.


   Out of scope:

   * <a target="_blank" href="http://www.htmlgoodies.com/beyond/javascript/article.php/3881826/JavaScript-Tutorial-Adding-Rotating-Images-to-Your-Web-Site.htm">
   Photo auto-rotator</a> takes the same sized photo and displays them one after another.


   ## Photo processing 

0. Create an IAM sign-in URL on 
   https://console.aws.amazon.com/iam/home/ 
0. Create <a target="_blank" href="http://docs.aws.amazon.com/STS/latest/UsingSTS/CreatingSAML.html"
   AWS Security Token Service (STS) SAML 2.0 tokens</a> with associated key policies defining permissions.
   for developers to access EC2 files. Wilson+Keith[1 hr]
0. Setup Watch for billing levels.
0. Review <a target="_blank" href="https://console.aws.amazon.com/trustedadvisor/">
   Amazon Trusted Advisor</a> Wilson+Keith[.5 hr]

0. <a target="_blank" href="http://docs.aws.amazon.com/AmazonS3/latest/UG/UploadingObjectsintoAmazonS3.html">
   Transfer original photos (tiff) to S3</a>. Gail[4 hrs] 81 files

0. DONE Extract from previous site a .csv file listing attributes of each picture file. Wilson[2 hrs.]

   <a name="Portfolio"></a>

   ### Portfolio Spreadsheet #

   NOTE: The spreadsheet contains one line for each work:

   - _Category of work (Acrylics, Watercolor, MixedMedia)
   - Full sized file name
   - Width & height of picture

   - Thumbnail file name (with path assumed)
   - Width & height of thumbnail

   - _Year of creation (when done)
   - _Size of file (KB)
   - _Media (C)
   - _Width of actual piece
   - _Height of actual piece

   - _Note = comments about the picture (This makes a huge difference)
   - _<a href="#Tags">Tags</a> describe the work (for use in mouse-over and publicity)
   <br /><br />

0. DONE Correct typos from previous site. WILSON[2 hrs]
0. DONE Sample from the .csv file. WILSON[2 hrs]

0. DONE Parse .csv file to generate .md files. 
   <a target="_blank" href="http://vmassuchetto.github.io/2013/08/08/python-script-to-automate-jekyll-post-creation/">
   A Python program?</a> WILSON[3 hrs]


   To do on each picture:

0. <a target="_blank" href="http://superuser.com/questions/925068/script-to-get-images-in-folder-with-dimensions-printed-to-a-txt-file">
   Identify width, height, size of each picture file</a> [4 hrs] (for 80 works)

0. Comments about the creation of each. This helps a lot to increase sales.

   <a name="Tags"></a>

   ### Tags #

0. Hash tag each. This helps a lot to increase interest.

   * color: #blue #green #BlackAndWhite
   * subject: #vinyard #bridge #lake #river #portrait
   * objects in subject: #tractor #grapes #flowers #fruit #trees
   * social grouping: #rap #moms #teen #farmer
   * subject location: #nyc #brooklyn #italy #amalfi
   * artist location: #seattle #northwest
   * art media: #graffiti
   * art medium: #spraycan #acrylic #watercolor #graphite
   * art tool brand: #nikon #nike 
   * adjectives: #beautiful #amazing #fantastic #sunny #bright
   * emotion: #peaceful #sad #happy #thrilled #exhilirated #strong
   <br /><br />

0. See the popularity of tags at http://www.google.co.uk/AdWords

0. Size it in 3 different types of screens (mobile, tablet, desktop)
0. Crop picture for Instagram squares (use instasize app, Gramblr)

0. Compress to make smaller
0. Visible Watermark 
0. Invisible Watermark 
0. Put the file in a "CDN" around on the web.


   <a name="ShoppingCart"></a>

   ## Shopping cart #

0. Review the <a target="_blank" href="http://snipcart.github.io/snipcart-jekyll-integration/">
   Snipcart demo workflow</a> and identify desired
   <a target="_blank" href="https://snipcart.com/blog/customize-snipcart-v2-shopping-cart">
   customizations</a> and changes in stock UI elements.

   PROTIP: Shopping cart construction comes before many other website construction activities because its use may place 
   design innovations and limitations to other parts of the site in order for the whole site to remain consistent in look and feel.
   For example, Snipcart uses <a target="_blank" href="https://jekyllrb.com/docs/collections/">
   Jekyll collections</a>. 

0. Sign-in to your GitHub account and visit 
   <a target="_blank" href="https://github.com/snipcart/snipcart-jekyll-integration/">
   website</a> to fork it. Notice it is on branch gh-pages.
0. <a target="_blank" href="https://hotwilson.github.io/snipcart-jekyll-integration/">
   View the site on your github</a>

0. <a target="_blank" href="https://app.snipcart.com/register">
   Register an account at Snipcart</a> and verify email. Keith[1 hr]
0. <a target="_blank" href="https://snipcart.com/blog/static-site-e-commerce-part-2-integrating-snipcart-with-jekyll">
   Integrate Snipcart into site</a> based on 
   <a target="_blank" href="https://github.com/snipcart/snipcart-jekyll-integration">
   GitHub</a>.
0. <a target="_blank" href="https://app.snipcart.com/dashboard/account/credentials">
   Get TEST api_key</a> and add in _config.yml with other account data. Keith[1 hr]
0. Code head.html for layout productdetails. Wilson[1 hr]
0. Create a program to generate a md file for each "product" (work of art) in the Portfolio.csv file. Wilson[2 hrs]

   NOTE: A complete checkout is possible from a public URL, not from a local instance.

0. After testing, review <a target="_blank" href="https://app.snipcart.com/dashboard">
   Dashboard</a>


   ## Contact

0. Contact text
0. Contact photo
0. Contact audio/video


   ## About

0. Author statement text
0. Author photo
0. Author audio/video

   ## Exhibits

0. Exhibits text
0. Exhibits photo
0. Exhibits audio/video

   ## Gallery

0. Gallery index photos (3) cropped, compressed, positioned
0. Gallery index page with links

0. Add https://github.com/patrickkunka/mixitup. Ayush[2 hr]
0. Add Google map. Ayush[2 hr]


   ## Portfolio page #

0. Add &LT;div & change CSS to remove underlines. Ayush[1 hr]
0. Adjust CSS to vertically center pictures. Ayush[1 hr]

   ## SEO #

0. Google Analytics JavaScript
0. Google search ownership file
0. Bing search site ownership file
0. robots.txt file to specify folders and files desired private
0. SSL certificate for better ranking
0. Google PageSpeed for better ranking

   Generated by Jekyll:

   * Site RSS XML file for Google Search to discover
   http://webdesign.tutsplus.com/articles/general/all-you-need-to-know-about-xml-sitemaps/

   ## Features

0. Add search field (and custom response page)

0. <a target="_blank" href="https://developers.google.com/maps/documentation/javascript/tutorial">
   Get Google Maps API key</a>
0. Map in Exhibits page <a target="_blank" href="http://robinlovelace.net/software/2014/03/05/webmap-test.html">
   using Google Maps or other API</a>

   Out of scope:

   * Infinte scrolling
   * Lookup location based on IP
   * Confirm identity simply, such as clicking a pre-agreed image
   * Time-appropriate greeting based on visitor's local time zone
   * Personalized greeting based on personalization data stored in browser during previous session
   * Store history of browser version, OS, etc.
   * Cookie policy verification (for EU visitors)
   * Display most popular post on anonymous landing


   ## Monitization #

   Out of scope:

   * Google ads
   * Shop (screen savers, mugs, t-shirts, etc.)


   ## Performance #

0. Setup Gemfile
0. Setup Grunt/Gulp task runners
0. Minify HTML, CSS, and JavaScript files

   Done by Jekyll:

   * Asychronous update of a section rather than entire form (submit)
   * [Google AMP coding](/accelerated-mobile-pages/)

   ## Maintenance #

0. Backups
0. Recovery from backup

   ## Campaign #

0. Load emails
0. Announce new site
0. Launch party

0. Item of the week/month


<a name="WebsitesLiked"></a>

## Websites Liked #

   * http://www.currier.org/
   * http://sgnhs.org/
   * http://www.wellesley.edu/DavisMuseum/davismenu.html
   * https://adelmanfineart.com/
   * http://www.irisscottfineart.com/

Paid pre-designed websites :

   * <a target="_blank" href="https://www.squarespace.com/commerce/">
   https://www.squarespace.com/commerce</a>

## Website advice specifically to artists #

* http://theabundantartist.com/15-ways-to-sell-your-art-online/


## TODO: 

* Make this page into a form where people can check what they want, save it, send it to others, etc.
   like <a target="_blank" href="http://webdesign.tutsplus.com/articles/a-web-designers-site-launch-checklist-including-portable-formats--webdesign-11107">
   this</a>.

<a target="_blank" href="https://jamstack.training/">https://jamstack.training</a>
Tamas Piros offers free

   * Introduction to the JAMstack - Learn the fundamentals of the JAMstack.
   * Create a Blog Using the JAMstack - Create, manage and publish your own blog using 11ty and NetlifyCMS.
   * Create an E-Commerce App with Gatsby - How to utilise the JAMstack when building e-commerce websites

## References

<a target="_blank" href="https://www.youtube.com/watch?v=oRG1E0xLB4U">
JAMstack e-commerce panel discussion</a>


Phil Hawsworth of Netlify has a 
<a target="_blank" href="https://www.youtube.com/watch?v=A_l0qrPUJds">3-hour YouTube course</a>
<a target="_blank" href="https://app.slack.com/client/TJT9BQC6R/CJTADS0KS">his slack</a> announced the 
<a target="_blank" href="https://www.youtube.com/playlist?list=PLzlG0L9jlhEPV9w1x68jm1c79fBzhZCoF">8-video Headless Commerce Summit</a> Sep 3, 2020.
<a target="_blank" href="https://twitter.com/jamstackconf/">@jamstackconf</a>


## More on front-end software development #

This is one of several topics:

{% include front-end_links.html %}
