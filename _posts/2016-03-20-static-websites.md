---
layout: post
date: "2023-09-15"
file: "static-websites"
title: "Static websites"
excerpt: "Version controlled simplicity using Jekyll and GitHub Pages compared with AWS S3 and CloudFront."
tags: [website, builder, simplicity, jekyll]
image:
# feature: pic white hand key ownership 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622160/3b59e1b2-0585-11e6-9157-cc003fc0f90b.jpg
  credit:
  creditlink:
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

## Static is Cool Now #

Here is why building a static site is now "cool" (popular, interesting, etc.).

When someone types in a URL on a web browser and
lands on a website built using WordPress, Drupal, or
other CMS (Content Management System), that user <strong>waits</strong> while
the web server make calls to a database and builds the HTML to send back.

Static sites are <strong>faster</strong> for several reasons.

1. There is no time lost <strong>generating HTML dynamically</strong>.
   There is no time lost calling a database.
   The web page sent to a visitor is direct response to the URL requested.
   
   Personalization is done by JavaScript running on the user's machine,
   calling web services APIs (Application Programming Interfaces).

2. The HTML file can be <strong>spread out</strong> around the world in a CDN 
   (Content Distribution Network) such as Amazon S3.
   This reduces network latency.

   Reduction in cost of CDNs via Amazon S3, CloudFlair, Fastly, etc.
   vs. the enterprise Akamai makes this possible.

   Due to less processing, the website is also more scalable,
   able to handle a much larger number of visitors.

<amp-youtube data-videoid="FOfIoCi9uTI" layout="responsive" width="480" height="270"></amp-youtube>

Having static files in an environment which serves many other sites provides the site <a target="_blank" href="https://digitalguardian.com/blog/how-mitigate-ddos-attack">resilience to DoS (Denial of Service) attacks</a> which aim to overwhelm a service.


## Fraction of a Second to First Byte 

Techniques described on this website achieve the fastest possible loading speed, world-wide:<br />
<a target="_blank" href="https://performance.sucuri.net/domain/wilsonmar.github.io">
https://performance.sucuri.net/domain/wilsonmar.github.io</a>

<a target="_blank" width="650" height="366" 
href="https://cloud.githubusercontent.com/assets/14143059/19594589/efb8e7d0-9742-11e6-85dc-b167b69d349f.jpg">
<img alt="wm-fast-20161020-650x366-214kb.jpg" width="650" height="366" 
layout="responsive" src="https://cloud.githubusercontent.com/assets/14143059/19594589/efb8e7d0-9742-11e6-85dc-b167b69d349f.jpg"><br />
(Click here for new window containing higher resolution image)</a>


## "JAM" Stack #

Static sites are called "JAM stack" for

   * JavaScript,
   * <a href="#APICalls">API calls</a> (to various 3rd party sites rather than local databases), and
   * Markup text stored in GitHub then built into HTML and stored in CDN.
   <br /><br />

   Video: <a target="_blank" href="https://speakerdeck.com/billmann/the-jam-stack/">
   The JAM Stack 16 April 2016</a>
   by Mathias Billmann (@Billmann at Netlify.com)

   <amp-img width="577" height="290" alt="jam stack flow 577x290-c59"
layout="responsive" src="https://cloud.githubusercontent.com/assets/300046/16641269/17bb42f8-43bc-11e6-98fc-49b1d08b9055.jpg"></amp-img>
   <br /><br />

   * https://www.smashingmagazine.com/2015/11/modern-static-website-generators-next-big-thing/

<a target="_blank" href="https://jamstack.org/">jamstack.org</a>
comments on the drivers for the JAM stack:

   "Today browsers are the operating system of the web, and are able to run complex applications completely client side. They are capable of consuming and interacting with an ever growing amount of APIs and services across domains and infrastructures. CDNs (Content Delivery Networks) have gone from being a luxury only large corporations could afford, to being the natural way to cut down the time to first byte for sites and apps of all sizes. Deployment models have shifted from cumbersome manual uploads to automated processes triggered by ever-present version control systems."

<a name="APICalls"></a>

## API Calls #

The rise of APIs has removed many of the limitations
of static HTML:

   * Discourse for visitor comments
   * Lunr.js for search
   * Stripe for e-commerce


## The downside #

0. Some feel git version control is a hassle to use.

0. Some prefer the WSIWYG editors like Microsoft Word
over text editors and writing markdown code.

   However, <a target="_blank" href="https://cloudcannon.com/"> CloudCannon.com</a>
   enables users to create a Jekyll site that presents
   Visual Editor forms for editing text in context of background graphics.

0. Since Jekyll and other static platforms are newer than WordPress, Drupal, etc.
   there are not as much of a diversity in themes and plug-ins available.


## Tools to generate static websites #

I've configured a few, but most recently:

   * <strong>[Jekyll](/jekyll-site-development)</strong> is the most popular among static website generation tools largely because GitHub.io websites are
   hosted automatically, and free, from repositories in GitHub.com.

   Much like what wordpress.org provides, but
   with the git version control added -- a crucial feature.

Surveys are:

   * <a target="_blank" href="http://www.staticgen.com/">staticgen.com</a>
   presents its list in a gallery.

   * <a target="_blank" href="https://staticapps.org/">staticapps.org</a>

   * <a target="_blank" href="https://staticsitegenerators.net/">staticsitegenerators.net</a>
   presents an exhaustive list.


## Sites using this approach #

* <a target="_blank" href="http://myers.io/posts/">myers.io/posts</a>
 http://blog.mgechev.com/2016/04/10/

* <a target="_blank" href="http://blog.mgechev.com/2016/04/10/scalable-javascript-single-page-app-angular2-application-architecture/">
 Scalable Single-Page Application Architecture</a>


## <a name="ReactDriven"> React-driven generation of SPA pages</a> #

<a target="_blank" href="https://phenomic.io/">https://phenomic.io</a>,
   generates html from .md files containing yaml like Jekyll,
   but instead of template code, it processes standard templating in
   React.js with Webpack does the generation.

   Coding JavaScript in ES6 
   is possible because Babel or PostCSS or CSSNext enables
   can translate the ES6 code back to ES5 so that current websites work.

   * ESLint for JavaScript and 
   * Stylelint for CSS

Phenomic_app is rather young.
Its <a target="_blank" href="https://twitter.com/Phenomic_app">@Phenomic_app on Twitter</a>
had 130 followers as of July 6, 2016.

   Its advantage is that it generates SPA (Singe Page App) JavaScript
   which initially loads just enough to display on the page
   (so it's faster than loading the whole HTML file).
   More importantly, additional pages are downloaded as needed
   in response to user action such as scrolling.

   When a link or a button is clicked by a visitor,
   JavaScript running on the page updates the address bar, 
   but the whole web page is not refreshed. 
   Management of the address bar is done by the <strong>router</strong> JavaScript library.

   Use of React means changes to markup is instantly reflected on the web page display.

See <a target="_blank" href="https://vimeo.com/168480208">
video: "A static website with React? Really?"</a> on 25 May 2016
   by Maxime Thirouin 

   There are several router libraries in the React ecosystem.
   The most popular router is <a target="_blank" href="https://github.com/rackt/react-router">
   react-router</a>.

Social:

   * <a target="_blank" href="https://twitter.com/MoOx">@MoOx</a> (from France) is its creator.

Webpack 

   * https://github.com/petehunt/react-webpack-template
   * https://github.com/petehunt/webpack-howto

   * https://webpack.github.io/docs/list-of-plugins.html#dllplugin
   * https://gist.github.com/robertknight/058a194f45e77ff95fcd
   * https://github.com/mxstbr/react-boilerplate/pull/495/files
   * https://github.com/FrendEr/webpack-optimize-example/tree/master/dll-bundles

   Most people (including Facebook) are using React.createClass() rather than JSX.

0. Use npm to download phenomic into present working directory:

   <tt><strong>
   npm i phenomic
   </strong></tt>

   This takes several minutes to download from<br />
   <a target="_blank" href="https://github.com/MoOx/phenomic">
   https://github.com/MoOx/phenomic</a>

0. Install phenomic using npm:

   <tt><strong>
   ./node_modules/.bin/phenomic setup 
   </strong></tt>

   <pre>
   Note: All values can be adjusted later.
   ? Dashed name of your project (eg: my-project) 
   </pre>

0. Type "phenomic" and press Enter for:

   <pre>
   ? Website url (eg: http://abc.xyz/) 
   </pre>

0. Type URL for:

   <pre>
   ? Repository url (eg: https://github.com/MoOx/phenomic.git, optional) 
   ? Twitter nickname (eg: MoOx, optional) 
   ? Do you want a CNAME file (eg: for GitHub Pages)? No
   Generated package.json file
   Copied boilerplate
   Setup done. Now run "npm install" to get started
   </pre>

   These can be changed later by editing the package.json file.

0. Install npm

   <tt><strong>
   npm i && npm start
   </strong></tt>

0. Start npm:

   <tt><strong>
   npm start --devPort=3001
   </strong></tt>

   Without the extra parameter, this starts a web page on port 3000 by default.
   The response:

   <pre>
   </pre>

0. Edit the configuration file (subsituting vim with atom, subl, or other text editor):

   <tt><strong>
   vim package.json
   </strong></tt>

   "stage-1" refers to ES7.

   See https://phenomic.io/docs/usage/configuration/

0. Run tests:

   <tt><strong>
   npm test
   </strong></tt>

### Edit this site #

The built site has a <strong>Edit this</strong> link to the GitHub repo file.

   * https://github.com/MoOx/phenomic/edit/master/docs/content/showcase.md  


   * https://github.com/petehunt/react-howto

<hr />

<a name="S3CloudFront"></a>

## AWS S3 and CloudFront

References:
   * <a target="_blank" href="https://www.youtube.com/watch?v=mls8tiiI3uc">React App on AWS S3 with Static Hosting + Cloudfront</a> | <a target="_blank" href="https://www.youtube.com/watch?v=06VgLTqNvU8">Practical AWS Projects</a> #1 by Be a Better Dev.
   <br /><br />

Here we see how many steps it takes to host a static website in an AWS S3 bucket and AWS CloudFront CDN.

a. Using Console GUI
b. Using CloudFormation
c. Using Terraform

<hr />

1.  The website can be a simple HTML file or a set of HTML, CSS, Js, png images built using React.js and Webpack.

1.  Package up the website into a zip file:

    <pre>npm run build</pre>

    <a target="_blank" href="https://www.youtube.com/watch?v=mls8tiiI3uc&t=4m34s">VIDEO</a>: Create S3 bucket with globally unique Bucket Name that's without spaces and uppercase letters.

1.  In S3

    https://s3.console.aws.amazon.com/s3/get-started?region=us-east-1

1.  Click Create bucket.

1.  For Bucket name, type a unique DNS-compliant name for your new bucket.
    For Bucket name, type example-bucket-name.
    For Region, choose US East (N. Virginia).

1.  Determine what region (geographic location) to use.
    The default is US East (N. Virginia).
    
    REMEMBER: The region can't be changed after the bucket is created.
   
    http://<em>bucket-name</em>.s3-website-<em>Region</em>.amazonaws.com

    REMEMBER: The bucket name cannot be changed after the bucket is created.

    http://3329v32.s3-website-us-east-1.amazonaws.com

1.  Skip "Choose bucket".
1.  Leave ACLs disabled in play/test. In production, enable ACLs so Objects in this bucket can be owned by other AWS accounts. Access to this bucket and its objects can be specified using ACLs.
1.  Uncheck "Block all public access".
1.  Check "I acknowledge that the current settings might result in this bucket and the objects within becoming public."
1.  Bucket Versioning: leave disable.
1.  Pass on Tags.
1.  Default encryption: Select SSE-KMS for play/test use.
1.  Choose from your AWS KMS keys. Create a KMS key for https://us-east-1.console.aws.amazon.com/kms/home?region=us-east-1#/kms/keys/create
    * Key type: Symmetric (single key, not Asymmetric)
    * Key usage: Encrypt and decrypt (not Generate and verify MAC).
    * Advanced options:
    * KMS
    * Regionality: Single-Region key
    * Next
    * Alias: use the bucket name from above (3329v32).
1.  Bucket Key: disable
1.  Advanced setting:
1.  Object lock: Disable (only works in versioned buckets.

1.  Go to the S3 buckets page, and click your bucket’s name.

1.  Choose the “Properties” tab.

1.  Scroll down to the “Static website hosting” section at the bottom of the page, and click the "Edit" button.

1.  On the “Edit static website hosting” page, choose “Enable” under the “Static website hosting” section. It’ll open up additional properties.

1.  Keep the hosting type “Host a static website” selected.

1.  In the “Index document” text field, give the file name you want to configure as a default file. When someone accesses your bucket website endpoint, this file will load (we will add this file later on). Write index.html in the text field, and remember that the file name is case-sensitive.

1.  Click the “Save changes” button.

1.  In the “Properties” tab, go to the “Static website hosting” section.

1.  Find a bucket website endpoint. Try to open it in the new tab of the browser, we’ll get a 403 Forbidden page because our bucket is not publically accessible for now.

    ### Upload site contents (HTML, CSS, etc.)

1.  In the S3 buckets page, open your bucket.

1.  Currently, the bucket is empty. Click the orange button named “Upload”, which takes you to the “Upload” page.

1.  In the “Files and folders” section, click the “Add files” button, and select the index.html file from your system.

1.  Click the “Upload” button at the end of the page. It shows the “Upload: status” page. Once the file is uploaded, click the “Close” button to return to the bucket.

    Set Error Document and Public Access

1.  Replace "Bucket-Name" with your bucket name:

    <pre>{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject"
            ],
            "Resource": [
                "arn:aws:s3:::Bucket-Name/*"
            ]
        }
    ]
}
    </pre>

    ### Create a CloudFront Distribution

    Define CloudFront Error Page and Cache Invalidation

1.  Open the bucket created for CloudFront.

1.  On the “Objects” page, click the “Create folder” button.

1.  Write errors in the “Folder name” field and click the “Create folder” button.

1.  Upload the error.html file to the errors folder.

1.  Once uploaded, go to the “Properties” of the error.html file.

1.  Copy the value of “Key” under the “Object overview” section. It should be errors/error.html.

1.  open the CloudFront distribution.

1.  Click the “Error pages” tab and the “Create custom error response” button.

1.  On the next page, choose “403: Forbidden” from the drop-down of the “HTTP error code” field.

1.  For the “Error caching minimum TTL” field, keep the default value (10) unchanged. This value defines the minimum time to live for the cached error on the edge node. After this, CloudFront will reaccess the origin to check if the issue has been resolved and the requested object is available.

1.  Choose “Yes” for the “Customize error response” option. It’ll expand further fields.

1.  In the text field of the “Response page path,” enter / and paste the value of the “Key” copied from the properties of the error.html object. The value should look like /errors/error.html.

1.  Click "Create custom error response".

1.  Wait for 4–5 minutes for a successful deployment. After that, try to access the wrong object with your domain name Your-CloudFront-domain-name/sample, and it’ll show the content of the error.html page.

    Cache invalidation

    This feature allows us to tell CloudFront which files not to cache at the edge locations. Whenever an object specified in this configuration is accessed, CloudFront fetches the fresh copy from the origin. To create an invalidation, perform the following steps:

1.  Go to the “Invalidations” tab of your distribution.

1.  Click the “Create invalidation” button.

1.  On the next page, give the path of the object you want to invalidate cache behavior. One path should be defined per line.

1.  Give the object’s path carefully. Invalidation can not be canceled once it is started.

    Clean Up

    Delete all the resources no longer used: buckets, CloudFront OAC, and a distribution.

1.  Navigate to the CloudFront distributions, select your distribution, and click the “Disable” button.

1.  Click the “Disable” button in the pop-up box.

1.  Once the timestamp is updated in the “Last modified” column, select the distribution again and click the “Delete” button.

1.  Click the “Delete” button in the pop-up box.

1.  Select “Origin access” from the left panel once the distribution is deleted.

1.  Select the relevant OAC, click the “Delete” button, and click the “Delete” button in the pop-up box.

1.  Navigate to the S3 “Buckets” page, select the first bucket from the list, and click the “Empty” button.

1.  On the next page, type “permanently delete” in the text field, and click the “Empty” button. This process may take time, depending on the size of your bucket.

1.  Once the bucket is empty, select it again and click the “Delete” button. Type your bucket name in the text field on the “Delete bucket” page.

1.  Click the “Delete bucket” button to delete the bucket.

1.  Repeat these steps for the second bucket.


<hr />

## Footnotes #

People who have commented on this include:

* <a target="_blank" href="http://www.shamimeboodhoo.com/from-wordpress-to-jekyll-and-a-new-design/">
  shamimeboodhoo.com/from-wordpress-to-jekyll-and-a-new-design</a>
   Build a Better Blog with a Static Site Generator
   2h 16m Released 25 Nov 2015</a>
   by Jeff Ammons (@jeffa00, ammonsOnline.com)
   CEO and Chief Instructor at Code Career Academy (codecareeracademy.com).

## Resources #

<a target="_blank" href="https://app.pluralsight.com/library/courses/static-site-generator-build-better-blog/table-of-contents">
Static Site Generator Build Better Blog</a> Pluralsight video course.

<a target="_blank" href="https://medium.com/@sithum/automate-static-website-deployment-from-github-to-s3-using-aws-codepipeline-16acca25ebc1">Automate static website deployment from Github to S3 using AWS CodePipeline</a>


## More on front-end styling #

This is one of several topics:

{% include front-end_links.html %}
