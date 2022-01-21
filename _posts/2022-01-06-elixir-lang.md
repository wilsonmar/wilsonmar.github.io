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

This is a hands-on tutorial to provide you a deep yet succinct introduction sequenced in logical order for fastest learning. "PROTIP" tags identify items which are not in most other sites.

1. <a target="_blank" href="https://elixir-lang.org/">https://elixir-lang.org</a> is the marketing home page for the Elixir language.

   Famous users of Elixir mentioned on the Elixir home page are Farmbot and Pepsico. 

   * https://serokell.io/blog/elixir-companies
   * https://serokell.io/blog/elixir-in-production

   Elixir was created after Go and Rust.

   The website is built using Jekyll at<br />
   <a target="_blank" href="https://github.com/elixir-lang/elixir-lang.github.com">https://github.com/elixir-lang/elixir-lang.github.com</a> 

1. Elixir is open sourced under Apache 2.0 license at<br /><a target="_blank" href="https://github.com/elixir-lang/elixir/">https://github.com/elixir-lang/elixir</a> 
   * 668 watchers and 19.7k stars as of Jan 5, 2021

   * Among <a target="_blank" href="https://github.com/elixir-lang/elixir/graphs/contributors">1,100 contributors</a> is José Valim, who created Elixir beginning in 2012, and continues to be a active author. <a target="_blank" href="https://www.youtube.com/c/SEKUNHO/videos">Jose's YouTube</a>

   * <a target="_blank" href="https://github.com/elixir-lang/elixir/pulse">15 authors</a>
   * 1,950,000,000 downloads
   <br /><br />

1. https://github.com/elixir-lang/elixir/wiki

1. See the 12-minute documentary featuring: Jose Valim; Justin Schneck, co-author of the <a href="#Nerves">Nerves framework</a>; and [at 9:13] <a target="_blank" href="https://twitter.com/chris_mccord">@Chris_McCord</a>, creator of the <a target="_blank" href="https://www.wikiwand.com/en/Phoenix_(web_framework)">Phoenix Framework</a>

   * https://www.youtube.com/watch?v=lxYFOM3UJzo
   * https://cult.honeypot.io/originals/elixir-the-documentary
   * https://elixircasts.io/getting-started-with-phoenix
   <br /><br />

1. <a target="_blank" href="https://www.youtube.com/watch?v=pBNOavRoNL0">VIDEO: Elixir Tutorial</a> by Derek Banas

> Elixir and Erlang compile to the same bytecode.


## Erlang VM (BEAM) users

   * https://www.wikiwand.com/en/Elixir_(programming_language)
   * https://github.com/membraneframework/beamchmark
   <br /><br />

BEAM for Erlang is like JVM for Java.

WhatsApp is using it. Also Pinterest. "Almost all telecoms"?

Erlang BEAM runs backbone switches with 500-600 gigabits throughput per each in eighties with like 10-20 milliseconds of downtime per year. They actually originally written software for those switches in C++ (few years of hundreds of devs work) but it crashed with like few dozen simultaneous calls, so that project was a huge failure and then <a target="_blank" href="https://www.wikiwand.com/en/Joe_Armstrong_(programmer)">Joe Armstrong</a>'s team of THREE devs written software in Erlang in few months and it was huge success. It was basically the first production-level implementation of CSP actor model concurrency.

Any Erlang thread can push code to any node in the mesh.

https://github.com/llaisdy/beam_languages
There are 33 languages on the BEAM!

https://news.ycombinator.com/item?id=27684045
stressgrid benchmarks

<a target="_blank" href="https://www.youtube.com/watch?v=zL2wcqS78UA">
VIDEO: Why We've Adopted Elixir</a> by Pusher

https://serokell.io/blog/elixir-in-production-glific

https://github.com/0xAX/erlang-bookmarks/blob/master/ErlangBookmarks.md
List of websites about Erlang

<hr />

## Installs

This section is based on:
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

   * <a target="_blank" href="https://www.youtube.com/watch?v=antnsMgA4Ro">VIDEO</a>:
   * <a target="_blank" href="https://pragprog.com/titles/jgotp/designing-elixir-systems-with-otp/">BOOK: "Designing Elixir Systems with OTP: Write Highly Scalable, Self-Healing Software with Layers" December 2019 by James Edward Gray, II and Bruce A. Tate

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

   ### IEX (Interpreted Elixir)

1. You'll see the same version by invoking the Interactive Elixir console:

   <pre><strong>iex</strong></pre>

   <pre>Erlang/OTP 24 [erts-12.2] [source] [64-bit] [smp:8:8] [ds:8:8:10] [async-threads:1] [jit] [dtrace]
&nbsp;
Interactive Elixir (1.13.1) - press Ctrl+C to exit (type h() ENTER for help)
iex(1)> _
   </pre>

CAUTION: If you are connected to a <strong>compromised distributed node</strong>, your computer can then run code on YOUR PC (to view your private files, steal SSH keys, etc.).  That can occur via remote shell option <tt>iex \-\-remsh</tt> or <tt>\-\-sname</tt>


### OTP from Erlang

PROTIP: The "OTP" in "Erlang/OTP 24" version name stands for "Open Telecommunications Platform". Telecommunications because the Erlang library was developed by the Swedish telecommunications company Ericsson in the 1990's.
   
   PROTIP: Erlang OTP version 24 adds a JIT compiler. It only runs on x64 but should significantly improve performance on that platform. For some workloads people are reporting as much as a 40% improvement. I would expect to see some improvement in those benchmarks as a result.

   OTP 25 plans to have JIT support for ARM64 (on AWS Gravator servers).

   * https://serokell.io/blog/elixir-otp-guide
   <br /><br />

OTP is set of tools and libraries that Elixir inherits from Erlang, a programming language on whose VM it runs.

OTP contains the <strong>Erlang</strong> compiler, databases, test framework, profiler, debugging tools. But, when <strong>Alchemists</strong> (developers program in Elixir) talk about OTP in the context of Elixir, they usually mean the Erlang <strong>actor model</strong> that is based on lightweight processes that make Elixir so efficient.

An Erlang process is much lighter than an operating system's threads and processes.

> "Elixir is synatactic sugering on Erlang"<a href="#[1]">[1]</a>

Erlang functions can be called from Elixir, and vice versa, without run time impact, due to compilation to Erlang bytecode.

   * As part of https://elixir.libhunt.com/ "Awesome Elixir", Elixir utilities: https://elixir.libhunt.com/categories/935-utilities


### ASDF to manage Elixir and Erlang versions

Thus, many Elixir projects require a correspondence between the Elixir and Erlang runtime versions.

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

   https://medium.com/@marcelo_lebre/a-tale-of-three-kings-e0be17a16e2b
   compared Python/Flask, Go, and Elixir (with plug and cowboy) and concluded "Go might be best for processing, Elixir for I/O intensive services, and Python for more mainstream scenarios."

   https://www.researchgate.net/publication/326165107_Comparing_languages_for_engineering_server_software_erlang_go_and_scala_with_akka


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

   ### Security vulnerabilities

1. View the list of security vulnerabilities identified:

   http://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=elixir

   https://vulmon.com/searchpage?q=elixir

   
   ### Install ASDF version manager

1. Install Erlang:

   <pre><strong>asdf install erlang 24.2</strong>

   In the sample response, there may be messages during the installation about omitted modules, which will not affect the rest of the runtime.

   Erlang compiles modules based on the available libraries from your system. For example, some features (such as the built-in observer) require <tt>wx</tt> libraries. 

   CAUTION: Usage of <tt>:observer.start</tt> REQUIRES use of the cookie-based node system.

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


### Have mix install dependencies

At last count (Jan 2022), there were 11,500 packages on <a target="_blank" href="https://www.hex.pm">hex.pm</a>, the package manager for Erlang.
   
   Mix is like Ruby's RubyGems, Bundler, and Rake combined (for dependency management).

   NOTE: A ".mix" folder is created within your user $HOME folder.

See https://elixirschool.com/en/lessons/basics/mix

Mix dependencies as two-item tuples like {:plug, "~> 1.1.0"}

1. Install 

   <pre><strong>mix deps.get</strong></pre>

   Example response:

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

1. Create a Mix project for a new app:
   https://elixirschool.com/en/lessons/basics/documentation#exdoc-4

   <pre>mix new hello_world</pre>

1. To identify vulnerabilities, see 

   https://snyk.io/blog/secure-elixir-development-with-snyk/

   ### Get sample code in GitHub

1. See a list of all repos on GitHub:

   https://github.com/topics/elixir

1. In the list of libraries containing code samples:

   <a target="_blank" href="
   https://github.com/h4cc/awesome-elixir">
   https://github.com/h4cc/awesome-elixir</a>

   There is this:

1. Get the "Learn with me" repo github.com/Maultasche/LwmElixirCode before starting from the first of Kevin Peter's 82 learning diary entries on <a target="_blank" href="https://inquisitivedeveloper.com/lwm-elixir-1/">The Inquisitive Developer</a>:

   <pre><strong>git clone git@github.com:Maultasche/LwmElixirCode.git --depth 1
   cd LwmElixirCode</strong></pre>

1. Navigate to the lib folder:
   
   Like Python and Javascript, Elixir is a dynamically-typed language, where data types can be determined at run time rather than compile time.

   ### Invocation

   <a target="_blank" href="https://stackoverflow.com/questions/36292620/elixir-when-to-use-ex-and-when-exs-files">REMEMBER</a>: <strong>Compiled</strong> Elixir source code files have extension of <strong>.ex</strong> for the application's main business logic, invoked using <tt>iex app.ex</tt>. 
   
   <strong>.exs</strong> file extension are for <strong>interpreted</strong> code. Test specification files have extension of .exs (containing assert commands), invoked using <tt>elixir test.exs</tt>.

   Again, .ex is for compiled code, .exs is for interpreted code.

   https://elixirschool.com/en/lessons/basics/iex_helpers#iexexs-2
   Every time IEx starts it will look for a configuration file named <tt>.iex.exs</tt> in the current directory or the user’s $HOME directory as the fallback.

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

<hr />

## GitHub repositories

https://github.com/search?q=elixir

STAR: https://elixirschool.com/en
at https://github.com/elixirschool/elixirschool

https://www.wikiwand.com/en/Mix_(build_tool)
Mix is a build automation tool that provides tasks for creating, compiling, and testing Elixir projects, managing its dependencies, and more.

Weather app


<hr />

## Hello World Interactive

The Greetings.ex program in Elixir defines two nested modules:

* String concatenation uses the <> operator:

   <pre>iex> name = "Sean"
iex> IO.puts("Hello " <> name )
"Hello Sean"
   </pre>


<pre>defmodule Greetings do
  @moduledoc """                # attribute
  Example of basic language features
  """
  def morning(name) do
    "Good morning, #{name}"  # string interpolation is like in Ruby
    IO.puts("Hello " <> ${name} )  # <> concatenates
  end
end
   </pre>

To execute within Elixir's interactive mode:

<pre><strong>iex</strong></pre>

<pre>iex> <strong>Greetings.morning "Joe"</strong></pre>

The response:

<pre>"Good morning, Joe"</pre>

## Language Features

<a target="_blank" href="https://www.youtube.com/watch?v=gom6nEvtl3U">VIDEO</a>: "Elixir: The only Sane Choice in an Insane World" by Brian Cardarella at GOTO 2017

<a target="_blank" href="https://www.youtube.com/watch?v=OcExABAAsXs">"Why We Chose Erlang over Java, Scala, Go, C"</a> at InfoQ


<a target="_blank" href="https://elixirschool.com/en/lessons/basics/basics#trying-interactive-mode-2">https://elixirschool.com on basics</a>
covers the subject so succinctly. Some notable features:

* <strong>Sigils</strong>, which are prefixed with a tilde "~", is Elixir's way of handling literals. https://elixirschool.com/en/lessons/basics/sigils

   <pre>iex> Date.utc_today
~D[2028-12-31]
&nbsp;
iex> t = Time.utc_now
~T[19:39:31.056226]
&nbsp;
iex> t.hour
19
&nbsp;
   </pre>

   https://elixirschool.com/en/lessons/basics/date_time

* Elixir supports Perl Compatible Regular Expressions (PCRE), so "i" can be appended to the end of a sigil to turn off case sensitivity.

* An <strong>atom</strong> is a constant (what Ruby calls symbol) whose name is a colon and its value:

   <pre>iex> :true === true
true
   </pre>

   <a target="_blank" href="https://www.youtube.com/watch?v=w3lKmFsmlvQ&t=6m42s">CAUTION</a>: Atoms are not garbage collected, so can be a vector for denial of service attacks.

* Atoms are used to reference <a target="_blank" href="https://elixirschool.com/en/lessons/basics/modules">modules</a> from Erlang libraries (including built in ones):

   <pre>@doc Using crypto library:
:crypto.strong_rand_bytes 3
&LT;&LT;23, 104, 108>>
   </pre>

* List concatenation:

   <pre>iex> [1, 2] ++ [3, 4, 1]
[1, 2, 3, 4, 1]
&nbsp;
iex> [1] -- [3, 4, 1]
[2, 3, 4, 1]
   </pre>

* "++/2" describes the function as having an <strong>Arity</strong> of 2 arguments. To list built-in modules and their Arity:

   <pre>iex> Map.  # press Tab
delete/2             drop/2               equal?/2             
fetch!/2             fetch/2              filter/2             
from_struct/1        get/2                get/3                
get_and_update!/3    get_and_update/3     get_lazy/3           
has_key?/2           keys/1               map/2                
merge/2              merge/3              new/0                
new/1                new/2                pop!/2               
pop/2                pop/3                pop_lazy/3           
put/3                put_new/3            put_new_lazy/3       
reject/2             replace!/3           replace/3            
split/2              take/2               to_list/1            
update!/3            update/4             values/1        
   </pre>

* Import List to use its "last" and "first" (item) functions:

   <pre>iex> import List
nil
iex> first([1, 2, 3])
1
iex> last([1, 2, 3])
3
   <pre>

* Use <a target="_blank" href="https://elixirschool.com/en/lessons/basics/comprehensions">List comprehension</a> - square root generator:

   <pre>iex> list = [1, 2, 3, 4, 5]
iex> for x <- list, do: x*x
[1, 4, 9, 16, 25]
   </pre>

* Keyword list:

   <pre>iex> for {_key, val} <- [one: 1, two: 2, three: 3], do: val
[1, 2, 3]
   </pre>

* From a keyword list create into a map:

   <pre>iex> for {k, v} <- [one: 1, two: 2, three: 3], into: %{}, do: {k, v}
%{one: 1, three: 3, two: 2}
   </pre>

* Maps are unordered keyword lists:

   <pre>iex> map = %{:foo => "bar", "hello" => :world}
%{:foo => "bar", "hello" => :world}
&nbsp;
iex> %{map | foo: "baz"}
%{foo: "baz", hello: "world"}
&nbsp;
iex> map[:foo]
"bar"
&nbsp;
iex> key = "hello"
"hello"
&nbsp;
iex> %{key => "world"}
%{"hello" => "world"}
&nbsp;
iex> map.hello
"world"
   </pre>

See 
* https://elixirschool.com/en/lessons/basics/enum
* https://elixirschool.com/en/lessons/basics/pattern_matching
* https://elixirschool.com/en/lessons/basics/control_structures
* https://elixirschool.com/en/lessons/basics/functions
* https://elixirschool.com/en/lessons/basics/pipe_operator is <tt>|></tt>

## Logging

Elixir 1.11 in 2020 completes all log levels in Erlang:

* Logger.notice
* Logger.critical
* Logger.alert
* Logger.emergency
<br /><br />

PROTIP: Catching of logging sensitive information is difficult to automate (even during Dynamic Security Testing) and thus currently require manual/team code review.

## Thread Safety

   * https://dockyard.com/blog/2021/03/30/elixir-is-safe
   <br /><br />

Like Akka, Elixir uses the "<a target="_blank" href="https://en.wikipedia.org/wiki/Actor_model">Actor Model</a>" where processes don’t share memory and communicate only with messages. Instead of sharing memory, Elixir/Erlang only passes messages. Thus, stack smashing is impossible since everything is held in the HEAP and the stack is simulated.

No chance for deadlocking.

To spawn a self-contained process thread for non-blocking IO:

<pre>IO.inspect ["Hello from process ", self()]
spawn(fn -> IO.inspect ["Hello from process ", self()] end)
</pre>


### BEAM Performance

<a target="_blank" href="https://www.griffinbyatt.com/post/analysis-plug-security-vulns">According to Griffin Byatt</a>, Erlang uses an alternative to XML, JSON, etc. by using <strong>zlib compression</strong> (<tt>:erlang.term_to_binary</tt> and <tt>:erlang.binary_to_term</tt>) to serialie data to binary before sending it over the wire or saving it in files, which may be vulnerable to "binary zip bombs" which can consume more memory than the app has. So vigilence is necessary.

See https://www.toptal.com/back-end/server-side-io-performance-node-php-java-go


## Testing Elixir Functionality

1. Execute the test:

   <pre>mix test</pre>

   See https://elixirschool.com/en/lessons/testing/basics

1. When running a test initially, watch it step by step:

   <pre><strong>mix test.watch</strong></pre>

   <a target="_blank" href="https://www.amazon.com/Testing-Elixir-Andrea-Leopardi-ebook-dp-B09CT1J4P6/dp/B09CT1J4P6">$40 BOOK</a>: https://pragprog.com/titles/lmelixir/testing-elixir/
   "Testing Elixir: Effective and Robust Testing for Elixir and its Ecosystem" by Andrea Leopardi and Jeffrey Matthias
   (Pragmatic Bookshelf, July 2021)
   "Create and structure a comprehensive ExUnit test suite, starting from the basics, and build comprehensive test coverage that will provide safety for refactoring and confidence that your code performs as designed. Explore testing Elixir-specific challenges such as OTP-based modules, asynchronous code, Ecto-based applications, and Phoenix applications."

1. Press <strong>control + C</strong>

   <pre>BREAK: (a)bort (A)bort with dump (c)ontinue (p)roc info (i)nfo
       (l)oaded (v)ersion (k)ill (D)b-tables (d)istribution
   </pre>

1. Craft ExUnit tests

   ExUnit is Elixir's official unit testing framework -- maintained by the Elixir team and shipped with Elixir, so you don't have to install anything additional.


## Language Features

Elixir/Erlang aims for predictable behavior that operates gracefully under extreme circumstances.

Emphasis on recursion and higher-order functions instead of side-effect-based looping.

Elixir is a functional language, which means lazy evaulation, pattern matching, and "higher-order" functions which can receive and output a function as well as data.

Elixir uses <a target="_blank" href="https://www.erlang.org/doc/tutorial/nif.html">Erlang NIF's</a> (Native Implemented Functions) to bring in C or Rust to compute heavy math.

Elixir was designed from the ground up for fault tolerance. Unlike Go, the entire Go program goes down when a goroutine crashes. In Elixir, whenever a process dies, only that single process dies, without affecting the rest of the program. Even better, the failed process will get restarted automatically by its supervisor. This allows the failed process to retry the operation that has failed.[5]

Robustness is achieved by supervisors which monitor Elixir processes and restart them when they crash.


<a name="Phoenix"></a>

## Phoenix Framework

<a target="_blank" href="https://elixircasts.io/getting-started-with-phoenix">VIDEO: Getting Started with Phoenix</a> to bootstrap a web app.

VIDEO: https://www.phoenixframework.org/

Previously: <a target="_blank" href="https://www.youtube.com/watch?v=bk3icU8iIto">VIDEO: "Phoenix a Web Framework for the New Web"</a> by José Valim at GOTO 2016 Conference.

Out of the box, Phoenix supports WebSockets, routing, HTML templating language, internationalization, JSON encoders/decoders, seamless ORM integration(Ecto), sessions, SPA toolkit, and a lot more.[5] 

https://elixirschool.com/blog/now-with-more-elixir
From Jekyll to Phoenix using https://elixirschool.com/en/lessons/misc/nimble_publisher

Phoenix implements the server-side Model View Controller (MVC) pattern.

https://serokell.io/blog/introduction-to-phoenix

<a target="_blank" href="https://www.youtube.com/watch?v=42k70Y-yTYY&t=6m24s" title="Unauthorized Erlang: A Demonstration by  ">CAUTION: <strong>"Don't put BEAM on a public network, ever. Ericsson is not going to fix it".</strong></a> said <a target="_blank" href="https://www.linkedin.com/in/donabailey/">Don A. Bailey</a> in 2017. (In distributed Phoenix/Erlang, monotonic timers are used to auto-generate cookies based on host uptime (nmap). Cookies are converted to an atom.) 

<a target="_blank" href="https://www.youtube.com/watch?v=42k70Y-yTYY&t=6m24s" title="Unauthorized Erlang: A Demonstration by  ">VIDEO description of exploit</a> was <a target="_blank" href="https://andreiclinciu.net/erlang-elixir-node-security-flaws">pointed out</a> by <a target="_blank" href="https://www.linkedin.com/in/andrei-clinciu/">Andrei Clinciu</a>.

PROTIP: So setup Erlang with TLS/SSL with certificates and public key encryption, as <tt>epmd</tt> may still talk UNENCRYPTED.

And setup a firewall that blocks everything unless specifically allowed.

<a target="_blank" href="https://github.com/dependabot/elixir-security-advisories/tree/master/packages">github.com/dependabot/elixir-security-advisories</a> is a repository of CVE security advisories filed against published Elixir packages.

<a name="Sobelow"></a>

#### Sobelow scanner

<a target="_blank" href="https://asciinema.org/a/c9utphy34c8remqlsvfbkjnf9">VIDEO</a>: 
<a target="_blank" href="https://elixircasts.io/detect-security-issues-with-sobelow">ElixirCast: Sobelow</a>
by <a target="_blank" href="https://www.griffinbyatt.com/post/analysis-plug-security-vulns">Griffin Byatt</a> is a security-focused static analysis tool to identify <a target="_blank" href="https://wilsonmar.github.io/owasp-testing/">(OWASP) vulnerabilities</a> in the Phoenix Framework.

1. <a target="_blank" href="https://www.youtube.com/watch?v=w3lKmFsmlvQ&t=29m40s" title="ElixirConf 2017 - Plugging the Security Holes in Your Phoenix Application">VIDEO: "</a>. Install <a target="_blank" href="https://github.com/nccgroup/sobelow">github.com/nccgroup/Sobelow</a>

   <pre>mix archive.install hex sobelow</pre>

1. Verify Sobelow (-compact):

   <pre>mix sobelow -v</pre>

   If you see:

   <pre>WARNING: Sobelow cannot find the router. If this is a Phoenix application
please use the `--router` flag to specify the router's location.
   </pre>

   <pre>mix sobelow --router <em>filepath</em></pre>

TOOL: https://snyk.io/blog/secure-elixir-development-with-snyk/

## Octo database toolkit

Phoenix ships with PostgreSQL as the database.

https://github.com/elixir-ecto/ecto
Ecto is the go-to database library in the Elixir ecosystem, to interact with SQL databases such as Postgres and MySQL - inserting, validating, changing, and querying data.

See https://serokell.io/blog/ecto-guide-for-beginners



<a name="LiveView"></a>

### Phoenix Liveview

In 2020 the Phoenix framework introduced LiveView to enable building of rich real-time web interfaces within Elixir (like Single-Page Applications, but with no JavaScript and React coding). Thus, more customized user experience with less complexity.

<img width="1290" alt="elixir-liveview-spa-compare-1290x530" src="https://user-images.githubusercontent.com/300046/148680900-ba1b01e8-cbf6-4537-97b1-8030e573452c.png"><br />
from <a target="_blank" href="https://www.youtube.com/playlist?list=PLqj39LCvnOWZTKJ1skrt-CUt2rNcL5pJz" title="Nov 5, 2019">VIDEO: "Phoenix LiveView for web developers who don't know Elixir"</a> says "I don't think you can implement Google Maps in LiveView".

https://elixirschool.com/blog/phoenix-live-view/

<a target="_blank" href="https://www.youtube.com/watch?v=U_Pe8Ru06fM">VIDEO</a>:
LiveView takes care of synchronizing client and server state, so you don’t have to develop and maintain a REST/GraphQL API.

<a name="[7]">[7]</a> <a target="_blank" href="http://mng.bz/qeaE">BOOK: "Phoenix in Action"</a> (Manning 2021 TWITLESS40) by <a target="_blank" href="https://www.geoffreylasse.com/">Geoffrey Lessel</a> <a target="_blank" href="https://www.youtube.com/watch?v=fyg0FuSL5DY">VIDEO</a>. From <a target="_blank" href="https://www.manning.com/books/elixir-in-action-second-edition">Manning [video]</a>

See https://www.testingliveview.com/


## Livebook

Livebook https://github.com/livebook-dev/livebook is inspired by Jupyter Notebooks and Deepnote. Like Jupyter, combining markdown with executable Elixir code blocks that let the reader not only learn from the docs but try out the system being documented right in the ReadMe.


<a name="Nerves"></a>

## Nerves Framework

Nerves is a programming framework for building <strong>embedded</strong> systems in Elixir, such as Raspberry Pi.

https://twitter.com/NervesProject

https://hexdocs.pm/nerves/installation.html

https://pragprog.com/titles/thnerves
Build a Binary Clock with Elixir and Nerves

Nerves can be used together with Phoenix:
<a target="_blank" href="https://dev.to/dasky/an-iot-birdhouse-with-elixir-nerves-phoenix-liveview-components-5cb2">
An IoT Birdhouse Picam  MJPG stream with Elixir Nerves (poncho project) & Phoenix LiveView Components (DHT GenServer)</a> at https://github.com/daskycodes/bird_app. Setup include SSH & WiFi to send snaps to a telegram chat


### Broadway

https://github.com/dashbitco/broadway
Broadway enables building of data ingestion/data processing pipelines in Elixir.

BOOK: https://pragprog.com/titles/lhelph
"Functional Web Development with Elixir, OTP, and Phoenix"
by Lance Halvorsen
(Pragmatic BookshelfJanuary 2018) 
uses Elixir version 1.5 or higher and Phoenix 1.3.


### Meta programming

Use Elixir to write code that writes code.

https://serokell.io/blog/elixir-metaprogramming

BOOK: https://pragprog.com/titles/cmelixir
Metaprogramming Elixir


## Challenges

https://github.com/bijanbwb/enbala_take_home

## Video Subcriptions

Various technical subscription service vendors stream video tutorials (view instead of Netflix, HBO, Disney+, etc.):

<a target="_blank" href="https://elixircasts.io/">https://elixircasts.io</a> $190/year for "Alchemist's Edition" paywall.

<a target="_blank" href="https://www.oreilly.com/search/?query=elixir/">OReilly.com</a> has videos and live classes as well as books from Pragmatic (for one $499 subscription).

At Pluralsight:
   * <a target="_blank" href="https://app.pluralsight.com/library/courses/elixir-big-picture">""Elixir: The Big Picture"</a> By trainer <a target="_blank" href="https://www.aj-foster.com/">AJ Foster</a> Mar 25, 2021
   * <a target="_blank" href="https://app.pluralsight.com/guides/10-essential-erlang-tools-for-erlang-developers">"10 Essential Erlang Tools for Erlang Developers"</a> Sep 06, 2019
   <br /><br />

<a target="_blank" href="https://www.udemy.com/courses/search/?src=ukw&q=elixir">Udemy.com has several courses from independent authors</a>

   * <a target="_blank" href="https://www.udemy.com/course/the-complete-elixir-and-phoenix-bootcamp-and-tutorial/">"The Complete Elixir and Phoenix Bootcamp" (17 hours)</a> - Master Functional Programming techniques with Elixir and Phoenix while learning to build compelling web applications!" by Stephen Grider, whose code for the course is different branches of https://github.com/StephenGrider/ElixirCode from 2018, with <a target="_blank" href="https://app.diagrams.net/#Hwilsonmar%2FElixirCode%2Fmaster%2Fdiagrams.xml">digrams</a>.

   * <a name="[3]">[3]</a> <a target="_blank" href="https://www.udemy.com/course/functional-programming-using-elixir-the-complete-course/">"Functional Programming using Elixir - The Complete Course"</a> (9 hours) Learn the cutting edge functional programming language Elixir and build fault tolerant software" from Eduonix Learning Solutions, Eduonix-Tech.

At time of writing, these services did not return content after a search for "elixir":

   * <a target="_blank" href="https://acloudguru.com/search?s=elixir">ACloudGuru.com</a>
   * <a target="_blank" href="https://cloudacademy.com/search/?q=elixir">CloudAcademy.com</a>
   * <a target="_blank" href="https://codeacademy.com/search/?query=elixir">CodeAcademy.com</a>
   * <a target="_blank" href="https://www.coursera.org/search?query=elixir&">coursera.com</a>
   * <a target="_blank" href="https://www.datacamp.com/search?q=elixir">datacamp.com</a>
   * <a target="_blank" href="https://www.edx.org/search?q=elixir">edx.org</a>
   * <a target="_blank" href="https://www.linkedin.com/learning/search?keywords=elixir">LinkedIn Learning</a>
   * <a target="_blank" href="https://www.udacity.com/courses/all?search=elixir">Udacity</a>
   <br /><br />


## References

<a name="[1]">[1]</a> <a target="_blank" href="https://www.youtube.com/watch?v=cWAHpvkh8Vs" title="Apr 24, 2018">VIDEO: Why Elixir Matters: A Genealogy of Functional Programming</a> by Osayame Gaius-Obaseki (<a target="_blank" href="https://github.com/osagius/">@osagius</a>)

<a name="[2]">[2]</a> <a target="_blank" href="https://www.youtube.com/watch?v=wVrnoxNbOts" title="Jul 15, 2017">VIDEO</a>: <a target="_blank" href="https://taylonr.com/talks/539-2/">"Let’s Get Functional with Elixir!"</a> by Nate Taylor</a>: "Elixir is a functional language for everyone, where I felt dumb with Haskell".

[5] https://betterprogramming.pub/modern-languages-suck-ad21cbc8a57c
compares aspects for each language. by Ilya Suzdalnitski, Senior Elixir engineer.

https://pragprog.com/categories/elixir-phoenix-and-otp/

BOOK: "Elixir in Action, Second Edition"
by Sasa Juric
(Manning, February 2019)
"teaches you how to build production-quality distributed applications using the Elixir programming language. Author Saša Juric introduces this powerful language using examples that highlight the benefits of Elixir’s functional and concurrent programming."


## Social

DOTHIS: Sign up for: <a target="_blank" href="http://elixirforum.com/">http://elixirforum.com</a>

https://twitter.com/hashtag/myelixirstatus
https://twitter.com/elixirlang
https://twitter.com/elixir_radar

The first <a target="_blank" href="https://www.elixirconf.com/events">ElixirConf</a> was held 2017 in Warsaw Poland. SUBSCRIBE.

   * <a target="_blank" href="https://www.youtube.com/c/ElixirConf/playlists">ElixirConf playlist</a>
   <br /><br />

<a target="_blank" href="https://www.youtube.com/watch?v=xoNRtWl4fZU">
VIDEO: ElixirDaze 2016 - Processing 2.7 million images with Elixir (vs Ruby)</a> by David Padilla from Confreaks


## Jobs

https://www.indeed.com/jobs?q=elixir&l=Remote

https://www.linkedin.com/jobs/search/?geoId=103644278&keywords=elixir&location=United%20States

https://bendyworks.com/#what-we-do

DockYard

https://thoughtbot.com/services/elixir-phoenix



<hr />

## More on languages #

This is one of a series on programming languages:

{% include cloud_links.html %}