---
layout: post
title: "Elixir-lang"
excerpt: "Elixir leverages the Erlang BEAM VM for running low-latency, distributed, and fault-tolerant systems in web development, embedded software, data ingestion, and multimedia processing."
tags: [language]
date: "2022-01-06"
file: "elixir-lang"
image: # pic-black-bkg-white-cloud_1920x1200
  feature: https://cloud.githubusercontent.com/assets/300046/15269257/8104a824-19b6-11e6-9c42-014bf608009a.jpg
  credit: Theme Bin
  creditlink: http://www.themebin.com/hd-wallpapers/wandering-clouds-hd-wallpaper/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

1. https://elixir-lang.org/

1. Open sourced at https://github.com/elixir-lang under Apache 2.0

1. See the documentary featuring José Valim, who created Elixir beginning in 2012. Also appearing are [9:31] Justin Schneck, co-author of the Nerves Project, and [at 9:13] Chris McCord, creator of the <a target="_blank" href="https://www.wikiwand.com/en/Phoenix_(web_framework)">Phoenix Framework</a> which implements the server-side Model View Controller (MVC) pattern:
   https://www.youtube.com/watch?v=lxYFOM3UJzo
   https://cult.honeypot.io/originals/elixir-the-documentary

1. <a target="_blank" href="https://www.youtube.com/watch?v=pBNOavRoNL0">VIDEO: Elixir Tutorial</a> by Derek Banas

Famous users mentioned on the Elixir home page are Farmbot and Pepsico.

## Erlang VM (BEAM) users

   * https://www.wikiwand.com/en/Elixir_(programming_language)
   <br /><br />

WhatsApp is using it.
Erlang BEAM runs backbone switches with 500-600 gigabits throughput per each in eighties with like 10-20 milliseconds of downtime per year. They actually originally written software for those switches in C++ (few years of hundreds of devs work) but it crashed with like few dozen simultaneous calls, so that project was a huge failure and then Joe Armstrong's team of THREE devs written software in Erlang in few months and it was huge success. It was basically first production-level implementation of CSP actor model concurrency.

<a target="_blank" href="https://www.youtube.com/watch?v=zL2wcqS78UA">
VIDEO: Why We've Adopted Elixir</a> by Pusher

https://serokell.io/blog/elixir-in-production-glific


## Install Language

   * https://www.pluralsight.com/guides/installing-elixir-erlang-with-asdf
   * https://joyofelixir.com/a-setup-and-install
   * https://elixir-lang.org/install.html
   <br /><br />

### One-off install

If you're creating a <strong>temporary enviornment</strong> to run whatever is the latest version of Elixir (without Erlang), on MacOS using Homebrew:

   <ul><pre><strong>brew install elixir</strong></pre></ul>

   Alternately, on Fedora & Ubuntu, see:
   https://gist.github.com/rubencaro/6a28138a40e629b06470


### Verify install

<a target="_blank" href="https://www.youtube.com/watch?v=antnsMgA4Ro">VIDEO</a>:

1. Verifying Elixir is done the same way across all *nix operating systems:

   <pre><strong>elixir -v</strong></pre>

   The response at time of writing:

   <pre>Erlang/OTP 24 [erts-12.2] [source] [64-bit] [smp:8:8] [ds:8:8:10] [async-threads:1] [jit] [dtrace]
&nbsp;
Elixir 1.13.1 (compiled with Erlang/OTP 24)
   </pre>

   Previously:

   <pre>Erlang/OTP 23 [erts-11.1.1] [source] [64-bit] [smp:16:16] [ds:16:16:10] [async-threads:1] [hipe] [dtrace]
&nbsp;
Elixir v1.10.4
   </pre>

### OTP from Erlang

   * https://serokell.io/blog/elixir-otp-guide
   <br /><br />

Notice the "OTP" in "Erlang/OTP 24" version name?

OTP is set of tools and libraries that Elixir inherits from Erlang, a programming language on whose VM it runs.

OTP contains the <strong>Erlang</strong> compiler, databases, test framework, profiler, debugging tools. But, when <strong>Alchemists</strong> (developers program in Elixir) talk about OTP in the context of Elixir, they usually mean the Erlang <strong>actor model</strong> that is based on lightweight processes that make Elixir so efficient.

An Erlang process is much lighter than an operating system's threads and processes.

> "Elixir is synatactic sugering on Erlang"<a href="#[1]">[1]</a>

Erlang functions can be called from Elixir, and vice versa, without run time impact, due to compilation to Erlang bytecode.

### ASDF to manage Elixir and Erlang versions

   * https://serokell.io/blog/elixir-otp-guide
   <br /><br />

So, many Elixir projects require a correspondence between the Elixir and Erlang runtime versions.

Like NVM is needed for Node.js work or Rbenv for Ruby, ensure that your project installs a specific version of Elixir and Erlang by using the ASDF version manager.

NOTE: ASDF is not an acronym but is the four letters on the QWERTY keyboard layout home row for the left hand.

ASDF enables you to switch among versions (of multiple languages) by ensuring that each version of each project has the environment it needs.

1. On MacOS:

   <pre><strong>brew install coreutils curl git</strong></pre>
 
1. Clone ASDF into a folder in your $HOME folder:

   <pre><strong>git clone https://github.com/asdf-vm/asdf.git ~/.asdf --depth 1</strong></pre>

   NOTE: To remove ASDF, simply remove folder .asdf from your home directory and undo the configuration changes described below.

1. Include ASDF in your shell's configuration:
   
   For zsh, add the following to ~/.zshrc or ~/.bash_profile:

   <pre>source $HOME/.asdf/asdf.sh</pre>

   Alternatively, if you use oh-my-zsh, add asdf to your plugin configuration.

1. Install languages as ASDF Plugins. A typical Elixir project needs the Elixir and Erlang plugins:

   <pre><strong>asdf plugin add erlang</strong></pre>

   Sample response:

   <pre>initializing plugin repository...Cloning into '/Users/wilsonmar/.asdf/repository'...
remote: Enumerating objects: 3585, done.
remote: Counting objects: 100% (779/779), done.
remote: Compressing objects: 100% (541/541), done.
remote: Total 3585 (delta 456), reused 479 (delta 234), pack-reused 2806
Receiving objects: 100% (3585/3585), 815.43 KiB | 2.75 MiB/s, done.
Resolving deltas: 100% (1818/1818), done.
   </pre>

   <pre><strong>asdf plugin add elixir</strong></pre>

   <pre>initializing plugin repository...Cloning into '/Users/wilsonmar/.asdf/repository'...
remote: Enumerating objects: 3585, done.
remote: Counting objects: 100% (779/779), done.
remote: Compressing objects: 100% (541/541), done.
remote: Total 3585 (delta 456), reused 479 (delta 234), pack-reused 2806
Receiving objects: 100% (3585/3585), 815.43 KiB | 2.75 MiB/s, done.
Resolving deltas: 100% (1818/1818), done.
   </pre>

1. If your project requires Node.js, also install the nodejs plugin.

### Versions available

   PROTIP: ASDF requires that a <strong>precise version be specified</strong> for each language to be installed.

1. Use ASDF to list all available versions of Erlang:

   <pre><strong>asdf list-all erlang</strong></pre>

   <pre># ...
24.1.7
24.2
# ...
   </pre>

1. Use ASDF to list all available versions of Elixir:

   <pre><strong>asdf list-all elixir</strong></pre>
   <pre># ...
1.13.1-otp-23
<strong>1.13.1-otp-24</strong>
# ...
master-otp-23
master-otp-24
# ...
   </pre>

   Notice that each Elixir version references the version of Erlang (such as 24).

1. Navigate your project folder root to create a <tt><strong>.tool-versions </strong></tt> file to <strong>specify precise versions</strong> of each language to be installed:

   </pre>asdf local erlang 24.2
asdf local elixir 1.13.1-otp-24
   </pre>

1. Create a <tt>.tool-versions</tt> file in your account $HOME  directory so that ASDF can use those versions whenever a project doesn't specify versions of its own:

   <pre>asdf global erlang 24.2
asdf global elixir 1.13.1-otp-24
   </pre>

1. Install Erlang:

   <pre><strong>asdf install erlang 24.2</strong>

   In the sample response, there may be messages during the installation about omitted modules, which will not affect the rest of the runtime.

   Erlang compiles modules based on the available libraries from your system. For example, some features (such as the built-in observer) require wx libraries. 

   <pre>asdf_24.2 is not a kerl-managed Erlang/OTP installation
No build named asdf_24.2
Downloading 24.2 to /Users/wilsonmar/.asdf/downloads/erlang/24.2...
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   652  100   652    0     0   3060      0 --:--:-- --:--:-- --:--:--  3075
100  102M  100  102M    0     0  4443k      0  0:00:23  0:00:23 --:--:-- 9087k
Extracting source code
Building Erlang/OTP 24.2 (asdf_24.2), please wait...
Build failed.
checking if we can add -fno-common to CFLAGS (via CFLAGS)... yes
checking C99 support... yes
checking CFLAGS for -O switch... configure: error: 
  CFLAGS must contain a -O flag. If you need to edit the CFLAGS you probably
  also want to add the default CFLAGS. The default CFLAGS are "-O2 -g".
  If you want to build erts without any optimization, pass -O0 to CFLAGS.
ERROR: /Users/wilsonmar/.asdf/plugins/erlang/kerl-home/builds/asdf_24.2/otp_src_24.2/erts/configure failed!
./configure: line 366: kill: (-21348) - No such process
make: *** No rule to make target `is_cross_configured'.  Stop.
make: *** No rule to make target `all'.  Stop.
&nbsp;
Please see /Users/wilsonmar/.asdf/plugins/erlang/kerl-home/builds/asdf_24.2/otp_build_24.2.log for full details.
   </pre>

1. Install Elixir:

   <pre><strong>asdf install elixir 1.13.1-otp-24</strong>

1. Replace the versions above with those you used during installation. This will create a <strong>.tool-versions</strong> file in your project, which will instruct ASDF which versions to use. If you'd like to set a global, or default, version, run:

.tool-versions

### Install dependencies

   NOTE: A ".mix" folder is created within your user $HOME folder.

1. Install 

   <pre><strong>mix deps.get</strong></pre>

   The response:

   <pre>Resolving Hex dependencies...
Dependency resolution completed:
Unchanged:
  dialyxir 1.1.0
  erlex 0.2.6
  file_system 0.2.10
  mix_test_watch 1.0.2
* Getting dialyxir (Hex package)
* Getting mix_test_watch (Hex package)
* Getting file_system (Hex package)
* Getting erlex (Hex package)
</pre>

1. Learn about applications:

   <pre><strong>mix help compile.app | more</strong></pre>

   As with all Linux, at the ":", press spacebar on keyboard to page down or up/down arrow to move a single line at a time.

   Press "Q" to exit display mode.

1. Learn about dependencies:
 
   <pre><strong>mix help deps | more</strong></pre>

1. See a list of all repos on GitHub:

   https://github.com/topics/elixir

1. See the know libraries:

   https://github.com/h4cc/awesome-elixir

1. Get

   <pre><strong>git clone git@github.com:bijanbwb/enbala_take_home.git --depth 1
   cd enbala_take_home</strong></pre>

1. Navigate to the lib folder:

   <a target="_blank" href="https://stackoverflow.com/questions/36292620/elixir-when-to-use-ex-and-when-exs-files">REMEMBER</a>: Compiled Elixir source code files have extension of <strong>.ex</strong> for the application's main business logic, invoked using <tt>iex</tt>. <strong>.exs</strong> is for interpreted code. Test specification files have extension of <strong>.exs</strong> (containing assert commands), invoked using <tt>elixir</tt>.

.ex is for compiled code, .exs is for interpreted code.

1. Check whether typespecs are accurate:

   <pre><strong>mix dialyzer</strong></pre>

   Notice the end of the run:

   <pre>Total errors: 0, Skipped: 0, Unnecessary Skips: 0
done in 0m1.08s
done (passed successfully)
   </pre>

1. List files generated by above command:

   <pre>archives
dialyxir_erlang-24.2.plt
dialyxir_erlang-24.2_elixir-1.13.1.plt
   </pre>

1. Execute the test:

   <pre>mix test</pre>

1. When running a test initially, watch it step by step:

   <pre><strong>mix test.watch</strong></pre>

1. Press <strong>control + C</strong>

   <pre>BREAK: (a)bort (A)bort with dump (c)ontinue (p)roc info (i)nfo
       (l)oaded (v)ersion (k)ill (D)b-tables (d)istribution
   </pre>

<hr />

## GitHub repositories

https://github.com/search?q=elixir

STAR: https://elixirschool.com/en
at https://github.com/elixirschool/elixirschool

https://www.wikiwand.com/en/Mix_(build_tool)
Mix is a build automation tool that provides tasks for creating, compiling, and testing Elixir projects, managing its dependencies, and more.


## Language basics

https://elixirschool.com/en/lessons/basics

## Language Features

Shared nothing concurrent programming via message passing (Actor model)

No chance for deadlocking.

Emphasis on recursion and higher-order functions instead of side-effect-based looping.

https://serokell.io/blog/elixir-metaprogramming
use Elixir to write code that writes code.

## Octo database toolkit

Ecto is the go-to database library in the Elixir ecosystem, to interact with SQL databases such as Postgres and MySQL - inserting, validating, changing, and querying data.

See https://serokell.io/blog/ecto-guide-for-beginners


## Phoenix Framework

VIDEO: https://www.phoenixframework.org/

Previously: <a target="_blank" href="https://www.youtube.com/watch?v=bk3icU8iIto">VIDEO: "Phoenix a Web Framework for the New Web"</a> by José Valim at GOTO 2016 Conference

https://elixirschool.com/blog/now-with-more-elixir
From Jekyll to Phoenix using https://elixirschool.com/en/lessons/misc/nimble_publisher

https://serokell.io/blog/introduction-to-phoenix

https://thoughtbot.com/services/elixir-phoenix


## Challenges

https://github.com/bijanbwb/enbala_take_home

## References

<a name="[1]">[1]</a> <a target="_blank" href="https://www.youtube.com/watch?v=cWAHpvkh8Vs" title="Apr 24, 2018">VIDEO: Why Elixir Matters: A Genealogy of Functional Programming</a> by Osayame Gaius-Obaseki (<a target="_blank" href="https://github.com/osagius/">@osagius</a>)

https://www.youtube.com/watch?v=xoNRtWl4fZU
ElixirDaze 2016 - Processing 2.7 million images with Elixir (vs Ruby) by David Padilla from Confreaks

## Social

The first ElixirConf was held 2017 in Warsaw Poland.

<hr />

## More on languages #

This is one of a series on programming languages:

{% include cloud_links.html %}
