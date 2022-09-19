---
layout: post
date: "2022-09-14"
file: "service-mesh"
title: "Service Mesh (Envoy, Istio, Linkerd)"
excerpt: "The sidecar proxy enables business logic to hand off to a control pane to take care of cross-cutting operational concerns"
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
{% include l18n.html %}
{% include _toc.html %}

"Service mesh" architecture is about microservices applications working within a "control plane" a standard way to hand-off service-to-service access control authentication, encrypted communications, monitoring, logging, timeout handling, load balancing, health checks, and other operational cross-cutting concerns to a sidecar proxy within its pod, which works with a <strong>control plane</strong> common to all services. 

{% include whatever.html %}

Decentralized microservices apps Dockerized for running in containers make all network communication through its sidecar proxy (like handing a box to UPS to deliver). 

<a target="_blank" href="https://blog.envoyproxy.io/introduction-to-modern-network-load-balancing-and-proxying-a57f6ff80236" title="Dec 27, 2017 by Matt Klein, Engineer @lyft (https://mattklein123.dev/)">BLOG</a>:
![loadbal-sidecar-700x324](https://user-images.githubusercontent.com/300046/128973671-9bb88104-f369-4da8-872d-12113e6b625c.png)

Each sidecar proxy can communicate with <strong>backends</strong> in different zones (generically named A, B, and C in the diagram). Policies sent to each sidecar can specify zones and a different amount of traffic be sent to each zone. Each zone can be in different clouds (thus multi-cloud).

This approach also enables security-related policies to be applied (such as limiting outflows from some countries) and detection of zonal failure and automatic rerouting around traffic anomalies (including DDoS attacks). 

Each sidecar proxy and backend service report periodic state to the global load balancer (GLB) so it can make decisions that take into account latency, cost, load, current failures, etc. This enables centralized visualizations engineers use to understand and operate the entire distributed system in context.

This means app developers no longer need to bother coding for a long list of operational cross-cutting concerns:

   * collection and reporting of telemetry (health checks, logs, metrics, traces)

   * TLS termination (SSH key handling)
   * Handle protocols HTTP/2, WebSocket, gRPC, Redis, as well as TCP traffic

   * rate limiting (DoS mitigation)
   * timeout and back-out handling when response is not received
   * Circuit breakers

   * Fault injection (for chaos engineering to improve reliability)
   * Enforce policy decisions

   * load balancing
   * Staged rollouts with percentage-based traffic splits
   <br /><br />

Embedding the above functionality in each app program may provide the best performance and scalability, but requires polyglot coding to implement the library in many languages. It can also be cumbersome to coordinate upgrades of new versions of each library across all services.

Several sidecar programs have been created:

   * "Envoy" was developed by Lyft (cars) and donated to the CNCF. 
   * <a target="_blank" href="https://linkerd.io/">Linkerd</a>
   * <a target="_blank" href="https://www.haproxy.com/">HAProxy</a>, 
   * <a target="_blank" href="https://traefik.io/">Traefik</a>
   <br /><br />

Logically, communication of packets/requests travel through a "Data Plane".


<a name="ControlPlane"></a>

## Control Plane

There is also a <strong>"Control Plane"</strong> which, rather than exchanging packets/requests, traffic in <strong>policies and configuration settings</strong> to enable services such as:

   * deploy control (blue/green and/or traffic shifting), 
   * authentication and authorization settings, 
   * route table specification (e.g., when service A requests /foo what happens), and 
   * load balancer settings (e.g., timeouts, retries, circuit breakers, etc.).
   <br /><br />

The control plane aggregates telemetry data for display on dashboards such as the hero image above.

<a target="_blank" href="https://user-images.githubusercontent.com/300046/47365924-d499f500-d699-11e8-81b3-e057833badd0.png">
<img alt="svcmesh-v01-810x576.png" width="810" height="576" src="https://user-images.githubusercontent.com/300046/47365924-d499f500-d699-11e8-81b3-e057833badd0.png"></a>

Individual apps interact with a proxy (Kubernetes sidecar) running on each service instance. The sidecars communicate with a <strong>Control Tower</strong>.
This out-of-process architecture puts hard stuff in one place and allows app developers to focus on business logic.
And a separate library in each language for operational concerns is not needed.

The "Control Plane" is a traffic controller that handles tracing, monitoring, logging, alerting, A/B testing, rolling deploys, canary deploys, rate limiting, and retry / circuit-breaker activities that include creation of new instances based on application-wide policies during authentication, and authorization;

The control plane includes an application programming interface, a command‑line interface, and a graphical user interface for managing the app.

Within a Service Mesh, apps create service instances from service definitions (templates) for service instances. Thus, the term service refers to both instance definitions and the instances themselves.

Several products provide a "control plane UI" (web portal/CLI) to set global system configuration settings and policies as well as 

   * Dynamic service discovery
   * certificate management (acts as a Certificate Authority (CA) and generates certificates to allow secure mTLS communication in the data plane).
   * automatic self-healing and zone failover (to maximize uptime)
   <br /><br />

### Control Plane vendors

Several control plane vendors compete on features, configurability, extensibility, and usability:

   * <a href="#Istio">IstioD</a>, backed by Google, IBM, and Lyft (which contributed its <a href="#Envoy">Envoy proxy</a> that works within Kubernetes as a sidecar proxy instance)

   * <a target="_blank" href="https://verizon.github.io/nelson/">open-sourced Nelson</a> uses Envoy as its proxy and builds a robust service mesh control plane around the HashiCorp stack (i.e. Nomad, etc.). 

   * <a target="_blank" href="https://konghq.com/kong-mesh/">Kong Mesh</a>, the licensed side of open-sourced <a target="_blank" href="https://kuma.io/">kuma.io</a> donated to CNCF. It's built on top of Envoy.

   * <a target="_blank" href="https://github.com/airbnb/synapse">SmartStack</a> creates a control plane using HAProxy or NGINX.

   * <a href="#NGINX">NGINX proxy</a>


Cloud Foundry Spring Cloud?


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


<a name="gRPC"></a>

## gRPC

gRPC is a high-performance, open-source universal RPC framework built on top of HTTP/2 to enable <strong>streaming</strong> between client and server.

It originated as project "stubby" within Google and is now a F/OSS project with open specs.

<a target="_blank" href="https://grpc.io/blog/principles">https://grpc.io/blog/principles</a>:

   * Clients open one long-lived connection to a grpc server
   * A new HTTP/2 stream for each RPC call
   <br /><br />

gRPC avoids mistakes of SOAP  WSDL:

   * Protobuf vs. XML
   <br /><br />

References:

   * https://www.youtube.com/watch?v=RoXT_Rkg8LA by Twilio
   * https://github.com/salesforce/reactive-grpc Lyft Envoy uses gRPC bridge to unlock Python gevent clients.
   * https://www.youtube.com/watch?v=hNFM2pDGwKI Introduction to gRPC: A general RPC framework that puts mobile and HTTP/2 first (M.Atamel, R.Tsang)


<a name="Envoy"></a>

## Envoy (from Lyft)

Envoy provides robust APIs for dynamically managing its configuration.

Envoy is container-aware of Docker.

H2 on both sides, supports gRPC.

Does shadowing (fork traffic to a test cluster for live perf testing)

Envoy is written in C++11.

<a target="_blank" href="https://www.youtube.com/watch?v=RVZX4CwKhGE">VIDEO: 
Lyft's Envoy: From Monolith to Service Mesh</a> Feb 14, 2017
by Matt Klein (Lyft) explains from a developer's viewpoint why SoA and its issues.

L7 reverse proxy at edge (replacement for NGINX).

Lyft uses LightStep for tracing, WaveFront for stats (via statsd).


References:
   * https://www.envoyproxy.io/
   * https://lyft.github.io/envoy
   * <a target="_blank" href="https://twitter.com/EnvoyProxy">Twitter: @EnvoyProxy</a>


<a name="NGINX"></a>

## NGINX

<a target="_blank" href="https://www.nginx.com/">NGINX proxy</a>

NGINX built the equivalent of Istio Envoy.

https://www.nginx.com/blog/what-is-a-service-mesh/

https://www.nginx.com/blog/introducing-the-nginx-microservices-reference-architecture/



<a name="Linkerd"></a>

## Linkerd

<a href="#Linkerd">Linkerd</a> (<a target="_blank" href="https://linkerd.io/">https://linkerd.io</a>) is a <a target="_blank" href="https://www.cncf.io/projects/">Cloud Native Foundation (CNF) incubating project</a> that also includes graduates Kubernetes and Prometheus, plus Helm, OpenTracing, gRPC, etc..  

It was built in the Rust programming language. 

Linkerd provides Grafana dashboards and CLI debugging tools for Kubernetes service with no cluster-wide installation:
<img width="785" alt="svcmesh-linkerd-dataplane-grafana-1570x462" src="https://user-images.githubusercontent.com/300046/47396344-93303680-d6e7-11e8-828e-9ef45b288adf.png">

Its customers include Salesforce, Walmart, PayPal, Expedia, Comcast.

References:
   * https://linkerd.io/2/getting-started/ for installation, etc.



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

By https://www.linkedin.com/in/rickhigh/
   * https://www.linkedin.com/pulse/why-you-might-need-istio-rick-hightower/ "Istio decorates a network stream as AOP decorates a method call. Istio decorates a network stream as a Servlet Filter decorates an HTTP request/response."
   * https://www.linkedin.com/pulse/istio-hard-way-rick-hightower/
   * https://www.linkedin.com/pulse/istio-hard-way-round-2-rick-hightower/?published=t
   * https://linkedin.com/pulse/service-mesh-compared-aop-servlet-filters-rick-hightower/
   * https://www.linkedin.com/pulse/service-mesh-compared-aop-servlet-filters-rick-hightower/
   <br /><br />

## Social

https://www.instagram.com/explore/tags/servicemesh/

