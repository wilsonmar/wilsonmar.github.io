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


1. Visit https://v2.docusaurus.io/

   Docusauraus2 provides several features not provided by GitHub Pages:

   * Layout using React Redux MDX rather than static markdown
   * Document versioning
   * Content Search (using Algolia service)
   * Translations (Internationalization, abbreviated as "i18n")
   <br /><br />

1. https://pester.dev/docs/additional-resources/articles/
   Searcheable Table in a sample Docusaurus (React) site

   This takes advantage of React, not possible with plain static GitHub Markdown alone.

2. https://v2.docusaurus.io/docs

   NOTE that Docusaurus does not support Windows IE11 (Internet Explorer).

   Docusaurus is not just for documentation websites.


   ## Due Diligence

3. https://github.com/facebook/docusaurus

   Docusaurus was created and now maintained by Facebook, as a free open-source resource.

   264 watching and 22,400 Stars

4. https://github.com/facebook/docusaurus/issues

   Evaluate the repo for due diligence.

   At time of writing, there are 192 issues and 1315 closed.

   The oldest open issue goes back to May 5, 2018.

5. https://github.com/facebook/docusaurus/pulse

   21 authors have pushed 35 commits to master and 68 commits to all branches.

   Sebastien Lorber is the major contributor and owner, a contractor at Facebook. His personal website <a target="_blank" href="https://sebastienlorber.com/">https://sebastienlorber.com</a> has an icon to switch between dark and light themes.

6. https://twitter.com/docusaurus

   Docusaurus1 began in 2017. It now has 2,438 Followers.

   On Mar 9, 2021 "Docusaurus2 now has full feature parity with v1"

   So stay away from version 1 documentation at<br />
   https://docusaurus.io/docs/en/installation/

1. (Based on https://v2.docusaurus.io/blog/2017/12/14/introducing-docusaurus)

   "We created Docusaurus ... provide a consistent look and feel across all our open source projects".  

1. https://openbase.com/js/docusaurus

   Trend of weekly downloads and reviews in OpenBase.com

6. https://stackshare.io/docusaurus

   Who's using Docusaurus?

6. https://v2.docusaurus.io/showcase/

   What some Docusaurus-based sites look like.

7. https://v2.docusaurus.io/blog

8. https://v2.docusaurus.io/docs/design-principles

9. https://opencollective.com/docusaurus#category-BUDGET

   Support Docusaurus financially.

   ## View Sample Online

1. https://new.docusaurus.io/ refers you to<br />
   https://codesandbox.io/s/docusaurus

   It's an online sandbox, showing the same site contents as after local install below:

   ![docusaurus-mysite-483-391](https://user-images.githubusercontent.com/300046/111787060-1daefd00-8884-11eb-9480-60e83258ebd3.png)


   ## v2 local install

1. https://v2.docusaurus.io/docs/installation

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

   This opens on your default browser<br />
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
   </td><td><em>not displayed</em>
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
   </td><td><em>not displayed</em>
   </td><td> where you add your markdown for your dated blog posts. Files:
   <pre>2019-05-28-hola.md        
2019-05-29-hello-world.md 
2019-05-30-welcome.md
   </pre>
   </td></tr>

<tr valign="top"><td> node_modules 
   </td><td><em>not displayed</em>
   </td><td> holds folders of libraries NodeJs downloads
   </td></tr>

<tr valign="top"><td> sidebars.js (formerly sidebars.json)
   </td><td><em>not displayed</em>
   </td><td> where you maintain the layout and content of the sidebar (left-side menu)
   </td></tr>

<tr valign="top"><td> <a target="_blank" href="https://v2.docusaurus.io/docs/cli">package.json</a>
   </td><td><em>not displayed</em>
   </td><td>is where you make most of the customizations for your site.
   </td></tr>

<tr valign="top"><td> src/css/custom.css 
   </td><td><em>not displayed</em>
   </td><td> -
   </td></tr>

<tr valign="top"><td> pages
   </td><td><em>not displayed</em>
   </td><td> where you add custom pages for your site; 
   </td></tr>

<tr valign="top"><td> static/img
   </td><td><em>not displayed</em>
   </td><td> static images. Files:
   <pre>docusaurus.png
 favicon.ico
 logo.svg
 undraw_docusaurus_mountain.svg
 undraw_docusaurus_react.svg
 undraw_docusaurus_tree.svg
   </pre>
   </td></tr>

</table>

<hr />

<a name="SiteConfig"></a>

## Configure docusaurus.config.js

1. <a target="_blank" href="https://v2.docusaurus.io/docs/docusaurus.config.js">https://v2.docusaurus.io/docs/docusaurus.config.js</a>

1. <a target="_blank" href="https://v2.docusaurus.io/docs/docusaurus.config.js">https://v2.docusaurus.io/docs/docusaurus.config.js</a> lists each configuration item.

   https://luctst.github.io/docusaurus-starter-pack/docs/siteconfig.html

   ### Configure cname

1. Add the domain name that you obtained for your site:

   <pre>cname: 'docs.mydomain.com',</pre>

   This setting updates the GitHub Pages Custom domain entered in the GitHub repo's settings. Without that line, the setting is cleared from GitHub's GUI on every build.

   ## Code Sortable Tables

1. https://docs.theochu.com/docusaurus/sortable-tables/


   ## Code theme styling

1. https://v2.docusaurus.io/docs/api/themes

1. https://docs.theochu.com/docusaurus/styling/

1. https://docusaurus-template-no-style.netlify.app/

   ## Add Content Search

1. https://docs.theochu.com/docusaurus/search/

   ## Add plug-ins

1. https://v2.docusaurus.io/docs/api/plugins

   ## Localization

1. https://docusaurus.io/docs/en/translation/

   via CrowdIn.
   
   ## Generate html static files
   
   <pre><strong>yarn build
   </strong></pre>


   ## Publish to GitHub
   
   <pre><strong>yarn deploy
   </strong></pre>


## References

https://blog.logrocket.com/easy-documentation-with-docusaurus/


## More on front-end software development #

This is one of several topics:

{% include front-end_links.html %}
