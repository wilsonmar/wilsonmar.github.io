---
layout: post
title: "Gulp Task Runner"
excerpt: "Let me do that for you"
tags: [Email, project]
date: "2016-08-26"
file: "gulp-runner"
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

## Install #

From a Terminal shell window on any folder:

0. Install Node (NPM),
   because Gulp is based on Node.js, with several modules.

0. Install the Gulp task runner:

   <tt><strong>
   npm install --global gulp
   </strong></tt>

   The response I got is too long to list here.

   <pre>
npm WARN deprecated minimatch@2.0.10: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated minimatch@0.2.14: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated lodash@1.0.2: lodash@<3.0.0 is no longer maintained. Upgrade to lodash@^4.0.0.
npm WARN deprecated graceful-fs@1.2.3: graceful-fs v3.0.0 and before will fail on node releases >= v7.0. Please update to graceful-fs@^4.0.0 as soon as possible. Use 'npm ls graceful-fs' to find it in the tree.
/Users/mac/.nvm/versions/node/v6.4.0/bin/gulp -> /Users/mac/.nvm/versions/node/v6.4.0/lib/node_modules/gulp/bin/gulp.js
/Users/mac/.nvm/versions/node/v6.4.0/lib
`-- gulp@3.9.1 
   </pre>

   There's not much you can do about deprecated dependencies.
   In fact, the beauty of NPM is that the exact version of each
   dependency is provided, as desired (and hopefully tested)
   by the module being installed.

0. Navigate to your project (replacing "myjekyll" with your project name):

   <tt><strong>
   cd myjekyll
   </strong></tt>

0. Install Gulp into devDependencies:

   <tt><strong>
   npm install \-\-save-dev gulp
   </strong></tt>

    `--save-dev` makes it local to the current project folder.

   This creates a "node_modules" folder containing
   dependencies downloaded.

   It looks for the "package.json" file created for each node project.

0. Add the gulp utilites plugin to make runs visible:

   <tt><strong>
   npm install \-\-save-dev gulp-util
   </strong></tt>

   It enables `gutil.log` in the code below.


### Basic script #

0. Use a text edit/IDE to create a <strong>gulpfile.js</strong>
   in your project's folder.

   <pre><strong>
   var gulp = require('gulp');
   var gulp = require('gulp-util');
   var gulp = require('gulp-shell');
&nbsp;
   gulp.task('default', function () {
       return gutil.log('Gulp runs!')
   });
   </strong></pre>

   <a href="#Install">
   Modules required to be installed (below)</a> are defined first.

   PROTIP: One can separate several requires together
   and separate them with commands under a single var.
   But individual var statements are easier less error-prone
   to copy and paste.

   Gulp only has 4 top-level functions: task, 
   src, 
   dest, 
   <a href="#Watch">watch</a>.

   * gulp.src points to the files to use. 
   It’s parameters are globs and an optional options object. 
   It uses .pipe for chaining it’s output into other plugins.

   * gulp.dest points to the output folder to write files to.

0. Run gulp, which always looks for a file named 'gulpfile.js'
   to execute.

   <tt><strong>
   gulp
   </strong></tt>

   TROUBLESHOOTING:
   If you see an error like this:

   <pre>
module.js:457
    throw err;   
    ^
&nbsp;
Error: Cannot find module 'gulp-shell'
   </pre>

   This means the module needs to be installed.

0. Add the gulp shell plugin:

   <tt><strong>
   npm install \-\-save-dev gulp-shell
   npm install \-\-save-dev browserSync
   </strong></tt>




   ### Gulp for Jekyll #

0. Use a text edit/IDE to create a <strong>gulpfile.js</strong>
   in your project's folder.

   Below is a sample (from Gary Simon)
   to process a Jekyll-based website source:

   <pre><strong>
   var browserSync = require('browserSync').create();
   var uncss = require('uncss');
&nbsp;
   gulp.task('build', shell.task['jekyll build --watch']));
&nbsp;
   gulp.task('serve', function () {
      browserSync.init({server: {baseDir: '_site/'}});
      gulp.watch('_site/**/*.*').on('change', browserSync.reload);
   });
&nbsp;
   gulp.task('default', ['build','serve']);
&nbsp;
   gulp.task('post', function () {
      browserSync.init({server: {baseDir: '_site/'}});
      .pipe(uncss({
         html: ['index.html','posts/**/*.html','_includes/*.html','_layouts/*.html']
      }))
      .pipe(gulp.dest('_site/css/'))
   });
   </strong></pre>

Each Gulp task has two parameters: a step name and what Gulp is to do.

Gulp is a streaming build system, by 

Gulp uses node’s streams file manipulation is all done in memory,

A file isn’t written until you tell it to do so.

<a name="Install"></a>

### Install modules #

Before making use of the modules required,
install them:

   <tt><strong>
   npm install \-\-save-dev gulp-uncss
   npm install \-\-save-dev gulp-minify-css
   </strong></tt>

    `--save-dev` makes it local to the current project

<a name="RunIt"></a>

### Run it #

   <tt><strong>
   gulp post
   </strong></tt>

   The response:

   <pre>
   Using gulpfile ...
   Starting 'post'...
   </pre>


## IDE Integration #

Gulp in Visual Studio 2015:

- http://blog.chrisbriggsy.com/Gulp-101-CSS-all-the-LESS/



   <a name="Watch"></a>

   ## Watch #

   <strong>gulp.watch</strong> listens for changes in files fitting
   the path defined in the first parameter, and if there is a change,
   invokes the scripts in the 2nd parameter.

   <pre>
   gulp.watch('source/javascript/**/*.js', ['jshint']);
   </pre>

   gulp.watch (like gulp.task) has two main forms. 
   Both return an EventEmitter that emits change events. 
   The first of which takes a glob, an optional options object, 
   and an array of tasks as it’s parameters.

## Resources #

* <a target="_blank" href="https://github.com/gulpjs/gulp/blob/master/docs/API.md">
   Gulp API docs</a> defines the various functions.

* <a target="_blank" href="https://gist.github.com/chantastic/9540447">
   @chanfastic's Gist</a>

* The last module of
<a target="_blank" href="https://app.pluralsight.com/library/courses/custom-jekyll-theme-2372”>
Creating a Custom Jekyll Theme</a>
by Gary Simon Advanced Jan 20, 2016 2h 3m

* https://scotch.io/tutorials/automate-your-tasks-easily-with-gulp-js


## More on front-end software development #

This is one of several topics:

{% include front-end_links.html %}
