---
layout: post
date: "2025-11-03"
lastchange: "25-11-03 v001 + :2025-10-02-python-ray.md"
url: "https://wilsonmar.github.io/python-ray"
file: "python-ray"
title: "Python Ray"
excerpt: "Run Python for AI Machine Learning in parallel distributed within a cluster of Kubernetes machines across AWS, GCP, Azure, and Anyscale cloudds."
tags: [travel]
image:
  feature: https://github.com/ray-project/ray/raw/master/doc/source/images/what-is-ray-padded.svg
  credit: Anyscale
  creditlink: https://github.com/ray-project/ray/
comments: true
created: "2025-10-02"
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

https://www.ray.io/#why-ray

https://github.com/wilsonmar/python-ray

Ray enables parallel processing to Machine Learning <a target="_blank" href="https://docs.ray.io/en/latest/ray-overview/use-cases.html">use cases</a>, each a Python program:

   * <a target="_blank" href="https://docs.ray.io/en/latest/ray-overview/examples/mcp-ray-serve/README.html">Deploy MCP servers</a> to report weather
   * <a target="_blank" href="https://docs.ray.io/en/latest/ray-core/examples/web_crawler.html">ray-crawler.py</a>for crawling the web to scrape content.
   * <a target="_blank" href="">ray-data.py</a>

   * <a target="_blank" href="ray-learn.py">ray-learn.py</a> for Reinforcement learning
   * <a target="_blank" href="ray-batch.py">ray-batch.py</a> for Batch inference
   * <a target="_blank" href="ray-train.py">ray-train.py</a> for Model training
   * <a target="_blank" href="ray-tune.py">ray-tune.py</a> for Hyperparameter tuning
   * <a target="_blank" href="ray-serve.py">ray-serve.py</a> for Model serving
   <br /><br />
   The above are based on https://docs.ray.io/en/latest/ray-overview/examples.html

Among End-to-End ML Workflows
   * [Example] Text classification with Ray
   * [Example] Object detection with Ray
   * [Example] Machine learning on tabular data
   <br /><br />

https://docs.ray.io/en/latest/train/examples.html

https://github.com/ray-project/ray/tree/master

Running a job involves specifying the number of nodes.
Ray abstracts away the complexity of managing scaling clusters, task scheduling, inter-node cmmunications, handling failures with retries and restarts.

https://github.com/ray-project/ray/blob/master/doc/source/ray-security/index.md
Ray provides fault-tolerance, optimized scheduling, task orchestration, and auto-scaling to run a given workload.
If you expose these services (Ray Dashboard, Ray Jobs, Ray Client), anybody who can access the associated ports can execute arbitrary code on your Ray Cluster. This can happen:

* Explicitly: By submitting a Ray Job, or using the Ray Client
* Indirectly: By calling the Dashboard REST APIs of these services
* Implicitly: Ray extensively uses cloudpickle for serialization of arbitrary Python objects. See the pickle documentation for more details on Pickle's security model.

Within a cluster are stateless CPU Tasks and stateful Actions in a pool of GPUs.

Results are returned as futures.

https://docs.ray.io/en/latest/cluster/key-concepts.html#cluster-key-concepts

At the Ray.io marketing page notes, several of the "Magnificient Seven" stocks use Ray (an Apache project) owned by Anyscale.com. Here's why:

Ray deploys to:
* Workspaces on Anyscale.com managed cloud. https://docs.anyscale.com/platform/workspaces/
* Docker images from https://hub.docker.com/r/rayproject/ray comes with anaconda
* <a target="_blank" href="https://docs.ray.io/en/latest/cluster/vms/getting-started.html#vm-cluster-quick-start">VMs</a> within hyperscale cloud providers: 
   * AWS, 
   * GCP within https://docs.cloud.google.com/tpu/docs/ray-guide
   <br /><br />
* QUESTION: What is Community-supported Azure?
* Community-supported Aliyun and vSphere integrations also exist.

   https://docs.newrelic.com/docs/infrastructure/host-integrations/host-integrations-list/ray-integration/

* <a target="_blank" href="https://docs.ray.io/en/latest/cluster/kubernetes/getting-started.html#kuberay-quickstart">Ray Kubernetes</a>
<br /><br />

## Competition

* Spark
* Dask
* pytorch monarch the new distributed AI framework by meta? It looks much alike ray APIs.
if torch-native distributed usages are enough for most cases, it will definitely attract lots of users. Meanwhile, ray is just donated to pytorch foundation.


 https://orbstack.dev/">orbstack

https://www.youtube.com/watch?v=aJe7CvQ-aM8


<a name="Clusters"></a>

## Ray Clusters

Ray runs on any machine, <a href="https://docs.ray.io/en/latest/cluster/getting-started.html">cluster</a>.

Multi-node Ray clusters are only supported on Linux. At your own risk, you may deploy Windows and OSX clusters by setting the environment variable RAY_ENABLE_WINDOWS_OR_OSX_CLUSTER=1 during deployment.

<a target="_blank" href="https://docs.ray.io/en/latest/cluster/running-applications/job-submission/quickstart.html#jobs-quickstart">apps are submitted as Jobs</a> to existing Ray clusters.

## Install using Docker



### Port

1. Start the <strong>Head Node</strong> of a cluster:

   <pre>ray start --head --port=6379</pre>

   If a <tt>--port</tt> argument is omitted, Ray chooses port 6379, and then fall back to a random port if in 6379 is in use.

   The command will print out the Ray cluster address, which can be passed to ray start on other machines to start the worker nodes (see below). If you receive a ConnectionError, check your firewall settings and network configuration.

1. Start Worker (Compute) Nodes on each of the other nodes:

   <pre>ray start --address=<em>head-node-address:port</em></pre>

   Replace head-node-address:port with the value printed by the command on the head node (it should look something like 123.45.67.89:6379).

   ### Resources

   Ray auto-detects the resources (e.g., CPU) available on each node, but can be manually overriden by passing flags resources to the ray start command. For example, to specify that a machine has 10 CPUs and 1 GPU available for use by Ray, you can do this with the flags --num-cpus=10 and --num-gpus=1. See the Configuration page for more information.

   If your compute nodes are on their own subnetwork with Network Address Translation, the address printed by the head node will not work if connecting from a machine outside that subnetwork. You will need to use a head node address reachable from the remote machine. If the head node has a domain address like compute04.berkeley.edu, you can simply use that in place of an IP address and rely on DNS.


## Ecosystem

Support by a growing ecosystem of <a target="_blank" href="https://docs.ray.io/en/latest/ray-overview/ray-libraries.html">community Integrations</a> 

https://docs.ray.io/en/latest/_images/air-ecosystem.svg

https://github.com/ray-project/ray
"Ray is an AI compute engine. 
   * <a target="_blank" href="https://docs.ray.io/en/latest/ray-core/tasks.html">Tasks</a> - Stateless functions executed in the cluster.

   * <a target="_blank" href="https://docs.ray.io/en/latest/ray-core/actors.html">Actors</a> - Stateful worker processes created in the cluster.

   * <a target="_blank" href="https://docs.ray.io/en/latest/ray-core/objects.html">Objects</a> - Immutable values accessible across the cluster.

## Glossary

See https://docs.ray.io/en/latest/ray-references/glossary.html

## Installation scopes

This article is a rewrite of https://docs.ray.io/en/latest/ray-overview/installation.html

There are several scopes:

A. If you're just getting started and not using <a href="#Dashboard">Ray Dashboard</a> or <a href="#Cluster_Launcher">Cluster Launcher</a>, install Ray with minimal dependencies: <a target="_blank" href="https://www.youtube.com/watch?v=i33b1DYjYRQ">VIDEO</a>

   <pre>pip install -U "ray"</pre>

B. To run <a href="#MLApps">machine learning apps</a>:

   <pre>pip install -U "ray[data,train,tune,serve]"</pre>

   <a name="MLApps"></a>

   ### Machine Learning Ray Apps

   Ray consists of a Core distributed runtime plus:

   * RaySGD - a library for distributed deep learning, which provides wrappers around PyTorch and TensorFlow

   * <a target="_blank" href="https://docs.ray.io/en/latest/data/data.html">data</a> - Scalable Datasets for ML

   * <a target="_blank" href="https://docs.ray.io/en/latest/train/train.html">train</a> - Distributed Training

   * <a target="_blank" href="https://docs.ray.io/en/latest/tune/index.html">tune</a> - Scalable Hyperparameter Tuning. The Tuner is the top level Ray Tune API used to configure and run an experiment with many trials. A hyperparameter optimization framework, most commonly used for deep and reinforcement learning.

   * <a target="_blank" href="https://docs.ray.io/en/latest/serve/index.html">serve</a> - Scalable and Programmable model-Serving

B. For reinforcement learning support, install <a target="_blank" href="https://docs.ray.io/en/latest/rllib/index.html">RLlib</a> for Scalable Reinforcement Learning:

   <pre>pip install -U "ray[rllib]"</pre>

   * RLib</a> - 

C. To run general Python applications:

   <pre>pip install -U "ray[default]"</pre>


1. Test if the installation was successful:

<pre>python -m pytest -v python/ray/tests/test_mini.py</pre>


<a name="Monitoring"></a>

## Monitoring

Install on every machine and configure for Prometheus.

https://docs.newrelic.com/docs/infrastructure/host-integrations/host-integrations-list/ray-integration/


<a name="Dashboard"></a>

## Dashboard

   * Monitor Ray apps and clusters with the <a target="_blank" href="https://docs.ray.io/en/latest/ray-core/ray-dashboard.html">Ray Dashboard</a>.
   * Debug Ray apps with the <a target="_blank" href="https://docs.ray.io/en/latest/ray-observability/ray-distributed-debugger.html">Ray Distributed Debugger</a>.

1. Identify the head_ip.

<a name="Cluster_Launcher"></a>

## Cluster Launcher

1. Edit the cluster config file <a target="_blank" href="https://github.com/ray-project/ray/blob/master/python/ray/autoscaler/aws/example-full.yaml">>example-full.yaml</a> to create a Ray cluster with a list of nodes.

1. Fill in the head_ip, a list of worker_ips, and the ssh_user field.

1. Test that it works by running the following commands from your local machine:

   <pre>
    # Download the example-full.yaml
    wget https://raw.githubusercontent.com/ray-project/ray/master/python/ray/autoscaler/local/example-full.yaml

    # Update the example-full.yaml to update head_ip, worker_ips, and ssh_user.
    # vi example-full.yaml

    # Create or update the cluster. When the command finishes, it will print
    # out the command that can be used to SSH into the cluster head node.
    ray up example-full.yaml

    # Get a remote screen on the head node.
    ray attach example-full.yaml
    # Try running a Ray program.

    # Tear down the cluster.
    ray down example-full.yaml
    </pre>


## Ray Serve

https://docs.ray.io/en/latest/ray-overview/examples/mcp-ray-serve/README.html
decribes an end-to-end example as a Notebook for running within Google Colab 
to setup within the Anyscale cloud an MCP FastAPI server having a tool to 
serve weather info from the US National Weather Service.

Ray's example specifies older Python versions:

<pre>pip install  mcp==1.11.0 asyncio==3.4.3 pydantic==2.9.2</pre>


<a target="_blank" href="https://github.com/ray-project/ray/blob/master/doc/source/ray-overview/examples/mcp-ray-serve/01%20Deploy_custom_mcp_in_streamable_http_with_ray_serve.ipynb"><img src="https://res.cloudinary.com/dcajqrroq/image/upload/v1761745262/mcp-anyscale-weather_fggh4r.png" /></a>




* Autoscaling: Dynamically adjusts replica count to match traffic peaks and maintain responsiveness. Ray Serve automatically adjusts the number of replicas based on traffic demand, ensuring your service handles increased load while maintaining responsiveness during peak usage periods.

* Observability: Exposes real‑time metrics on request rates, resource usage & system health. Built-in monitoring capabilities provide visibility into your service's performance, including request metrics, resource utilization, and system health indicators.

* Load balancing: Intelligently distributes incoming requests across all replicas for steady throughput. Ray Serve intelligently distributes incoming requests across available replicas, preventing any single instance from becoming overwhelmed and maintaining consistent performance.

* Fault tolerance: Detects failures, restarts components, and reroutes traffic to healthy replicas for continuous availability. Ray Serve automatically detects and recovers from failures by restarting failed components and redistributing requests to healthy replicas, ensuring continuous service availability.

* Composition: Chains deployments—pre‑process, infer, post‑process, and custom logic—into a single seamless pipeline. Build complex services by orchestrating multiple deployments into a single pipeline, allowing you to chain preprocessing, model inference, postprocessing, and custom logic seamlessly.

* Production ready: Enterprise‑grade infrastructure management and automated deployments for real‑world MCP traffic

* Logging and tracing: Comprehensive logs, distributed tracing, and real‑time dashboards for end‑to‑end observability

* High availability: Availability‑Zone‑aware scheduling and zero‑downtime rolling updates to maximize uptime

* Head node fault tolerance: Managed head‑node redundancy to eliminate single points of failure in the Ray cluster coordination layer.

*  RayTurbo optimizations

01-Deploy_custom_mcp_in_streamable_http_with_ray_serve.ipynb: Deploys a custom Weather MCP server in streamable HTTP mode behind FastAPI + Ray Serve, illustrating autoscaling, load‑balancing, and end‑to‑end testing on Anyscale.

MCP Python library

It uses Podman to deploy MCP tools with existing Docker images for notebooks 3 through 5.

A Brave API key set in your environment (BRAVE_API_KEY) for notebooks 3 and 4



02-Build_mcp_gateway_with_existing_ray_serve_apps.ipynb: Shows how to stand up a single MCP gateway that multiplexes requests to multiple pre‑existing Ray Serve apps under one unified /mcp endpoint, requiring no code changes in the underlying services.

03-Deploy_single_mcp_stdio_docker_image_with_ray_serve.ipynb: Wraps a stdio‑only MCP Docker image, for example Brave Search, with Ray Serve so it exposes /tools and /call HTTP endpoints and scales horizontally without rebuilding the image.

04-Deploy_multiple_mcp_stdio_docker_images_with_ray_serve.ipynb: Extends the previous pattern to run several stdio‑based MCP images side‑by‑side, using fractional‑CPU deployments and a router to direct traffic to the right service.

05-(Optional)_Build_docker_image_for_mcp_server.ipynb: Builds and pushes a lightweight Podman‑based Docker image for a Weather MCP server with uv in an Anyscale workspace.

## MCP

https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#streamable-http

SSE (legacy, deprecated): HTTP+Server-Sent events, now deprecated in favor of a unified HTTP transport.

Streamable HTTP: A single HTTP endpoint that handles both client→server POSTs and server→client GET/SSE streams.

https://support.anthropic.com/en/articles/11175166-about-custom-integrations-using-remote-mcp
integrate the Claude APP with remote MCP server

## Beginner Info

https://www.youtube.com/watch?v=FhXfEXUUQp0
Beginner's Guide to Ray! Ray Explained
The Data Guy

https://domino.ai/blog/ray-tutorial-for-accessing-clusters