---
layout: post
title: "Service Mesh (Envoy, Istio, Linkerd)"
excerpt: "The sidecar proxy separates cross-cutting operational concerns from business logic, handing off to a control pane to do the rest"
modified:
tags: [git]
date: "2021-01-04"
file: "service-mesh"
image:
# svcmesh-istio-api-egress-metrics-1900x500-73342.jpg
  feature: https://user-images.githubusercontent.com/300046/47396182-01282e00-d6e7-11e8-8038-149ab2c7bc8b.jpg
  credit: Matt Klein, Lyft 
  creditlink: https://www.youtube.com/watch?v=RVZX4CwKhGE
comments: true
---
<em>{{ page.excerpt }}</em>
{% include l18n.html %}
{% include _toc.html %}

"Service mesh" architecture is about microservices applications working within a "control plane" a standard way to hand-off service-to-service access control authentication, encrypted communications, monitoring, logging, timeout handling, load balancing, health checks, and other operational cross-cutting concerns to a sidecar proxy within its pod, which works with a <strong>control plane</strong> common to all services. 
The control plane aggregates telemetry data for display on dashboards such as the hero image above.

The implementations:

   * <a target="_blank" href="https://www.nginx.com/">NGINX proxy</a>

   * <a target="_blank" href="https://konghq.com/kong-mesh/">Kong Mesh</a> is built on top of Envoy.

   * <a href="#Istio">Istio</a>, backed by Google, IBM, and Lyft (which contributed its <a href="#Envoy">Envoy proxy</a> that works within Kubernetes as a sidecar proxy instance)
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

### Install prereqs and Istio

1. See my tutorial to <a target="_blank" href="https://wilsonmar.github.io/git-config">Install Git</a> and other utilities
1. See my tutorial to <a target="_blank" href="https://wilsonmar.github.io/kubernetes">Install Kubernetes</a> (minikube)
1. See my tutorial to <a target="_blank" href="https://wilsonmar.github.io/helm">Install Helm</a> 3.4.2-catalina
1. See my tutorial to <a target="_blank" href="https://wilsonmar.github.io/terminal">Bring up Terminal</a>

1. Rather than download Istio from https://github.com/istio/istio/releases

   <pre><strong>brew install istioctl</strong></pre>

1. Verify installed version:

   <pre><strong>istioctl version</strong></pre>

   If your pods have not already been setup:

   <pre>unable to retrieve Pods: Get "https://127.0.0.1:32768/api/v1/namespaces/istio-system/pods?fieldSelector=status.phase%3DRunning&labelSelector=app%3Distiod": dial tcp 127.0.0.1:32768: connect: connection refused
   </pre>

1. See my tutorial to <a target="_blank" href="https://wilsonmar.github.io/kubernetes/#start-minikube-with-docker-driver">Start minikube with Docker driver</a>

1. Start

   <pre>kubectl apply -f install/kubernetes/helm/helm-service-account.yaml
helm init --upgrade --service-account tiller
helm install install/kubernetes/helm/istio --name istio \
  --namespace istio-system \
  --set gateways.istio-ingressgateway.type=NodePort \
  --set gateways.istio-egressgateway.type=NodePort \
  --set sidecarInjectorWebhook.enabled=false \
  --set global.mtls.enabled=false \
  --set tracing.enabled=true
   </pre>

<hr />

## Verifying Istio is meshing

<a target="_blank" href="https://www.linkedin.com/learning/kubernetes-service-mesh-with-istio/verifying-that-istio-is-meshing?contextUrn=urn%3Ali%3AlyndaLearningPath%3A5c48d3fc498e244c8376de8c&u=26886050">VIDEO</a>

To enable Istio by default for resources deployed into the environment, "label" the namespace to enable auto-injection into:

1. First, clean up the hostname environment because we previously disabled automatic injection of the Istio proxy for the environment where we wish to transition an application to Istio, or one where multiple application environments may exist, all of which may not use a service mesh.

   ```
   kubectl delete -f hostname.yaml
   ```

1. Reset the istio relase to include the auto-injection webhook:

   ```
helm upgrade istio install/kubernetes/helm/istio \
  --namespace istio-system \
  --set gateways.istio-ingressgateway.type=NodePort \
  --set gateways.istio-egressgateway.type=NodePort \
  --set sidecarInjectorWebhook.enabled=true \
  --set global.mtls.enabled=false \
  --set tracing.enabled=true
   ```

1. Label the namespace with the "istio-injection" key:

   ```
kubectl label namespace default istio-injection=enabled
   ```

1. Re-install the hostname.yaml app and we should see that the sidecar is automatically injected:

   ```
kubectl apply -f hostname.yaml
kubectl get pods -l app=hostname
   ```


1. Use <a target="_blank" href="https://github.com/fortio/fortio">fortio for load testing</a> a command tool written in Golang.

   <pre>./fortio load -c 3 -n 20 -qps 0 http://hostname/version</pre>

   qps = Queries Per Second

1. List processing stats:

   <pre>./fortio-faults</pre>


## Sample Apps

<a target="_blank" href="https://github.com/blueperf/Overview">Blueperf</a> - the Public Cloud Environment Performance Analysis Application containing (Java) microservices application for fictional Airline Company "Acme Air". By Joe McClure at IBM, using IBM Cloud Kubernetes Service (IKS).

   * acmeair-mainservice-java (GUI)
   * acmeair-authservice-java JWT (Set environment variable SECURE_SERVICE_CALLS = false to disable authentication.)
   * acmeair-bookingservice-java handles getting, making, and cancelling flight bookings.
   * acmeair-customerservice-java
   * acmeair-flightservice-java queries flights and reward miles.
   * acmeair-driver - a workload driver for the Acme Air Sample Application.
   <br /><br />

Isotope is a synthetic app with configurable topology.

<img width="876" alt="istio-sample-app-1752x874" src="https://user-images.githubusercontent.com/300046/103592144-7c80ef00-4eaf-11eb-8319-5837ac7a59be.png">
<a href="#[1]">[1]</a>

<a name="[1]">[1]</a><a target="_blank" href="https://www.linkedin.com/learning/kubernetes-service-mesh-with-istio/installing-istio?contextUrn=urn%3Ali%3AlyndaLearningPath%3A5c48d3fc498e244c8376de8c&u=26886050">"Kubernetes: Service Mesh with Istio"</a> released 2018 by Robert Starmer (of Kumulus) is part of the <a target="_blank" href="https://www.linkedin.com/learning/paths/master-cloud-native-infrastructure-with-kubernetes?u=26886050">"Master Cloud-Native Infrastructure with Kubernetes" Learning Path</a> on LinkedIn. <a target="_blank" href="https://github.com/jaegertracing/jaeger-operator">Jaeger Operator</a> is covered.

The course uses Istio-1.0.2 and Helm within minkube on a OSX machine.

*    Adding Istio to a microservice
*    Traffic routing and deployment
*    Creating advanced route rules with Istio
*    Modifying routes for Canary deployments
*    Establishing MTLS credentials
*    Connecting to non-MTLS services
*    Connecting Istio to OpenTracing
*    Improving microservice robustness
*    Forcing aborts in specific applications - done by Istio recognizing cookie headers as triggers.
<br /><br />


## Rock Stars

Ray Tsang (@saturnism, saturnism.me), Google Cloud Platform Developer Advocate in NYC:

   * <a target="_blank" href="https://www.youtube.com/watch?v=AGztKw580yQ">Making Microservices Micro with Istio Service Mesh</a> Nov 10, 2017 at Devoxx
   <br /><br />

Kelsey Hightower:

   * <a target="_blank" href="https://www.youtube.com/watch?v=s4qasWn_mFc"> Istio and Kubernetes</a> (conversation)

## References

<a target="_blank" href="https://www.syncfusion.com/ebooks/confirmation/istio-succinctly">
BOOK: Istio Succinctly</a> 2020

<a target="_blank" href="https://www.youtube.com/watch?v=QiXK0B9FhO0">
What is a service mesh? May 27, 2018</a>
by Defog Tech

<a target="_blank" href="https://www.youtube.com/watch?v=QiXK0B9FhO0">
What is a service mesh? May 27, 2018</a>
by Defog Tech

<a target="_blank" href="https://www.youtube.com/watch?v=gauOI0O9fRM">
Microservices in the Cloud with Kubernetes and Istio (Google I/O '18) May 9, 2018</a>
by Sandeep Dinesh

<a target="_blank" href="https://www.youtube.com/watch?v=IblDMVwSSk4/"
title="[44:37]">APIs, Microservices, and the Service Mesh (Cloud Next '19)</a>
by <a target="_blank" href="https://www.linkedin.com/in/dinochiesa/">Dino Chiesa</a>


## Social

https://www.instagram.com/explore/tags/servicemesh/

