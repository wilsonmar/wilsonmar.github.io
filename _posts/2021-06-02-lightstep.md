---
layout: post
title: "lightstep (with OpenTelemetry)"
excerpt: "How to get proactive health metrics for managing cloud-native applications quicker, with less toil"
tags: [DevSecOps]
date: "2021-06-02"
file: "lightstep"
image:
# pic silver robot white skin handshake 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/14622149/306629f0-0585-11e6-961a-dc8f60dadbf6.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This is a hands-on tour of how cloud-native applications getting more proactive health metrics, faster, with less work. The contribution of this write-up is a logically presented and deep yet succinct tutorial that incorporates many of the videos and documentation about the subject. Commentary along the way include "NOTE" and "PROTIP" flags to hard-won advice available no where else, without the marketing generalities. 

{% include whatever.html %}

The objective here is to enable you to says "hell yeah" in job interviews:
   * Possesses expertise designing, analyzing, and troubleshooting large-scale distributed systems.
   * Takes a system problem-solving approach
   <br /><br />

Lightstep’s <strong>observability platform</strong> provides intuitive GUI <strong>dashboards</strong> that distill actionable insight about apps instrumented by logs, errors, exceptions, metrics, and traces.

Lightstep’s Change Intelligence answers the question “What caused that change in measured values?”.

![otel-layers-verticals-1444x626](https://user-images.githubusercontent.com/300046/127775661-064efda4-0ec6-404b-9de2-50b39da18011.png)



Lightstep provides a "back end" service for the <strong>OpenTelemetry framework (contracted to "otel")</strong> which provides a vendor-agnostic (open source) way to collect logs, errors, exceptions, metrics, and traces about individual API requests and other events. The two components of Otel is an API library for various languages 

![otel-arch-666x504](https://user-images.githubusercontent.com/300046/127775446-688b5a67-a99d-4234-b14c-d95356ce25f2.png)

Fun fact: the word <em>telemetry</em> comes from the Greek words <em>tele</em>, meaning "remote" and <em>metron</em> for measure.<a href="#[4]">[4]</a>

Otel also offers a <strong>Collector agent</strong> which runs on the operating system to collect system metrics (such as memory, CPU, and attached storage consumption). 
The Collector also sends metrics to a metrics back end.

consistent (and easier) way for developers and SREs to collect 

Back-ends (Lightstep's competitors) include Splunk, Prometheus, Dynatrace, New Relic, Datadog, Stackdriver.

BTW Lightstep is built by the team that launched observability at Google (Dapper).


## Competitors

Many vendors say their tool "helps you make data-driven decisions and reduce the time to investigate issues so you can free up resources for more important activities".

Because Lightstep can both reduce the amount of monitoring data yet yield higher-quality signals,
because tracing propages context (and logging does not), rather than random sampling.
it can be argued that Splunk and others can partner with Lightstep and OpenTelementry.

More logical sampling can mean fuller granularity for selected items.

vs Dynatrace

AppDynamics

New Relic

IBM Instana

Honeycomb.io


## Observability Platform?

> "Observability (o11y) is the ability to ask questions of your system and learn from it.
Instrumentation is the tooling that provides your telemetry. Metrics, logs, and traces are the components of telemetry." - <a target="_blank" href="https://www.youtube.com/watch?v=W_8MHdtrgZE&t=2m7s">Keynote: (Open)Telemetry Makes Observability Simple</a> - Sarah Novotny & Liz Fong-Jones
CNCF [Cloud Native Computing Foundation]

OpenTelemetry "makes robust, portable telemetry a built-in feature of cloud-native software".



<a target="_blank" href="https://www.youtube.com/watch?v=CAQ_a2-9UOI" title="[9:41]">
VIDEO: Observability vs. APM vs. Monitoring</a>


## Who cares? (Customer stories)

OpenTelemetry is the second-most active project in CNCF (after Kubernetes).

Among OpenTelemetry's 245+ active contributors from 45+ companies are:
* Spotify
* Shopify
* Postmates
* Mailchimp
* Zillow
* Github - https://github.blog/2021-05-26-why-and-how-github-is-adopting-opentelemetry/ May 26, 2021
* Twilio

* CNCF Fluentbit
* Kafka adopting Open Telemetry


## Social

<a target="_blank" href="https://twitter.com/lightstephq">@lightstephq</a>

<a target="_blank" href="https://twitter.com/opentelemetry">@opentelemetry</a>

<a target="_blank" href="https://www.youtube.com/channel/UCTrVTDpZTRz-KA5WMJfniUA">
Lightstep's YouTube channel</a>

<a target="_blank" href="https://www.linkedin.com/company/lightstep/">Lightstep on LinkedIn</a>

<hr />

## Hands-on intro

1. Look at Lightstep's home on GitHub:

   https://github.com/lightstep

1. These are Lightstep packages for configuring OpenTelemetry:

   * https://github.com/lightstep/otel-launcher-java
   * https://github.com/lightstep/otel-launcher-python
   * https://github.com/lightstep/otel-launcher-go  (<a target="_blank" href="https://www.youtube.com/watch?v=yQpyIrdxmQc">VIDEO</a>)
   * https://github.com/lightstep/otel-launcher-node (JavaScript)
   * Ruby?
   * Erlang?
   <br /><br />

   NOTE: Each platform has a different Default format to output logs 

   "several pieces of GitHub’s infrastructure use different statsd dialects, which means we have to special-case our telemetry code in different places – a non-trivial amount of work!"

   <strong>semantic convention</strong> for creating a metric for HTTP latancy or HTTP QPS.

   The SDK contains ... sampling, creating a trace, or creating a metric ...


   ### Java

1. Pick the Java language launcher:

   * https://github.com/lightstep/otel-launcher-java
   <br /><br />

   ### CI/CD and API secret handling

1. Notice the .circleci file. You may prefer using other CI/CD tools.

   Modern CI/CD utilities come with a Secrets Manager that encrypts API keys, then decrypt them automatically during runs.

1. Sign up for the Lightstep free Community plan:

   https://app.lightstep.com/signup/developer

1. Obtain a Lightstep API token from the Lightstep.com GUI

1. Paste the API key in your CI/CD secrets manager

   In shell file calling, define the environment variable that provides your Lightstep API Access Token:

   export LS_ACCESS_TOKEN=my-access-token-etc

   See https://www.freecodecamp.org/news/how-to-securely-store-api-keys-4ff3ea19ebda/

   NOTE: collect -> Monitor (dashboards) -> analyze 


1. Notice the .circleci uses the <strong>Java 8 jdk</strong> within:

   https://github.com/lightstep/otel-launcher-java/blob/main/.circleci/config.yml

1. Notice use of GitHub's CodeQL for 

   https://github.com/lightstep/otel-launcher-java/blob/main/.github/workflows/codeql-analysis.yml

1. Download the latest version of <tt>lightstep-opentelemetry-javaagent.jar</tt>:

   NOTE: The Lightstep OpenTelemetry Agent is a configuration layer over OpenTelemetry Instrumentation Agent. 

1. <a target="_blank" href="https://www.youtube.com/watch?v=2v4yYhGgK_E" titie="[57:27] Dec 3, 2020">
   VIDEO: OpenTelemetry Deep Dive: Java</a> referencing code at https://github.com/tedsuo/otel-java-basics from https://github.com/carlosalberto/otel-java-basics.
   
   [31:45] In client/App.Java, the sample client makes 5 calls to the "hello world" server app.

   [32:19] In server/App.java, the "OkHttpClient()" is instrumented automatically.

   The agent automatically propagates context.


   ### Collector on servers

   <a target="_blank" href="https://www.youtube.com/watch?v=S_L0ohIJuF0&t=3m55s">VIDEO</a>:
   <a target="_blank" href="https://www.youtube.com/watch?v=7T2SdvYW-eI" title="OpenTelemetry Collector by Honeycomb">VIDEO</a>:

   The Lightstep Collector runs on the operating system to collect system metrics (such as memory, CPU, and attached storage consumption). 
   It is also a type of proxy which sends metrics to a metrics back end.

   The OpenTelemetry Collector receives data in several formats created in the industry:
   * Yeager protocol
   * Zipkin protocol
   * Census protocol
   * Open Telemetry protocol
   <br /><br />

   Integrations -> Exporters


   ### Processing (Ingesting)

   filer -> modify -> batch -> other





## OpenTelemetry

OTel Java Launcher: https://github.com/lightstep/otel-launcher-java/
Quickstart Guide: https://opentelemetry.lightstep.com/java
OpenTelemetry Java: https://github.com/open-telemetry/opentelemetry-java

1. Build:

   make

1. Run the server and wait for it to be ready:

   make run-server

1. Run the client to perform a few requests:

   make run-client

OLTP (OpenTelemetry Protocol)

Collector enables both Push and pull from the back-end.

   OpenTelemetry.io
   OpenTelemetry is a standardization effort to provide an open source framework that provides a single set of APIs, libraries, and instrumentation resources to capture distributed traces and metrics from applications. 

https://github.com/open-telemetry/opentelemetry-specification

Open Telemetry is the result of a merger of Open Tracing with Open Census.
![otel-consolidation-791x193](https://user-images.githubusercontent.com/300046/127775401-73923549-f91f-4398-8538-2e5b0c64d8ed.png)


   <a target="_blank" href="https://www.youtube.com/watch?v=3gYdTm9AyAw" title="Dec 4, 2020">
   VIDEO: Keynote: History of OpenTelemetry</a>
   Priyanka Sharma GM of CNCF introduces Ted and Morgan McLean to discuss the history and story behind OpenTelemetry, and what it means for the future of the project.
   [4:18] "A language to describe distributed systems"



API like Log4j

https://www.w3.org/blog/2019/12/trace-context-enters-proposed-recommendation/
HTTP headers from B3 to W3C trace-context for Context Propagation 
https://www.w3.org/TR/trace-context/

https://pkg.go.dev/go.opencensus.io/plugin/ochttp/propagation/b3

- How to get instrumented with OpenTelemetry in under 10 minutes in Java
- Common distributed tracing use cases and why they are the foundation for observability
- Best practices and common pitfalls for distributed tracing
- How to prepare to roll out OpenTelemetry across your organization


https://www.youtube.com/watch?v=_OXYCzwFd1Y
Modern Observability with OpenTelemetry</a>

from <a target="_blank" href="https://research.google/pubs/pub36356/">Google Dapper</a> 
and its system of <strong>exemplars</strong>.

https://docs.lightstep.com/docs/how-lightstep-works

In distributed tracing, a trace is a view into a request as it moves through a distributed system. 
Trace ID associated with each operation within a service.
and a <strong>Span ID</strong> (operational ID) for each transaction which spans several operations.
A span is a named, timed operation that represents a piece of the workflow.

Multiple spans represent different parts of the workflow and are pieced together to create a trace. 

context object

Serializing context objects is called "injection" of HTTP headers.

De-serializing context objects is called "propagation" downstream.

Within the context header, a "traceparent" has a trace-id and span-id with a sampling flag.
A tracestate has internal details.

Additionally, a "project ID" can be added to the 
context "Baggage" which contains arbitrary key-value pairs.
for A/B testing, etc.

with a label (attribute) for each dimension




Previously called "OpenTracing" created in 2016.

not sample to identify outliers

or tracing (stucts) follows service to service context propagates state.
joins 


    OpenTelemetry: OpenTelemetry is the unified initiative that takes the best of both OpenTracing and OpenCensus forward.

    OpenTracing: <a target="_blank" href="https://twitter.com/opentracing">@OpenTracing</a>) Lightstep tracers work with the OpenTracing API to create and send span data to the Lightstep web application. See the OpenTracing Registry for details on out-of-the-box instrumentation for common packages and frameworks.

    OpenCensus: Lightstep supports ingesting trace data from OpenCensus-instrumented applications via exporters.

    Jaeger Agent:(<a target="_blank" href="https://twitter.com/JaegerTracing">@JaegerTracing</a>)  Lightstep can ingest data directly from a Jaeger Agent. 

    Zipkin: Lightstep can ingest data directly from Zipkin.

    Chisel: A tooling library that comes with Lightstep and OpenTracing built in, that works with Pedestal (a popular Clojure libraries for building APIs).



### OpenTracing instrumentation 


   * https://github.com/opentracing-contrib/java-jdbc
   OpenTracing Instrumentation for JDBC

   * https://github.com/opentracing-contrib/java-spring-web
   OpenTracing Java Spring Web instrumentation

   * https://github.com/opentracing-contrib/java-kafka-client
   OpenTracing Instrumentation for Apache Kafka Client

   * https://github.com/opentracing-contrib/csharp-netcore
   OpenTracing instrumentation for .NET Core & .NET 5 apps

   * https://github.com/uber-common/opentracing-python-instrumentation
   A collection of Python instrumentation tools for the OpenTracing API

   * https://github.com/opentracing-contrib/python-sqlalchemy
     https://github.com/carlosalberto/python-sqlalchemy
   OpenTracing instrumentation for SQLAlchemy

   * https://github.com/carlosalberto/python-pyramid
   OpenTracing instrumentation for the Pyramid framework

Additionally:

   * https://github.com/zalando/opentracing-toolbox
   Best-of-breed OpenTracing utilities, instrumentations and extensions

   * https://github.com/RisingStack/opentracing-auto
   Out of the box distributed tracing for Node.js applications with OpenTracing.


## Database

![lightstep-db-trace-800x420](https://user-images.githubusercontent.com/300046/127773926-5c76daec-c5b8-48c2-8b2a-1925bfe9f0a1.jpg)



## References

https://www.youtube.com/watch?v=HExcLWA2b8M
Live Interview with Skyscanner: Observability Best Practices & OpenTelemetry
Lightstep

https://www.youtube.com/watch?v=NpE9nNmI9g4
SLA vs SLO vs SLI: All you need to know
Lightstep

https://www.youtube.com/watch?v=FlghuHDlQdM
Beyond Getting Started: Using OpenTelemetry to Its Full Potential - Sergey Kanzhelev (Microsoft) & Morgan McLean (Google)
CNCF [Cloud Native Computing Foundation]

https://www.youtube.com/watch?v=FbHbDikEUYg
Introduction to OpenTelemetry on Kubernetes
by infrastructure atscale
182 views 11 months ago


https://www.youtube.com/watch?v=J0XOGlf1bwk" title="Apr 2, 2020">
What's Lightstep?</a>

   * trace by specific customer
   * add custom tags
   * error analysis
   <br /><br />

https://www.youtube.com/watch?v=_OXYCzwFd1Y
11:49
Modern Observability with OpenTelemetry</a>



"We've seen people reduce logging 95% by adopting Tracing" --<a target="_blank" href="https://www.youtube.com/watch?v=Hv98hU3nj0U" title="Jul 8, 2021 [11:15]">
Why distributed tracing will replace (most) logging</a> for cloud-native architectures
interviews Lightstep co-founder and CEO, Ben Sigelman, and OpenTelemetry co-founder, Ted Young.

<a target="_blank" href="https://www.youtube.com/watch?v=XodFvWTbbPA" title="Sep 14, 2020">
Why Developers and SREs Choose Lightstep for Observability</a>
interviews users "Lightstep drove us right to where it's a problem"

https://www.youtube.com/watch?v=GGRAvY8_7Ps" title="Feb 4, 2021">
Announcing Change Intelligence</a>
identifies "most likely causes of performance changes" based on baseline history


https://www.youtube.com/watch?v=MQ0NXN5n0Es
OpenTelemetry insights: How will Traces and Metrics interact
by Ted Young and Josh MacDonald at Lightstep

https://www.youtube.com/watch?v=FbHbDikEUYg
Introduction to OpenTelemetry on Kubernetes
infrastructure atscale
182 views 11 months ago


https://www.youtube.com/watch?v=1vMu7iskQaY
Getting Started with OpenTelemetry - Ted Young, Lightstep
Continuous Delivery Foundation
1.5K views 9 months ago

https://www.youtube.com/watch?v=1DxMHqYIvkQ
OpenTelemetry Auto-Instrumentation Deep Dive - Carlos Alberto Cortez & Alex Boten, LightStep
CNCF [Cloud Native Computing Foundation]
1.1K views 10 months ago


<a target="_blank" href="https://www.youtube.com/watch?v=DbaO0Xxv34c" title="May 8 2020">
Webinar: How OpenTelemetry is Eating the World</a> (from CNCF)
presented by Steve Flanders (Splunk Dir. of Engineering, Otel Collector approver)


<a target="_blank" href="https://www.youtube.com/watch?v=_Px-Xn0jEGY" title="3.3K views 2020">
Tutorial: OpenTelemetry Java Instrumentation with Spring Boot in under 5 minutes</a>
(from Lightstep)


<a target="_blank" href="https://www.youtube.com/watch?v=idDu_jXqf4E">
Introduction to Tracing : OpenTelemetry & Opentracing</a>
by That DevOps Guy
7.7K views 3 months ago


https://www.youtube.com/watch?v=TmFBDsnLbAY
45:49
Now playing
Distributed Tracing with Micronaut
Object Computing
1K views 2 years ago

https://www.youtube.com/watch?v=vtuffPM5zXc
OpenTelemetry in practice - Ilya Kaznacheev
GoLab conference
659 views 7 months ago

https://www.youtube.com/watch?v=88ZjCbT6LPc
OpenTelemetry Java Auto-Instrumentation SIG 2020/03/19
OpenTelemetry
264 views 1 year ago



https://www.youtube.com/watch?v=CFLZJSwbYI0
16:21
Now playing
Spring Tips: Zipkin and Distributed Tracing
SpringDeveloper
24K views 4 years ago

https://www.youtube.com/watch?v=RvCcWltMY7U
Spring Boot OpenTracing instrumentation, using Jaeger and Zipkin
Pavol Loffay
21K views 4 years ago


https://www.youtube.com/watch?v=mNMw148wpZ4
MicroServices | Distributed Logging & Tracing
Byte Programming
7.8K views 1 year ago


<a target="_blank" href="https://www.youtube.com/watch?v=yY6hHhiDths">
What Is OpenTelemetry?</a>
New Relic
5.7K views 1 year ago


<a target="_blank" href="https://www.youtube.com/watch?v=O-9gV3xuqwg&list=RDCMUCEzfm-p8t6ZkMUr-zuL4hJw&start_radio=1&rv=O-9gV3xuqwg" title="6:32 Jun 30, 2020">
OpenTelemetry Architecture Overview</a> by John Watson
New Relic
https://opensource.newrelic.com/projects/open-telemetry
Tracer SDK

<a target="_blank" href="https://www.youtube.com/watch?v=NLr9tGBtVk8" title="13:42">
Microservices and Kubernetes Observability | Metrics, Logs, Tracing, Chaos Experiments</a>
by Tech Primers
8.7K views 1 year ago

<a name="[4]"></a>
[4] <a target="_blank" href="https://www.youtube.com/watch?v=r8UvWSX3KA8" title="1 h Jun 24, 2021">
VIDEO: freecodecamp.org's OpenTelemetry Course - Understand Software Performance</a>
by <a target="_blank" href="https://www.youtube.com/channel/UC5DNytAJ6_FISueUfzZCVsw">Code with</a> <a target="_blank" href="https://www.linkedin.com/in/ania-kubow/">Ania Kubów</a> (<a target="_blank" href="https://github.com/kubowania">https://github.com/kubowania</a> who began with <a target="_blank" href="http://javascriptgames.online/">JavaScript games</a> in 2019)

1. Run Zipkin from DockerHub:

   <pre><strong>docker run --rm -d -p 9411:9411 --name zipkin openzipkin/zipkin</strong></pre>


https://www.novatec-gmbh.de/en/blog/ocelot-meets-lightstep/


## More on Security #

This is one of a series on Security in DevSecOps:

{% include security_links.html %}
