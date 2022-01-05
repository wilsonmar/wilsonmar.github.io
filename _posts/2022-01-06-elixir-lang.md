---
layout: post
title: "Elixir-lang"
excerpt: "Elixir leverages the Erlang VM (BEAM) for running low-latency, distributed, and fault-tolerant systems in web development, embedded software, data ingestion, and multimedia processing."
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

1. A famous user is Farmbot and Pepsico.

1. Open sourced at https://github.com/elixir-lang under Apache 2.0

1. See the documentary featuring José Valim, who created Elixir beginning in 2012. Also appearing are Justin Schneck, co-author of the Nerves Project, and Chris McCord, the creator of the <a target="_blank" href="https://www.wikiwand.com/en/Phoenix_(web_framework)">Phoenix Framework</a> which implements the server-side Model View Controller (MVC) pattern:

   https://cult.honeypot.io/originals/elixir-the-documentary

1. https://github.com/h4cc/awesome-elixir

1. https://github.com/topics/elixir

1. <a target="_blank" href="https://www.youtube.com/watch?v=pBNOavRoNL0">VIDEO: Elixir Tutorial</a> by Derek Banas



## Install Language

https://joyofelixir.com/a-setup-and-install

https://elixir-lang.org/install.html

* On MacOS using Homebrew:

   <pre><strong>brew install elixir</strong></pre>

* On Fedora & Ubuntu: https://gist.github.com/rubencaro/6a28138a40e629b06470


## Verify install

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

<pre>iex></pre>

## GitHub repositories

https://github.com/search?q=elixir

https://github.com/elixirschool/elixirschool

https://www.wikiwand.com/en/Mix_(build_tool)
Mix is a build automation tool that provides tasks for creating, compiling, and testing Elixir projects, managing its dependencies, and more.


## Features

https://www.wikiwand.com/en/Elixir_(programming_language)

Erlang functions can be called from Elixir, and vice versa, without run time impact, due to compilation to Erlang bytecode

Emphasis on recursion and higher-order functions instead of side-effect-based looping

Shared nothing concurrent programming via message passing (Actor model)

## Phoenix 

https://thoughtbot.com/services/elixir-phoenix

## Challenges

https://github.com/bijanbwb/enbala_take_home

## References


<hr />

## More on cloud #

This is one of a series on cloud computing:

{% include cloud_links.html %}
