---
layout: post
title: "Make (from) Makefile"
excerpt: "How the venerable utility is used in Jenkins and GoCD to invoke shell commands around building Docker images for Kubernetes"
tags: [devops, Docker, bash, programming]
Categories: Devops
date: "2020-01-19"
file: "make-makefile"
image:
# make-makefile-1900x500.png 
  feature: https://user-images.githubusercontent.com/300046/72960801-4749c280-3d6c-11ea-8be0-c5581ab95a19.jpg
  credit: everydayhealth.com
  creditlink: https://www.everydayhealth.com/type-2-diabetes/why-does-type-2-diabetes-make-you-feel-tired/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

NOTE: This page is still actively under construction.

The contribution of this article is the logical ordering of concepts presented in a succinct way, as a hands-on narrated scenic tour.

A Makefile contains a set of <strong>directives</strong> which the <strong>"make"</strong> program reads to automate compilation of source code (such as C and java) into binary files (such as class and jar object files).

There is an "mk" program that offers a light version of make.

## Install locally on macOS

1. Install on macOS using Homebrew:

   <pre><strong>brew install make</strong></pre>

   In the response, notice that make is installed for a specific version of macOS:

   <pre>Downloading https://homebrew.bintray.com/bottles/make-4.3.mojave.bottle.tar.gz</pre>

   That means after installed a new version of macOS, upgrade the program.

   If it's already installed, upgrade it:

   <pre><strong>brew upgrade make</strong></pre>

1. Now your make program should behave as defined in the latest version of the documentation in a pdf at:

   <a target="_blank" href="https://www.gnu.org/software/make/manual/make.pdf">https://www.gnu.org/software/make/manual/make.pdf</a>

   At time of writing in January 2020, the 299 manual is for GNU make version 4.3.

   Notice GNU make is published by the Free Software Foundation.

1. For some reason, as of this writing, the version is inextricably reported as "GNU Make 3.81" (not the "4.3" installed) in:

   <pre><strong>make --version</strong></pre>

   <pre>GNU Make 3.81
Copyright (C) 2006  Free Software Foundation, Inc.
This is free software; see the source for copying conditions.
There is NO warranty; not even for MERCHANTABILITY or FITNESS FOR A
PARTICULAR PURPOSE.
&nbsp;
This program built for i386-apple-darwin11.3.0
   </pre>

   The history of versions is at <a target="_blank" href="http://git.savannah.gnu.org/cgit/make.git">http://git.savannah.gnu.org/cgit/make.git/refs/tags</a>. The first version was over 32 years ago (in the 1970's), used to build C and the Linux kernel.

   Bugs in make source are reported and managed at <a target="_blank" href="http://savannah.gnu.org/projects/make/">http://savannah.gnu.org/projects/make</a>
   

   ## Executing make

1. Navigate to a folder that doesn't contain a Makefile.

   <pre><strong>make</strong></pre>

   The message:

   <pre>make: *** No targets specified and no Makefile found.  Stop.</pre>

   "targets" are executable or object <strong>files</strong> to be made by the program. 

1. Navigate to a folder containing a Makefile. 

1. Executing the make program without a parameter causes the program to process a file specifically named "Makefile" (usually with the capital M) in the same directory folder where the program is invoked.

   <pre><strong>make</strong></pre>

   ### Multiple make files

1. If you create more than one Makefile, create a different directory to store each or specify the specific Makefile name:<a href="#[5]">[5]</a>

   <pre><strong>make -f Makefile1</strong></pre>

1. For a full list of options:

   <pre><strong>man make</strong></pre>

   At the ":" prompt, type q to quit out.

1. Edit the sample makefile.

   ## Comments about usage

   <strong>#</strong> (pound characters) mark the beginning of comments, such as these comments about options to invoke make to process a particular Makefile:

   <pre># Usage:
\# make        # compile all binary
\# make clean  # remove ALL binaries and objects
\# Run on GNU bash, version 5.0.11(1)-release (x86_64-apple-darwin18.6.0)
   </pre>

   If no parameters are specified, all targets are performed.


   ## Rules, recipies, actions, variables

   In the above comment, "clean" refers to a set of <strong>rules</strong> located at the bottom of the Makefile:

   <pre>clean:
        @echo "Cleaning up..."
        rm -rvf *.o $\{BINS}
   </pre>

   The colon (:) and the positioning in column 1 on the line defines what is called a <strong>"target"</strong> under where coding for it is defined.

   Lines under each target are called a <strong>recipe</strong> consisting of <strong>action lines</strong> to achieve its rule. 

   PROTIP: Make requires that each action line be indented using a <strong>tab</strong>, which is usally 4 characters, but can be more if configured that way.

   BTW Make has some built-in variables such as "$(RM)" that takes the place of "rm -f" to remove files in a -forced way. Its use enables RM to be redefined with other parameters, such as "-rvf". Use of variables for commands enable a single file to server multiple platforms. For example, "$(CC)" is the gcc program in one platform but some other program on another platform.


   ## Shell version

   Some call Make a kinda shell extension.

   Action lines are typically shell script commands such as echo, rm (remove), etc.

   PROTIP: Some shell commands are specific to specific versions of the shell program (such as Bash version 4). A Makefile that works well in one shell may not execute properly in another shell. So it helps if the shell assumed being used is part of the comments at the top of the file.

1. Get the version of Bash to paste as your Makefile's comment line:

   <pre><strong>bash --version</strong></pre>

   ## Context consistent

   PROTIP: The big difference between how Makefiles run vs. a Bash script is that in a Makefile, each action is evaluated from the same folder. When a cd is issued within an action, the next action does not operate from the changed directory. So put commands for another directory behind a semi-colon on the same line after the cd.

   ## Docker example

   <pre>login:
	docker login -u="${USERNAME}" -p="${PASSWORD}" $(REGISTRY)
&nbsp;
logout:
	docker logout $(REGISTRY)
   </pre>

   Variables between <strong>curly braces</strong>, such as "USERNAME" and "PASSWORD" above, are <strong>environment</strong> variables.

   Replacement operations "$(REGISTRY)" with <strong>parentheses</strong> are defined instead of hard-coded text to avoid typos - to ensure that values are the same when referenced different times.


   ## Simply expanded variable

   The Make program begins by parsing through the Makefile to create an internal <strong>dependency tree</strong> before taking whatever action is necessary.

   Variable assignment code near the top of the Makefile use the <strong>:=</strong> operator to define what are called "simply expanded variables" to associate with the text indicated. The operator is used to avoid infinite loops when referenced <a href="#[2]">[2]</a>. This is in contrast to the "==" recursive expansion which first expands variables inside<a href="#[11]">[11]</a>

   So this code:

   <pre>BUILD_BASE := tags/
TAGS := $(shell ls $(BUILD_BASE))
   </pre>

   after parsing has the variable TAGS to contain <tt>shell ls tags/</tt> which, when executed, yields a list of tags. Thus,

   `$(TAGS)` can stand in for several items processed by the rule:

   <pre>$(TAGS):
	docker build -t $(REGISTRY)/$(DOCKER_IMAGE):$(@) -f $(BUILD_BASE)$(@)/Dockerfile --build-arg OWNER=$(OWNER) .
   </pre>

   ## Include another file

   The variable <tt>OWNER</tt> above is defined in the file included, by this command, which enable lines in another file to be inserted.

   <pre>include metadata.make</pre>

   The file is located where the agent processing the file is located. ???

   ## Phony targets

   Historically, the make program was created to automate compilation of source code (such as C and java) into executables (such as class and jar files). So rules handle files.

   But it is not necessary for the target to be a file; it could be just a name for the recipe, as in our example. We call them "phony targets."

   <strong>A phony target is one that is not really the name of a file</strong>. Rather, it is just a name for a <strong>recipe</strong> to be executed when you make an explicit request. There are two reasons to use a phony target: to avoid a conflict with a file of the same name, and to improve performance.<a href="#[10]">[10]</a>

   Declare Phony targets by a line such as:

   <pre>.PHONY: login logout scan $(TAGS) $(addsuffix .scan, $(TAGS)) $(addsuffix .push, $(TAGS))
   </pre>

   PROTIP: Not all targets are actually executed. Individual targets (such as .push) can be invoked or not.

   ## File Globbing

   A big reason for needing to use a Makefile is to iterate through several similar files specified by wildcard symbols. In this sample:<a href="#[6]">[6]</a>

   <pre>CC=gcc
WFLAGS=-Wall
OBJ=project.o test.o
Exec: $(OBJ)
       $(CC) -o $@  $^ $(WFLAGS)
%.o: %.c
       $(CC) -o $@  -c $< $(WFLAGS)
   </pre>

   `$^` refers to the filenames of all dependencies. It is one of the "automatic variables" defined with a dollar sign.

   The .o files depend on the .c files. So, to generate the .o file, represented by the `$@` automatic variable which stands in for the filename of the target, Make needs to first -compile the first dependency (prerequisite) file, represented by `$<`.

   Ohter Automatic variables:

   `$(@)` refers to the target file above the action line using it.

   `$*` refers to the target filename without suffix.

   `$?` refers to the prerequisite files with changes.


   ## Stops on error 

   Unless directed otherwise, make stops when it encounters an error during the construction process. That is why make is used within CI/CD processing within Jenkins, GoCD, etc.

   The objective of the whole file is to build a Docker image and push into a Docker Registry:

   <pre>$(addsuffix .push, $(TAGS)):
	docker push $(REGISTRY)/$(DOCKER_IMAGE):$(basename $(@))
   </pre>

   BTW `basename` is a built-in Linux command that returns the path without but not the filename after the last slash in the path.

   However, that is not invoked if any rules above that fails, such as when vulnerabilities are found while processing this rule:

   <pre>$(addsuffix .scantrivy, $(TAGS)):
	docker run --rm -v /var/run/docker.sock:/var/run/docker.sock \
    	-v trivy_db:/root/.cache/ $(TRIVY_SCANNER) $(REGISTRY)/$(DOCKER_IMAGE):$(basename $(@))
   </pre>

   The docker run command references the Dockerfile in the same folder.

   PROTIP: <strong>/var/run/docker.sock</strong> is the Unix socket file the Docker daemon listens on by default. It is used to communicate with the Docker container by commands such as this to start a container inside Docker:<a href="#[4]">[4]</a>

   <pre>docker run -v /var/run/docker.sock:/var/run/docker.sock -ti alpine sh
   apk update && apk add curl
   curl -XPOST --unix-socket /var/run/docker.sock http://localhost/events
   </pre>

   PROTIP: Note: Bind mounting the Docker daemon socket gives a lot of power to a container as it can control the daemon. It must be used with caution, and only with containers we can trust.


   ## Target Dependencies

   Each target rule has two parts: 

   <tt>RULE:	DEPENDENCY LINE<br />
	[tab]ACTION LINE(S)</tt>

   The first line is called a <strong>"dependency line"</strong>.

   Each dependency line is made of two parts.

   <tt>DEPENDENCY LINE:					TARGET FILES: 	SOURCE FILES</tt>

   The first part (before the colon) are target files and the second part (after the colon) are called source files. It is called a dependency line because the first part depends on the second part. 

   Make uses spaces as delimiters between items.

   Multiple target files must be separated by a space. 

   Multiple source files must also be separated by a space.


   ## Processing dependencies

   Makes does not necessarily process all rules in the Makefile as all dependencies may not need updating. Make rebuilds only target files which are missing or older than dependency files.
   It can do that because it keeps track of the last time files (normally object files) were updated. 

   ??? If you have a large program with many source and/or header files, when you change a file on which others depend, you must recompile all the dependent files. Without a Makefile, this is a very time-consuming task.


## Make file Linting

There is an "experimental" linter for Makefiles at https://github.com/mrtazz/checkmake

1. Install the linter's dependency:

   <pre><strong>brew install pandoc
   brew install go</strong></pre>

1. Use Golang to clone the repo in the $GOPATH ($/gopkgs):

   <pre><strong>go get github.com/mrtazz/checkmake
   cd $GOPATH/src/github.com/mrtazz/checkmake
   </strong></pre>

1. build the binary and man page yourself:

   <pre><strong>make
   </strong></pre>

   WARNING: This is not working for me.

1. Perform linting

   <pre><strong>cd <em>location of Makefile</em>
   checkmake Makefile
   </strong></pre>

1. TODO: Add linting to kick off on Git commit.

## References

<a name="[1]">[1]</a> <a target="_blank" href="https://www.gnu.org/software/make/manual/make.pdf">https://www.gnu.org/software/make/manual/make.pdf</a> is the canonical definition, make version 4.3 as of January 2020.

<a name="[2]">[2]</a> <a target="_blank" href="https://opensource.com/article/18/8/what-how-makefile" title="22 Aug 2018">"What is a Makefile and how does it work?"</a> by Sachin Patil (Red Hat)

<a name="[3]">[3]</a> <a target="_blank" href="https://www.slideshare.net/zakariaelktaoui/how-to-make-a-simple-make-file">https://www.slideshare.net/zakariaelktaoui/how-to-make-a-simple-make-file<br />Introduction to Makefile</a> by <a target="_blank" href="https://about.me/ZakariaElktaoui">Zakaria El ktaoui</a>, Consultant SAP SuccessFactors chez Value Pass Consulting

<a name="[4]">[4]</a> <a target="_blank" href="https://medium.com/better-programming/about-var-run-docker-sock-3bfd276e12fd">https://medium.com/better-programming/about-var-run-docker-sock-3bfd276e12fd<br />Docker Tips : about /var/run/docker.sock</a>

<a name="[5]">[5]</a> <a target="_blank" href="https://getintodevops.com/blog/the-simple-way-to-run-docker-in-docker-for-ci">https://getintodevops.com/blog/the-simple-way-to-run-docker-in-docker-for-ci<br />The simple way to run Docker-in-Docker for CI</a>

<a name="[6]">[6]</a> http://www.cs.colby.edu/maxwell/courses/tutorials/maketutor/

<a name="[7]">[7]</a> https://scene-si.org/2019/12/04/make-dynamic-makefile-targets/

<a name="[8]">[8]</a> <a target="_blank" href="https://www.youtube.com/watch?v=ph0k7nOS52g&list=PLNmACol6lYY7Dzvg7jKgvMdDaDEDFnNqD">
VIDEO: Makefile Tutorials</a> Mar 7 2017

<a name="[9]">[9]</a> <a target="_blank" href="https://www.youtube.com/watch?v=Lyp36ku7D0A&list=PLO2HJg02JezdHg7pFoQT_eG4qnKsERazL">Makefile Youtube playlist</a>

<a name="[10]">[10]</a> <a target="_blank" href="https://www.gnu.org/software/make/manual/html_node/Phony-Targets.html">Gnu make documentation</a>

<a name="[11]">[11]</a> <a target="_blank" href="https://www.youtube.com/watch?v=dqflr7_TqQ8&time=1m40s">"Intermediate Project Management with GNU Make"</a>

<a name="[12]">[12]</a> <a target="_blank" href="https://en.wikipedia.org/wiki/Makefile">Wikipedia: Makefile</a>

<a name="[13]">[13]</a> <a target="_blank" href="https://www.cs.swarthmore.edu/~newhall/unixhelp/howto_makefiles.html">Using make and writing Makefiles</a>

POSIX standard?


<hr />

## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
