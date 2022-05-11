---
layout: post
title: "Docusaurus (v2)"
excerpt: "Build book-like internationalized, indexed,  searcheable websites using React made easy"
tags: [cloud]
date: "2021-03-19"
file: "docusaurus"
image:
# ![docusaurus2-hero-1900x500]
  feature: https://user-images.githubusercontent.com/300046/111859862-8ab8a600-8909-11eb-9e10-998eef488ba1.png
  credit: Docusaurus
  creditlink: https://v2.docusaurus.io/showcase/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This is a hands-on deep-dive introduction to installing and using Docusaurus as a static (JAM stack) website builder.

{% include whatever.html %}

1. Visit <a target="_blank" href="https://v2.docusaurus.io/">https://v2.docusaurus.io</a>

   Docusauraus2 provides several features not provided by GitHub Pages:

   * Layout using React Redux MDX rather than static markdown
   * Document versioning
   * Content Search (using Algolia service)
   * Translations (Internationalization, abbreviated as "i18n")
   <br /><br />

1. <a target="_blank" href="https://pester.dev/docs/additional-resources/articles/">https://pester.dev/docs/additional-resources/articles</a>

   Searcheable Table in a sample Docusaurus (React) site

   This takes advantage of React, not possible with plain static GitHub Markdown alone.

2. <a target="_blank" href="https://v2.docusaurus.io/docs">https://v2.docusaurus.io/docs</a>

   NOTE that Docusaurus does not support Windows IE11 (Internet Explorer).

   Docusaurus is not just for documentation websites.


   ## Due Diligence

3. <a target="_blank" href="https://github.com/facebook/docusaurus">https://github.com/facebook/docusaurus</a>

   Docusaurus was created and now maintained by Facebook, as a free open-source resource.

   264 watching and 22,400 Stars

4. <a target="_blank" href="https://github.com/facebook/docusaurus/issues">https://github.com/facebook/docusaurus/issues</a>

   Evaluate the repo for due diligence.

   At time of writing, there are 192 issues and 1315 closed.

   The oldest open issue goes back to May 5, 2018.

5. <a target="_blank" href="https://github.com/facebook/docusaurus/pulse">https://github.com/facebook/docusaurus/pulse</a>

   21 authors have pushed 35 commits to master and 68 commits to all branches.

   Sebastien Lorber is the major contributor and owner, a contractor at Facebook. His personal website <a target="_blank" href="https://sebastienlorber.com/">https://sebastienlorber.com</a> has an icon to switch between dark and light themes.

6. <a target="_blank" href="https://twitter.com/docusaurus

   Docusaurus1 began in 2017. It now has 2,438 Followers.

   On Mar 9, 2021 "Docusaurus2 now has full feature parity with v1"

   So stay away from version 1 documentation at<br />
   <a target="_blank" href="https://docusaurus.io/docs/en/installation/">https://docusaurus.io/docs/en/installation</a>

1. (Based on <a target="_blank" href="https://v2.docusaurus.io/blog/2017/12/14/introducing-docusaurus">https://v2.docusaurus.io/blog/2017/12/14/introducing-docusaurus</a>)

   "We created Docusaurus ... provide a consistent look and feel across all our open source projects".  

1. <a target="_blank" href="https://openbase.com/js/docusaurus">https://openbase.com/js/docusaurus</a>

   Trend of weekly downloads and reviews in OpenBase.com

6. <a target="_blank" href="https://stackshare.io/docusaurus">https://stackshare.io/docusaurus</a>

   Who's using Docusaurus?

6. <a target="_blank" href="https://v2.docusaurus.io/showcase/">https://v2.docusaurus.io/showcase</a>

   What some Docusaurus-based sites look like.

7. <a target="_blank" href="https://v2.docusaurus.io/blog">https://v2.docusaurus.io/blog</a>

8. <a target="_blank" href="https://v2.docusaurus.io/docs/design-principles">https://v2.docusaurus.io/docs/design-principles</a>

9. <a target="_blank" href="https://opencollective.com/docusaurus#category-BUDGET">https://opencollective.com/docusaurus#category-BUDGET</a>

   Support Docusaurus financially.

   ## View Sample Online

1. <a target="_blank" href="https://new.docusaurus.io/">https://new.docusaurus.io</a> refers you to<br />
   <a target="_blank" href="https://codesandbox.io/s/docusaurus">https://codesandbox.io/s/docusaurus</a>

   It's an online sandbox, showing the same site contents as after local install below:

   ![docusaurus-mysite-483-391](https://user-images.githubusercontent.com/300046/111787060-1daefd00-8884-11eb-9480-60e83258ebd3.png)


   ## v2 local install

1. <a target="_blank" href="https://v2.docusaurus.io/docs/installation">https://v2.docusaurus.io/docs/installation</a>

   There are two ways to get started:

   A. npm package

   B. docusaurus-init package. That's what this site describes.

1. Install NodeJs

1. Install Yarn

1. Navigate to or create a container folder for your GitHub account where a new folder will be created by init program. The example here is:

   "~/gmail_acct/Supersite"

   Where gmail_acct is the GitHub organization account I use,
   "Supersite" is the name of the repo and fake product name.

   PROTIP: I would like to have the documentation in the "Docs" folder to travel with the app's source code.

1. Generate scaffold after changing DOC_SITE_NAME value:

   <pre><strong>DOC_SITE_NAME="Supersite"
DOC_TEMPLATE="classic"
npx @docusaurus/init@latest init "$DOC_SITE_NAME" "$DOC_TEMPLATE"
   </strong></pre>

1. Type "y" to answer:

   <pre>Need to install the following packages:
  @docusaurus/init@latest
Ok to proceed? (y) y   
   </pre>

1. Navigate into generated:

   <pre>cd $DOC_SITE_NAME
   pwd
   </pre>

   For me, I'm at<br />
   <tt>~/gmail_acct/Supersite/Supersite</tt>

1. See folders generated:

   <pre><strong>cd docs
   tree -L 2</strong></pre>

   <pre>├── README.md
    ├── babel.config.js
    ├── blog
    ├── docs
    ├── docusaurus.config.js
    ├── node_modules
    ├── package.json
    ├── sidebars.js
    ├── src
    ├── static
    └── yarn.lock
   </pre>


   ## View site locally

1. Start the development server:

   <pre><strong>yarn run start</strong></pre>

   or

   <pre><strong>npx docusaurus start</strong></pre>

   The above command opens on your default browser<br />
   <a target="_blank" href="http://localhost:3000">http://localhost:3000</a>

   Back on the CLI, no other commands can be added until you
   press control+C to cancel the localhost running.

Below is a correspondance of the documentation and visuals associated with files:

<table border="1" cellpadding="4" cellspacing="0">
<tr><th> Folder /File </th><th> Visual </th><th> Description </th></tr>

<tr valign="top"><td> <a name="SiteConfig">docusaurus.config.js</a> (formerly siteConfig.js)
   </td><td>the "start" in CLI command "run start" 
   </td><td>scripts invoked by the NodeJs package manager.
   </td></tr>

<tr valign="top"><td> docs folder
   </td><td><a href="#">Docs menu on init page</a>
   </td><td> where you add your markdown that represents your documentation. Files:
   <pre>create-a-blog-post.md 
 create-a-document.md  
 create-a-page.md      
 getting-started.md    
 markdown-features.mdx 
 thank-you.md
   </pre>
   </td></tr>

<tr valign="top"><td> blogs folder
   </td><td><a href="#">Blog menu on init page</a>
   </td><td> where you add your markdown for your dated blog posts. Files:
   <pre>2019-05-28-hola.md        
2019-05-29-hello-world.md 
2019-05-30-welcome.md
   </pre>
   </td></tr>

<tr valign="top"><td> <a href="#buildhtml">build folder</a>
   </td><td><em>not displayed</em>
   </td><td>minified js assets, html, etc. served to users, created by <tt>yarn build</tt>:
   404.html, assets, blog, docs, img, index.html, markdown-page, sitemap.xml
   </td></tr>

<tr valign="top"><td> <a target="_blank" href="https://v2.docusaurus.io/docs/cli">package.json</a>
   </td><td><em>Text editor</em>
   </td><td>List of NodeJs modules to be downloaded into node_modules folderl
   </td></tr>

<tr valign="top"><td> node_modules 
   </td><td><em>not displayed</em>
   </td><td> holds folders of libraries NodeJs downloads
   </td></tr>

<tr valign="top"><td> sidebars.js (formerly sidebars.json)
   </td><td><em>not displayed</em>
   </td><td> where you maintain the layout and content of the sidebar (left-side menu)
   </td></tr>

<tr valign="top"><td> src folder
   </td><td><em>Within a text editor</em>
   </td><td> index.js is what NodeJs invokes to load React.js, the "brains" of Docusauraus. css files define the layout. Files:
   <pre>src
├── css
│   └── custom.css
└── pages
    ├── index.js
    ├── markdown-page.md
    └── styles.module.css
  </pre>
   </td></tr>

<tr valign="top"><td> static/img
   </td><td>Referenced in html & css
   </td><td> static images. Files:
   <pre>docusaurus.png
 favicon.ico
 logo.svg
 undraw_docusaurus_mountain.svg
 undraw_docusaurus_react.svg
 undraw_docusaurus_tree.svg
   </pre>
   These get built into the <tt>build/img</tt> folder.
   </td></tr>

</table>

<hr />

<a name="SiteConfig"></a>

## Configure docusaurus.config.js

1. <a target="_blank" href="https://v2.docusaurus.io/docs/docusaurus.config.js">https://v2.docusaurus.io/docs/docusaurus.config.js</a>

1. <a target="_blank" href="https://v2.docusaurus.io/docs/docusaurus.config.js">https://v2.docusaurus.io/docs/docusaurus.config.js</a> lists each configuration item.

   <a target="_blank" href="https://luctst.github.io/docusaurus-starter-pack/docs/siteconfig.html">https://luctst.github.io/docusaurus-starter-pack/docs/siteconfig.html</a>

   ### Configure cname

1. Add the domain name that you obtained for your site:

   <pre>cname: 'docs.mydomain.com',</pre>

   This setting updates the GitHub Pages Custom domain entered in the GitHub repo's settings. Without that line, the setting is cleared from GitHub's GUI on every build.

   ## Code Sortable Tables

1. <a target="_blank" href="https://docs.theochu.com/docusaurus/sortable-tables/">https://docs.theochu.com/docusaurus/sortable-tables</a>


   ## Code theme styling

1. <a target="_blank" href="https://v2.docusaurus.io/docs/api/themes">https://v2.docusaurus.io/docs/api/themes</a>

1. <a target="_blank" href="https://docs.theochu.com/docusaurus/styling/">https://docs.theochu.com/docusaurus/styling/</a>

1. <a target="_blank" href="https://docusaurus-template-no-style.netlify.app/">https://docusaurus-template-no-style.netlify.app</a>

   ## Add Content Search

1. <a target="_blank" href="https://docs.theochu.com/docusaurus/search/">https://docs.theochu.com/docusaurus/search</a>

   ## Add plug-ins

1. <a target="_blank" href="https://v2.docusaurus.io/docs/api/plugins">https://v2.docusaurus.io/docs/api/plugins</a>

   
   <a name="l10n"></a>

   ## Localization

1. <a target="_blank" href="https://docusaurus.io/docs/en/translation/">https://docusaurus.io/docs/en/translation</a>

   via CrowdIn.
   

   <a name="buildhtml"></a>

   ## Generate html static files

1. List files, then build:

   <pre><strong>ls -al
yarn build
   </strong></pre>

   <pre>[en] Creating an optimized production build...
&nbsp;
✔ Client
  Compiled successfully in 10.57s
&nbsp;
✔ Server
  Compiled successfully in 12.26s
&nbsp;
Success! Generated static files in build.
&nbsp;
Use `npm run serve` to test your build locally.
&nbsp;
✨  Done in 16.98s.
   </pre>

1. List files, then build:
   
   <pre><strong>ls -al build
npm run serve
ls -al
   </strong></pre>

   ## Publish to GitHub
   
   <pre><strong>yarn deploy
   </strong></pre>


## References

<a target="_blank" href="https://blog.logrocket.com/easy-documentation-with-docusaurus/">https://blog.logrocket.com/easy-documentation-with-docusaurus</a>


## More on front-end software development #

This is one of several topics:

{% include front-end_links.html %}
