---
layout: post
title: "Service Mesh (Envoy, Istio, Linkerd)"
excerpt: "The sidecar proxy separates cross-cutting operational concerns from business logic, handing off to a control pane to do the rest"
modified:
tags: [git]
image:
# svcmesh-istio-api-egress-metrics-1900x500-73342.jpg
  feature: https://user-images.githubusercontent.com/300046/47396182-01282e00-d6e7-11e8-8038-149ab2c7bc8b.jpg
  credit: Matt Klein, Lyft 
  creditlink: https://www.youtube.com/watch?v=RVZX4CwKhGE
comments: true
---
<em>{{ page.excerpt }}</em>
<hr />

{% include _toc.html %}

"Service mesh" architecture is about microservices applications working within a "data plane" a standard way to hand-off  service-to-service access control authentication, encrypted communications, monitoring, logging, timeout handling, load balancing, health checks, and other operational cross-cutting concerns to a sidecar proxy within its pod, which works with a <strong>control plane</strong> common to all services. 
The control plane aggregates telemetry data for display on dashboards such as the hero image above.

The implementations:

   * <a href="#Istio">Istio</a>, backed by Google, IBM, and Lyft (which contributed its <a href="#Envoy">Envoy proxy</a> which works within Kubernetes as a sidecar proxy instance)

   * NGINX proxy
   <br /><br />

![svcmesh-v01-810x576](https://user-images.githubusercontent.com/300046/47365924-d499f500-d699-11e8-81b3-e057833badd0.png)

Individual apps interact with a proxy (Kubernetes sidecar) running on each service instance. The sidecars communicate with a <strong>Control Tower</strong>.
This out-of-process architecture puts hard stuff in one place and allows app developers to focus on business logic.
And a separate library in each language for operational concerns is not needed.

The control plane is a traffic controller that handles tracing, monitoring, logging, alerting, A/B testing, rolling deploys, canary deploys, rate limiting, and retry / circuit-breaker activities that include creation of new instances based on application-wide policies during authentication, and authorization;

The control plane includes an application programming interface, a command‑line interface, and a graphical user interface for managing the app.

Cloud Foundry Spring Cloud?

Within a Service Mesh, apps create service instances from service definitions (templates) for service instances. Thus, the term service refers to both instance definitions and the instances themselves.


<a name="Istio"></a>

## Istio

<img align="right" width="151" alt="istio-logo-151x201-32530.png" src="https://user-images.githubusercontent.com/300046/47399117-561e7100-d6f4-11e8-8fa1-0fa9cd33b4a0.png">

https://istio.io/
aims to provide a a uniform way to secure, connect, and monitor microservices.
It provides rich automatic tracing, monitoring, and logging of all services to a "service mesh" -- the network of microservices.

https://istio.io/docs/reference/config/

Istio provides APIs that let it integrate into any logging platform, or telemetry or policy system.

Istio makes it easy to create a network of deployed services with load balancing, service-to-service authentication, monitoring, and more.

"Without any changes in service code" applies only if the app has not implemented its own mechanism duplicative of Istio, like retry logic (which can bring a system down without attenuation mechanisms). 



### gRPC

https://grpc.io/blog/principles

gRPC is a high-performance, open-source universal RPC framework built on top of HTTP/2 to allow for streaming between client and server.
It originated as project "stubby" within Google and is now a F/OSS project with open specs.

* A new HTTP/2 stream for each RPC call
* Clients open one long-lived connection to a grpc server.
<br /><br />

gRPC avoids mistakes of SOAP  WSDL:

   * Protobuf vs. XML

https://www.youtube.com/watch?v=RoXT_Rkg8LA
by Twilio

https://github.com/salesforce/reactive-grpc

Lyft Envoy uses gRPC bridge to unlock Python gevent clients.

https://www.youtube.com/watch?v=hNFM2pDGwKI
Introduction to gRPC: A general RPC framework that puts mobile and HTTP/2 first (M.Atamel, R.Tsang)


### Envoy from Lyft

https://www.envoyproxy.io/

https://lyft.github.io/envoy

<a target="_blank" href="https://www.youtube.com/watch?v=RVZX4CwKhGE">VIDEO: 
Lyft's Envoy: From Monolith to Service Mesh</a> Feb 14, 2017
by Matt Klein, Lyft 
explains from a developer's viewpoint why SoA and its issues.

Envoy is written in C++11.
H2 on both sides, supports gRPC.
Does shadowing (fork traffic to a test cluster for live perf testing)
It's container-aware of Docker

Lyft uses LightStep for tracing, WaveFront for stats (via statsd)

L7 reverse proxy at edge (replacement for NGINX).

Envoy provides robust APIs for dynamically managing its configuration.

https://twitter.com/EnvoyProxy

### NGINX

NGINX built the equivalent of Istio Envoy.

https://www.nginx.com/blog/what-is-a-service-mesh/

https://www.nginx.com/blog/introducing-the-nginx-microservices-reference-architecture/



<a name="Linkerd"></a>

### Linkerd

<a href="#Linkerd">Linkerd</a> (<a target="_blank" href="https://linkerd.io/">https://linkerd.io</a>) is a <a target="_blank" href="https://www.cncf.io/projects/">Cloud Native Foundation (CNF) incubating project</a> that also includes graduates Kubernetes and Prometheus, plus Helm, OpenTracing, gRPC, etc..  Linkerd provides Grafana dashboards and CLI debugging tools for Kubernetes service with no cluster-wide installation. It was built in the Rust programming language. Its customers include Salesforce, Walmart, PayPal, Expedia, Comcast.


https://linkerd.io/2/getting-started/
for installation, etc.

Provides Grafana dashboards:

<img width="785" alt="svcmesh-linkerd-dataplane-grafana-1570x462" src="https://user-images.githubusercontent.com/300046/47396344-93303680-d6e7-11e8-828e-9ef45b288adf.png">

<hr >

## Patterns

### Circuit breaker

The circuit breaker pattern isolates unhealthy instances, then gradually brings them back into the healthy instance pool if warranted.

<hr />

## Workshop 

There is a quite thorough hands-on workshop using GKE (Google Kubernetes Engine).

   * https://github.com/retroryan/istio-workshop is the original worked on by Ryan, etc. contains exercises.

   * https://github.com/srinandan/istio-workshop

   In this workshop, you'll learn how to install and configure Istio, an open source framework for connecting, securing, and managing microservices, on Google Kubernetes Engine, Google’s hosted Kubernetes product. You will also deploy an Istio-enabled multi-service application 

   * <a target="_blank" href="https://github.com/jamesward/istio-workshop">https://github.com/jamesward/istio-workshop</a> from Nov 2017 is a whole workshop with code.

<hr />

## Rock Stars

Ray Tsang (@saturnism, saturnism.me), Google Cloud Platform Developer Advocate in NYC:

   * <a target="_blank" href="https://www.youtube.com/watch?v=AGztKw580yQ">Making Microservices Micro with Istio Service Mesh</a> Nov 10, 2017 at Devoxx
   <br /><br />

Kelsey Hightower:

   * https://www.youtube.com/watch?v=s4qasWn_mFc Istio and Kubernetes (conversation)

## References

https://www.youtube.com/watch?v=QiXK0B9FhO0
What is a service mesh? May 27, 2018
by Defog Tech

https://www.youtube.com/watch?v=QiXK0B9FhO0
What is a service mesh? May 27, 2018
by Defog Tech

https://www.youtube.com/watch?v=gauOI0O9fRM
Microservices in the Cloud with Kubernetes and Istio (Google I/O '18) May 9, 2018
by Sandeep Dinesh


## Social

https://www.instagram.com/explore/tags/servicemesh/

