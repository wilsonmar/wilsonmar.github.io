---
layout: post
title: "Task runners"
excerpt: "Gulp, Grunt, and other noises as it works automatically"
tags: [Node, Mac]
date: "2016-10-28"
file: "task-runners"
image:
# feature: pic Giant-Swiss-Army-Knife-1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622061/afe5f5da-0584-11e6-8140-3278289baef4.jpg
  credit: 
  creditlink:
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

Task runners such as Gulp and Grunt are crucial to create websites that are quick
for developers to edit and quick for end-users.

Tasks include:

0. compiling SASS
0. linting CSS
0. concatenating files (not if http2)
0. minifying files
0. auto-generating image sprites
0. auto-generating "responsive" client code to request various image sizes
0. compressing images

## Alternatives compared

Both Grunt and 
<a target="_blank" href="https://twitter.com/@gulpjs">
@gulpjs</a> run on Node JavaScript.
<a target="_blank" href="https://www.oomphinc.com/notes/2014/03/gulp-vs-grunt-node-js-automation-tools-showdown/">
Sample scripts</a> below shows how 
Grunt uses JSON configuration (with matching curly braces)
to tell plug-ins what to do
while Gulp uses JavaScript object coding referencing methods and properties.

<a target="_blank" href="https://twitter.com/@gruntjs">
@GrunJs</a> / <a target="_blank" href="https://www.gruntjs.com/">
Gruntjs.com</a> was built by Ben Alman in 2012.
Grunt's two-year lead time over Gulp is reflected in the 
maturity of error messages and number of plug-ins.
As of November 2015, Gulp has 1,916 plugins while 
Grunt’s repo contains over 5,000 plugins.

<a target="_blank" href="https://opencollective.com/gulpjs">
opencollective.com/gulpjs</a> says "we have 23 contributors and a yearly budget of $1,011".

http://sixrevisions.com/web-development/grunt-vs-gulp/

BTW, Those who use Ruby have Ruby Rake.


## gulpfile.js sample

Each step does not open and close its files or create intermediary copies of files.

```js
var gulp = require('gulp');
     sass = require('gulp-sass');
     autoprefixer = require('gulp-autoprefixer');
&nbsp;
// Styles
gulp.task('styles', function() {
    gulp.src('sass/styles.scss')
        .pipe(sass())
        .pipe(autoprefixer('last 1 version', '> 1%', 'ie 8', 'ie 7'))
        .pipe(gulp.dest('css'));
});
&nbsp; 
// Watch the sass files
gulp.task('watch', function() {
    gulp.watch('sass/*.scss', ['styles']);
});
&nbsp;
gulp.task('default', ['styles, watch']);
```

The `.pipe` is what uses Node.js’ "streams".

PROTIP: Gulp runs faster than Grunt because it uses Node "streams" to 
group tasks together for processing sequentially in memory.

Another example from Ionic:

```js
//import the necessary gulp plugins
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

//declare the task
gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
.pipe(gulp.dest('./www/css/'))
```

The `src(globs)` and `dest(folder)` method are an abstraction to call
<a target="_blank" href="https://github.com/gulpjs/vinyl">
Vinyl adapters</a>. It's used so that a file can be 
described from many sources --
S3, FTP, Dropbox, Box, CloudThingly.io and other services. 

## gruntfile.js sample

Tasks are executed sequentially.

Each task configuration is independent from all the rest. 

Each task accesses files separately. 
So each task requires a source and destination to be specified. 
This requires coding and makes Grunt relatively slower than Gulp.

```js
module.exports = function(grunt) {
 
  // Project configuration.
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'sass/styles.scss': 'css/styles.css'
        }
      }
    },
 
    autoprefixer: {
      single_file: {
        options: {
          browsers: ['last 2 version', 'ie 8', 'ie 9']
        },
        src: 'css/styles.css',
        dest: 'css/styles.css'
      },
    },
 
    watch: {
      sass: {
        files: 'sass/*.scss',
        tasks: ['sass', 'autoprefixer'],
      }
    },
  });
 
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
 
  // Default task
  grunt.registerTask('default', ['watch']);
};
```


## Grunt install

0. Install from gruntjs.com

   <pre><strong>npm install -g grunt
   </strong></pre>

0. Verify the grunt version installed?

   <pre><strong>grunt --version
   </strong></pre>

   What I got:

   <pre>grunt-cli v1.2.0
   </pre>

0. Install also the grunt linter:

   <tt><strong>npm install grunt-contrib-jshint
   </strong></tt>



## Gulp install

0. Install

   <tt><strong>
   npm install -g gulp
   </strong></tt>

   Results:

   <pre>
npm WARN deprecated minimatch@2.0.10: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated minimatch@0.2.14: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated graceful-fs@1.2.3: graceful-fs v3.0.0 and before will fail on node releases >= v7.0. Please update to graceful-fs@^4.0.0 as soon as possible. Use 'npm ls graceful-fs' to find it in the tree.
/Users/mac/.nvm/versions/node/v6.8.1/bin/gulp -> /Users/mac/.nvm/versions/node/v6.8.1/lib/node_modules/gulp/bin/gulp.js
/Users/mac/.nvm/versions/node/v6.8.1/lib
└─┬ gulp@3.9.1 
  ├── archy@1.0.0 
  ├─┬ chalk@1.1.3 
  │ ├── ansi-styles@2.2.1 
  │ ├── escape-string-regexp@1.0.5 
  │ ├─┬ has-ansi@2.0.0 
  │ │ └── ansi-regex@2.0.0 
  │ ├── strip-ansi@3.0.1 
  │ └── supports-color@2.0.0 
  ├── deprecated@0.0.1 
  ├─┬ gulp-util@3.0.7 
  │ ├── array-differ@1.0.0 
  │ ├── array-uniq@1.0.3 
  │ ├── beeper@1.1.0 
  │ ├─┬ dateformat@1.0.12 
  │ │ ├── get-stdin@4.0.1 
  │ │ └─┬ meow@3.7.0 
  │ │   ├─┬ camelcase-keys@2.1.0 
  │ │   │ └── camelcase@2.1.1 
  │ │   ├── decamelize@1.2.0 
  │ │   ├─┬ loud-rejection@1.6.0 
  │ │   │ ├─┬ currently-unhandled@0.4.1 
  │ │   │ │ └── array-find-index@1.0.2 
  │ │   │ └── signal-exit@3.0.1 
  │ │   ├── map-obj@1.0.1 
  │ │   ├─┬ normalize-package-data@2.3.5 
  │ │   │ ├── hosted-git-info@2.1.5 
  │ │   │ ├─┬ is-builtin-module@1.0.0 
  │ │   │ │ └── builtin-modules@1.1.1 
  │ │   │ └─┬ validate-npm-package-license@3.0.1 
  │ │   │   ├─┬ spdx-correct@1.0.2 
  │ │   │   │ └── spdx-license-ids@1.2.2 
  │ │   │   └── spdx-expression-parse@1.0.4 
  │ │   ├── object-assign@4.1.0 
  │ │   ├─┬ read-pkg-up@1.0.1 
  │ │   │ ├─┬ find-up@1.1.2 
  │ │   │ │ ├── path-exists@2.1.0 
  │ │   │ │ └─┬ pinkie-promise@2.0.1 
  │ │   │ │   └── pinkie@2.0.4 
  │ │   │ └─┬ read-pkg@1.1.0 
  │ │   │   ├─┬ load-json-file@1.1.0 
  │ │   │   │ ├── graceful-fs@4.1.9 
  │ │   │   │ ├─┬ parse-json@2.2.0 
  │ │   │   │ │ └─┬ error-ex@1.3.0 
  │ │   │   │ │   └── is-arrayish@0.2.1 
  │ │   │   │ ├── pify@2.3.0 
  │ │   │   │ └── strip-bom@2.0.0 
  │ │   │   └── path-type@1.1.0 
  │ │   ├─┬ redent@1.0.0 
  │ │   │ ├─┬ indent-string@2.1.0 
  │ │   │ │ └─┬ repeating@2.0.1 
  │ │   │ │   └─┬ is-finite@1.0.2 
  │ │   │ │     └── number-is-nan@1.0.1 
  │ │   │ └── strip-indent@1.0.1 
  │ │   └── trim-newlines@1.0.0 
  │ ├─┬ fancy-log@1.2.0 
  │ │ └── time-stamp@1.0.1 
  │ ├─┬ gulplog@1.0.0 
  │ │ └── glogg@1.0.0 
  │ ├─┬ has-gulplog@0.1.0 
  │ │ └── sparkles@1.0.0 
  │ ├── lodash._reescape@3.0.0 
  │ ├── lodash._reevaluate@3.0.0 
  │ ├── lodash._reinterpolate@3.0.0 
  │ ├─┬ lodash.template@3.6.2 
  │ │ ├── lodash._basecopy@3.0.1 
  │ │ ├── lodash._basetostring@3.0.1 
  │ │ ├── lodash._basevalues@3.0.0 
  │ │ ├── lodash._isiterateecall@3.0.9 
  │ │ ├─┬ lodash.escape@3.2.0 
  │ │ │ └── lodash._root@3.0.1 
  │ │ ├─┬ lodash.keys@3.1.2 
  │ │ │ ├── lodash._getnative@3.9.1 
  │ │ │ ├── lodash.isarguments@3.1.0 
  │ │ │ └── lodash.isarray@3.0.4 
  │ │ ├── lodash.restparam@3.6.1 
  │ │ └── lodash.templatesettings@3.1.1 
  │ ├─┬ multipipe@0.1.2 
  │ │ └─┬ duplexer2@0.0.2 
  │ │   └── readable-stream@1.1.14 
  │ ├── object-assign@3.0.0 
  │ ├── replace-ext@0.0.1 
  │ ├─┬ through2@2.0.1 
  │ │ ├─┬ readable-stream@2.0.6 
  │ │ │ ├── core-util-is@1.0.2 
  │ │ │ ├── inherits@2.0.3 
  │ │ │ ├── isarray@1.0.0 
  │ │ │ ├── process-nextick-args@1.0.7 
  │ │ │ ├── string_decoder@0.10.31 
  │ │ │ └── util-deprecate@1.0.2 
  │ │ └── xtend@4.0.1 
  │ └─┬ vinyl@0.5.3 
  │   ├── clone@1.0.2 
  │   └── clone-stats@0.0.1 
  ├── interpret@1.0.1 
  ├─┬ liftoff@2.3.0 
  │ ├── extend@3.0.0 
  │ ├─┬ findup-sync@0.4.3 
  │ │ ├─┬ detect-file@0.1.0 
  │ │ │ └── fs-exists-sync@0.1.0 
  │ │ ├─┬ is-glob@2.0.1 
  │ │ │ └── is-extglob@1.0.0 
  │ │ ├─┬ micromatch@2.3.11 
  │ │ │ ├─┬ arr-diff@2.0.0 
  │ │ │ │ └── arr-flatten@1.0.1 
  │ │ │ ├── array-unique@0.2.1 
  │ │ │ ├─┬ braces@1.8.5 
  │ │ │ │ ├─┬ expand-range@1.8.2 
  │ │ │ │ │ └─┬ fill-range@2.2.3 
  │ │ │ │ │   ├── is-number@2.1.0 
  │ │ │ │ │   ├─┬ isobject@2.1.0 
  │ │ │ │ │   │ └── isarray@1.0.0 
  │ │ │ │ │   ├── randomatic@1.1.5 
  │ │ │ │ │   └── repeat-string@1.6.1 
  │ │ │ │ ├── preserve@0.2.0 
  │ │ │ │ └── repeat-element@1.1.2 
  │ │ │ ├─┬ expand-brackets@0.1.5 
  │ │ │ │ └── is-posix-bracket@0.1.1 
  │ │ │ ├── extglob@0.3.2 
  │ │ │ ├── filename-regex@2.0.0 
  │ │ │ ├─┬ kind-of@3.0.4 
  │ │ │ │ └── is-buffer@1.1.4 
  │ │ │ ├── normalize-path@2.0.1 
  │ │ │ ├─┬ object.omit@2.0.1 
  │ │ │ │ ├─┬ for-own@0.1.4 
  │ │ │ │ │ └── for-in@0.1.6 
  │ │ │ │ └── is-extendable@0.1.1 
  │ │ │ ├─┬ parse-glob@3.0.4 
  │ │ │ │ ├─┬ glob-base@0.3.0 
  │ │ │ │ │ └── glob-parent@2.0.0 
  │ │ │ │ └── is-dotfile@1.0.2 
  │ │ │ └─┬ regex-cache@0.4.3 
  │ │ │   ├── is-equal-shallow@0.1.3 
  │ │ │   └── is-primitive@2.0.0 
  │ │ └─┬ resolve-dir@0.1.1 
  │ │   └─┬ global-modules@0.2.3 
  │ │     ├─┬ global-prefix@0.1.4 
  │ │     │ ├── ini@1.3.4 
  │ │     │ ├─┬ osenv@0.1.3 
  │ │     │ │ └── os-tmpdir@1.0.2 
  │ │     │ └─┬ which@1.2.11 
  │ │     │   └── isexe@1.1.2 
  │ │     └── is-windows@0.2.0 
  │ ├─┬ fined@1.0.2 
  │ │ ├── expand-tilde@1.2.2 
  │ │ ├── lodash.assignwith@4.2.0 
  │ │ ├── lodash.isempty@4.4.0 
  │ │ ├── lodash.pick@4.4.0 
  │ │ └─┬ parse-filepath@1.0.1 
  │ │   ├─┬ is-absolute@0.2.6 
  │ │   │ └─┬ is-relative@0.2.1 
  │ │   │   └─┬ is-unc-path@0.1.1 
  │ │   │     └── unc-path-regex@0.1.2 
  │ │   ├── map-cache@0.2.2 
  │ │   └─┬ path-root@0.1.1 
  │ │     └── path-root-regex@0.1.2 
  │ ├── flagged-respawn@0.3.2 
  │ ├── lodash.isplainobject@4.0.6 
  │ ├── lodash.isstring@4.0.1 
  │ ├── lodash.mapvalues@4.6.0 
  │ ├── rechoir@0.6.2 
  │ └── resolve@1.1.7 
  ├── minimist@1.2.0 
  ├─┬ orchestrator@0.3.7 
  │ ├─┬ end-of-stream@0.1.5 
  │ │ └─┬ once@1.3.3 
  │ │   └── wrappy@1.0.2 
  │ ├── sequencify@0.0.7 
  │ └── stream-consume@0.1.0 
  ├── pretty-hrtime@1.0.2 
  ├── semver@4.3.6 
  ├─┬ tildify@1.2.0 
  │ └── os-homedir@1.0.2 
  ├─┬ v8flags@2.0.11 
  │ └── user-home@1.1.1 
  └─┬ vinyl-fs@0.3.14 
    ├── defaults@1.0.3 
    ├─┬ glob-stream@3.1.18 
    │ ├─┬ glob@4.5.3 
    │ │ └── inflight@1.0.6 
    │ ├─┬ glob2base@0.0.12 
    │ │ └── find-index@0.1.1 
    │ ├─┬ minimatch@2.0.10 
    │ │ └─┬ brace-expansion@1.1.6 
    │ │   ├── balanced-match@0.4.2 
    │ │   └── concat-map@0.0.1 
    │ ├── ordered-read-streams@0.1.0 
    │ ├─┬ through2@0.6.5 
    │ │ └── readable-stream@1.0.34 
    │ └── unique-stream@1.0.0 
    ├─┬ glob-watcher@0.0.6 
    │ └─┬ gaze@0.5.2 
    │   └─┬ globule@0.1.0 
    │     ├─┬ glob@3.1.21 
    │     │ ├── graceful-fs@1.2.3 
    │     │ └── inherits@1.0.2 
    │     ├── lodash@1.0.2 
    │     └─┬ minimatch@0.2.14 
    │       ├── lru-cache@2.7.3 
    │       └── sigmund@1.0.1 
    ├─┬ graceful-fs@3.0.11 
    │ └── natives@1.1.0 
    ├─┬ mkdirp@0.5.1 
    │ └── minimist@0.0.8 
    ├─┬ strip-bom@1.0.0 
    │ ├── first-chunk-stream@1.0.0 
    │ └── is-utf8@0.2.1 
    ├─┬ through2@0.6.5 
    │ └─┬ readable-stream@1.0.34 
    │   └── isarray@0.0.1 
    └─┬ vinyl@0.4.6 
      └── clone@0.2.0 
   </pre>


## Bundling obsoleted by HTTP/2

HTTP/2 makes obsolete bundlers:

http://webpack.github.io/docs


http://browserify.org
Broserify lets you require("modules") in the browser by bundling up dependendies:

http://rollupjs.org
the next generation JS module bundler.


## Other Tasks

ESLint

Mocha+chai

Flowtype




## More on OSX

This is one of a series on Mac OSX:

{% include mac_links.html %}
