---
layout: post
title: "Git messages (conventions and styling with emojis)"
excerpt: "so you can separate one commit from another, succinctly"
modified:
tags: []
date: "2019-03-29"
file: "git-messages"
image:
# feature: pic blue black stars spin 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14621973/fe6e21a6-0583-11e6-9a94-a969a51759b6.jpg
  credit: Jeremy Thomas
  creditlink: https://www.flickr.com/photos/132218932@N03/page2
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include l18n.html %}
{% include _toc.html %}

<a target="_blank" href="https://wilsonmar.github.io/git-messages/">Here</a> are suggestions to make Git commit messages more useful and convenient.

{% include whatever.html %}

1. The same message can be associated with all commits added before a commit. So before doing a git commit, check what changes have been added already:

   <pre><strong>git status</strong></pre>

   `Modified:` in the response identify items added for the next commit.

1. Specify a commit message when you provide a command such as:

   <pre><strong>git commit -m"#BUG342 NEW: initial commit README.md"</strong></pre>

   REMEMBER: If you issue a "git commit" without the "-m" which provides the commit message, Git presents you a text editor window to type in a long message. 
   (And if you see a ":" at the lower-right corner, type `wq!` to exit.)

   PROTIP: Specify an alias to type the minimal number of keystrokes, such as:

   <pre><strong>gas "#BUG342 NEW: initial commit README.md"</strong></pre>

1. If you are using a planning system, type the identifier for it (such as "#BUG342") in order to link code changes back to plans. Examples of planning systems:

   * Jira
   * https://github.com/marketplace/testquality
   <br /><br />
   
1. Begin with a capital letter.

1. Specify the <strong>status action</strong> in all capital (upper-case) letters, such as "NEW", "REMOVE", "RENAME", "DOC", "UPDATE", "IMPROVE", "FIX", "RELEASE".

   <a target="_blank" href="https://github.com/ahmadawais/Emoji-Log">https://github.com/ahmadawais/Emoji-Log</a> for examples.

1. <strong>Use imperative present-tense action verbs</strong> like you're giving an order: "add", "create", "update", "revise", "renumber", "delete", etc.  

   PROTIP: Don't use past-tense verbs or gerunds such as "added" or "updating". This is because commits can be in several states over time.

1. Alternatively, add emojis <a href="#Emojis">(listed below)</a> to tag messages instead of typing a common purpose, intent, or other metadata about a commit. Emoji graphic icons can be recognized at a glance, no matter the spoken language. 

   Insert Emojis icons are created by Git when it recognizes specific keywords between colons.

   PROTIP: Writing &#58;shipit&#58; in a message will cause :shipit: inserted and also triggers progression of the commit to the next stage in some CI/CD pipelines.

   Also, Emoji graphic icons take a single character in place of perhaps several words.

1. Limit the message to 50 characters.

1. Don’t end the line with a period. That's unnecessary.

The above are based on: <a target="_blank" href="https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit">Angular Git commit message guidelines</a> – well known and proven Git commit message convention which was introduced by the Angular project (A.K.A. Google).


<a name="Emojis"></a>

## Emojis

You don't have to use them. Or you can use a small subset of them. But in case others use them, to help to find their meaning, I've listed all emojis below. These are from Carlos Cuesta's <a target="_blank" href="https://gitmoji.carloscuesta.me/">visual page</a> and <a target="_blank" href="https://github.com/carloscuesta/gitmoji">CLI</a>. I've classified them below in a more concise way:

### Status / Warnings :

🎉 &#58;tada&#58; = Initial (NEW) commit.

🚧 &#58;construction&#58; = Work in progress.

🚑 &#58;ambulance&#58; = Critical hotfix.

✨ &#58;sparkles&#58; = Introducing new features.

🍻 &#58;beers&#58; = Writing code drunkenly.

💩 &#58;hankey&#58; = Writing bad code that needs to be improved.

🚨 &#58;rotating_light&#58; = Removing linter warnings.

⏪ &#58;rewind&#58; = Reverting changes.

⚗ &#58;alembic&#58; = Experimenting new things

🔒 &#58;lock&#58; = Fixing security issues.

⚡️ &#58;zap&#58; = Improving performance.

🚸 &#58;children_crossing&#58; = Improving user experience / usability.

🐛 &#58;bug&#58; = Fixing a bug.


### Documentation:

📝 &#58;memo&#58; = Writing docs

💡 &#58;bulb&#58; = Documenting source code

🔍 &#58;mag&#58; = Improving SEO

👥 &#58;busts_in_silhouette&#58; = Adding contributor(s)

📖 &nbsp; &#58;book&#58; = Issue


### Testing:

✅ &#58;white_check_mark&#58; = Updating tests.

👌 &#58;ok_hand&#58; = Updating code due to code review changes.

🤡 &#58;clown_face&#58; = Mocking things.


### Dependency management:

💥 &#58;boom&#58; = Introducing breaking changes.

⬇️ &#58;arrow_down&#58; = Downgrading dependencies.

⬆️ &#58;arrow_up&#58; = Upgrading dependencies.

📌 &#58;pushpin&#58; = Pinning dependencies to specific versions.

➕&#58;heavy_plus_sign&#58; = Adding a dependency.

➖ &#58;heavy_minus_sign&#58; = Removing a dependency.



### Coding Content:

🏗 &#58;building_construction&#58; = Making architectural changes.

🔥 &#58;fire&#58; = Removing code or files.

✏️ &#58;pencil2&#58; = Fixing typos.

🔊 &#58;loud_sound&#58; = Adding logs.

🔇 &#58;mute&#58; = Removing logs.

🎨 &#58;art&#58; = Improving structure / format of the code.

♻️ &#58;recycle&#58; = Refactoring code logic.

👷 &#58;construction_worker&#58; = Adding CI build system.

🚀 &#58;rocket&#58; = Deploying stuff.

🔖 &#58;bookmark&#58; = Releasing / Version tags.

💬 &#58;speech_balloon&#58; = Updating text and literals.

📈 &#58;chart_with_upwards_trend&#58; = Adding analytics or tracking code.

☸️ &#58;wheel_of_dharma&#58; = Work about Kubernetes

🌐 &#58;globe_with_meridians&#58; = Internationalization and localization.

🥚 &#58;egg&#58; = Adding an easter egg.

🏷️ &#58;label&#58; = Adding or updating types (Flow, TypeScript)

🗃 &#58;card_file_box&#58; = Performing database related changes.

♿️ &#58;wheelchair&#58; = Improving accessibility.

💄 &#58;lipstick&#58; = Updating the UI and style files.


### Configuration / Metadata:

🐳 &#58;whale&#58; = Work about Docker.

💚 &#58;green_heart&#58; = Fixing CI Build.

🔧 &#58;wrench&#58; = Changing configuration files.

🔀 &#58;twisted_rightwards_arrows&#58; = Merging branches.

📦 &#58;package&#58; = Updating compiled files or packages.

👽 &#58;alien&#58; = Updating code due to external API changes.

🚚 &#58;truck&#58; = Moving or renaming files.

📄 &#58;page_facing_up&#58; = Adding or updating license.

🍱 &#58;bento&#58; = Adding or updating assets.

🙈 &#58;see_no_evil&#58; = Adding or updating a .gitignore file

📸 &#58;camera_flash&#58; = Adding or updating snapshots

📱 &#58;iphone&#58; = Working on responsive design.


### Operating system specific:

🍏 &#58;green_apple&#58; = Fixing something on iOS.

🍎 &#58;apple&#58; = Fixing something on macOS.

🐧 &#58;penguin&#58; = Fixing something on Linux.

🏁 &#58;checkered_flag&#58; = Fixing something on Windows.

🤖 &#58;robot&#58; = Fixing something on Android.


The whole list of emojis are listed (without meanings) in <a target="_blank" href="https://gist.github.com/rxaviers/7360908">this cheatsheet</a>.

## Emojis

<a target="_blank" href="https://channel9.msdn.com/Shows/Visual-Studio-Toolbox/Visual-Studio-for-Mac-Build-Your-First-App">This video</a> shows how to using Visual Studio for Mac to create a ASP.NET Core Lazer pages web site that displays emojis retrieved using the <a target="_blank" href="https://developer.github.com/v3/">GitHub API</a>.



## Automated compliance

https://opensource.com/article/19/2/emoji-log-git-commit-messages    
    Emoji Git commit message convention – I’m not kidding, 

https://github.com/marketplace/todo
is a GitHub app that creates new issues based on actionable comments in your code.
It is built with <a target="_blank" href="https://probot.github.io/">Probot</a>.

## Resources

https://datree.io/blog/git-commit-message-conventions-for-readable-git-log/?source=dev.to


Datree
Datree connects with GitHub pull requests to provide automatic policy compliance checks and insights for every code change. Create and enforce custom or built-in policies, in the context of your dev stack.

@datreeio datree.io


## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
