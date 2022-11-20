---
layout: post
date: "2022-11-08"
file: "kubernetes"
title: "Kubernetes (K8s)"
excerpt: "Get certified in how to orchestrate containers, especially in clouds, including OpenShift"
modified:
tags: [google, cloud]
image:
# kubernetes-head-1900x500-472493.jpg
  feature: https://user-images.githubusercontent.com/300046/39955449-b791191e-558b-11e8-8bde-9042df1b66ab.jpg
  credit: Jeremy Thomas
  creditlink: https://www.flickr.com/photos/132218932@N03/page2
comments: true
k8s_version: 1.22
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This article I wrote both while I prepared for the CKAD and while on the job.

{% include whatever.html %}


<a name="Keywords"></a>

### kubectl CLI command keywords

Below are Kubernetes technical terms listed alphabetically in one page, so you can go quickly/directly click to each:

<a href="#Admission">Admission Control</a>,
<a href="#Annotations">Annotations</a>,
<a href="#APIs">APIs</a>,
<a href="#API_Server">API Server</a>,
<a href="#apply">apply</a>,
<a href="#AutoScaling">Auto-scaling</a>,
<a href="#CKAD_ExamDomains">CKAD</a>, 
<a href="#Clusters">Clusters</a>,
<a href="#ClusterRoles">ClusterRoles</a>,
<a href="#ConfigMaps"><strong>cm</strong>=configmaps</a>,
<a href="#Contexts">Contexts</a>,
<a href="#ControlPlane">Control Plane</a>,
<a href="#Controllers">Controllers</a>,
<a href="#CRD">CRD (Custom Resource Definition)</a>,
<a href="#CronJobs">CronJobs</a>,
<a href="#Declarative">Declarative</a>,
Discovery,
<a href="#DaemonSets"><strong>ds</strong>=DaemonSets</a>,
<a href="#Deployments">deployment/</a>,
<a href="#Endpoints"><strong>ep</strong>=endpoints</a>,
<a href="#Envars">Environment Variables</a>,
<a href="#Expose">Expose</a>,
<a href="#Hashes">hashes</a>,
<a href="#HealthChecks">health checks</a>,
<a href="#HPA"><strong>hpa</strong>=HorizontalPodAutoscaler</a>,
<a href="#Imperative">Imperative</a>,
<a href="#InitContainers">Init Containers</a>,
<a href="#Ingress">Ingress</a>,
<a href="#JSONPath">JSONPath</a>,
<a href="#Kubelet">Kubelet</a>,
<a href="#kube-proxy">kube-proxy</a>,
<a href="#Labels">Labels</a>, 
<a href="#LoadBalancer">LoadBalancer</a>, 
<a href="#Logging">Logging</a>,
<a href="#Metadata">Metadata</a>,
<a href="#Namespaces"><strong>ns</strong>=Namespaces</a>, 
<a href="#NetworkPolicies"><strong>netpol</strong>=NetworkPolicies</a>, 
<a href="#Nodes"><strong>no</strong>=Nodes</a>,
<a href="#NodePort">NodePort</a>,
<a href="#OpenShift">OpenShift</a>,
<a href="#Pods"><strong>po</strong>=Pods</a>, 
<a href="#Podspecs">Podspecs</a>,
<a href="#ReadinessProbes">Readiness Probes</a>, 
<a href="#LivenessProbes">Liveness Probes</a>, 
<a href="#Probes">Probes</a>, 
<a href="#PersistentVolumes">Persistent Volumes</a>,
<a href="#PortForwarding">Port Forwarding</a>,
<a href="#PVC">PVC (Persistent Volume Claim)</a>,
<a href="#Replication">Replication</a>,
<a href="#Replicas">Replicas</a>,
<a href="#ReplicaSets"><strong>rs</strong>=ReplicaSets</a>,
<a href="#Rollbacks">Rollbacks</a>,
<a href="#RollingUpdates">Rolling Updates</a>,
<a href="#Secrets">Secrets</a>,
<a href="#Selectors">Selectors</a>, 
<a href="#Services"><strong>svc</strong>=Services</a>,
<a href="#ServiceAccounts"><strong>sa</strong>=ServiceAccounts</a>,
<a href="#ServicesDiscovery">Service Discovery</a>,
<a href="#StatefulSets"><strong>sts</strong>=StatefulSets</a>,
<a href="#StorageClasses">Storage Classes</a>,
<a href="#Taints">Taints</a>,
<a href="#Tolerations">Tolerations</a>,
<a href="#Vim">Vim (tool)</a>,
<a href="#Volumes">Volumes</a>,
<a href="#Workloads">Workloads API</a>

<strong>Bolded words</strong> are abbreviations assigned by Kubernetes. 
Memorizing and using them while manually typing commands will save you much time.


<a name="K8s_API"></a>

### K8s API Special Interest Groups

The various features of Kubernetes are maintained by SIGs (Special Interest Groups) formed around <strong>related groups</strong> of APIs listesd at <a target="_blank" href="https://github.com/kubernetes/community/blob/master/sig-list.md">
https://github.com/kubernetes/community/blob/master/sig-list.md</a>

   <a targete="_blank" href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/">https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/</a> (which is one big page):

   * <strong>Service APIs</strong>: Endpoints, <a href="#Ingress">Ingress</a>, Service

   * <strong>Workloads APIs</strong>: Container, Job, CronJob, Deployment, StatefulSet, ReplicaSet, Pod, ReplicationController

   * <strong>Config and storage APIs</strong>: ConfigMap, CSIDriver, Secret, StorageClass, Volume

   * <strong>Metadata APIs</strong>: Controller, <a href="#CRD">CRD</a>, Event, LimitRange, <a href="#HPA">HPA (HorizontalPodAutoscaler)</a>, PodDistributionBudget, ...

   * <strong>Cluster APIs</strong>: APIService, Binding, CSR, <a href="#ClusterRoles">ClusterRole</a>, Node, Namespace, Lease, PersistantVolume -> HostPathVolume. 
   <br /><br />

REMEMBER: Unlike other systems, in Kubernetes there are no "users".

Sebastien Goasguen (@sebgoa), author of "Kubernetes Cookbook" and 
"Docker Cookbook"
https://github.com/sebgoa/oreilly-kubernetes

<hr />

<a name="Why"></a>

## Why Kubernetes? Team Speed vs. Central Control

As <a target="_blank" href="https://wilsonmar.github.io/docker/">my article on Docker</a> describes, Docker images are much faster and smaller than VMwere images.

With Kubernetes in a <a href="#Clouds">cloud</a>, given enough training, an  <strong>individual developer can take complete control of production operations</strong>  -- deploy both application code with all environment settings, without ceremonies and waiting for operations management approvals. This freedom is why Kubernetes contributes to <strong>corporate agility and faster time to market</strong>.

That is why it's so important to properly train developers to "professionally" use Kubernetes.

But that is easier said than done. The power and flexibility of Kubernetes means there is a lot to learn about Kubernetes.

So, alas, some managers fall back to "protecting" Kubernetes in production by enabling only a small number of Operations specialists (separated from developers) to handle Kubernetes. 

When K8s specialists are the only ones capable of doing key parts of the work, they also often become a <strong>bottleneck to fast progress</strong>. Moreover, specialists have a dis-incentive to educate others deeply. The shortage of Kubernetes skills has resulted in higher salaries for Kubernetes jobs.

"Self-service" portals and custom utilities save developer's time for common activities. But portals can become "anti-patterns" because they can also <strong>limit innovation</strong> (new features) and block individual developers from <strong>learning</strong> to work quickly and troubleshoot independently.

To fill in the gap, individual teams inexperienced in K8s troubleshooting may find useful a tool such as <a target="_blank" href="https://www.Komodor.com/">Komodor</a> which monitors it all and suggests actions, like a human expert would.


## This article (automation)

Because of the above issues, I am creating <a href="#shell-scripts-in-ssh">scripts</a> that can, with one command, invoke a CI/CD workflow (on GitHub.com) that uses  <a target="_blank" href="https://wilsonmar.github.io/terraform/">Terraform IaC and Sentinel PaC</a> to stand up a Kubernetes cluster within AWS (after installing clients and establishing credentials), then identify the optimal Kunbernetes specifications by running tests of how quickly it takes Kubernetes to scale horizonatally and vertically. 

But that's just the beginning.

The contribution of this article is a carefully sequenced presentation of complex material so it's both easier to understand quickly yet more deeply. "PROTIP" flags insightful commentary while hands-on activities automated in a shell script -- an immersive step-by-step "deep dive" tutorial to both <a  href="#exam-preparations">prepare for</a> <a href="#professional-certifications-in-kubernetes">Kubernetes exams</a> and to work as an SRE in <a href="#Production">production use</a>.



<a name="Contributions"></a>

## What Kubernetes contributes

Kubernetes applies principles of the <a target="_blank" href="https://www.reactivemanifesto.org/">Reactive Manifesto</a> of 2014:

<a target="_blank" href="https://user-images.githubusercontent.com/300046/95671902-3559bb00-0b59-11eb-8a40-a8761bb0f037.png"><img width="546" alt="reactive-manifesto" src="https://user-images.githubusercontent.com/300046/95671902-3559bb00-0b59-11eb-8a40-a8761bb0f037.png"></a>

* <a href="#IAC">Infrastructure as code</a> (IAC)
* Manage containers
* Naming and discovery
* Mounting storage systems
* Balancing loads
* Rolling updates
* Distributing secrets/config
* Checking application health
* Monitoring resources
* Accessing and ingesting logs
* Replicating application instances
* Horizontal autoscaling
* Debugging applications


<hr />


## TL;DR Professional certifications in Kubernetes

<a target="_blank" href="https://www.youtube.com/watch?v=L6K_8dOFR5w" title="Tips to Pass the CKAD Exam from CloudAcademy">VIDEO:</a>:
If you're here for advice on how to pass the CKAD, here is my advice:

1. PROTIP: Instead of trying to memorize everything, during the test you're given access only to <a target="_blank" href="https://kubernetes.io/docs/home/">Kubernetes official documentation</a>, get used to navigating those set of pages to look stuff up. NOTE: There is support for other languages other than English. Foresake all other docs and utilities until after you pass (and get a real job using Kubernetes where you would consider Service Mesh, <a href="#Kustomize">Kustomize</a>, <a href="#Jsonnet">Jsonnet</a>, etc.).

1. PROTIP: Instead of multiple choice questions, K8s exam consists of <strong>task-based practical responses while SSH'd into live clusters</strong> . So first minute into the exam, configure your Terminal with keyboard shortcuts (such as k instead of kubectl), and use command abbreviations.

1. PROTIP: Learn to be proficient at the text editor that come with Ubuntu Linux, which is vi.

1. PROTIP: Study using <a target="_blank" href="https://kodekloud.com/courses/labs-certified-kubernetes-application-developer/">KodeKloud</a>'s gamified hands-on troubleshooting pedagogy that moves you logically through 49 topics. Quizzes follow each topic. You can access it via Udemy.com. 

1. Each exam includes one free fail retake.


<hr />



## Open-Source History

The English word "kubernetes" is from the <a target="_blank" href="https://en.wiktionary.org/wiki/%CE%BA%CF%85%CE%B2%CE%B5%CF%81%CE%BD%CE%AE%CF%84%CE%B7%CF%82">ancient Greek word</a> based on "to steer" for people who pilot cargo ships –- "helmsman" or "pilot" in English. That's why Docker/Kubernetes experts are called <a target="_blank" href="https://www.docker.com/community/captains">"captains"</a>. Docker Captains work together on <a target="_blank" href="https://github.com/docker-captains/about">github.com/docker-captains/</a>

Associated products have nautical themes, such as <a target="_blank" href="https://wilsonmar.github.io/helm/">Helm</a> (the package manager for Kubernetes).

Kubernetes is often abbreviated as <strong>k8s</strong> (pronounced "kate"), with 8 replacing the number of characters between k and s. Thus, <a target="_blank" href="https://k8s.io/">https://k8s.io</a> redirects you to the <strong>home page for Kubernetes software</strong>:

   <ul><a target="_blank" href="https://kubernetes.io/"><u>https://kubernetes.io</u></a><br />
   (<a target="_blank" href="https://twitter.com/kubernetesio/">Twitter: @kubernetesio</a>)</ul>

The website, and the Kubernetes code is maintained by the Linux Foundation, which also owns the registered trademark for the logo of a sailing ship's wheel.

<a name="K8sVersion"></a>

Within the <a target="_blank" href="https://github.com/kubernetes/">GitHub.com/kubernetes</a> where Kubernetes source code  is open-sourced, its <a target="_blank" href="https://github.com/kubernetes/kubernetes/releases">releases</a>:

   * v1.0 (first commit by Joe Beda within GitHub) was on July 2015, and released on July 21, <strong>2015</strong>
   * v1.6 was led by a CoreOS developer
   * v1.7 was led by a Googler
   * v1.8 was led by <a target="_blank" href="https://www.linkedin.com/in/jaicesinger/">Jaice Singer DuMars</a> (<a target="_blank" href="https://twitter.com/jaicesd">@jaicesd</a>) after Microsoft joined the CNCF July 2017 <a target="_blank" href="https://twitter.com/jaydumars?lang=en">VIDEO</a>
   * v1.22 is when containerD replaces Docker as the default container runtime
   * {{ page.k8s_version }} was the version at Sep 2021.
   <br /><br />

1. PROTIP: Get the latest Semantic version of a stable release of Kubernetes (such as "v1.22.1") as variable <tt>K8_VERSION</tt> :

   <pre>curl -sS https://storage.googleapis.com/kubernetes-release/release/stable.txt</pre>


Kubernetes was created inside Google (using the [Golang](/Golang/) programming language).
Kubernetes was used inside Google for over a decade before being open-sourced in 2014 to the Cloud Native Computing Foundation (<a target="_blank" href="https://www.cncf.io/">cncf.io</a>) collective.
See <a target="_blank" href="https://landscape.cncf.io">landscape.cncf.io</a>

<a target="_blank" href="https://cloudplatform.googleblog.com/2016/07/from-Google-to-the-world-the-Kubernetes-origin-story.html">This blog</a> and
<a target="_blank" href="http://softwareengineeringdaily.com/2016/07/20/kubernetes-origins-with-craig-mcluckie/">podcast</a> 
revealed that the predecessor to Kubernetes was the "Project 7" which built <a target="_blank" href="https://ai.google/research/pubs/pub43438">"The Borg"</a> because initial developers were fans of the "Star Trek Next Generation" TV series.
In the series, the "Borg" society <a target="_blank" href="https://www.merriam-webster.com/dictionary/subsume">subsumes</a> all civilizations it encounters into its "collective".<a target="_blank" href="https://www.linkedin.com/pulse/kubernetes-honorable-captain-bridge-gaurav-jain/">*</a>

![k8s-borg-490x431](https://user-images.githubusercontent.com/300046/132962385-096c4357-e939-40b0-a5b0-62476c8c9fa5.png)

<img align="right" alt="kubernetes-logo-125x134-15499.png" src="https://user-images.githubusercontent.com/300046/33524448-ca1d7e30-d7da-11e7-9358-45845910198c.png">
The logo for Kubernetes inside the 6 sided hexagons representing each Google service has <strong>7 sides</strong>. This is because a beloved character in the U.S. TV series (played by <a target="_blank" href="https://www.imdb.com/name/nm0005394/?ref_=nv_sr_srsg_0">Jeri Ryan</a>) is a converted Borg called <a target="_blank" href="https://en.wikipedia.org/wiki/Seven_of_Nine">"7 of 9"</a>. 
See <a target="_blank" href="https://blog.risingstack.com/the-history-of-kubernetes">Timeline of Kubernetes</a>

<a target="_blank" href="https://github.com/kubernetes/community/tree/master/icons/png/resources/labeled">The Kubernetes community repo</a> provides icon image files (<a target="_blank" href="https://qiita.com/yosshi_/items/2db0a0e66a16711bfe5f">resources</a>) labeled and unlabeled, in png and svg formats in 128 and 256 pixels.


<a name="Clouds"></a>

## Public Cloud Kubernetes Services

Kubernetes can run within private on-premises data centers on "bare metal" machines.

But being open-source has enabled Kubernetes to flourish on multiple clouds<a target="_blank" href="https://codefresh.io/kubernetes-guides/kubernetes-cloud-aws-vs-gcp-vs-azure/">*</a>

* ACK = Alibaba Cloud Kubernetes
* <a href="#AKS">AKS = Azure Kuberntes Service</a> using <a target="_blank" href="https://docs.microsoft.com/en-us/cli/azure/aks?view=azure-cli-latest"><tt>az aks</tt></a> commands
* <a href="#ECS">ECS = Elastic Container Service (in AWS)</a> 
* <a href="#EKS">EKS = Elastic Kubernetes Service (in AWS)</a> using <tt>eksctl</tt> commands
* <a href="#GKE">GKE = Google Kubernetes Engine</a> <tt>gcloud container</tt>

* <a target="_blank" href="https://www.ibm.com/cloud/kubernetes-service">IBM cloud Kubernetes Service</a>
* OKD = <a href="#OpenShift">OpenShift</a> (Red Hat) Enterprise platform as a service (PaaS) Origin community distribution - OpenShift Dedicated, OpenShift Online
* KUBE2GO

* PKS = VMWare Tanzu purchase of Pivotal, Heptio (Joe Bada, Craig McLukie), morph from PCS
* <a target="_blank" href="https://rancher.com/products/rke/">RKE = Rancher Kubernetes Engine</a>
* Rackspace's Kubernetes as a Service

* <a target="_blank" href="https://blog.digitalocean.com/introducing-digitalocean-kubernetes/">DOKS = Digital Ocean</a> (<a target="_blank" href="https://mohsensy.github.io/sysadmin/2021/04/09/install-istio-with-terraform.html">Istio</a>)
* OKS = Oracle

* PKE = Bonzai
* MKE = D2iQ (Day two iQ) rebranded from Mesos DC/OS meta clusters
* Canonical

* https://github.com/kubernetes-sigs/kubespray

* <em>And others</em>



<a name="Playgrounds"></a>

## Cloud Playgrounds

PROTIP: To follow along many tutorials, <strong>Admin permissions</strong> are needed for the account being used. So it's best you use a "play" account rather than a work account.

You can learn to use Kubernetes even on a Chromebook laptop if you use a cloud-based learning environment (sandbox).
A subscription is needed on some.

   * <a href="#KataKoda">KataKoda</a> [FREE]
   * <a href="#Qwiklabs">Qwiklabs</a>
   * <a href="#ACloudGuru">ACloudGuru</a> [Subscription]
   * <a href="#CloudAcademy">CloudAcademy</a> [Subscription]
   <br /><br />

### KataKode

1. [<a target="_blank" href="#Terraform">Terraform</a>] <a target="_blank" href="https://www.katacoda.com/courses/kubernetes/playground">KataKoda</a>

1. PROTIP: I prefer KataKoda because it provides <strong>Two terminal sessions</strong> when other options I have mess with jumping back and forth.

1. When you see the terminal prompt, type <tt><strong>uname -a</strong></tt> for:

   <pre>Linux controlplane 4.15.0-122-generic #124-Ubuntu SMP Thu Oct 15 13:03:05 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux</pre>

   Notice "controlplane".
   
   Notice that KataKoda runs Linux Ubuntu, so use the installer appropriate for it.

1. Get status:

   <pre><strong>kubectl cluster-info</strong></pre>

   <pre>Kubernetes master is running at https://172.17.0.17:6443
KubeDNS is running at https://172.17.0.17:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy
   </pre>

   Notice "master". That's what runs the control plane.

   "KubeDNS"

1. Launch a two-node Kubernetes cluster with a single command:

   <pre><strong>launch.sh</strong></pre>

   <pre>Waiting for Kubernetes to start...
Kubernetes started
   </pre>

Next, consider <a target="_blank" href="https://www.katacoda.com/contino/courses/kubernetes">[FREE] guided K8s Katas by Contino</a>.
It uses K8s Namespace "kube-system".
It also has a "kube-public" namespace where nothing runs, but contains a ConfigMap which contains the bootstrapping and certificate configuration for the Kubernetes cluster.

Now <a href="#KublectlCommands">proceed to use other Kublectl commands</a>.


<a name="acloudguru"></a>

### ACloudGuru

* <a target="_blank" href="https://learn.acloud.guru/cloud-playground/cloud-sandboxes">ACloudGuru.com</a>, 

* <a target="_blank" href="https://acloudguru.com/">https://acloudguru.com</a>
has both <a target="_blank" href="https://learn.acloud.guru/search?page=1&learningTypes%5B0%5D=ACG_HANDS_ON_LAB&technologies%5B0%5D=Kubernetes">guided Labs</a> and <a target="_blank" href="https://learn.acloud.guru/cloud-playground/cloud-sandboxes">playground sandboxes</a> on AWS, GCP, and Azure.
   
   <a target="_blank" href="https://www.acloudguru.com/">ACloudguru.com</a> <a target="_blank" href="https://acloudguru.com/course/certified-kubernetes-application-developer-ckad">CKAD course</a> by <a target="_blank" href="https://www.linkedin.com/in/wilb/">William Boyd</a> has 3.5 hours of video organized according to <a href="#CKAD_ExamDomains">exam domains</a>, 13 hands-on labs, and 3 practice exams <strong>based on v1.13 (older version)</strong>.


<a name="CloudAcademy"></a>

### CloudAcademy.com

* <a target="_blank" href="https://cloudacademy.com/">https://cloudacademy.com</a> <a target="_blank" href="https://cloudacademy.com/lab/introduction-kubernetes-playground/?context_resource=lp&context_id=451">Playground lab</a> enables you to <strong>skip all the install details</strong>

   CloudAcademy's <a target="_blank" href="https://cloudacademy.com/learning-paths/certified-kubernetes-application-developer-ckad-exam-preparation-451/">11-hour "Learning Path" course</a> was updated August 27th, 2019 by Logan Rakai. 

   PROTIP: A browser-based session times out too quickly and is cumbersome to copy and paste. So use SSH instead.


<a name="KodeKloud"></a>

### KodeKloud

* STAR: <a href="#KodeKloud">KodeKloud</a> is especially effective because it's gamified troubleshooting where it provides a situation you have to figure out the commands, just like in the certification tests.

   A KodeKloud subscription includes access to a KataKoda-powered <a target="_blank" href="https://kodekloud.com/courses/enrolled/675122">lab environment</a> for <strong>one hour at a time</strong>, then you have to start over. The instances come up quickly, though. 

   KataKoda, <a target="_blank" href="https://learn.openshift.com/playgrounds/">Red Hat's OpenShift Playground</a> using its "oc" CLI program. The KataKoda playground environment is pre-loaded with Source-to-Image (S2I) builders for Java (Wildfly), Javascript (Node.JS), Perl, PHP, Python and Ruby. Templates are also available for MariaDB, MongoDB, MySQL, PostgreSQL and Redis.

   PROTIP: The <a href="#Aliases">k alias for kubectl</a> is already configured, so type <tt>k</tt> instead of <tt>kubectl</tt>.


<a name="Qwiklabs"></a>

### Qwiklabs

* <a target="_blank" href="https://run.qwiklabs.com/catalog?keywords=Kubernetes">Qwiklabs has several hands-on labs using Kubernetes</a> on Google Cloud. 

   Occassionally, Google offers free time.

   Try the FREE <a target="_blank" href="https://google.qwiklabs.com/focuses/8586?parent=catalog">30-minute Kubernetes Engine: Qwik Start</a> which is one of the "quests" in Google's 
   <a target="_blank" href="https://webinars-run.qwiklab.com/quests/29">Kubernetes in the Google Cloud Qwiklab quest</a>. Tasks:

   * Task 1: Set a default compute zone
   * Task 2: Create a GKE cluster
   * Task 3: Get authentication credentials for the cluster
   * Task 4: Deploy an application to the cluster
   * Task 5: Deleting the cluster
   <br /><br />

   <a target="_blank" href="https://googlecoursera.qwiklabs.com/focuses/13143652?parent=lti_session">Deploying Google Kubernetes Engine Clusters from Cloud Shell</a>

   <a target="_blank" href="https://run.qwiklabs.com/quests/142?catalog_rank=%7B%22rank%22%3A4%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&search_id=7405314">Qwiklabs QUEST: Secure Workloads in Google Kubernetes Engine</a> consists of 8 labs covering 8 hours.
 
   Qwiklabs are used in Coursera courses, which explains provides lab solutions videos such as:
   * <a target="_blank" href="https://www.coursera.org/learn/foundations-google-kubernetes-engine-gke/lecture/1pxSX/lab-solution">Accessing the Cloud Console and Cloud Shell</a>
   * <a target="_blank" href="https://www.coursera.org/learn/foundations-google-kubernetes-engine-gke/lecture/BxVeI/lab-solution"> Deploying GKE</a>
   * <a target="_blank" href="https://googlecoursera.qwiklabs.com/focuses/13134687?parent=lti_session">Implementing Role-Based Access Control with Google Kubernetes Engine</a>
   <br /><br />

   <a target="_blank" href="https://inthecloud.withgoogle.com/kubernetes-training-offer/register.html">30 days free training instances</a> after completing a Tour class. 

### Others

* <a target="_blank" href="https://play-with-k8s.com">https://play-with-k8s.com</a> was provided free by Docker. Now defunct.



<a name="HandsOnLabs"></a>

## Hands-on Demos/labs

I think the quickest yet deepest way to learn Kubernetes is to follow step-by-step instructions after seeing <strong>guided</strong> <strong>Labs ("demos")</strong> using pre-loaded data. Hands-on practice is how you develop the "muscle memory" need to operate Kubernetes confidently.

PROTIP: To pass Kubernetes exams, you need to master the many CLI commands that control the <strong>Native Kubernetes</strong> command line interface (CLI): <strong>kubectl</strong> (pronounced "cube cuddle" or "cube see-tee-el" or "cube control").

<a target="_blank" href="https://kubernetes.io/docs/user-guide/prereqs/">https://kubernetes.io/docs/user-guide/prereqs</a>

There are several options to run kubectl:

   * In a Terminal on your laptop use the Cloud Shell/Console CLI programs provided by the cloud vendor (AWS, Azure, GCP, etc.), which may involve costly bills.
   
   * If you have a <strong>laptop</strong> with enough memory and CPU, install <a href="#Minikube">Minikube</a>, <a href="#EKSAnywhere">AWS ECS & EKS Anywhere</a>, or <a target="_blank" href="https://www.aquasec.com/cloud-native-academy/kubernetes-101/kubernetes-architecture/">install</a> from the <a target="_blank" href="https://x-team.com/blog/introduction-kubernetes-architecture/">K8s hypercube Docker container</a>.

   * Just the Kubectl CLI program can be installed on your laptop for you to communicate directly to a K8s master.

   * More commonly in production use, you use SSH to tunnel into a "Bastion host" in the cloud. Cloud-based training vendor <a href="#CloudAcademy">CloudAcademy</a> provides training on how to setup Kubernetes.

   * <strong>K8s on Raspberry Pi</strong> don't consume disk space on your laptop because they are separate computers that are cheap ($70 USD), silent, and private. But Pi's are limited to 8 GB of RAM and based on newer ARM architecture rather than Intel x86 architecture used by PC's and MacOS.

<a name="RaspPi"></a>

On Sep 2021, Dan Tofan released on Pluralsight "How to build a Kubernetes Cluster on 3+ Raspberry Pi".

Scott Hanselman <a target="_blank" href="https://www.hanselman.com/blog/HowToBuildAKubernetesClusterWithARMRaspberryPiThenRunNETCoreOnOpenFaas.aspx">built Kubernetes on 6 Raspberry Pi nodes</a>, each with a 32GB SD card to a 1GB RAM ARM chip (like on smartphones).
<a target="_blank" href="https://www.hanselminutes.com/612/serverless-and-openfaas-with-alex-ellis">
Hansel talked with</a> <a target="_blank" href="https://www.alexellis.io/">Alex Ellis</a> (<a target="_blank" href="https://twitter.com/alexellisuk/">@alexellisuk</a>)
keeps his <a target="_blank" href="https://gist.github.com/alexellis/fdbc90de7691a1b9edb545c17da2d975#file-prep-sh">
instructions with shell file</a> updated for <a target="_blank" href="https://blog.alexellis.io/serverless-kubernetes-on-raspberry-pi/">running on the Pis</a> to install <a target="_blank" href="https://openfaas.com/">OpenFaaS</a>.

CNCF Ambassador Chris Short developed the
<a target="_blank" href="https://rak8s.io/"> rak8s (pronounced rackets) library</a> to 
<a target="_blank" href="https://chrisshort.net/my-raspberry-pi-kubernetes-cluster/">make use of Ansible on Raspberry Pi</a>.

Others:
   * https://blog.hypriot.com/getting-started-with-docker-on-your-arm-device/
   * https://blog.sicara.com/build-own-cloud-kubernetes-raspberry-pi-9e5a98741b49
   <br /><br />


<hr />

<a name="PodIPs"></a>

### App containers within Pods

Kubernetes runs apps (application executables) that have been "dockerized" within a <strong>Container</strong> "image" folder stored for retrieval from a <strong>container image registry</strong> such as:
   * Docker Hub cloud
   * Docker Enterprise (on-prem)
   * <a target="_blank" href="https://wilsonmar.github.io/jfrog/">JFrog Artifactory</a>
   * Nexus
   * <a target="_blank" href="https://quay.io/">Quay.io</a> (operated by Red Hat)
   <br /><br />

Kubernetes runs apps containers within <strong>Pods</strong>.

<img alt="k8s-nodes-ports-1048x714" width="1048" height="714" src="https://user-images.githubusercontent.com/300046/133039621-09f5c865-0d83-4352-b58c-c5f4dac81918.png">
<!-- From https://app.pluralsight.com/library/courses/getting-started-kubernetes/exercise-files -->

Every <strong>app Container</strong> has its own <strong>unique port number</strong> to a unique <strong>internal</strong> IP assigned to each Pod.

App Containers within the same Pod share the <strong>same internal IP address</strong>, hostname, Linux namespaces, cgroups, storage Volumes, and other resources.

1. List all Container images in all namespaces:

   <pre>kubectl get pods --all-namespaces -o jsonpath="{.items[*].spec.containers[*].image}" |\
tr -s '[[:space:]]' '\n' |\
sort |\
uniq -c
   </pre>

Fetch all Pods in all namespaces using kubectl get pods --all-namespaces
Format the output to include only the list of Container image names using -o jsonpath={.items[*].spec.containers[*].image}. This will recursively parse out the image field from the returned json.
See the jsonpath reference for further information on how to use jsonpath.
Format the output using standard tools: tr, sort, uniq
Use tr to replace spaces with newlines
Use sort to sort the results
Use uniq to aggregate image counts


<a name="Sidecars"></a>

### Sidecars within Pods 

Those who choose to use the <a target="_blank" href="https://wilsonmar.github.io/service-mesh">Service Mesh Istio architecture</a> place an "Envoy proxy" in each Pod to facilitate communictions and retry logic from app containers with business logic.

Within each Pod, all Containers share the same lifecycle -- get created and removed together.


<a name="Cluster"></a>

### Pod Replicas within Worker Nodes

<a target="_blank" href="https://user-images.githubusercontent.com/300046/132930586-4634a11c-7aa1-4667-ab24-b019144a2265.png"><img alt="k8s-arch-xteam-793x573" width="793" height="573" src="https://user-images.githubusercontent.com/300046/132930586-4634a11c-7aa1-4667-ab24-b019144a2265.png"></a>

As illustrated on the right side of <a target="_blank" href="https://x-team.com/blog/introduction-kubernetes-architecture/">the diagram above</a>:

"Worker Nodes", the equivalent of physical host servers, are created to house various numbers of Pods.

LIMITS: Production setups have at least 3 nodes per cluster. K8s supports up to 5,000 node clusters of up to 150,000 pods (at v1.17).

Each Pod is "replicated" with the same set of Containers specified in a Deployment specification.

Again, "Replicas" of Pods are created within "Worker Nodes".

> PROTIP: "The median number of containers running on a single host is about 10." -- Sysdig, April 17, 2017. But there can be up to 100 pods per node (at v1.17)


<a name="ControlPlane"></a>

## Control Plane Orchestration within a Master Node

Each cloud vendor has its own "control plane" GUI (<strong>Master Node</strong>) to run and manage <strong>Worker Nodes</strong>.

The Kubernetes <strong>Master Node</strong> has several services processes which together orchestrates (manages) several <strong>Worker Nodes</strong>. The Master Node (aka "Control Plane") runs several key processes (aka service components):

   * <strong>etcd</strong> is the database (key-value data store) within each cluster. PROTIP: etcd is the one <strong>stateful</strong> component, so many run it in a cluster separate for its own HA redundancy.

   * The <strong>Kube-Controller-Manager</strong> watches the state (status) of each cluster (as persisted in etcd) and  attempts to move current the state towards the desired state (as defined in Yaml files). <a href="#Controllers">Various Controllers</a> actually instantiate the actual resource represented by Kubernetes resource definitions. 

   * The <strong>kube-scheduler</strong> assigns Pods to Nodes. 

   * The <strong>API server</strong> receives all administrative commands as REST API calls. Command-line programs communicating with Kubernetes do so by converting commands into REST API calls to the API server (named "kube-apiserver").


<a name="Internals"></a>

## Core K8s Internals 

Kubernetes automates resilience by abstracting the network and storage shared by ephemeral replaceable <strong>pods</strong> which the Kubernetes Controller replicates to increase capacity.

![k8s-pod-sharing-324x247](https://user-images.githubusercontent.com/300046/103014494-12099f80-44fc-11eb-9e4e-3380963051da.png)
<a target="_blank" href="https://www.coursera.org/learn/foundations-google-kubernetes-engine-gke/lecture/8l95i/kubernetes-concepts">*</a>

   This diagram (from CloudAcademy) illustrates core technical concepts about Kubernetes.
   In the center at the right:  

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/95297556-e4378780-0837-11eb-9d12-7c924dc0f449.png"><img alt="k8s-cloudacademy-after" src="https://user-images.githubusercontent.com/300046/95297556-e4378780-0837-11eb-9d12-7c924dc0f449.png"></a>

   Pods consume static <a href="#ConfigMaps">Configmaps</a> and <a href="#Secrets">Secrets</a>.

   <a href="#Volumes">Volumes of persistent data storage</a>


<a name="AutoScaling"></a>

### Auto-Scaling

Within AWS, Auto Scaling Groups (ASGs) are used to scale nodes.

   * https://spot.io/resources/kubernetes-autoscaling-3-methods-and-how-to-make-them-great/
   * https://spot.io/resources/kubernetes-autoscaling/kubernetes-replicaset-kubernetes-scalability-explained/
   * https://docs.openshift.com/container-platform/4.8/nodes/pods/nodes-pods-vertical-autoscaler.html
   <br /><br />

Within Kubernetes are these auto-scaling mechanisms:

* <strong>Cluster Autoscaler (CA)</strong> adjusts the <strong>number of nodes in a cluster</strong>. It automatically adds or removes nodes in a cluster when nodes have insufficient resources to run a pod (adds a node) or when a node remains underutilized, and its pods can be assigned to another node (removes a node).

* <strong>HPA (Horizontal Pod Autoscaler)</strong> scales <strong>more copies of the same pod</strong> (assuming that the hosted application supports horizontal scaling via replication). HPA uses <a target="_blank" href="https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/#scaling-on-custom-metrics">custom metrics</a> such as the number of incoming session requests by end-users to a service load balancer.

<a name="SampleVPARec"></a>
* <strong>VPA (Vertical Pod Autoscaler)</strong> analyzes standard CPU and memory resource usage metrics to provide recommendations CPU and memory resource configuration to align cluster resource allotment with actual usage. An example of its recommendation output:

   <pre>
    status:
      conditions:
          - lastTransitionTime: "2020-12-23T10:33:13Z"
          status: "True"
          type: RecommendationProvided
      recommendation:
         containerRecommendations:
         - containerName: nginx
         lowerBound:
            cpu: 40m
            memory: 3100k
         target:
            cpu: 60m
            memory: 3500k
         upperBound:
            cpu: 831m
            memory: 8000k
   </pre>

   The <tt>lowerBound</tt> limit defines the minimum amount of resources that containers need. 

   If configured, the VPA updater can automatically restart nodes to carry out its recommendations and <strong>increase or decrease existing pod containers</strong>. But that is not recommended in production because of concerns about churn disrupting reliability -- exceeding the <a target="_blank" href="https://kubernetes.io/docs/tasks/run-application/configure-pdb/">Kubernetes PodDisruptionBudget</a> (PDB) -- minAvailable and maxUnAvailable.

* <a target="_blank" href="https://www.densify.com/product"k8>Densify.com</a> provides a commercially available (paid) option which uses sophisticated Machine Learning mechanisms. It provides an <a target="_blank" href="https://www.densify.com/docs-api/Content/APIHome.htm">API</a>.

   <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1664817199/k8s-densify-w-1900_907_w3zujq.png"><img alt="Desify" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1664817199/k8s-densify-w-1900_907_w3zujq.png"></a>


<a name="VPA"></a>

### VPA (Vertical Pod Autoscaler)

This section is based on several references:

   * https://www.kubecost.com/kubernetes-autoscaling/kubernetes-vpa/ (the best description)
   * https://www.densify.com/kubernetes-autoscaling/kubernetes-vpa (identifies issues with VPA)
   * https://www.giantswarm.io/blog/vertical-autoscaling-in-kubernetes
   * https://docs.aws.amazon.com/eks/latest/userguide/vertical-pod-autoscaler.html
   * https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler
   * https://cloud.google.com/kubernetes-engine/docs/concepts/verticalpodautoscaler
   * <a target="_blank" href="https://medium.com/infrastructure-adventures/vertical-pod-autoscaler-deep-dive-limitations-and-real-world-examples-9195f8422724">BLOG</a>:
   * <a target="_blank" href="https://cloud.google.com/kubernetes-engine/docs/concepts/verticalpodautoscaler">verticalpodautoscaler CRD</a>
   * https://blog.digitalis.io/kubernetes-capacity-planning-with-vertical-pod-autoscaler-7c1690dc38b3
   * https://docs.oracle.com/en-us/iaas/Content/ContEng/Tasks/contengusingverticalpodautoscaler.htm
   * https://www.alibabacloud.com/help/en/container-service-for-kubernetes/latest/vertical-pod-autoscaling
   <br /><br />

By default, the Kubernetes scheduler does not re-evaluate a pod’s resource needs after that pod is scheduled. As a result, over-allocated resources are not freed or scaled-down. Conversely, if a pod didn’t request sufficient resources, the scheduler won’t increase them to meet the higher demand.
The implications of this is that:

   * If resources are over-allocated, unnecessary workers are added, waste unused resources, and monthly bills increase.

   * If resources are under-allocated, resources will get used up quickly, application performance will suffer, and the kubelet may start killing pods until resource utilization drops.
   <br /><br />

The Kubernetes Vertical Pod Autoscaler (VPA) VPA automatically adjusts the CPU and memory reservations for pods to "right size" applications. It analyzes resource usage over time to either down-scale pods that are over-requesting resources, and up-scale pods that are under-requesting resources.
It maintains ratios between limits and requests specified in initial containers configuration.
VPA frees users from manually adjusting resource limits and requests for containers in their pods. 

To deploy the Vertical Pod Autoscaler to your cluster: 

1. Define a Kubernetes Deployment that uses VPA for resource recommendations, using this sample YAML manifest:

   <pre>apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.7.8
        ports:
        - containerPort: 80
   </pre>

    Note that the file above has no CPU or memory requests. The pods in the Deployment belong to the VerticalPodAutoscaler (shown in the next paragraph) as they are designated with the kind, Deployment and name, nginx-deployment.

1. Define a VPA resource:

   <pre>
apiVersion: autoscaling.k8s.io/v1
kind: VerticalPodAutoscaler
metadata:
  name: app-vpa
spec:
  targetRef:
    apiVersion: "apps/v1"
    kind: Deployment
    name: app
  resourcePolicy:
    containerPolicies:
      - containerName: '*'
        controlledResources:
          - cpu
          - memory
        maxAllowed:
          cpu: 1
          memory: 500Mi
        minAllowed:
          cpu: 100m
          memory: 50Mi
  updatePolicy:
    updateMode: "Auto"   
   </pre>

   The targetRef (reference) allows specification of which workload is subject VPA actions. The above example says <tt>kind: Deployment</tt>, it can also be any of Deployment, DaemonSet, ReplicaSet, StatefulSet, ReplicationController, Job, or CronJob.

1. Create an existing Amazon EKS cluster.
1. The <a target="_blank" href="https://github.com/kubernetes-incubator/metrics-server">Metrics server</a> must be deployed in your cluster.
1. Open a terminal window.
1. Upgrade openssl to at least version 1.1.1 (currently LibreSSL 2.8.3):

   <pre><strong>openssl version</strong></pre>

1. Navigate to a directory that corresponds to your GitHub account, where you want to download source code.
1. View the documentation

   https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler

   Autoscaling is configured with a Custom Resource Definition object called VerticalPodAutoscaler. 

   CAUTION: There is a <a target="_blank" href="https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler#installation">VPA version specific to each version of Kubernetes</a>.

1. Clone the kubernetes/autoscaler GitHub repository and change to directory:
             
   <pre><strong>
   git clone https://github.com/kubernetes/autoscaler.git
   cd autoscaler/vertical-pod-autoscaler/
   </strong></pre>

1. unset environment variables $REGISTRY and $TAG unless you want to use a non-default version of VPA.

1. (Optional) If you have already deployed another version of the Vertical Pod Autoscaler, remove it:

   If running on GKE, clean up role bindings created in Prerequisites:

   <pre><strong>kubectl delete clusterrolebinding myname-cluster-admin-binding
   </strong></pre>

   <pre><strong>./hack/vpa-down.sh
   </strong></pre>

   If VPA stops running in a cluster, resource requests for the pods already modified by VPA will not change, but any new pods will get resources as defined in your controllers (i.e. deployment or replicaset) and not according to previous recommendations made by VPA.

1. This assumes your nodes have internet access to the k8s.gcr.io container registry. If not, pull the following images and push them to your own private repository. For more information about how to pull the images and push them to your own private repository, see https://docs.aws.amazon.com/eks/latest/userguide/copy-image-to-repository.html
Copy a container image from one repository to another repository.

   <pre>
   k8s.gcr.io/autoscaling/vpa-admission-controller:0.10.0
   k8s.gcr.io/autoscaling/vpa-recommender:0.10.0
   k8s.gcr.io/autoscaling/vpa-updater:0.10.0
   </pre>

   If you're pushing the images to a private Amazon ECR repository, then replace k8s.gcr.io in the manifests with your registry. Replace 111122223333 with your account ID. Replace region-code with the AWS Region that your cluster is in. The following commands assume that you named your repository the same as the repository name in the manifest. If you named your repository something different, then you'll need to change it too.

   <pre>
   sed -i.bak -e 's/k8s.gcr.io/111122223333.dkr.ecr.region-codeamazonaws.com/' ./deploy/admission-controller-deployment.yaml
   sed -i.bak -e 's/k8s.gcr.io/111122223333.dkr.ecr..dkr.ecr.region-codeamazonaws.com/' ./deploy/recommender-deployment.yaml
   sed -i.bak -e 's/k8s.gcr.io/111122223333.dkr.ecr..dkr.ecr.region-codeamazonaws.com/' ./deploy/updater-deployment.yaml
   </pre>
 
1. Check if all Kubernetes system components are running: 3 pods (recommender, updater and admission-controller) all in Running state:

   <pre><strong>kubectl --namespace=kube-system get pods|grep vpa
   </strong></pre>

1. Check that the VPA service actually exists:

   <pre><strong>kubectl describe -n kube-system service vpa-webhook
   </strong></pre>

   <pre>Name:              vpa-webhook
Namespace:         kube-system
Labels:            &LT;none>
Annotations:       &LT;none>
Selector:          app=vpa-admission-controller
Type:              ClusterIP
IP:                &LT;some_ip>
Port:              &LT;unset>  443/TCP
TargetPort:        8000/TCP
Endpoints:         &LT;some_endpoint>
Session Affinity:  None
Events:            &LT;none>
   </pre>

1. Check that the VPA admission controller is running correctly:

   <pre><strong>kubectl get pod -n kube-system | grep vpa-admission-controller
   </strong></pre>

   Sample output:
   
   <pre>vpa-admission-controller-69645795dc-sm88s 1/1 Running 0 1m
   </pre>

1. Check the logs of the admission controller using its id from the previous command, such as:

   <pre><strong>kubectl logs -n kube-system vpa-admission-controller-69645795dc-sm88s
   </strong></pre>

If the admission controller is up and running, but there is no indication of it actually processing created pods or VPA objects in the logs, the webhook is not registered correctly.

1. Deploy the Vertical Pod Autoscaler to your cluster:

   <pre><strong>./hack/vpa-up.sh</strong></pre>

   CAUTION: Whenever VPA updates pod resources, the pod is recreated, which causes all running containers to be restarted. The pod may be recreated on a different node.

   VPA recommendation might exceed available resources (e.g. Node size, available size, available quota) and cause pods to go pending. This can be partly addressed by using VPA together with <a target="_blank" href="https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#basics">Cluster Autoscaler</a>.

1. Check that the VPA Custom Resource Definition was created:

   <pre><strong>kubectl get customresourcedefinition | grep verticalpodautoscalers
   </strong></pre>

1. Verify that the Vertical Pod Autoscaler pods have been created successfully:

   <pre><strong>kubectl get pods -n kube-system</strong></pre>

   Sample output:

   <pre>NAME                                        READY   STATUS    RESTARTS   AGE
   ...
   metrics-server-8459fc497-kfj8w              1/1     Running   0          83m
   vpa-admission-controller-68c748777d-ppspd   1/1     Running   0          7s
   vpa-recommender-6fc8c67d85-gljpl            1/1     Running   0          8s
   vpa-updater-786b96955c-bgp9d                1/1     Running   0          8s
   </pre>

   The VPA project's components:

   * <strong>Recommender</strong> monitors the current and past resource consumption and, based on it, provides recommended values for the containers' cpu and memory requests.

   * <strong>Updater</strong> checks which of the managed pods have correct resources set and, if not, kills them so that they can be recreated by their controllers with the updated requests.

   * <strong>K8s Admission Plugin</strong> sets the correct resource requests on new pods (either just created or recreated by their controller due to Updater's activity).

   <a target="_blank" href="https://github.com/kubernetes/autoscaler/blob/master/vertical-pod-autoscaler/FAQ.md">Parameters to above in FAQ</a>. 

1. To verify that it works, deploy the hamster.yaml Vertical Pod Autoscaler:

   <pre><strong>kubectl apply -f examples/hamster.yaml
   </strong></pre>

   Example contents at <tt>autoscaler/vertical-pod-autoscaler/examples/hamster.yaml</tt>

   <pre>apiVersion: autoscaling.k8s.io/v1
kind: VerticalPodAutoscaler
metadata:
  name: my-app-vpa
spec:
  targetRef:
    apiVersion: "apps/v1"
    kind:       Deployment
    name:       my-app
  updatePolicy:
    updateMode: "Auto"
   </pre>

   * <tt>updateMode = auto</tt> applies the recommendations directly by updating/recreating the pods.
   CAUTION: When VPA applies the change, each pod restarts, which causes a workload disruption.

   * <tt>updateMode = initial</tt> applies the recommended values to newly created pods only.

   * <tt>updateMode = off</tt> simply stores the recommended values for reference. This is preferred in production environments. Feed the recommendations to a capacity monitoring dashboard such as Grafana, and apply the recommendations in the next deployment cycle.
   <br /><br />

1. Get pod IDs from the hamster sample application:

   <pre><strong>
   kubectl get pods -l app=hamster
   </strong></pre>

   Sample output:

   <pre>hamster-c7d89d6db-rglf5   1/1     Running   0          48s
   hamster-c7d89d6db-znvz5   1/1     Running   0          48s
   </pre>

1. Describe one of the pods to view its cpu and memory reservation to replace "c7d89d6db-rglf5" with one of the IDs returned in from the previous step:

   <pre><strong>
   kubectl describe pod hamster-c7d89d6db-rglf5
   </strong></pre>

   Sample output:

   <pre>Containers:
   hamster:
    Container ID:  docker://e76c2413fc720ac395c33b64588c82094fc8e5d590e373d5f818f3978f577e24
    Image:         k8s.gcr.io/ubuntu-slim:0.1
    Image ID:      docker-pullable://k8s.gcr.io/ubuntu-slim@sha256:b6f8c3885f5880a4f1a7cf717c07242eb4858fdd5a84b5ffe35b1cf680ea17b1
    Port:          <none>
    Host Port:     <none>
    Command:
      /bin/sh
    Args:
      -c
      while true; do timeout 0.5s yes >/dev/null; sleep 0.5s; done
    State:          Running
      Started:      Fri, 27 Sep 2019 10:35:16 -0700
    Ready:          True
    Restart Count:  0
    Requests:
      cpu:        100m
      memory:     50Mi
   </pre>

   See that the original pod reserves 100 millicpu of CPU and 50 mebibytes of memory. For this example application, 100 millicpu is less than the pod needs to run, so it is CPU-constrained. It also reserves much less memory than it needs. The Vertical Pod Autoscaler vpa-recommender deployment analyzes the hamster pods to see if the CPU and memory requirements are appropriate. If adjustments are needed, the vpa-updater relaunches the pods with updated values.

1. Wait for the vpa-updater to launch a new hamster pod. This should take a minute or two. You can monitor the pods:

   Note: If you are not sure that a new pod has launched, compare the pod names with your previous list. When the new pod launches, you will see a new pod name.

   <pre><strong>kubectl get --watch pods -l app=hamster
   </strong></pre>

   The response is a pod ID such as "hamster-c7d89d6db-jxgfv".

1. When a new hamster pod is started, describe it and view the updated CPU and memory reservations.

   <pre><strong>kubectl describe pod hamster-c7d89d6db-jxgfv
   </strong></pre>

   Sample output:

   <pre>Containers:
  hamster:
    Container ID:  docker://2c3e7b6fb7ce0d8c86444334df654af6fb3fc88aad4c5d710eac3b1e7c58f7db
    Image:         k8s.gcr.io/ubuntu-slim:0.1
    Image ID:      docker-pullable://k8s.gcr.io/ubuntu-slim@sha256:b6f8c3885f5880a4f1a7cf717c07242eb4858fdd5a84b5ffe35b1cf680ea17b1
    Port:          &LT;none>
    Host Port:     &LT;none>
    Command:
      /bin/sh
    Args:
      -c
      while true; do timeout 0.5s yes >/dev/null; sleep 0.5s; done
    State:          Running
      Started:      Fri, 27 Sep 2019 10:37:08 -0700
    Ready:          True
    Restart Count:  0
    Requests:
      cpu:        587m
      memory:     262144k
   </pre>

   In the sample output above, see that the cpu reservation increased to 587 millicpu, which is over five times the original value. The memory increased to 262,144 Kilobytes, which is around 250 mebibytes, or five times the original value. This pod was under-resourced, and the Vertical Pod Autoscaler corrected the estimate with a much more appropriate value.

1. View the new recommendation:

   <pre><strong>kubectl describe vpa vpa/hamster-vpa
   </strong></pre>

   Sample output was <a name="SampleVPARec">shown above</a>:

   <pre>recommendation:
	containerRecommendations:
	- containerName: nginx
  	lowerBound:
    	cpu: 40m
    	memory: 3100k
  	target:
    	cpu: 60m
    	memory: 3500k
  	upperBound:
    	cpu: 831m
    	memory: 8000k
   </pre>

1. View the new recommendation:

   <pre><strong>kubectl describe vpa/hamster-vpa
   </strong></pre>

   Sample output:

   <pre>
Name:         hamster-vpa
Namespace:    default
Labels:       <none>
Annotations:  kubectl.kubernetes.io/last-applied-configuration:
                {"apiVersion":"autoscaling.k8s.io/v1beta2","kind":"VerticalPodAutoscaler","metadata":{"annotations":{},"name":"hamster-vpa","namespace":"d...
API Version:  autoscaling.k8s.io/v1beta2
Kind:         VerticalPodAutoscaler
Metadata:
  Creation Timestamp:  2019-09-27T18:22:51Z
  Generation:          23
  Resource Version:    14411
  Self Link:           /apis/autoscaling.k8s.io/v1beta2/namespaces/default/verticalpodautoscalers/hamster-vpa
  UID:                 d0d85fb9-e153-11e9-ae53-0205785d75b0
Spec:
  Target Ref:
    API Version:  apps/v1
    Kind:         Deployment
    Name:         hamster
Status:
  Conditions:
    Last Transition Time:  2019-09-27T18:23:28Z
    Status:                True
    Type:                  RecommendationProvided
  Recommendation:
    Container Recommendations:
      Container Name:  hamster
      Lower Bound:
        Cpu:     550m
        Memory:  262144k
      Target:
        Cpu:     587m
        Memory:  262144k
      Uncapped Target:
        Cpu:     587m
        Memory:  262144k
      Upper Bound:
        Cpu:     21147m
        Memory:  387863636
Events:          &LT;none>
   </pre>

1. Print YAML contents with all resources that would be understood by <tt>kubectl diff|apply|...</tt> commands:

   <pre><strong>./hack/vpa-process-yamls.sh print
   </strong></pre>

1. Delete it by running the same yaml file as used to create it:

   <pre><strong>
   kubectl delete -f examples/hamster.yaml
   </strong></pre>



<hr />

<a name="SideroTalos"></a>

## Sidero Talos OS on Bare Metal

There is on-going debate about <a target="_blank" href="https://thenewstack.io/a-guide-to-linux-operating-systems-for-kubernetes/">what Operating System to use with Kubernetes</a>
to reduce overhead and security exposures. Options are Ubuntu, Debian, CentOS, Red Hat Enterprise Linux (RHEL), Fedora. Operating systems compatible with Google Kubernetes Engine on Linux:

   * https://cloud.google.com/migrate/containers/docs/compatible-os-versions
   * https://computingforgeeks.com/minimal-container-operating-systems-for-kubernetes/
   <br /><br />

Reaching v1.0 April 2022, the <a target="_blank" href="ttps://github.com/talos-systems/talos/">open-source</a> headless Talos Linux OS is <a target="_blank" href="https://www.siderolabs.com/platform/talos-os-for-kubernetes/">purpose-built for Kubernetes</a>.

Talos has no shell, no SSH, a read-only file system -- making it small and secure.

To get the most performance possible out of hardware, with minimal overhead,
run Kubernetes on bare-metal machines.

To simplify the creation and management of bare metal Kubernetes clusters, Sidero Labs, the company behind Talos Linux, also released Sidero Metal, a cluster API provider for bare metal, that installs Talos Linux based Kubernetes clusters, in a scalable and declarative way. (It's built around the <a target="_blank" href="https://github.com/kubernetes-sigs/cluster-api">Cluster gRPC API (CAPI) project</a>’s <a target="_blank" href="https://cluster-api.sigs.k8s.io/introduction.html"><strong>clusterctl</strong></a> CLI tool.

### Replace failed node

PROTIP: Consider what happens if adding a new member results in an error and cannot join the cluster (due to a misconfiguration). See https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/#replacing-a-failed-etcd-member

1. To remove a failed node, <strong>first remove</strong> the failed nodes before adding new ones.

   If you have a 3-node etcd cluster, even if one failed, adding another node would make it a 4-node cluster (counting the down node). That results in upping the minimum quorum to 3 nodes to prevent "split brain" cluster failure. If the new member is misconfigured, and cannot join the cluster, you now then have two failed nodes, and not meet the required quorum of 3.

   Use of Talos Linux makes recovery of Kubernetes simpler because Talos Linux has helper functions that automate the removal of down etcd nodes. 

   <pre><strong>talosctl etcd remove-member ip-172-31-41-76
   kubectl delete node ip-172-31-41-76
   </strong></pre>

   Without Talos, adding an extra node increases quorum, which is actually not a good thing. For example, if you have a 3-node etcd cluster, a quorum of 2 nodes is required for the cluster to continue processing writes. Removing a working node would remove fault tolerance. A failure during the transition before another node is successfully added would cause the cluster to be downed. So...

   With Talos, adding an extra node does NOT increase quorum. Since Talos Linux uses the <strong>Learner feature of etcd</strong> — all new control plane nodes join etcd as non-voting learners. When they have caught up with all transactions, the node is automatically promoted to a voting member.   
   
1. To add a new control plane node under Talos Linux, boot a new node with the <tt>controlplane.yaml</tt> used to create other control plane nodes.

### Replace working node

If the node to be replaced is still working, the order of actions is the opposite of when the node has failed. For example, if you have a 3-node etcd cluster, a quorum of 2 nodes is required for the cluster to continue processing writes. Removing a working node would remove fault tolerance. A failure during the transition before another node is successfully added would cause the cluster to be downed. So...

1. BEFORE removing the working node, add the new node, (with a more preferable AWS server type for different CPU or memory). This would increase a 3-node cluster to increased to 4 nodes.

   A failure during the transition would reduce the cluster to 3 nodes, still a viable cluster.

   Add the new control plane node by booting using the <tt>controlplane.yaml</tt> file.

2. Remove the working node by telling the node that it is being replaced to leave the cluster. Using a  sample IP address:

   <pre><strong>
   talosctl -n 172.31.138.87 reset
   kubectl delete node
   </strong></pre>

   Since Talos is aware that it's in a control plane node, it knows to gracefully leave etcd (be erased) when it receives the reset command.

A multi-master configuration is required so a single Master does not become a single point of failure.
Workers connect to and communicate with any master's kube-apiserver via a high availability load balancer. See https://dominik-tornow.medium.com/kubernetes-high-availability-d2c9cbbdd864

### Talos

The lifecycle of each Talos machine is managed by a <a target="_blank" href="https://www.linkedin.com/company/sidero-labs/">SideroLabs</a> (<a target="_blank" href="https://www.youtube.com/c/SideroLabs/videos">Videos</a>, <a target="_blank" href="https://www.sidero.dev/docs/latest/">sidero.dev</a>, <a target="_blank" href="https://twitter.com/siderolabs?lang=en">@SideroLabs</a>) workload cluster, open-sourced at <a target="_blank" href="https://github.com/siderolabs/sidero">github.com/siderolabs/sidero</a>. Sidero provides bootstrap/controlplane providers for running Talos machines on <strong>bare-metal</strong> x86 or arm64 machines on-prem, or <a target="_blank" href="https://www.sidero.dev/docs/v0.5/guides/sidero-on-rpi4/">on Raspberry Pi</a> (<a target="_blank" href="https://www.youtube.com/watch?v=aHu1lFir7UU" title="Mar 10, 2021">VIDEO</a> by <a target="_blank" href="https://www.linkedin.com/in/spencersmith23/">Spencer Smith</a>: "metal-rpl_4-arm64.img.xz" on 16GB SD). 

<a target="_blank" href="https://www.youtube.com/watch?v=LryECwitUcw&t=52s">VIDEO</a>: Try within Docker on MacOS.

Sidero offers a <strong>declarative</strong> way to provision, assign, wipe servers ("machines as cattle"). 

Sidero uses port 8081 for a combined iPXE and gRPC service, UDP 69 for TFTP, and UDP 51821 for the IPv6 SideroLink Wireguard keyed point-to-point connections. Talos' KubeSpan yaml config automates WireGuard encryption to securely add workers on remote networks. KubeSpan delivers a solution to the coordination and key exchange problem, allowing all nodes to discover and communicate in an encrypted channel with all other nodes – even across NAT and firewalls. It supports roaming of devices, and transparently handles the correct encryption of traffic that is destined to another member of the cluster, while leaving other traffic unencrypted. 

All that enables Kubernetes to operate <a target="_blank" href="https://www.siderolabs.com/blog/kubespan-and-multi-cloud-kubernetes/">multi-region/multi-cloud</a>.
Arges is its multi-environment management service.

An <a target="_blank" href="https://www.sidero.dev/docs/v0.5/getting-started/prereq-dhcp/">ISC DHCP server</a> (such as on Ubiquiti EdgeRouter products) <a target="_blank" href="https://www.sidero.dev/docs/v0.5/getting-started/">is needed</a>.

Sidero <a target="_blank" href="https://www.sidero.dev/docs/v0.5/resource-configuration/servers/#ipmi">uses</a> IPMI information to control Server power state, reboot servers and set boot order automation. 
Sidero also supports BMC automation.

Talos node sends over the <a target="_blank" href="https://www.sidero.dev/docs/v0.5/overview/siderolink/">SideroLink</a> connection two streams: kernel logs (dmesg) and Talos events.


<hr />

<a name="Internals"></a>

## Cloud K8s GUI & CLI

<a href="#Clouds">Each cloud SaaS vendor listed above</a> provides its own <strong>GUI</strong> on internet browser (such as Google Chrome) for Kubernetes Administrators to access.

Each cloud vendor also has its own CLI command program (such as AWS <tt>eksctl</tt>) to provide proprietary features.

   kubctl processes manifests (in yaml format) by translating them to API calls to the Kubernetes API program, a part of the "k8s master". 
   
   * <a href="#GetAPIServices">Get a list of all K8s API Services</a>
   <br /><br />

<hr />

<a name="CLISetup"></a>

## CLI Setup

PROTIP: Training vendors provide you a choice to use a browser without installing anything. 
But a more performant (satisfying) approach is to install credentials and work from your laptop's Terminal program. 

Use of a browser would require copy and pasting of accounts and passwords, bringing up CLI, creating environment variables, etc. every time.

However, using a CLI would require some installation and configuration work.

Use my step-by-step instructions to get CLI installed and configured on your laptop:

   * For AWS CLI, see https://wilsonmar.github.io/aws-onboarding/

   * For Azure CLI, see https://wilsonmar.github.io/azure-cloud-onramp/

   * For GCP CLI, see https://wilsonmar.github.io/gcp/
   <br /><br />


<a name="EKSAnywhere"></a>

## AWS ECS & EKS Anywhere

https://aws.amazon.com/ko/blogs/aws/getting-started-with-amazon-ecs-anywhere-now-generally-available/

https://aws.amazon.com/eks/eks-anywhere
(open-sourced with an Apache-2.0 license at <a target="_blank" href="https://github.com/aws/eks-anywhere/">https://github.com/aws/eks-anywhere</a>, tested using Prow)
manages Kubernetes clusters using VMware vSphere
<a target="_blank" href="https://aws.amazon.com/eks/eks-distro/">on premises using AWS EKS Distro</a>

<a target="_blank" href="https://aws.amazon.com/blogs/aws/amazon-eks-anywhere-now-generally-available-to-create-and-manage-kubernetes-clusters-on-premises/">GA</a>

https://anywhere.eks.amazonaws.com/

https://anywhere.eks.amazonaws.com/docs/getting-started/install/

<pre>brew install aws/tap/eks-anywhere
eksctl anywhere version
</pre>


<hr />

<a name="KubectlCommands"></a>

## Kubectl Commands

CAUTION: The trouble with lab enviornments is that you are given a <strong>limited amount of time</strong> each session -- as little as 30 minutes.

<a name="ShellScripts"></a>

### Shell scripts in SSH

PROTIP: Because all work is lost at the end of each session, I have found it useful to create shell scripts I can paste in a Shell Conole.

   * On AWS: sample.sh

   * On Azure: https://github.com/wilsonmar/aws-quickly describes use of:

   <ul><pre>bash -c "$(curl -fsSL https://raw.githubusercontent.com/wilsonmar/DevSecOps/main/gcp/gks-cluster.sh)"</pre>
   </ul>

   * On GCP:

   <ul><pre>bash -c "$(curl -fsSL https://raw.githubusercontent.com/wilsonmar/DevSecOps/main/gcp/gks-cluster.sh)"</pre>
   </ul>

The script downloads what it needs from the public GitHub and runs it automatically.

The programmatic approach of scripts mean that code is needed to check conditions before each command (to see if the command needs to run). Code is also needed to obtain values in variables passed to the next step.

<hr />

## Docker and Alternative Runtimes

<a target="_blank" href="https://www.youtube.com/watch?v=7KUdmFyefSA&list=RDCMUCdngmbVKX1Tgre699-XLlUA&start_radio=1&t=526">VIDEO</a>: Kubernetes only need the Container Runtime from Docker's Engine, which Kubernetes created a "dockershim" to use Docker's Container Runtime. Then Docker extracted and gave to CNCF "containerd".

This diagram is <a href=#Sanders">Sander</a> on a lightboard:

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1668917299/k8s-docker-runtiimes-966x636_owe72k.jpg"><img alt="k8s-docker-runtiimes-966x636.jpg" width="966" width="636" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1668917299/k8s-docker-runtiimes-966x636_owe72k.jpg"></a>

Runc is supported by CRI-O, Docker, ContainerD. Runc is the low-level tool which does the "heavy lifting" of spawning a Linux container. (<a target="_blank" href="https://www.youtube.com/watch?v=0uy2V2kYl4U" title="Feb 15, 2019">See CVE-2019-5736</a>).

BTW Kubernetes had worked with <strong>rkt</strong> (pronounced "rocket") containers, which provided a CLI for containers as part of CoreOS. Rkt became the first archived project of CNCF after IBM bought Red Hat and its competing <a target="_blank" href="https://github.com/kubernetes-sigs/cri-o">cri-o technology used with OpenShift.


<a name="Inside"></a>

## Inside each Node

   * <a target="_blank" href="https://www.youtube.com/watch?v=q1PcAawa4Bg&list=PLLasX02E8BPCrIhFrc_ZiINhbRkYMKdPT">VIDEO: How Kubernetes Works</a> explained by <a target="_blank" href="https://www.linkedin.com/in/brendan-burns-487aa590/"> Brendan Burns</a> (K8s co-founder)
   <br /><br />


<img width="914" alt="k8s-docker" src="https://user-images.githubusercontent.com/300046/95684822-564dfa80-0bb1-11eb-803a-1c742cf0bd07.png">




## Aggregation Layer

The <strong>aggregation layer</strong> lets you install additional Kubernetes-style APIs in your cluster.


   * Load balancing for Compute Engine instances
   * Node pools to designate subsets of nodes within a cluster for additional flexibility
   * Automatic scaling of your cluster's node instance count
   * Automatic upgrades for your cluster's node software
   * Node auto-repair to maintain node health and availability
   * Logging and Monitoring with Cloud Monitoring for visibility into your cluster

Kubernetes is called "container orchestration" software because it automates the deployment, scaling, and management of <strong>containerized</strong> applications<a target="_blank" href="https://en.wikipedia.org/wiki/Kubernetes">[Wikipedia]</a>. 

   * Authentication -> Authorization -> <a href="#Admission">Admission Control</a>
   * Load balancing
   * Mixed operating systems (Ubuntu, Alpine, etc.)
   * Using images in Docker avoids the "it works on my machine" troubleshooting of setup or dependencies
   * Unlike Elastic Beanstalk, the k8s master controls what each of its nodes do
   <br /><br />


<hr />

## KCNA Exam 

The Kubernetes and Cloud Native Associate is the entry level certification in Kubernetes.

https://www.cncf.io/certification/kcna/

<a target="_blank" href="https://docs.linuxfoundation.org/tc-docs/certification/frequently-asked-questions-kcna">FAQ</a:
The $250 closed-book exam is proctored by PSI online. Answer 75% of 90 multiple-choice questions in 1.5 hours.
Good for 3 years.

<a target="_blank" href="https://docs.linuxfoundation.org/tc-docs/certification/lf-handbook2">
The exam Handbook</a> lists:

   * Kubernetes Fundamentals 46%
   * Container Orchestration 22%
   * Cloud Native Architecture 16%
   * Cloud Native Observability 8%
   * Cloud Native Application Delivery 8%
   <br /><br />




<a name="CKAD_ExamDomains"></a>

## CKAD Exam 

Here is the full text of the <a target="_blank" href="https://github.com/cncf/curriculum">CNCF's exam curriculum</a>

13% Core Concepts (<a href="#APIs">APIs</a>, Create and configure basic <a href="#Pods">pods</a>, <a href="Namespaces">namespaces</a>)<br />
   * Understand Kubernetes API primitives
   <br /><br />

18% Configuration (<a href="#ConfigMaps">ConfigMaps</a>, <a href="#SecurityContexts">SecurityContexts</a>, <a href="#Resources">Resource Requirements</a>, Create & consume <a href="#Secrets">Secrets</a>, <a href="#ServiceAccounts">ServiceAccounts</a>
   <br /><br />

10% <a href="#Multi-Container">Multi-Container Pods</a> design patterns (e.g., <a href="#Ambassador">ambassador</a>, <a href="#Adapter">adapter</a>, <a href="#Sidecar">sidecar</a>)
   <br /><br />

18% Observability (<a href="#Probes">Liveness & Readiness Probes</a>, Container Logging, Metrics server, Monitoring apps, Debugging)  <br /><br />

20% Pod Design (<a href="#Labels">Labels</a>, <a href="#Selectors">Selectors</a>, <a href="#Annotations">Annotations</a>, Deployments, Rolling Updates, <a href="#Rollbacks">Rollbacks</a>, <a href="#Rollbacks">Rollbacks</a>, <a href="#Jobs">Jobs</a>, <a href="#CronJobs">CronJobs</a>)
   <br /><br />

13% <a href="#Services">Services</a> &amp; Networking (<a href="#NetworkPolicies">NetworkPolicies</a>)
   <br /><br />

08% State Persistence (<a href="#Volumes">Volumes</a>, <a href="#pvc">PersistentVolumeClaims</a>) for storage
  <br /><br />

<img alt="k8s-ckad-logo-328x311.jpg" width="328" height="311" src="https://user-images.githubusercontent.com/300046/95666890-b09c7c00-0b1b-11eb-820c-ca44d8c9c0e5.jpg">


<a name="CKA"></a>

### CKA Exam Domains

<a target="_blank" href="https://www.cncf.io/certification/expert/">3-hour Certified Kubernetes Administrator (CKA)</a> exams CNCF first announced November 8, 2016. 

<table border="1" cellspacing="0" cellpadding="4">
<tr valign="top"><td>
    19% Core Concepts<br />
    12% Installation, Configuration & Validation<br />
    12% Security<br />
    11% Networking<br />
    11% Cluster Maintenance<br />
    10% Troubleshooting<br />
    08% Application Lifecycle Management<br />
    07% Storage<br />
    05% Scheduling<br />
    05% Logging / Monitoring<br />
</td></tr>
</table>

+<a target="_blank" href="https://github.com/walidshaari/Kubernetes-Certified-Administrator">https://github.com/walidshaari/Kubernetes-Certified-Administrator</a> lists links by exam domain.

### Certificed Kubernauts.io Practioner (CKP)

https://trainings.kubernauts.sh/ describes a certification offered independently by 
https://kubernauts.de/en/home/ (<a target="_blank" href="https://twitter.com/kubernauts/">@kubernauts</a> in Germany) which also provides free <a href="#Namespaces">namespaces</a> (using <a href="#Rancher">Rancher</a>) at <a target="_blank" href="https://kubernauts.sh/">https://kubernauts.sh</a>

<a name="CKS"></a>

### CKS Exam Domains

<a target="_blank" href="https://training.linuxfoundation.org/announcements/new-kubernetes-security-specialist-certification-to-help-professionals-demonstrate-expertise-in-securing-container-based-applications/">Starting November, 2020</a> at the KubeCon North America pre-conference: <a target="_blank" href="https://training.linuxfoundation.org/certification/certified-kubernetes-security-specialist/">CKS exam</a> is $300 for 2 hours.

It's for those who hold a CKA certification.

* 10% Cluster Setup - Best practice for configuration to control environment access, rights, and platform conformity.
* 15% Cluster Hardening - to protect K8s API and utilize <a href="#RBAC">RBAC</a>
* 15% System Hardening - to improve the security of OS & Network; restrict access through IAM
* 20% Minimize Microservice Vulnerabilities - to use various mechanisms to isolate, protect, and control workload.
* 20% Supply Chain Security - forcontainer-oriented security, trusted resources, optimized container images, CVE scanning
* 20% Monitoring, Logging, and Runtime Security - to analyse and detect threads
<br /><br />

DockerDocker (specifically, Docker Engine) provides operating-system-level virtualization in containers.

* <a target="_blank" href="https://app.pluralsight.com/library/courses/kubernetes-installation-configuration-fundamentals/table-of-contents">
Kubernetes Installation and Configuration Fundamentals"</a> by Anthony Nocentino (@nocentio, centinosystems.com).

* <a target="_blank" href="https://www.pluralsight.com/courses/configuring-managing-kubernetes-security">Pluralsight "Configuring and Managing Kubernetes Security"</a> by Anthony Nocentino (@nocentio, centinosystems.com) is the one to take.

* https://github.com/NodyHub/docker-k8s-resources/tree/master/k8s-pods
sample Security yaml

* https://ravikirans.com/cks-kubernetes-security-exam-study-guide/

* <a target="_blank" href="https://github.com/walidshaari/Certified-Kubernetes-Security-Specialist">https://github.com/walidshaari/Certified-Kubernetes-Security-Specialist</a> by <a target="_blank" href="https://walidshaari.blogspot.com">Walid Shaari</a> (<a target="_blank" href="https://medium.com/@walidshaari">author in Medium</a>).

* https://github.com/ijelliti/CKSS-Certified-Kubernetes-Security-Specialist

* <a target="_blank" href="https://ravikirans.com/cks-kubernetes-security-exam-study-guide/">
https://ravikirans.com/cks-kubernetes-security-exam-study-guide</a>


#### Whizlabs.com

Known for their sample exams, $99/year on sale from $199 for all courses, by instructors from India.
If you want faster video playback, you have to set it for every video. Annoying.

* <a target="_blank" href="https://www.whizlabs.com/learn/course/certified-kubernetes-application-developer/">Certified Kubernetes Application Developer (CKAD)</a>
[05:25:21]

* <a target="_blank" href="https://www.whizlabs.com/learn/course/certified-kubernetes-administrator/">Certified Kubernetes Administrator(CKA)</a>
[08:09:07]

* <a target="_blank" href="https://www.whizlabs.com/learn/course/kubernetes/">* Learn Kubernetes with AWS And Docker</a>
[04:01:16


<hr />

## Exam Preparations

PROTIP: CAUTION: Whatever resource you use, ensure it is to the <a href="#K8sVersion">version of Kubernetes being tested</a> (e.g., v1.19 as of 1 Sep 2020).

### Sign up for exam

   CNCF is part of the Linux Foundation, so... 

1. Get an account (Linux Foundation credentials ) at <a target="_blank" href="https://identity.linuxfoundation.org/">https://identity.linuxfoundation.org</a>. https://myprofile.linuxfoundation.org/

   NOTE: It's a non-profit organization, thus the ".org".

   https://docs.linuxfoundation.org/tc-docs/certification/lf-candidate-handbook

   https://docs.linuxfoundation.org/tc-docs/certification/faq-cka-ckad-cks

   https://docs.linuxfoundation.org/tc-docs/certification/tips-cka-and-ckad



2. Login to <a target="_blank" href="https://joinnow.platform.linuxfoundation.org/?project=tlf">linuxfoundation.org and join as a member</a> for a $100 discount toward certifications.

3. Go to <a target="_blank" href="https://training.linuxfoundation.org/linux-courses/system-administration-training/kubernetes-fundamentals">https://training.linuxfoundation.org/linux-courses/system-administration-training/kubernetes-fundamentals</a> and pay for the $300 exam plus $199 more if you want to take their class.

   Alternately, if you have a Registration code: <a target="_blank" href="https://trainingportal.linuxfoundation.org/redeem">https://trainingportal.linuxfoundation.org/redeem</a>

4. Find dates and times when you're in a quiet private indoor place where no one else (co-workers) are near.

   Select a date when your mental and physical are in peak Biorythm

4. Open a <strong>Chrome browser</strong>.
4. Use your Linux Foundation credentials to create an account at 

   <a target="_blank" href="https://www.examslocal.com/">examslocal.com</a>.

1. Select the date, your time zone. The website is incredibly slow.
1. Click the date again in orange. Click the time range.

1. [<a target="_blank" href="#Terraform">Terraform</a>] <a target="_blank" href="https://chrome.google.com/webstore/detail/innovative-exams-screensh/dkbjhjljfaagngbdhomnlcheiiangfle/related">Install the Chrome extension</a> used to take exams, verified during exam scheduling.

   Click the green "I agree", then "Confirm Reservation".

1. Pick a date when your Biorythms are positive on Intellectual and Physical, not hitting bottom or crossing from positive to negative:

   <a target="_blank" href="https://keisan.casio.com/exec/system/1340246447">https://keisan.casio.com/exec/system/1340246447</a>

4. Sign-in at <a target="_blank" href="https://www.examslocal.com/">examslocal.com</a>. For "Sponsor and exam", type one of the following:

   * Linux Foundation : Certified Kubernetes Application Developer (CKAD) - English
   * Linux Foundation : Certified Kubernetes Administrator (CKA) - English
   * Linux Foundation : Certified Kubernetes Security (CKS) - English ?
   <br /><br />

   Click on the list, then Click "Next".

   Click the buttons in the <a target="_blank" href="https://docs.linuxfoundation.org/tc-docs/certification/lf-candidate-handbook/exam-preparation-checklist">Checklist form</a> and select time of exam until you get all green like this:

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/95417806-2d98dd00-08f3-11eb-8268-15ac5a7c7f4a.png"><img width="1235" alt="k8s-checklist" src="https://user-images.githubusercontent.com/300046/95417806-2d98dd00-08f3-11eb-8268-15ac5a7c7f4a.png"></a>


   <a target="_blank" href="https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/">pod-overview Docs</a> and <a target="_blank" href="https://kubernetes.io/docs/tutorials/">tutorials</a> from Kubernetes.io.

5. Click "Or Sign In With" tab and select "Sign in for exams powered by the Linux Foundation".
6. Log in using your preferred account.
7. Click "Handbook link" to download it.

   https://trainingportal.linuxfoundation.org/learn/course/certified-kubernetes-application-developer-ckad/exam/exam

8. PROTIP: You'll need a corded (Logitech) webcam (not one built-in).

9. Setup your home computer to take the exam <a target="_blank" href="https://www.examslocal.com/ScheduleExam/Home/CompatibilityCheck?reservationId=fe1aa455-cbc0-4db3-ad96-adae3948d68c">Compatibility Check</a>a using the <strong>Chrome extension</strong> from "Innovative Exams", which uses your laptop camera and microphone watching you use a virtual Ubuntu machine.

   ### Sample exam questions 

1. [<a target="_blank" href="#Terraform">Terraform</a>] <a target="_blank" href="https://github.com/dgkanatsios/CKAD-exercises">https://github.com/dgkanatsios/CKAD-exercises</a> 
   by Dimitris-Ilias Gkanatsios (of Microsoft) provides sample exercises to prepare for the CKAD exam.

1. [<a target="_blank" href="#Terraform">Terraform</a>] <a target="_blank" href="https://medium.com/bb-tutorials-and-thoughts/practice-enough-with-these-questions-for-the-ckad-exam-2f42d1228552">Practice enough</a> 


   ### Build speed

1. See 3 preview exam questions (with answer explained) after signing up at <a target="_blank" href="https://killer.sh/">https://killer.sh (Killer Shell's) CKA/CKAD Simulator</a> provides close replica of the CKAD exam browser terminal with 20 CKAD and 25 CKA questions, at 29.99€ for two sessions (before 10% discount). Each session includes 36 hours of access to a cluster environment. They recommend you start the first session when you’re at the beginning of your CKA or CKAD journey. 

1. Practice <a target="_blank" href="https://www.howtogeek.com/howto/ubuntu/keyboard-shortcuts-for-bash-command-shell-for-ubuntu-debian-suse-redhat-linux-etc">Keyboard shortcuts for Bash</a>

1. Get proficient with the <a href="#Vim">vim editor</a> so that commands are intuitive (where you don't have to pause for remembering how to do things in vim). Use the <a target="_blank" href="http://www2.geog.ucl.ac.uk/~plewis/teaching/unix/vimtutor">vimtutor</a> program that usually gets installed when you install the normal vim/gvim package.

   ### Bookmarks to docs

   You are allowed one browser window: kubernetes.io, so:

1. PROTIP: Rather than typing from scratch, copy and paste commands from pages in Kubernetes.io.

   Key sections of kubernetes.io are:

   * Documentation
   * Getting started
   * Concepts
   * Tasks
   * Tutorials
   * Reference
   <br /><br />
   
   <a href="#[1]">PROTIP: Create bookmarks in Chrome</a> for <a target="_blank" href="   https://github.com/walidshaari/Kubernetes-Certified-Administrator/blob/main/README-ckad.md">links</a> to ONLY <a target="_blank" href="https://kubernetes.io/docs/home/">kubernetes.io pages</a>

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/95026201-e2f63700-064c-11eb-9651-0902cc7732df.png"><img width="390" alt="kubernetes-bookmarks" src="https://user-images.githubusercontent.com/300046/95026201-e2f63700-064c-11eb-9651-0902cc7732df.png"></a>

   * <a target="_blank" href="https://kubernetes.io/docs/user-guide/kubectl-cheatsheet/">kubectl cheatsheet</a>

   * <a target="_blank" href="https://kubernetes.io/generated/kubectl/kubectl-commands/">kubectl commands</a>

   * <a target="_blank" href="https://kubernetes.io/docs/tasks/">docs/tasks</a>

   * <a target="_blank" href="https://www.cncf.io/certification/ckad/">https://www.cncf.io/certification/ckad</a>

   * <a target="_blank" href="https://github.com/kubernauts/practical-kubernetes-problems">https://github.com/kubernauts/practical-kubernetes-problems</a> provides yaml files

   * <a target="_blank" href="https://kubernetes.io/docs/reference/generated/kubernetes-api/v{{ page.k8s_version }}/">kubernetes API (v{{ page.k8s_version }})</a>


### Day before exam

1. Arrange to sleep well the night before the exam.
1. If you travel, make sure you are living in the correct time zone.

1. Move files from your Downloads and Documents folder.
1. Clear your desk of papers, books. The proctor will be checking.


### Before start of exam questions

1. Take a shower. Put on a comfortable outfit. Brush your teeth. Make your bed. 
1. Eat proteins rather than carbohydrates and sugar before the exam.
1. Fill a clear bottle with no labels holding clear liquids (water). You're not allowed to eat snacks.

1. Put on music that helps you concentrate. Turn it off before starting the test.

1. Start calm, not rushed. Be setup and be ready a half hour before the scheduled exam.

1. You may start your exam up to 15 minutes prior to your scheduled appointment time.

1. Have your ID out and ready to present to the video camera.

1. The exam takes 180 minutes (<strong>3 hours</strong>), so before you start, go to the bathroom. 
1. To the proctor, show your ID and pan all the way around the room.

### Start of exam

1. Enter website and click grey "Take Exam" button.

   <a target="_blank" href="
   https://trainingportal.linuxfoundation.org/learn/course/certified-kubernetes-application-developer-ckad/exam/exam">
   https://trainingportal.linuxfoundation.org/learn/course/certified-kubernetes-application-developer-ckad/exam/exam</a>

1. <a href="#CustomizeTerminal">Customize your terminal for productivity</a>.

1. <strong>19 questions</strong> means less than 10 minutes per question. So avoid getting bogged down on the longer complex questions. First go through all the questions to answer the easiest ones first. Along the way, mark ones you want to go back to.

   NOTE: Although there are 19 objectives, not all objectives planned are in every exam.

1. PROTIP: Avoid writing yaml by scratch.

   PROTIP: Learn to search within kubernetes.io to copy code.

   <a href="#Declarative">Generate a declarative yaml file from an imperative command:</a>

1. Create yaml file as well as pod:

   <pre>kubectl create -f file.pod.yaml --record</pre>

1. Paste to the Notpad available during the exam. Save commands there for copy rather than retype.

   <pre><strong>k -n pluto get all -o wide
   </strong></pre>

1. Use <tt>kubectl explain</tt>.

1. Use <tt>help</tt> as in <tt>kubectl create configmap help </tt>.

1. Run a busybox web server to test retrieval of externally (using wget):

   <pre><strong>k run tmp --restart=Never --rm --image=busybox -i -- wget -O- 10.12.2.15
   </strong></pre>

   Notice "Never" is title cased.

1. Do not delete/remove what you have done! People/robots review your servers after the test.


### After exam

1. Create an <a target="_blank" href="https://www.acclaim.com/">Acclaim.com</a> account to manage publicity across many certifications.
1. If you pass the exam (score above 66%), go to acclaim to get your digital badge to post on social media.
   
   <a target="_blank" href="https://trainingportal.linuxfoundation.org/pages/exam-history">
   https://trainingportal.linuxfoundation.org/pages/exam-history</a>


<hr />

<a name="Social"></a>

## Social media communities

   * <a target="_blank" href="https://community.cncf.io/manly">community.cncf.io/manly</a> to sign up for access to the "cncf-community-manly" community for discussions about KubeCon takeaways.

   * <a target="_blank" href="https://discuss.kubernetes.io/">https://discuss.kubernetes.io</a> is where issues with each version of K8s are discussed.

   * <a target="_blank" href="https://www.kubeweekly.io">https://kubeweekly.io</a>, a weekly podcast [subscribe!]
   * <a target="_blank" href="https://www.kubernetespodcast.com/">https://kubernetespodcast.com</a> podcast is hosted by the Clound Native advocacy team at Google Cloud: Craig Box and Adam Glick. On <a target="_blank" href="https://podcasts.apple.com/us/podcast/kubernetes-podcast-from-google/id1370049232?mt=2">Apple Podcasts</a>, etc.

   * <a target="_blank" href="https://kubernetes.io/community/">https://kubernetes.io/community</a>
   * <a target="_blank" href="https://www.reddit.com/r/kubernetes">https://www.reddit.com/r/kubernetes</a> "subreddit"

   * <a target="_blank" href="https://community.kodekloud.com/">https://community.kodekloud.com</a>
   * <a target="_blank" href="https://community.kodekloud.com/">https://kodekloud.com community Slack sign-up</a>

   * <a target="_blank" href="https://dex.dev/">https://dex.dev</a>

   * <a target="_blank" href="https://kubernetes.slack.com">https://kubernetes.slack.com</a>
   * <a target="_blank" href="https://slack.k8.io">https://slack.k8.io</a>
   * <a target="_blank" href="https://slack.k8s.io">https://slack.k8s.io</a>

   * <a target="_blank" href="https://stackoverflow.com/search?q=k8s+or+kubernetes">Stackoverflow for developers</a>
   * <a target="_blank" href="https://serverfault.com/search?q=k8s+or+kubernetes">for sysadmins</a>

   * <a target="_blank" href="https://plus.google.com/communities/115402602543170235291">Google+ Group: Kubernetes</a>
   * <a target="_blank" href="https://groups.google.com/forum/#!forum/kubernetes-announce ">for announcements</a>
   * <a target="_blank" href="https://groups.google.com/forum/#!forum/kubernetes-dev">Contributors to the Kubernetes project to discuss design and implementation issues</a>.
   * <a target="_blank" href="https://groups.google.com/forum/#!forum/kubernetes-sig-scale">kubernetes-sig-scale</a>

   * <a target="_blank" href="https://www.youtube.com/playlist?list=PL69nYSiGNLP1pkHsbPjzAewvMgGUpkCnJ&disable_polymer=true">
   Kubernetes Google Community video chats</a> weekly going back to 2017 but stopped July 2020

   * <a target="_blank" href="https://cloud.google.com/support/docs/issue-trackers">https://cloud.google.com/support/docs/issue-trackers</a> to report bugs.

   * <a target="_blank" href="https://www.meetup.com/kubernauts/">https://www.meetup.com/kubernauts</a>
   * <a target="_blank" href="https://www.meetup.com/topics/kubernauts/">https://www.meetup.com/topics/kubernauts</a>
   * <a target="_blank" href="https://www.KubeCon.io">KubeCon.io</a> Conferences (<a target="_blank" href="https://www.twitter.com/KubeConio/">#KubeConio</a>)

<hr />

<hr />

<a name="Install"></a>

## MacOS Laptop Installation

https://redhat-scholars.github.io/kubernetes-tutorial/kubernetes-tutorial/installation.html

<a target="_blank" href="https://technologyconversations.com/2021/10/11/should-we-replace-docker-desktop-with-rancher-desktop/#more-5308">BLOG</a>:
Before diving in, know that instead of minikube, there's also Rancher Desktop, K3s, Microk8s on Linux, Minishift.

https://rancherdesktop.io
you could select a specific version of K8s. And it works with Mac M1 chips while minikube does not.

<pre>$ brew search rancher
==> Formulae
rancher-cli                rancher-compose            ranger
==> Casks
font-ranchers                            rancher
</pre>

nerdctl

kim (Kubernetes Image Manager) uses K8s instead of Docker


<a name="minikube"></a>

### Minikube Alternatives

<a target="_blank" href="https://youtu.be/C0v5gJSWuSo">VIDEO</a>:
Kind (Kubernetes in Docker) <a target="_blank" href="https://kind.sigs.k8s.io/">https://kind.sigs.k8s.io/</a> builds K8s clusters out of Docker containers running Docker in Docker, good for integration with a CI/CD pipeline.

1. Identify the version:
2. Define cluster

   <pre>GO111MODULE="on" go get sigs.k8s.io/kind@v.0.4.0
   kid create cluster
   </pre>

   CAUTION: This utility is built for the Kubernetes team's convenience and thus does not have some convenience features and add-ons.

   <a name="ContainerRuntimes"></a>

   Runc is the OCI standardized container runtime

   Kubernetes can use alternative container runtimes than CRI - Docker:
   * Docker (Containerd runtime using Runc)
   * LXC (Linux native containers)
   * RedHat's Podman (CRI-o runtime using Runc)
   * Systemd-nspawn
   <br /><br />

k3d:

   <pre>go install github.com/rancher/k3d
k3d create
   </pre>


<a name="Minikube"></a>

### Minikube install 

<a target="_blank" href="https://kubernetes.io/docs/tasks/tools/install-minikube/">REF</a>:
But let's start by installing minikube on your laptop.
https://github.com/kubernetes/minikube

Minikube goes beyond older Docker For Mac (DFM) and Docker for Windows (DFW)
and includes a node and a Master when it spins up in a local environment (such as your laptop).

CAUTION: At time of writing, <a target="_blank" href="https://github.com/kubernetes/minikube">https://github.com/kubernetes/minikube</a>has 257 issues and 20 pending Pull Requests, but we're using it anyway.
MUST READ: <a target="_blank" href="https://minikube.sigs.k8s.io/docs/drivers/docker/#known-issues">Known Issues with Minikube</a>
(<a href="#Ingress">Ingress</a> and ingress-dns addons are not supported on Linux)

PROTIP: Minikube makes your Mac's fan fly!
Before starting minikube, in command+Spacebar type "Activity Monitor.app" and click to open it. 
Click the "% CPU" tab label to sort on it. Note the number for process "com.docker.hyperkit".
If the mac's fan spins constantly: in Docker's Properties Resources, adjust Memory higher.

Each node in a cluster uses at least 300 MiB of memory.

More about drivers:
* https://docs.okd.io/latest/minishift/getting-started/setting-up-virtualization-environment.html
* https://minikube.sigs.k8s.io/docs/drivers/

### Docker Desktop install on macOS

   NOTE: Docker drivers do not currently support ARM architecture (only AMD64).

1. Follow <a target="_blank" href="https://wilsonmar.github.io/docker/">Install Docker for Desktop</a>:
   
1. If the Docker Desktop icon appears (it's already installed), right-click on it and shut it down.

   Then upgrade it:

   <pre><strong>brew cask upgrade docker
   </strong></pre>

   This automatically installs the HyperKit hypervisor for macOS.

   So there is no need to do what older docs say:

   <pre><strike>brew install docker-machine-driver-xhyve
   </strike></pre>

   Make sure Docker Desktop is running:

### Minikube on Windows

1. Start Docker before installing/starting minikube:

   <pre><strong>systemctl enable --now docker</strong></pre>

1. Verify your Docker container type:

   <pre>docker info --format '{{.OSType}}'</pre>

   On macOS, the response is "Linux".

   On Windows, (pardoxically) make sure Docker Desktop’s container type setting is Linux and not windows. see docker docs on switching container type. 
   
   See https://minikube.sigs.k8s.io/docs/drivers/hyperv/


### Minikube on MacOS using Docker Desktop

1. I do not recommend using curl to obtain a specific back version of Minikube:

   <pre><strike>curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube_1.7.2-0_amd64.deb \
&& sudo dpkg -i minikube_1.7.2-0_amd64.deb
   </strike></pre>

1. Install on a Mac Minikube is the recommended appraoch

   <pre><strong>brew info minikube
   </strong></pre>

   A lot prints out, to get the <strong>caveats</strong> about what was installed:

   <pre>Warning: Treating minikube as a formula.
minikube: stable 1.23.0 (bottled), HEAD
Run a Kubernetes cluster locally
https://minikube.sigs.k8s.io/
/usr/local/Cellar/minikube/1.23.0 (9 files, 68.1MB)
  Poured from bottle on 2021-09-16 at 08:52:22
From: https://github.com/Homebrew/homebrew-core/blob/HEAD/Formula/minikube.rb
License: Apache-2.0
==> Dependencies
Build: go ✘, go-bindata ✘
Required: kubernetes-cli ✔
==> Options
--HEAD
	Install HEAD version
==> Caveats
Bash completion has been installed to:
  /usr/local/etc/bash_completion.d
==> Analytics
install: 28,783 (30 days), 77,316 (90 days), 383,609 (365 days)
install-on-request: 28,682 (30 days), 77,049 (90 days), 367,126 (365 days)
build-error: 0 (30 days)
   </pre>

   Compare growth in size from previous versions:

   <pre>/usr/local/Cellar/minikube/1.15.1 (8 files, 62.4MB) *   
  Poured from bottle on 2020-11-22 at 11:46:27
install: 44,822 (30 days), 110,033 (90 days), 415,969 (365 days)
install-on-request: 37,280 (30 days), 92,684 (90 days), 342,920 (365 days)
build-error: 0 (30 days)
   </pre>

   There is no longer a need to do what older docs say: Make hyperkit the default driver<a target="_blank" href="https://minikube.sigs.k8s.io/docs/drivers/hyperkit/">*</a>:

   <pre><strike>minikube config set driver hyperkit</strike></pre>

1. [<a target="_blank" href="#Terraform">Terraform</a>] <a target="_blank" href="https://matthewpalmer.net/kubernetes-app-developer/articles/guide-install-kubernetes-mac.html">Install</a>

   <pre><strong>brew install minikube
   </strong></pre>

   <pre>Warning: Treating minikube as a formula.
==> Downloading https://ghcr.io/v2/homebrew/core/kubernetes-cli/manifests/1.22.1
==> Downloading https://ghcr.io/v2/homebrew/core/kubernetes-cli/blobs/sha256:1c7
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
==> Downloading https://ghcr.io/v2/homebrew/core/minikube/manifests/1.23.0
==> Downloading https://ghcr.io/v2/homebrew/core/minikube/blobs/sha256:aabf29b10
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
==> Installing dependencies for minikube: kubernetes-cli
==> Installing minikube dependency: kubernetes-cli
==> Pouring kubernetes-cli--1.22.1.mojave.bottle.tar.gz
🍺  /usr/local/Cellar/kubernetes-cli/1.22.1: 226 files, 57.5MB
==> Installing minikube
==> Pouring minikube--1.23.0.mojave.bottle.tar.gz
==> minikube cask is installed, skipping link.
==> Caveats
Bash completion has been installed to:
  /usr/local/etc/bash_completion.d
==> Summary
🍺  /usr/local/Cellar/minikube/1.23.0: 9 files, 68.1MB
Removing: /usr/local/Cellar/minikube/1.20.0_1... (9 files, 63.5MB)
==> Caveats
==> minikube
Bash completion has been installed to:
  /usr/local/etc/bash_completion.d
   </pre>

1. Installation should have created folder: 

   <pre><strong>ls $HOME/.minikube</strong></pre>

   The result:

   <pre>addons              cache               files               proxy-client-ca.crt
apiserver.crt       cert.pem            key.pem             proxy-client-ca.key
apiserver.key       certs               last_update_check   proxy-client.crt
ca.crt              client.crt          logs                proxy-client.key
ca.key              client.key          machines
ca.pem              config              profiles
   </pre>

1. PROTIP: Assign permissions to avoid run error:

   <pre><strong>sudo chown -R $USER $HOME/.minikube
chmod -R u+wrx $HOME/.minikube
   </strong></pre>

   No response is expected on success.

1. Make sure you're running the version just installed:

   <pre><strong>minikube version</strong></pre>

   If you see:
   <pre>-bash: minikube: command not found</pre>

   The expected result:

   <pre>minikube version: v1.15.1
commit: 23f40a012abb52eff365ff99a709501a61ac5876
   </pre>


   <a name="StartMinikube"></a>

   ### Start Minikube with Docker driver

   PROTIP: If you start minikube with <tt>sudo</tt> you'll get:


1. PROTIP: Define this as an alias to your ~/.desktop_profile:

   <pre>alias mk8s="minikube delete;minikube start --driver=docker --memory=4096"</pre>

   <tt>--memory=1990</tt> can be adjusted <a href="#AdjDocker">per instructions below</a>.

   PROTIP: Before starting minikube, <tt>minikube delete</tt> to avoid this error message:
   <pre>💢  Exiting due to GUEST_DRIVER_MISMATCH: The existing "minikube" cluster was created using the "docker" driver, which is incompatible with requested "hyperkit" driver.
💡  Suggestion: Delete the existing 'minikube' cluster using: 'minikube delete', or start the existing 'minikube' cluster using: 'minikube start --driver=docker'
   </pre>

   PROTIP: Don't use <tt>sudo minikube</tt> or you'll get this error message:
   <pre>❌  Exiting due to DRV_AS_ROOT: The "hyperkit" driver should not be used with root privileges.</pre>

   Alternately, start within Virtualbox <a target="_blank" href="https://webme.ie/how-to-run-minikube-on-a-virtualbox-vm/">*</a>:
   <pre><strong>sudo minikube start --memory=4096</strong></pre>

   An example of an expected response:

   <pre>😄  minikube v1.15.1 on Darwin 10.15.7
✨  Using the docker driver based on user configuration
👍  Starting control plane node minikube in cluster minikube
🚜  Pulling base image ...
💾  Downloading Kubernetes v1.19.4 preload ...
    > preloaded-images-k8s-v6-v1.19.4-docker-overlay2-amd64.tar.lz4: 486.35 MiB
🔥  Creating docker container (CPUs=2, Memory=1990MB) ...
🐳  Preparing Kubernetes v1.19.4 on Docker 19.03.13 ...
🔎  Verifying Kubernetes components...
🌟  Enabled addons: storage-provisioner
🏄  Done! kubectl is now configured to use "minikube" cluster and "default" namespace by default
   </pre>

   If Docker Desktop is not running, you won't see the icon at the top of the screen and you'll get this error:

   <pre>🤷  Exiting due to PROVIDER_DOCKER_NOT_FOUND: The 'docker' provider was not found: exec: "docker": executable file not found in $PATH
💡  Suggestion: Install Docker
📘  Documentation: https://minikube.sigs.k8s.io/docs/drivers/docker/
   </pre>

   An example of a good start:

   <pre>🙄  "minikube" profile does not exist, trying anyways.
💀  Removed all traces of the "minikube" cluster.
😄  minikube v1.15.1 on Darwin 10.15.7
✨  Using the docker driver based on user configuration
👍  Starting control plane node minikube in cluster minikube
🔥  Creating docker container (CPUs=2, Memory=1987MB) ...
🐳  Preparing Kubernetes v1.19.4 on Docker 19.03.13 ...
🔎  Verifying Kubernetes components...
🌟  Enabled addons: storage-provisioner, default-storageclass
🏄  Done! kubectl is now configured to use "minikube" cluster and "default" namespace by default
   </pre>


   Alternately, start the minikube service, with add-ons (which each runs in a pod):

   On Mac:

   <pre><strong>minikube start ... --addons=dashboard --addons=metrics-server --addons=ingress --addons="ingress-dns"
   </strong></pre>

   On Windows:

   <pre><strong>minikube start --vm-driver=hyperv
   </strong></pre>

1. To enable services after starting minikube:

   <pre><strong>minikube addons enable metrics-server</strong></pre>





## Prep standalone SSH client on macOS

1. Open an SSH client Terminal by pressing command+spacebar for the Spotlight, then type "Terminal" and select "Terminal.app".
1. Enter your user password if prompted.
1. Create a folder "k8s-class", then navigate into it:
   
   <pre>cd .. && mkdir -p k8s-cloud && cd k8s-cloud</pre>

1. Switch to the CloudAcademy lab page. Automatically launched are four EC2 instances in the "us-west-2b" AWS Availability Zone: The "bastion" exposed to a public internet subnet and, within a private subnet, a "k8s-master" t3.micro and two "k8s-node" t3.small. In about 10 minutes, all instance status reach "running" and Alarm Status "finish loading".
1. Click the box to the left of "bastion-host". When "Connect" changes from gray, click it. 
1. Click the PEM file (such as "554282681613.pem") and save the file in that folder.
1. Copy the PEM file name and save to your Clipboard.
1. Switch to the Terminal.  
1. Construct a variable set command because it's referenced several times:

   <pre>PEMF="554282681613.pem"</pre>

1. Set permissions (so your key is not publicly viewable for SSH to work):
   
   <pre>chmod 400 "$PEMF"</pre>

1. Compose the command to connect to your instance by typing and pasteing its Public DNS: first type "ssh -i", then paste the pem file, then type "ubuntu@" for the user name inside the host, then switch to the EC2 page to copy and paste the "Public DNS (IPv4)" URL:

   <pre>ssh -i "$PEMF" ubuntu@ec2-34-210-196-19.us-west-2.compute.amazonaws.com</pre>

   The wizard should automatically detects the key you used to launch the instance.
   But if the response is: "ubuntu@github.com: Permission denied (publickey).", try to rename file by:

   <pre>mv ~/.ssh/config config.sav</pre>


1. Type yes and press Enter when you see:

   <pre>The authenticity of host 'ec2-34-210-196-19.us-west-2.compute.amazonaws.com (34.210.196.19)' can't be established.
ECDSA key fingerprint is SHA256:sg0jaN4L4RX8ZAxGDo/elIf6HFU+H/3OTG4DALwU5Ik.
Are you sure you want to continue connecting (yes/no/[fingerprint])? 
   </pre>

   You should see a prompt such as:

   <tt>ubuntu@ip-10-0-128-5:~$ </tt>

1. <a href="#CustomizeTerminal">Customize the Terminal environment for your productivity</a>.

1. Switch to the CloudAcademy.com page and scroll down to the list of commands. If you customized alias k:
   
   Using the alias setup above, ensure you can see master and nodes:

   <pre>k get nodes</pre>

1. Make use of files at <a target="_blank" href="https://github.com/cloudacademy/intro-to-k8s/tree/master/src">https://github.com/cloudacademy/intro-to-k8s/tree/master/src</a> described by <a target="_blank" href="https://cloudacademy.com/course/introduction-to-kubernetes">this Intro to Kubernetes course</a>:

   <pre>cd src && ls</pre>

   <pre>10.1-namespace.yaml         5.1-namespace.yaml
10.2-data_tier_config.yaml  5.2-data_tier.yaml
10.3-data_tier.yaml         5.3-app_tier.yaml
10.4-app_tier_secret.yaml   5.4-support_tier.yaml
10.5-app_tier.yaml          6.1-app_tier_cpu_request.yaml
1.1-basic_pod.yaml          6.2-autoscale.yaml
1.2-port_pod.yaml           7.1-namespace.yaml
1.3-labeled_pod.yaml        7.2-data_tier.yaml
1.4-resources_pod.yaml      7.3-app_tier.yaml
2.1-web_service.yaml        8.1-app_tier.yaml
3.1-namespace.yaml          9.1-namespace.yaml
3.2-multi_container.yaml    9.2-pv_data_tier.yaml
4.1-namespace.yaml          9.3-app_tier.yaml
4.2-data_tier.yaml          9.4-support_tier.yaml
4.3-app_tier.yaml           metrics-server
   </pre>

   PROTIP: Kubernetes is <strong>immutable</strong>, so rather than changing a running pod, delete it and recreate it.

1. To create a pod using the nginx image:

   <pre><strong>kubectl run nginx --image=nginx --restart=Never
   </strong></pre>

1. To list pods and the nodes they were placed in:

   <pre><strong>kubectl get pods -o wide
   </strong></pre>

   <pre>NAME            READY   STATUS    RESTARTS   AGE   IP           NODE           NOMINATED NODE   READINESS GATES
nginx           1/1     Running   0          18m   10.42.0.9    controlplane   &LT;none>           &LT;none>
   </pre>



1. Create and delete pod (all named "mypod"):

   <pre><strong>kubectl create -f 1.1-basic_pod.yaml
kubectl get pods
kubectl describe pod mypod | more
kubectl delete po <em>mypod</em> --grace-period=0 --force
   </strong></pre>

   PROTIP: <tt>\-\-grace-period=0 \-\-force</tt> for immediate execution (especially during exam)

1. Get the "image:" name -internal within the output:

   <pre><strong>k describe pod xxx | grep -i image</strong></pre>

1. Get the Node name:

   <pre><strong>k get pods -o wide</strong></pre>


<a name="CRI"></a>

## Container Runtime Interface

Kubernetes' <a target="_blank" href="https://kubernetes.io/blog/2016/12/container-runtime-interface-cri-in-kubernetes/">Container Runtime Interface (CRI) specification</a> ensures that every image can be run within every K8s runtime.



<a name="GetAPIServices"></a>

### Get API Services List

1. To see whether the metrics-server is running, or another provider of the resource metrics API (metrics.k8s.io), run the following command:

   <pre><strong>kubectl get apiservices</strong></pre>

   The response:

   <pre>NAME                                   SERVICE   AVAILABLE   AGE
v1.                                    Local     True        24s
v1.admissionregistration.k8s.io        Local     True        24s
v1.apiextensions.k8s.io                Local     True        24s
v1.apps                                Local     True        24s
v1.authentication.k8s.io               Local     True        24s
v1.authorization.k8s.io                Local     True        24s
v1.autoscaling                         Local     True        24s
v1.batch                               Local     True        23s
v1.certificates.k8s.io                 Local     True        23s
v1.coordination.k8s.io                 Local     True        23s
v1.events.k8s.io                       Local     True        23s
v1.networking.k8s.io                   Local     True        23s
v1.rbac.authorization.k8s.io           Local     True        23s
v1.scheduling.k8s.io                   Local     True        23s
v1.storage.k8s.io                      Local     True        23s
v1beta1.admissionregistration.k8s.io   Local     True        24s
v1beta1.apiextensions.k8s.io           Local     True        24s
v1beta1.authentication.k8s.io          Local     True        24s
v1beta1.authorization.k8s.io           Local     True        24s
v1beta1.batch                          Local     True        23s
v1beta1.certificates.k8s.io            Local     True        23s
v1beta1.coordination.k8s.io            Local     True        23s
v1beta1.discovery.k8s.io               Local     True        23s
v1beta1.events.k8s.io                  Local     True        23s
v1beta1.extensions                     Local     True        23s
v1beta1.networking.k8s.io              Local     True        23s
v1beta1.node.k8s.io                    Local     True        23s
v1beta1.policy                         Local     True        23s
v1beta1.rbac.authorization.k8s.io      Local     True        23s
v1beta1.scheduling.k8s.io              Local     True        23s
v1beta1.storage.k8s.io                 Local     True        23s
v2beta1.autoscaling                    Local     True        24s
v2beta2.autoscaling                    Local     True        24s
   </pre>


   <a name="AdjDocker"></a>

1. If you plan on doing a lot of work, configure Docker with more memory: The default is 1990MB.
   
   Click the Docker icon on your Mac, then select "Preferences" then "Resources":

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/99923919-2be57600-2cf5-11eb-8d5f-e828a016808f.png">
   <img width="793" alt="k8s-minikube-resources" src="https://user-images.githubusercontent.com/300046/99923919-2be57600-2cf5-11eb-8d5f-e828a016808f.png"></a>

   TODO: Check how much memory is already being used.

   Slide the appropriate tab to specify a larger number.



   ### Kubectl CLI install

   NOTE: <a target="_blank" href="https://kubernetes.io/docs/tasks/tools/install-kubectl/">REF: kubectl CLI (kubernetes-cli) is installed by minikube install</a>.

1. Install kubectl command:

   <pre><strong>sudo apt-get update && sudo apt-get install -y apt-transport-https
   </strong></pre>


   <a name="kubectl"></a>

   ### kubectl CLI client install

   Kubernetes administrators use <strong>kubectl</strong> (kube + ctl)
   the CLI tool running outside Kubernetes servers to control them. 
   It's <strong>automatically installed</strong> within Google cloud instances, 
   but on Macs clients:

1. Install on a Mac:
 
   <pre><strong>brew install kubectl
   </strong></pre>

   <pre>🍺  /usr/local/Cellar/kubernetes-cli/1.8.3: 108 files, 50.5MB
   1.19.2
   </pre>

   It's required by eksctl and minikube.

1. Verify:
 
   <pre><strong>kubectl version
   </strong></pre>

   If you see this: ???

   <pre>Client Version: version.Info{Major:"1", Minor:"21", GitVersion:"v1.21.3", GitCommit:"ca643a4d1f7bfe34773c74f79527be4afd95bf39", GitTreeState:"clean", BuildDate:"2021-07-15T21:04:39Z", GoVersion:"go1.16.6", Compiler:"gc", Platform:"darwin/amd64"}
   </pre>

1. Verify the version installed: 

   <pre><strong>kubectl version --client
   </strong></pre>

   At time of writing:

   <pre>Client Version: version.Info{Major:"1", Minor:"21", GitVersion:"v1.21.3", GitCommit:"ca643a4d1f7bfe34773c74f79527be4afd95bf39", GitTreeState:"clean", BuildDate:"2021-07-15T21:04:39Z", GoVersion:"go1.16.6", Compiler:"gc", Platform:"darwin/amd64"}
   </pre>

   NOTICE that Golang programming is a component.

   Without <tt>--client</tt> you get this error message:

   <pre>The connection to the server 127.0.0.1:55000 was refused - did you specify the right host or port?
   </pre>



### Install Docker & Kubernetes on CentOS

1. Install the the <strong>Docker Desktop app</strong> 

   On CentOS/RHEL 7:

   <pre><strong>yum install docker</strong></pre>

   On CentOS/RHEL 8, Docker is not installed by default, so there download  <strong>docker-ce</strong> from docker.io:

   https://docks.docker.com/install/linux/docker-ce/centos/

   The Open Container Initiative at <a target="_blank" href="https://opencontainers.org/">https://opencontainers.org</a> defined the image-spec to define how to package contaiiners in a "filesystem bundle" and run them in a container. This ensures comptibility among containers, no matter the originating enviroment.



   ### Start Minikube within VM

1. To run minikube within a VM so we will need to use the None (bare-metal) driver. The none driver requires minikube to be run as root, until #3760 can be addressed. To make none the default driver:

   <pre><strong>sudo minikube config set vm-driver none
   </strong></pre>

   These changes will take effect upon a minikube delete and then a minikube start


   ### Stop Minikube

4. Stop the service:

   <pre>minikube stop</pre>

5. Recover space:

   <pre><strong>minikube delete
   </strong></pre>

   <pre>🔥  Deleting "minikube" in docker ...
🔥  Deleting container "minikube" ...
🔥  Removing /Users/wilson_mar/.minikube/machines/minikube ...
💀  Removed all traces of the "minikube" cluster.
   </pre>

   
   <a name="Replicas"></a>

   ### Scale Replicas

   Since Kubectl 1.8, scale is the preferred way to control graceful delete:

   <pre><strong>kubectl scale --replicas=3 deployment nginx-deployment</strong></pre>

   Since Kubectl 1.8, rollout and rollback support stateful sets:

   <pre><strong>kubectl set image deployment.v1.apps/nginx-deployment nginx=nginx:1.9.1 --record
   kubectl rollout status deployment.v1.apps/nginx-deployment
   kubectl rollout history deployment nginx-deployment
   </strong></pre>

1. To rollback, undo

   kubectl rollout undo deployments nginx-deployment
   kubectl rollout history deployment/nginx-deployment --revision=3

1. To continue, <a href="#StartMinikube">start minikube again</a>.


<hr />

<a name="ClusterConfig"></a>

## Cluster Configuration

Service cluster IPs and ports are found through Docker --link compatible environment variables specifying ports opened by the service proxy.


1. REMEMBER: Unlike <tt>k describe</tt>, <tt>k cluster-info</tt> is a single verb:

   <pre><strong>kubectl cluster-info</strong></pre>

   Example response:

   <pre>Kubernetes master is running at https://127.0.0.1:32768
KubeDNS is running at https://127.0.0.1:32768/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy
To further debug and diagnose cluster problems, use 'kubectl cluster-info dump'.
   </pre>

1. To further debug and diagnose:

   <pre><strong>kubectl cluster-info dump</strong></pre>



<a name="Config"></a>
<a name="Contexts"></a>

### Configure Contexts

3. Show the current context:

   <pre><strong>kubectl config current-context
   </strong></pre>

   The expected response on macOS is "minikube". In production, it would include cloud, region, availability zone, etc.

   <pre>gke_p-1yly4mizr0ot-0_europe-west1-c_consul-dc1</pre>

2. To avoid "The connection to the server localhost:8080 was refused"

   <a target="_blank" href="https://kubernetes.io/docs/tasks/debug-application-cluster/troubleshooting/">https://kubernetes.io/docs/tasks/debug-application-cluster/troubleshooting</a>

   <pre><strong>sudo touch $HOME/.kube/config</strong></pre>
   <pre><strong>sudo chown $USER $HOME/.kube/config
   chmod 600 $HOME/.kube/config
   </strong></pre>

   Deleted the old config from ~/.kube and then restarted docker (for macos) and it rebuilt the config folder. 

2. What is in the Kubernetes configuration file showing configuration settings and current context:

   <pre><strong>cat $HOME/.kube/config</strong></pre>

   Sample response:

   <pre>apiVersion: v1
clusters:
- cluster:
    certificate-authority: /Users/wilson_mar/.minikube/ca.crt
    server: https://127.0.0.1:32768
  name: minikube
contexts:
- context:
    cluster: minikube
    namespace: default
    user: minikube
  name: minikube
current-context: minikube
kind: Config
preferences: {}
users:
- name: minikube
  user:
    client-certificate: /Users/wilson_mar/.minikube/profiles/minikube/client.crt
    client-key: /Users/wilson_mar/.minikube/profiles/minikube/client.key
    </pre>

   REMEMBER: When a namespace is not specified in yaml, the name "default" is assumed.

1. The same JSON as in file <tt>~/.kube/config</tt> is displayed by:

   <pre><strong>kubectl config view
   </strong></pre>

  PROTIP: If your server is not up, you'll see this error message when attempting a kubectl command:
  <pre>The connection to the server 127.0.0.1:32772 was refused - did you specify the right host or port?</pre>


<hr />


<a name="CustomizeTerminal"></a>

## Customize Terminal

1. Save a few seconds typing: 

   <a target="_blank" href="https://codeburst.io/resource-creation-tips-for-the-kubernetes-cka-ckd-certification-exam-740b70a13f97">
   Resource Creation Tips for the Kubernetes CKA / CKD Certification Exam</a>
   by John Tucker

   ### Setup prompt at left

1. Setup the prompt so it always appear at the left:

   <pre>export PS1="\n  \w\[\033[33m\]\n$ "
   </pre>


   ### Setup k aliase

1. Setup a shorthand alias so you can type "k" instead of kubectl:

   <pre>alias k=kubectl
complete -F __start_kubectl k
   </pre>

1. Setup alias:

   <pre>export do="--dry-run=client -o yaml"</pre>


   
   ### Bash Autocompletion

1. Save a few seconds by setting up autocompletion. On bash:

   <pre>bash completion
source <(kubectl completion bash) 
echo "source <(kubectl completion bash)" >> ~/.bashrc
   </pre>

   On ZSH:

   <pre>source <(kubectl completion zsh)
   echo "[[ $commands[kubectl] ]] && source <(kubectl completion zsh)" >> ~/.zshrc
    </pre>


   <a name="Vim"></a>

   ### Vim Editor - indentation

   PROTIP: vim is the only editor available, so learn to search lines in vim (Esc, /, the text to be searched).
   
   <pre>:set shiftwidth=2</pre>

   To indent several lines with one command: Esc Shift+V for Visual Line mode, highlight lines, 
   Shift . to shift left, Shift , to shift right.

   <a target="_blank" href="https://www.youtube.com/watch?v=knyJt8d6C_8">VIDEO</a> "Vim crash course".


<a name="Aliases"></a>

## K command tips and tricks

Its <a target="_blank" href="https://github.com/kubernetes/kubernetes">code page</a> has a summary description of:

   <ul>"Production-Grade Container Scheduling and Management"</ul>

1. Specify the kubectl command by itself to list its sub-commands.

1. Specify the kubectl command with --help get info:

   <pre>k completion --help</pre>


## Declarative Kubernetes Commands 

K8s recognizes both imperative commands on kubectl and declarative yaml files.

### Declarative vs. Declarative

<a target="_blank" href="https://medium.com/payscale-tech/imperative-vs-declarative-a-kubernetes-tutorial-4be66c5d8914?">REF</a>:

* Imperative commands act directly on live objects.

* Imperative commands provide no track record history (other than Terminal history)

* Declarative commands act on yaml files which define objects.

* Declarative commands can be generated from imperative

   <pre>k create deployment ghost --image=ghost --dry-run=client -o yaml >deploy.yaml
   </pre>

   NOTE: <tt>image=ghost</tt> obtains the image from Docker Hub.


TASK: Create a pod with the ubuntu image to run a container to sleep for 5000 seconds. (Modify file ubuntu-sleeper-2.yaml)

   <pre>apiVersion: v1
kind: Pod
metadata:
  name: ubuntu-sleeper-2
spec:
  containers:
  - name: ubuntu
    image: ubuntu
    command:
    - “sleep”
    - “5000”
   </pre>

   The command can also be written as: ???

   <pre>command: [ "sleep", "5000" ]
   </pre>

This references Dockerfile (aka Containerfile):

   <pre>ENTRYPOINT ["python", "app.py"]
CMD ["--color", "red"]
   </pre>

PROTIP: <strong>Names of resources can be up to 253 characters</strong>. No underlines (use dashes and dots).

1. A pod that adds to an emptyDir volume a HTML file every 10 seconds (so you can tell it's running from a browser):

   <pre>apiVersion v1
kind: pod
spec:
  volumes:
      -name: html
  containers:
  - name: nginx
    image: nginx:alpine
    volumeMounts:
      - name: html
        mountPath: /usr/share/nginx/html
        readOnly: true
  - name: html-updater
    image: alpine
    command: ["/bin/sh", "-c"]
    args:
      - while true; do date >> /html/index.html;
          sleep 10; done
    volume Mounts:
      - name: html
        mountPath: /html          
   </pre>

1. Socket hostPath Volume which disappears when each pod dies:

   <pre>apiVersion v1
kind: pod
spec:
  volumes:
    - name: docker-socket
      hostPath:
        path: /var/run/docker.sock
        type: Socket
  containers:
  - name: docker
    image: docker
    command: ["sleep"]
    volume Mounts:
      - name: docker-socket
        mountPath: /var/run/docker.sock       
   </pre>


<a name="Namespaces"></a>

## Namespaces

   * <a target="_blank" href="https://www.youtube.com/watch?v=X48VuDVv0do&t=1h46m19s">NinaK</a>:
   * <a target="_blank" href="https://kubernetesbyexample.com//ns/">kubernetesbyexample.com: Namespaces</a>
   <br /><br />

Every request is namespaced:

   <tt>GET https://localhost:8001/api/v1/namespaces/default/pods</tt>

Namespaces are intended for use in environments with many users spread across multiple teams. 

Namespaces provide <strong>isolation</strong> among different project teams, so they don't overwrite each other's definitions.

Namespaces provide a <strong>scope</strong> for names, as a way to divide cluster resources.

Each namespace has its own set of quotas, network policies, RBAC.

PROTIP: Each <strong>UUID</strong> created (described) by K8s is unique across all namespaces within a cluster.

K8s namespaces are used to separate resources (network, files, users, processes, IPCs, etc.) into 
<strong>virtual clusters</strong> inside a K8s cluster.

   * Nginx-Ingress controller
   * Database (<a href="#shared-db">shared mysql-service</a> or mongodb-service)
   * Logging: Elastic stack
   * Monitoring
   <br /><br />

   * Development
   * Staging 
   * Blue/Green production
   <br /><br />

<a href="#Secrets">Secrets</a> and <a href="#ConfigMaps">ConfigMaps</a> are not shared across namespaces.

Different limits on resources (CPU, RAM, storage) can be defined for each namespace.

Thus, separation of different namespaces is useful within large enterprises.

You don't need to create or think about the default namespace.

1. Specify a namespace in a command:

   <strong>k run nginx --image=nginx</strong>

2. Attach a namespace as the context for all subsequent commands:

   <strong>k config set-context --current --namespace=namespace-1</strong>

3. List pods across a namespace across a cluster:

   <strong>k get pods --all=namespace</strong>

4. API Resources within a namespace:

   <strong>k api-resources --namespaced=true</strong>

   The response is a long unsorted list with SHORTNAMES and KIND.

   Many of the objects shown are for SysAdmins (storageclasses, etc.)

5. API versions:

   <strong>k api-versions</strong>


6. List where KubeDNS is running:

   Out of the box, without creating anything:

   <pre><strong>k get ns
kubectl get namespaces</strong></pre>

   * <strong>default</strong> holds resources users create without specifying a namespace

   * <strong>kube-public</strong> contains publically accessible (without auth) <a href="#ConfigMaps">ConfigMaps</a> ? which contain cluster info (kubectl cluster-info)

   * <strong>kube-system</strong> holds k8s internal system processes (master, kubectl, etc.) manages objects created by the system itself (Controllers, ConfigMap, Secrets, Deployments)

   * <strong>kube-node-lease</strong> holds lease objects containing heartbeats of nodes and the availability of nodes 

   * <a href="#Dashboard"><strong>kubernetes-dashboard</strong></a> is created only within minikube.
   <br /><br />


### imperative kubectl run command

1. Make an imperative command:

   <pre><strong>kubectl run --image=nginx web
   </strong></pre>

   <pre>pod/web created
   </pre>

1. 

   <pre><strong>kubectl get pods
   </strong></pre>

   <pre>NAME   READY   STATUS    RESTARTS   AGE
web    1/1     Running   0          2m59s
   </pre>

1. Details:

   <pre><strong>kubectl describe pod web
   </strong></pre>

   <pre>Name:         web
Namespace:    default
Priority:     0
Node:         minikube/172.17.0.3
Start Time:   Sun, 04 Oct 2020 07:02:16 -0600
Labels:       run=web
Annotations:  &LP;none>
Status:       Running
IP:           172.18.0.3
IPs:
  IP:  172.18.0.3
Containers:
  web:
    Container ID:   docker://ecd03de690f64202c6bdf35d4b4192e5af32854d9c77093f31136570507cc600
    Image:          nginx
    Image ID:       docker-pullable://nginx@sha256:c628b67d21744fce822d22fdcc0389f6bd763daac23a6b77147d0712ea7102d0
    Port:           &LP;none>
    Host Port:      &LP;none>
    State:          Running
      Started:      Sun, 04 Oct 2020 07:02:49 -0600
    Ready:          True
    Restart Count:  0
    Environment:    &LP;none>
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from default-token-72hc5 (ro)
Conditions:
  Type              Status
  Initialized       True 
  Ready             True 
  ContainersReady   True 
  PodScheduled      True 
Volumes:
  default-token-72hc5:
    Type:        Secret (a volume populated by a Secret)
    SecretName:  default-token-72hc5
    Optional:    false
QoS Class:       BestEffort
Node-Selectors:  &LP;none>
Tolerations:     node.kubernetes.io/not-ready:NoExecute for 300s
                 node.kubernetes.io/unreachable:NoExecute for 300s
Events:
  Type    Reason     Age    From               Message
  ----    ------     ----   ----               -------
  Normal  Scheduled  4m40s  default-scheduler  Successfully assigned default/web to minikube
  Normal  Pulling    4m39s  kubelet, minikube  Pulling image "nginx"
  Normal  Pulled     4m7s   kubelet, minikube  Successfully pulled image "nginx" in 31.950535327s
  Normal  Created    4m7s   kubelet, minikube  Created container web
  Normal  Started    4m7s   kubelet, minikube  Started container web
   </pre>




<a name="Dashboard"></a>

### Add-on Dashboard

   The Kubernetes dashboard add-on to Kubernetes was originally intended to provide a convenient web-based way for administrators to manage a cluster. In the past, it was backed by a highly privileged kubernetes service account by default.
   
   The default configuration expose a public interface vulnerable to remote attacks.
   
   So completely disable the kubernetes dashboard by default.

   Instead of using the Kubernetes dashboard, use the GSP console's built-in GKE dashboard or Kubectl commands.
   They provide all the old dashboard's functionality (and more) without exposing an additional attack service.
   

3. Open the Minkube Dashboard server localhost:53764 poped upped on your default browser:

   <pre><strong>minikube dashboard</strong></pre>

   <pre>🔌  Enabling dashboard ...
🤔  Verifying dashboard health ...
🚀  Launching proxy ...
🤔  Verifying proxy health ...
🎉  Opening http://127.0.0.1:54702/api/v1/namespaces/kubernetes-dashboard/services/http:kubernetes-dashboard:/proxy/ in your default browser...
   </pre>

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/99926854-630d5480-2d00-11eb-9e65-ebc0c448e390.png">
   <img src="k8s-dashboard-sample-1920x1080.png" width="1920" height="1080" src="https://user-images.githubusercontent.com/300046/99926854-630d5480-2d00-11eb-9e65-ebc0c448e390.png"></a>

1. Escape by pressing <strong>ctrl+C</strong>.


   ### Declarative yaml

1. Declarative yaml to define a new namespace:

   <pre>apiVersion: v1   # Object controller version
kind: Namespace          # Object classification
metadata:                # Associated data
  labels:
    venue: opera
    watch: cpu
spec:                    # specific object details
   </pre>

   Alternately, imperative commands to define a new namespace:

   <pre><strong>kubectl create namespace ticketing
kubectl label namespace ticketing venue=opera watch=cpu
kubectl get namespaces
kubectl get namespace apps-collection -o YAML
   </strong></pre>

1. REMEMBER: List <tt>api-resources</tt> (not just resources) not bound to a namespace (NOT namespaced) so they can be referenced by named namespaces, such as shared Volumes, nodes:

   <pre><strong>k api-resources --namespaced=false
   </strong></pre>

1. On minikube, delete all resources from the default namespace:

   <pre>kubectl delete --all pods --namespace=default
kubectl delete --all deployments --namespace=default
kubectl delete --all services --namespace=default
   </pre>


<a name="Clusters"></a>

Kubernetes can manage several namespaces running in each <strong>cluster</strong>. 

   "The primary grouping concept in Kubernetes is the namespace. Namespaces are also a way to divide cluster resources between multiple uses. That being said, there is no security between namespaces in Kubernetes; if you are a "user" in a Kubernetes cluster, you can see _all_ the different namespaces and the resources defined in them." -- from the book: OpenShift for Developers, A Guide for Impatient Beginners by Grant Shipley and Graham Dumpleton.

PROTIP: Install <a target="_blank" href="https://github.com/ahmetb/kubectx">https://github.com/ahmetb/kubectx</a> command to switch among clusters. kubens to switch among namespaces. Written in Bash and Go. References:
   * https://computingforgeeks.com/manage-multiple-kubernetes-clusters-with-kubectl-kubectx/


<a name="OpenShift"></a>

### OpenShift project wall namespaces

Red Hat's OpenShift product adds <strong>Projects as "walls" between namespaces</strong>, ensuring that users or applications can only see and access what they are allowed to. OpenShift projects wrap a namespace by adding <strong>security annotations</strong> which control access to that namespace. Access is controlled through an authentication and authorization model based on users and groups. 

   <a target="_blank" href="https://docs.openshift.com/enterprise/3.2/architecture/core_concepts/routes.html">
   This diagram</a> illustrates what OpenShift adds: 
   ![kubernetes-openshift-502x375-107638](https://user-images.githubusercontent.com/300046/42333404-e3f5953a-8037-11e8-9691-0172a8a96388.jpg)


<a name="Kustomize"></a>

### Kustomize templating utility

The <tt>kustomize</tt> provider from <a target="_blank" href="https://www.kustomize.io/">Kustomize.io</a> provides a way to create customized raw, template-free YAML (overlay) files for multiple purposes (dev, prod). It leaves the base (original) YAML file untouched and usable as is. For example, dev would have <tt>replicas: 1</tt> while pro would have <tt>replicas: 5</tt>.
References:

   * <a target="_blank" href="https://www.youtube.com/watch?v=5gsHYdiD6v8">VIDEO by The DevOps Guy</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=ASK6p2r-Yrk">VIDEO Kustomize Getting Started</a>
   * https://kubernetes.io/blog/2020/06/working-with-terraform-and-kubernetes/
   <br /><br />

Some feel Kustomize doesn't provide enough flexibility and that it results in too many different files for one application.

Alternatives are yq and Jsonnet.

<a name="Jsonnet"></a>

### Jsonnet

Jsonnet (pronounced "jay sonnet") at <a target="_blank" href="https://jsonnet.org/">jsonnet.org</a> (from a 20% project within Google) is a DSL templating language which can generate .json, .conf, .sh, and .ini files. Its Creative Commons-licensed C++ code is at <a target="_blank" href="https://github.com/google/jsonnet">github.com/google/jsonnet</a>. 

A faster <a target="_blank" href="https://github.com/google/go-jsonnet">go-jasonnet</a> is written in <a target="_blank" href="https://wilsonmar.github.io/golang">Go language</a> and built using Bazel. There's also <a target="_blank" href="https://www.newtonsoft.com/json">Json.NET</a>.

<a target="_blank" href="https://blog.dev.proton.ai/infrastructure/2021/01/11/scaling-kubernetes-with-jsonnet-and-argocd.html">Sample code in this article</a> shows how Jsonnet templating's ability to extends JSON to "use variables, conditionals, functions, etc. to generate JSON, and feels more like writing JavaScript in some cases than writing a template."

<img alt="cyber-jsonnet.venn.svg" src="../images/cyber-jsonnet.venn.svg">

"This ticked all our boxes: giving us the repeatability of a templating environment with the power of something closer to a programming language."

"We combine Jsonnet with <a href="#ArgoCD">ArgoCD</a> to scale our deployments across thousands of microservices."

<hr />

### Dockerfile to Pod yaml correspondance

<a target="_blank" href="https://user-images.githubusercontent.com/300046/99159670-dc230100-269b-11eb-90a4-b9f6953aba16.png">
<img alt="k8s-dockerfile-sleep" width="989" height="385" src="https://user-images.githubusercontent.com/300046/99159670-dc230100-269b-11eb-90a4-b9f6953aba16.png"></a>

NOTE: Type double-quote characters (" to the right of the Return key on keyboards) instead of the slanty quotes shown in the graphic above.

<a name="Imperative"></a>

### Imperative one web server:

<a target="_blank" href="https://kodekloud.com/courses/kubernetes-certification-course-labs/lectures/12039438">Klab</a>:

1. For Docker to create an Nginx web server:+

   <pre><strong>docker run --name my-nginx -p 80 nginx:1.19.2</strong></pre>


   <a name="Pods"></a>

   ### Naked Pod command & yaml

   <img align="right" width="128" src="https://github.com/kubernetes/community/blob/master/icons/png/resources/labeled/pod-128.png?raw=true">
  
   * <a target="_blank" href="https://kubernetesbyexample.com//pods/">kubernetesbyexample.com: Pods</a>
   <br /><br />

1. For Kubernetes to establish a "naked" pod using the nearly-deprecated run command (use deployment instead):

   <pre><strong>kubectl run my-nginx --port 80 --image=nginx:1.19.2</strong></pre>

   The recommended alternate is this pod definition defined within as a <tt>template</tt> within a <a href="#Deployments">deployment</a> (as additional indentation):

   <pre>apiVersion: v1
kind: Pod
metadata:
  labels:
    app: nginx
spec:
  containers:
  - name: my-nginx
    image: nginx:1.19.2
    ports:
    - containerPort: 80
   </pre>
   
   <a target="_blank" href="https://www.youtube.com/watch?v=TPXwVmvzlV4&time=4m53s">PROTIP:</a> Specification of a label in the k run command creates a pod rather than a deployment. So no need to set flag "--restart=Never".

1. The opposite is "delete pod x".

1. List pods 

   <pre><strong>k get pods</strong></pre>

1. Copy a specific pod name generated to paste in the command to see its logs:

   <pre><strong>kubectl logs pod/<em>pod-name</em></strong></pre>

1. Output log file to a pod (named "pod-x"):

   <pre>k logs pod-x | sudo tee ~/opt/answers/mypod.logs</pre>

   TOOL: stern, 

   elasticsearch, fluentd, kibana: https://github.com/kubernetes/kubernetes/tree/master/cluster/addons/fluentd-elastisearch

   k port-forward service/kibana-logging 5601:5601 --namespace=kube-system

1. Find all pods that have been started with the kubectl run command: ???

   kubectl get pods nginxpod --show-labels | grep run

   kubectl run pod test --image=nginx --dry-run=client -o jasonpath='{metadata.labels}'


1. Execute iteractive terminal on a pod with bash installed (most Linux have --bin/sh installed):

   <pre><strong>kubectl exec -it <em>pod-name</em> --bin/bash</strong></pre>


   <a name="Declarative"></a>

   ### Declarative yaml   

1. Generate a declarative yaml file from an imperative command:

   <pre><strong>k run redis --image=redis --dry-run=client -o yaml > mypod.yaml</strong></pre>


1. Vi pod.yaml to edit<a target="_blank" href="https://vim.fandom.com/wiki/Shifting_blocks_visually">*</a>

   Every K8s yaml file must have these top-level properties:

   <pre>apiVersion:
kind:
metadata:
spec:
   </pre>

   <table border="1" cellpadding="4" cellspacing="0">
   <tr valign="top"><td>apiVersion:</td><td>v1
     </td><td colspan="2">apps/v1
   </td></tr>
   <tr valign="top"><td>kind:</td><td>Pod<br />Servicce
     </td><td><a href="#ReplicaSets">ReplicaSet</a></td><td><a href="#Deployment">Deployment</a>
   </td></tr>
   </table>

### kind: abbreviations

   PROTIP: Use <strong>abbreviations</strong> (in lower case) of basic Kubernetes components to save time typing:

   <table border="1" cellpadding="4" cellspacing="0">
   <tr valign="top"><td>k get </td><td> <a href="#Pods">po</a> </td><td> <a href="#Nodes">no</a> </td><td> <a href="#Services">svc</a> </td><td> <a href="#ReplicaSets">rs</a> </td><td> <a href="#Deployment">deployment</a>
     </td></tr>
   <tr valign="top"><td><em>abbreviation:</em></td><td> <a href="#Pods">pods</a> </td><td> <a href="#Nodes">nodes</a> </td><td> <a href="#Services">services</a> </td><td> <a href="#ReplicaSets">replicaset</a> </td><td> <a href="#Deployment">deployment</a>
     </td></tr>
   </table>

   REMEMBER: <tt>kind:</tt> full value must be <strong>Title case</strong> (first character upper case), <strong>singular</strong> (not plural).

   REMEMBEER: IRL Admins do not code to work with individual pods, because the whole point of K8s is to automate that chore.
 
   Admins define abstractions for <a href="#Deployments">deployment</a> of images (Docker containers) which define templates (blueprints) for creating pods.

   <a name="CRD"></a>

### CRD (Custom Resource Definition)
   
   <img align="right" width="128" src="https://github.com/kubernetes/community/blob/master/icons/png/resources/labeled/crd-128.png?raw=true">
   
   <a target="_blank" href="https://learn.hashicorp.com/tutorials/terraform/kubernetes-crd-faas?in=terraform/kubernetes">
   CRDs define a custom/another/new resource kind</a>.
   
   It uses <tt>apiVersion: apiextensions.k8s.io</tt> (like built-in code for <a href="#StatefulSets">StatefulSets</a>).

   Improbable.io makes use of crd for its etcdclusters (apiVersion: etcd.improbable.io).
   For examaple: <tt>kubectl tree etcdcluster example</tt>

#### Terraform Provider Alpha

   For a dynamic way to manage any Kubernetes API resource using HashiCorp Terraform.
   The <tt>kubernetes_manifest</tt> resource using terraform-plugin-go 
   to provide an HCL analog for Kubernetes YAML manifests
   to create any resource, including CRDs and custom resources.
   
   Once the plan has been generated, we use server side apply to apply the manifest. 

   It graduated (<a target="_blank" href="https://github.com/hashicorp/terraform-provider-kubernetes-alpha">from alpha</a>)
   into the official Kubernetes provider as a beta in July 2021.

   <a target="_blank" href="https://www.hashicorp.com/blog/beta-support-for-crds-in-the-terraform-provider-for-kubernetes">
   BLOG: Beta Support for CRDs in the Terraform Provider for Kubernetes</a>



### metadata:

   metadata contains a dictionary indented name: and label:


### spec:

   In <tt>spec:</tt> is a dictionary item <tt>containers:</tt> specifying a list/array represented by a dash in front of each item:

   <ul><pre>spec:
  containers:
    - name: nginx-containers
      image: nginx
   </pre></ul>

   REMEMBER: Under containers:, the dash in front of name is indented.


1. Create instance by applying yaml -file

   <pre><strong>k apply -f mypod.yml</strong></pre>

1. Edit the pod's yaml file:

   <pre><strong>k edit pod mypod.yaml</strong></pre>

1. Extract a declaration yaml file from a running pod:

   <pre><strong>k get pod mypod -o yaml > definition.yaml</strong></pre>

   But this can be messy because you'll have to delete all <tt>item:</tt> lines.

   In vi normal mode, delate 5 lines, including the cursor, <tt>5dd</tt>.


1. A Busybox image contains several apps:

   <pre>apiVersion: v1
kind: Pod
metadata:
  name: busybox-ready
  namespace: default
   </pre>

   <a name="apply"></a>

   <tt>kubectl apply</tt> makes changes if its subject already exists (the command is declarative?).

   REMEMBER: kubectl create throws an error if the resource already exists, whereas kubectl apply won't. 
   kubectl create says "create this thing" whereas kubectl apply says "do whatever is necessary (create, update, etc) to make it look like this".

   The resulting file includes additional annotations.

<hr />


<a name="Multi-Container"></a>

## Multi-Container Pods

   <img align="right" width="128" src="https://github.com/kubernetes/community/blob/master/icons/png/resources/labeled/pod-128.png?raw=true">

   * <a target="_blank" href="https://app.pluralsight.com/library/courses/kubernetes-developers-integrating-volumes-using-multi-container-pods">2h 26m VIDEO course: "Kubernetes for Developers: Integrating Volumes and Using Multi-container Pods"</a> by Nigel Poulton Apr 23, 2020
   * <a target="_blank" href="https://www.youtube.com/watch?v=3RTvoI-A7UQ">VIDEO: Kubernetes and Container Orchestration 101 - Computer Stuff They Didn't Teach You #11</a> by Microsoft legend Scott Hanselman.
   <br /><br />

The <strong>kube-scheduler</strong> assigns pods to nodes at runtime. 
Before scheduling, it checks resources, QoS, policies, user specs.

This needs application executables to be designed and built as microservices (independent, small, reuseable code) instead of a monalith.

Several containers: the webapp, log-agent, Istio, etc.

Patterns:

<a name="Ambassador"></a> 

The <strong>ambassador</strong> pattern is to <strong>proxy</strong> in front of accessing a database (perhaps charded)<a target="_blank" href="https://medium.com/@bjammal/hands-on-ambassador-pattern-625a13ceb8b7?">*</a>

One use case is to make consistent the format of dates sent to the database.

Another use case is to route requests to one of several databases (dev/test/prod).

<a name="Adapter"></a>

The <strong>Adapter pattern</strong> presents a standardized interface across multiple pods, to normalize output logs and monitoring data. Adapts third-party software.

<a name="Sidecar"></a>

The <strong>Sidecar</strong> pattern
<table border="1" cellpadding="4" cellspacing="0">
<tr valign="center"><th> Pod ...</th><th> Affinity </th><th> Anti-Affinity</th></tr>
<tr valign="center"><th> To Pods </th><td> podAffinity </td><td> topologySpreadContraints</td></tr>
<tr valign="center"><th> To Nodes </th><td> <a href="#nodeAffinity">nodeAffinity</a> </td><td> Taints and Tolerations</td></tr>
</table>



<hr />

<a name="Controllers"></a>

## Controller objects

<a target="_blank" href="https://app.pluralsight.com/course-player?courseId=bf09c049-8db9-4d14-81c7-77f1e942524c">VIDEO: "Kubernetes Un-Scaried"</a> by Phil Taprogge (of Snyk) offers this diagram:

<img width="435" alt="k8s-phil-diagram" src="https://user-images.githubusercontent.com/300046/97088709-09761500-15f0-11eb-8eb2-4f99edab5db0.png">


* <a href="#Deployments">Deployments</a>
* <a href="#ReplicaSets">ReplicaSets</a>, which replaces <a href="#ReplicationControllers">Replication Controllers</a>
* <a href="#StatefulSets">StatefulSets</a>
* <a href="#DaemonSets">DaemonSets</a> for a single pod on every node
* <a href="#Jobs">Jobs</a>
* Serviceaccounts controller
* Endpoints controllers
* Replication controller
<br /><br />

Because Deployments provide a helpful "front end" to ReplicaSets, training focuses on Deployments.

<a name="Replication"></a>
<a name="ReplicaSets"></a>
<a name="Deployments"></a>

## Deploy Replicas for Replication, Rolling Updates

   <img align="right" width="128" src="https://github.com/kubernetes/community/blob/master/icons/png/resources/labeled/rs-128.png?raw=true">

Deployments let you create, update, roll back, and scale Pods, using <strong>ReplicaSets</strong>.

Deployments manage their own ReplicaSets to achieve the declarative goals you prescribe, so you will most commonly work with Deployment objects.

A ReplicaSet controller ensures that a population of Pods, all identical to one another, are running at the same time. 
So it enables Load Balancing across several machines for more capacity, redunancy, and rolling updates without downtime.

   ReplicaSets enable deployment of several pods, and check their status as a single unit (replicas).
   ReplicaSets monitor the number of pods and create pods to match the number of replicas for the label type requested in the yaml.

The sample ReplicaSet.yml file:
   PROTIP: The spec: template: is copied from a pod definition yaml, then indented.

   <pre>apiVersion: v1
kind: ReplicaSet
metadata:
  name: my-app
  labels:
    app: myapp
    type: front-end
spec:
  template:
    metadata:
      name: myapp-pod
      labels:
        app: myapp
        type: front-end
        pec:
      containers:
      - name: nginx-container
        image: nginx:1.19.2
        ports:
        - containerPort: 80
replicas: 3
selector: 
  matchLabels:
    type: front-end
   </pre>

   REMEMBER: A selector is required within ReplicaSet yaml.

   PROTIP: <a target="_blank" href="https://wilsonmar.github.io/text-editors#ViIndent">Indent paste using vi</a>

   Deployments let you do declarative updates to ReplicaSets and Pods. 

   <pre>kubectl run <em>deployment-name</em> \
   --image <em>[IMAGE]:[TAB]</em> \
   --replicas 3 \
   --labels <em>[KEY]=[VALUE]</em> \
   --port 8080 \
   --generator deployment/apps.va \
   --save-config
   </pre>

1. PROTIP: Remember the ".apps" when listing replicasets:

   <pre><strong>k get replicasets.apps</strong></pre>

1. Identify the image:

   <pre><strong>k describe replicasets.apps replicaset-1  | grep -i image:</strong></pre>

   ### Modify replicas to scale

   * Edit the file, then<br />k replace -f replicaset-def.yaml

   REMEMBER: several formats don't modify the file:

   * k scale --relicas=6 -f replicaset-def.yaml

   * k scale --replicas=6 replicaset myapp-replicaset

   * Scale based on load

Practice test with quiz about pod commands: https://kodekloud.com/courses/kubernetes-certification-course-labs/lectures/12039431


### Rolling Updates

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/99866180-3de7dd00-2b6c-11eb-9b4f-563ea790bb9e.png">
   <img width="784" alt="k8s-deployment-rs-1568x584" width="1568" height="584" src="https://user-images.githubusercontent.com/300046/99866180-3de7dd00-2b6c-11eb-9b4f-563ea790bb9e.png"></a>

   For example, when you perform a rolling upgrade of a Deployment, the Deployment object creates a second ReplicaSet, and then increases the number of Pods in the new ReplicaSet as it decreases the number of Pods in its original ReplicaSet.

   (The ReplicaSet process replaces the older ReplicationController.
   Replication Controllers perform a similar role to the combination of ReplicaSets and Deployments, but their use is no longer recommended.)

To upgrade gradually in a production environment without downtime, do a <strong>rolling update</strong>.

Deployments make use of Replicasets.

   <pre><strong>kubectl run --restart=Always      # creates deployment
kubectl run --restart=Never       # creates pod
kubectl run --restart=OnFailure   # creates job
   </strong></pre>

To perform an upgrade, the Deployment object will create a second ReplicaSet object, and then increase the number of (upgraded) Pods in the second ReplicaSet while it decreases the number in the first ReplicaSet.

1. List deployments, different ways:

   <pre>k get deployment
k get deployments
k get deployment.app
k get deployments.app
   </pre>

Practice test with quiz about deployments: https://kodekloud.com/courses/kubernetes-certification-course-labs/lectures/12039434


<a name="StatefulSets"></a>
   
### Stateful Sets
   
   If you need to deploy applications that maintain <strong>local state</strong>, StatefulSet is a better option. A StatefulSet is similar to a Deployment in that the Pods use the same container spec. The Pods created through Deployment are not given persistent identities, however; by contrast, Pods created using StatefulSet have unique <strong>persistent</strong> identities with stable network identity and persistent disk storage.


<hr />

<a name="StatefulSets"></a>

## Deploy StatefulSet components

   <img align="right" width="128" src="https://github.com/kubernetes/community/blob/master/icons/png/resources/labeled/sts-128.png?raw=true">

<a target="_blank" href="https://www.youtube.com/watch?v=X48VuDVv0do&t=2h58m38s">VIDEO</a>
   * <a target="_blank" href="https://kubernetesbyexample.com//statefulset/">kubernetesbyexample.com: Stateful Sets</a>

Stateless apps don't keep a record of state (such as shopping cart items).
Each request is completely new, without regard for what activity occured before.
So they can be defined using deployment components:
Standard Pods are identical and interchangeable, with the same service name, created in random order with random <a href="#Hashes">hashes</a>. Data passes through NodeJs.

Each Stateful app (such as mysql-app) that stores data (updates a database such as MongoDB) about the state of each transaction
are defined using Kubernetes StatefulSets (STS) components:
   * Previous State Data (in data replicas) is queried and updated depending on the data state
   * STS Pods are NOT identical. Each pods has a <strong>sticky identity</strong>, .{governing service domain}
   * STS Pods have individual service names, not interchangeable
   * STS Pods are created in sequence, after success of each Pod, based on a persistent individual identify
   <br /><br />

Add pods can read. But only Master pods can write.

To ensure each Pod maintains the latest state in local storage, 
<strong>continuous data sync</strong> occurs from master to slaves.


<a name="DaemonSets"></a>

## DaemonSets (ds)

   <img align="right" width="128" src="https://github.com/kubernetes/community/blob/master/icons/png/resources/labeled/ds-128.png?raw=true">

To run the same Pod on all nodes within the cluster or on a selection of nodes, use <strong>DaemonSet</strong>. When new nodes are added, DaemonSet will automatically set up Pods in those nodes with the required specification. 

The word "daemon" is a computer science term meaning a non-interactive process that provides useful services to other processes. 

For example, a Kubernetes cluster might use a DaemonSet to ensure that a logging agent like fluentd is running on all nodes in the cluster.

   Usually for system services or other pods that need to physically reside on every node in the cluster, such as for network services. 
   
   They can also be deployed only to certain nodes using labels and node selectors.

REMEMBER:

1. When draining a node out of service temporarily for maintenance, remember to specify ignore daemonsets:

   <pre>kubectl drain node3.mylabserver.com --ignore-daemonsets</pre>

1. To return to service, uncordon:

   <pre>kubectl uncordon node3.mylabserver.com</pre>



<hr />

<a name="Services"></a>
<a name="NodePoints"></a>

## svc = Services

   <img align="right" width="128" src="https://github.com/kubernetes/community/blob/master/icons/png/resources/labeled/svc-128.png?raw=true">

* <a target="_blank" href="https://www.youtube.com/watch?v=X48VuDVv0do&t=2h13m44s">VIDEO by Nina</a>
<br /><br />

Services provide an <strong>un-changing IP address</strong> to pods in the back-end.

PROTIP: Services are defined with a port.

Internal services are only reachable within a cluster.

Types of services:

   * ClusterIP exposes only inside the cluster
   * NodePort exposes a port through the node to the world
   * LodBalancer exposes the service externally using a cloud provider's load
   <br /><br />

REMEMBER: Port numbers in deployment yaml must match port numbers in services yaml.

Example yaml of services:

   * auth.yaml
   * frontend.yaml
   * hello-blue.yaml
   * hello-green.yaml
   * hello.yaml
   * monolith.yaml
   <br /><br />


<a name="ServiceAccounts"></a>

## sa = ServiceAccounts

<img align="right" width="128" src="https://github.com/kubernetes/community/blob/master/icons/png/resources/labeled/sa-128.png?raw=true">

1. Administrator: Create a new service account named "backend-team":

   <pre><strong>kubectl create serviceaccount backend-team</strong></pre>

1. Define the service 2.1-web_service.yaml:

   <pre>spec:
  selector:
    app: nginx
  ports:
  - protocol: TCP
    port: 80
    targetPort: 8080
   </pre>

1. Verify visibility using curl:

   <pre>kubectl create -f 2.1-web_service.yaml
kubectl get services
kubectl describe service webserver  # copy IP: value 10.108.171.76
kubectl describe nodes | grep -i address -A 1
curl 10.0.0.100:3#### (replace #### with the actual port digits)
   </pre>

   PROTIP: A secret is assigned automatically each service.


1. To show all components in a mongodb app:

   <pre><strong>kubectl get all | grep mongodb </strong></pre>


   <a name="Expose">Expose</a>,

   ### Expose service within deployment

   PROTIP: External services are exposed by <strong>Endpoints:</strong> (<strong>NodePoints</strong>).

   https://kubernetes.io/docs/reference/generated

   <pre><strong>k expose deployment <em>deployment</em> --port=6379 -n <em>namespace</em> --name=<em>service-name</em></strong></pre>


   <a name="LoadBalancer"></a>

   ### LoadBalancer

   One type of service is a LoadBalancer with a external IP extended from nodePort service which extends an ClusterIP :

   <pre>
apiVersion: v1
kind: Service
metadata:
  name: la-lb-service
spec:
  type: LoadBalancer
  sessionAffinity: ClientIP
  selector:
    app: la-lb
  ports:
  - protocol: TCP
    port: 3200  # clusterIP
    targetPort: 3000
    nodePort: 30010
  clusterIP: 10.0.171.223
  loadBalancerIP: 78.12.23.17
   </pre>

   <tt>sessionAffinity: ClientIP</tt> to ensure that each client's first request to determine which Pod will be used for all subsequent connections, when switching versions mid-transaction can cause issues.

   Notice static IP addresses are being specified here. Is that a good thing?


   <pre><strong>k get svc</strong></pre>

   The LoadBalancer type service assigns an <strong>EXTERNAL-IP address</strong> which accepts external requests.

   <a name="ServicesDiscovery"></a>

   ### Service Discovery

1. cat /etc/resolve.conf

   <pre>search default.svc.cluster.local  svc.cluster.local  cluster.local
   nameserver 10.96.0.10
   options ndots:5</pre>


1. List the URL:

   <pre><strong>minkube service mongo-extress-service</strong></pre>

   To text, create a database.


   <a name="ConfigMaps"></a>

   ### ConfigMaps

   DEFINITION: ConfigMap is an API object used to store non-confidential data in key-value pairs. 

   Pods can consume <a href="#ConfigMaps">ConfigMaps</a> as environment variables, command-line arguments, or as configuration files in a volume.

   <a name="shared-db"></a>

   #### shared mysql-service yaml ConfigMap

1. Define a commonly used ConfigMap within a service named "database":

   <pre>apiVersion: v1
kind: ConfigMap
metadata:
  name: mysel-configmap
data: 
  db_url: mysel-service.database
   </pre>

   REMEMBER: ".database" above references the namespace. [1:15:17]

1. View

   <pre><strong>k get configmap -n my-namespace</strong></pre>


<hr />


<a name="Jobs"></a>

### Kind: Job

<img align="right" width="128" src="https://github.com/kubernetes/community/blob/master/icons/png/resources/labeled/job-128.png?raw=true">
Batch jobs are supervisor processes that run once and immediately completed.
The Job controller within the Control Plane creates one or more Pods required to run a task. 

   <tt>spec: completions: 5</tt> defines the number of pods started within a job.

   <tt>spec: parallelism: 1</tt> defines the number of pods running at the same time.

   When the task is completed, the Job terminates.

<a target="_blank" href="https://kubernetesbyexample.com//jobs/">kubernetesbyexample.com: Jobs</a>

3 types of jobs:

   * completions=1 & parallelism=1 for non-parallel: one pod is started
   * completions=n & parallelism=m for n fixed completions in parallel 
   * completions=1 & parallelism=m for n jobs work queue started until 1 completed (rarely used)
   <br /><br />

If a node fails while a Job is executing on that node, Kubernetes restarts the Job on a node that is still running.

To fail jobs that don't finish within a set number seconds:

<a target="_blank" href="https://googlecoursera.qwiklabs.com/focuses/13235441?parent=lti_session">This example-job.yaml</a> uses perl language built-in command to compute the value of Pi to 2,000 places and then prints the result:

   <pre>apiVersion: batch/v1
kind: Job
metadata:
  # Unique key of the Job instance
  name: example-job
spec:
  template:
    metadata:
      name: example-job
    spec:
      containers:
      - name: pi
        image: perl
        command: ["perl"]
        args: ["-Mbignum=bpi", "-wle", "print bpi(2000)"]
      # Do not restart containers after they exit
      restartPolicy: Never
   </pre>

kubectl apply -f example-job.yaml

1. For the job's start time and success status, describe the job

   <pre>Start Time:     Thu, 20 Dec 2018 14:34:09 +0000
Pods Statuses:  0 Running / 1 Succeeded / 0 Failed
   </pre>

1. Additional conditions:

   <pre>...
spec:
  backoffLimit: 4
  activeDeadlineSeconds: 300
  template:
  ...
   </pre>

1. Delete job after finish:
   
   <pre>ttlSecondsAfterFinished: 20</pre>

1. When a job is completed, the Job terminates Pods used unless:

   <pre><strong>kubectl delete job <em>job-name</em> --cascade false </strong></pre>

1. After running, check the status of jobs
   
   <pre><strong>kubectl get jobs </strong></pre>

   <pre>NAME     COMPLETIONS   DURATION   AGE
somejob   5/5           27s        9m41s
   </pre>


<a name="CronJobs"></a>

### Kind: Cronjob

<img align="right" width="128" src="https://github.com/kubernetes/community/blob/master/icons/png/resources/labeled/cronjob-128.png?raw=true">

2. When a job is complete, view results in logs:

   <pre><strong>kubectl logs <em>pod-name</em></strong></pre>

   The <a href="#API_Server">API Server</a> authenticates using one of several methods (basic, certificates, tokens, etc.).

   "Authorization" refers to determining whether the requester is allowed to perform based on role (using <a href="#RBAC">RBAC</a>).

   The <a href="#API_Server">API Server</a> routes several <strong>kinds</strong> of <a href="#Ayaml-files">yaml declaration files</a>: Pod, Deployment of pods, Service, Job, Configmap.

The CronJob controller runs Pods on a <strong>time-based schedule</strong>  like Linux cron uses (minute, hour, day, month, day of week 0-6)

1. apply example-cronjob.yaml with batch apiVersion and kind: Cronjob, with a schedule spec:

   <pre>apiVersion: batch/v1beta1
kind: CronJob
metadata:
  name: hello
spec:
  schedule: "*/1 * * * *"
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: hello
            image: busybox
            args:
            - /bin/sh
            - -c
            - date; echo "Hello, World!"
          restartPolicy: OnFailure
   </pre>

Additional:

   <pre>...
spec:
  schedule: "*/1 * * * *"
  startingDeadlineSeconds: 3600    # to stop repeated unsuccessful attempts to start
  concurrencyPolicy: Forbid        # or replace existing concurrent jobs
  suspend: True
  successfulJobsHistoryLimit: 3    # retained in history
  failedJobsHistoryLimit: 1        # 
  jobtemplate:
    ...
   </pre>

1. Add-on for jetbrains:

   <a target="_blank" href="https://plugins.jetbrains.com/plugin/10485-kubernetes">https://plugins.jetbrains.com/plugin/10485-kubernetes</a>


<hr />

## Misc. List:

   <pre>kubectl get -n kube-system serviceaccounts</pre>


QUESTON: Create a Cron job that will run ???


<a name="Podspecs"></a>

### Podspecs

Podspecs are yaml files that describe a pod.

   <pre>
apiVersion: v1
kind: Pod
metadata:
  name: busybox-ready
  namespace: default
   </pre>

## Deleting Pods

   <pre>k delete pod frontend --grace-period=0 --force</pre>



<hr />



<a name="krew"></a>

## Plug-in manager

1. Like apt-get, but for use within Kubernetes:

   <pre><strong>kubectl krew install tree</strong></pre>

   From the krew-index plug repository on the internet.

1. For a deployment, list its Pods within ReplicaSet:
 
   <pre>kubectl tree deployment ???</pre>

<hr />

<a name="Addons"></a>

## Add-ons to Kubernetes

> Kubernetes is a platform used for building platforms such as <a href="#OpenShift">OpenShift</a>, Helm, EKS, CrossPlane.

* <a target="_blank" href="https://github.com/appscode/">AppsCode</a> provides several utiities for Kubernetes.
* <a target="_blank" href="https://coreos.com/tectonic/">CoreOS Tectonic</a> multi-cloud is being integrated with RedHat.
* <a target="_blank" href="https://containership.io/">Containership Kubernetes Engine</a>
* <a target="_blank" href="">Giant Swarm managed Kubernetes</a>
* <a target="_blank" href="https://console.bluemix.net/containers-kubernetes/catalog/cluster/">IBM Cloud Kubernetes Service (IKS) works with their IBM Cloud Container Registry. See <a target="_blank" href="https://console.bluemix.net/docs/containers/cs_tutorials_cf.html#cf_tutorial">tutorial</a>
* <a target="_blank" href="https://www.madcore.ai">Madcore.ai</a>

* Mail.Ru Cloud Solutions Containers
* <a target="_blank" href="https://www.mirantis.com/software/mcp/">Mirantis' Cloud Platform</a>
* PKS (Pivotal Kubernetes Service)
* <a target="_blank" href="https://platform9.com/">Platform 9</a> provide OpenStack with Kubernetes
* Stackpoint

* <a target="_blank" href="https://buddy.works/guides/how-optimize-kubernetes-workflow">Buddy</a>
   automates Kubernetes workflows.

* Octant cluster visualization
* <a target="_blank" href="https://bit.ly/3dcRg4Y">RabbitMQ</a> for AMQP messaging with StatefulSet app

helm install -name prometheus stable/prometheus-operator

k port-forward service/prometheus-grafana 9091:80

<a target="_blank" href="https://github.com/Albertoimpl/k8s-for-the-busy">https://github.com/Albertoimpl/k8s-for-the-busy</a>
by Alberto C. Rios (@albertoimpl)

https://github.com/ojhughes/k8s-for-the-busy-java-developer by Ollie Hughes (@olliehughes82)

<hr />

<a name="Helm"></a>

### Helm charts

<a target="_blank" href="https://www.youtube.com/watch?v=0vpM8E28aXQ&time=9m45s">VIDEO</a>: Helm (<a target="_blank" href="https://helm.sh/">helm.sh</a>) is the default package manager for Kubernets (like pip and NuGet). It was started by a company called Deis in October 2015 out of a hackathon.

Helm templating creates yaml.

Helm is further automated with Tilt.

<a targeet="_blank" href="https://www.youtube.com/watch?v=4ht22ReBjno">
The Illustrated Children's Guide to Kubernetes</a>
by Deis, Inc.

Helm Charts are a collection of <strong>templates</strong> that can be pulled from a version-controlled Helm repo to define, install, and upgrade complex Kubernetes applications, thus reducing copy-and-paste (and room for error in repetition).

A Helm chart can be used to <a target="_blank" href="https://skillsmatter.com/skillscasts/10813-faas-and-furious-0-to-serverless-in-60-seconds-anywhere">
quickly create an OpenFaaS (Serverless) cluster</a>:

<ul>
   <pre>git clone https://github.com/openfaas/faas-netes && cd faas-netes
   kubectl apply -f ./namespaces.yml 
   kubectl apply -f ./yaml_armhf
   </pre>
</ul>

Videos:

   * <a target="_blank" href="https://www.youtube.com/channel/UCdngmbVKX1Tgre699-XLlUA&t=1h24m24s">
Helm Explained by "Nana's TechWorld"</a> (<a target="_blank" href="https://www.linkedin.com/in/nana-janashia/">Nana Janashia</a>)
   * <a target="_blank" href="https://www.ibm.com/blogs/bluemix/2018/06/deploy-scalable-web-application-kubernetes-using-helm/">
IBM: Deploy a scalable web application to Kubernetes using Helm</a>


<a name="Kapp"></a>

## Kapp

Kapp (open sourced at <a target="_blank" href="https://carvel.dev/kapp/">https://carvel.dev/kapp</a>)
replaces the kubectl command:

<pre>kapp deploy -a deploy1 -f d.yaml -f </pre>

It is used by Google for its Marketplace to leverage labels.


<a name="ArgoCD"></a>

### ArgoCD 

Argo CD is a declarative, GitOps Continuous Delivery tool for Kubernetes.

"GitOps" means ArgoCD monitors GitHub and applies changes of declarative yaml to K8s Controllers automatically:

   * <a target="_blank" href="https://argoproj.github.io/argo-cd/operator-manual/architecture/">Architecture diagram</a>
   * <a target="_blank" href="https://argoproj.github.io/argo-cd/">argoproj.github.io/argo-cd</a> home page
   * <a target="_blank" href="https://www.youtube.com/watch?v=2WSJF7d8dUg&list=RDCMUCFe9-V_rN9nLqVNiI8Yof3w&index=2">Introduction to ArgoCD : Kubernetes DevOps CI/CD</a>
   * Open sourced at <a target="_blank" href="https://github.com/argoproj/argo-cd/">github.com/argoproj/argo-cd</a>
   <br /><br />



<a name="OpenShift"></a>

### OpenShift routes to services

   OpenShift's Router is instead a HAProxy container (taking the place of NGINX).

   HAProxy uses a <a target="_blank" href="http://searchnetworking.techtarget.com/definition/VRRP">VRRP (Virtual Router Redundancy Protocol)</a> automatically assigns available Internet Protocol routers to participating hosts.

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/42337120-f421563c-8042-11e8-9d2b-d19615b4da0c.jpg">
   <img alt="k8s-openshift-projects-461x277-64498.jpg" width="461" height="277" src="https://user-images.githubusercontent.com/300046/42337120-f421563c-8042-11e8-9d2b-d19615b4da0c.jpg"></a>

Services can be referenced by external clients using a host name such as "hello-svc.mycorp.com" by using
OpenShift Enterprise, which uses <strong>routes</strong> that define the rules the HAProxy applies to incoming connections.

Routes are deployed by an OpenShift Enterprise administrator as <strong>routers</strong> to nodes in an OpenShift Enterprise cluster. To clarify, the default Router in Openshift is an actual HAProxy container providing reverse proxy capabilities.


<hr />

<a name="NetworkPolicies"></a>

## netpol = NetworkPolicies

<img align="right" width="128" src="https://github.com/kubernetes/community/blob/master/icons/png/resources/labeled/netpol-128.png?raw=true">

The IP assigned each pod is on the <strong>Service Network</strong>.



<a name="ClusterNetworking"></a>

## HA Proxy cluster

   For network resiliency, <strong>HA Proxy cluster</strong> distributes traffic among nodes.

   <strong>Endpoints</strong> track the IP addresses of Pods with matching selectors.

   <tt>EndpointSlice</tt> groups network endpoints together with Kubernetes resources.


   A private ClusterIP is accessible by nodes only within the same cluster.

<a name="NodePort"></a>

   Services listen on the same <strong>nodePort</strong> (TCP 30000 - 32767 defined by `--service-node-port-range`).

<a target="_blank" title="from Yongbok Kim (who writes in Korean)" href="https://user-images.githubusercontent.com/300046/33525757-6fcd2624-d7f3-11e7-9745-79ce5f9600e9.jpg">
<img alt="k8s-arch-ruo91-797x451-104467" src="https://user-images.githubusercontent.com/300046/33525757-6fcd2624-d7f3-11e7-9745-79ce5f9600e9.jpg"></a>

The diagram above is referenced throughout this tutorial, particularly in the <a href="#Details">Details section below</a>. It is by Yongbok Kim who presents <a target="_blank" href="https://translate.google.com/translate?hl=en&sl=ko&tl=en&u=http://www.yongbok.net/blog/google-kubernetes-container-cluster-manager/">
animations on his website</a>.

   Communications with outside service network callers occur through a single Virtual IP address (VIP) going through a <strong>kube-proxy</strong> pod within each node.
   The Kube-proxy load balances traffic to <strong>deployments</strong>, which are load-balanced sets of pods within each node. Kube-proxy IPVS Mode is native to the Linux kernel.
   CBR0 (Custom Bridge zero) forwards the eth0, which rewrites the destination IP to a pod behind the Service<a target="_blank" href="https://acloudguru.com/course/kubernetes-deep-dive/learn/2ddbcafb-9f4f-ed6c-3cec-912cb68a7944/36910c67-4dfd-3343-648a-3a266aa9f667/watch?backUrl=~2Fcourses&backUrl=~2Fcourses&backUrl=~2Fcourses,~2Fcourses">3:18 into chapter 6 Big Picture</a>

Kubernetes manages the instantiating, starting, stopping, updating, and deleting of a <strong>pre-defined number of pod replicas</strong> based on declarations in <strong>*.yaml</strong> files or interactive commands.

The number of pods replicated is based on <strong>deployment</strong> yaml files. 
Service yaml files specify what ports are used in deployments.

<a target="_blank" href="https://user-images.githubusercontent.com/300046/96952588-6c5e9380-14ac-11eb-8658-40fdee2aee93.png">
<img width="707" alt="k8s-svc-deploy-asso" src="https://user-images.githubusercontent.com/300046/96952588-6c5e9380-14ac-11eb-8658-40fdee2aee93.png"></a>


### Auto-scaling

The Horizontal Pod Autoscaler add more pods by updating the replicas count in the Deployment 
   * In v1, based on <tt>targetCPUUtilizationPercentage: 50</tt>
   * In v2, based on targetCPU and Memory, and custom metrics
   <br /><br />

The Cluster Autoscaler adds more nodes to the cluster.

In 2019 Kubernetes added <strong>auto-scaling</strong> based on metrics API measurement of demand.

   To create a cluster with autoscaling:

   <pre><strong>gcloud container clusters create <em>cluster-name</em> --num-nodes 30 \
   --enable-autoscaling --min-nodes 15 --max-nodes 50 --zone <em>comput-zone</em> </strong></pre>

   To scale nodes in a cluster node pool:

   <pre><strong>gcloud container clusters resize <em>projectdemo</em> --node-pool <em>default-pool</em> --size 6</strong></pre>

   To disable auto-scaling:

   <pre><strong>... --no-enable-autoscaling ...</strong></pre>

<a name="Autoscaler"></a>

## Autoscaler

* https://github.com/kubernetes/kubernetes/blob/release-1.0/docs/proposals/autoscaling.md now obsolete
* https://github.com/kubernetes/community/blob/master/contributors/design-proposals/autoscaling/horizontal-pod-autoscaler.md
* https://www.tutorialspoint.com/kubernetes/kubernetes_replica_sets.htm
* resize the amount of CPU/RAM for a specific Pod or Container. https://github.com/kubernetes/kubernetes/issues/2072

## AWS K8s Cluster Autoscaler

<a target="_blank" href="https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/cloudprovider/aws/README.md">https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/cloudprovider/aws/README.md</a> 
provides deep-dive notes and code.

   <a name="HPA"></a>
   <img align="right" width="128" src="https://github.com/kubernetes/community/blob/master/icons/png/resources/labeled/hpa-128.png?raw=true">

## HPA (HorizontalPodAutoscaler)

increases the instance count.

<a target="_blank" href="https://linuxacademy.com/cp/guides/download/refsheets/guides/refsheets/linuxacademy-kubernetesadmin-archdiagrams-1_1516737832.pdf">This Architectural Diagram pdf</a>:
<a target="_blank" href="https://user-images.githubusercontent.com/300046/51218893-5a75b700-18fc-11e9-89af-7ba9ca3000c5.jpg"><img alt="
k8s-linuxacademy-arch-912x415-32433.jpg" src="https://user-images.githubusercontent.com/300046/51218893-5a75b700-18fc-11e9-89af-7ba9ca3000c5.jpg"></a>
is described in <a target="_blank" href="https://linuxacademy.com/cp/modules/view/id/155">
Linux Academy's CKA course</a> of 5:34:43 hours of videos by Chad Miller (<a target="_blank" href="https://twitter.com/OpenChad/">@OpenChad</a>). 

* <a target="_blank" href="https://training.linuxfoundation.org/training/kubernetes-fundamentals/">Kubernetes Fundamentals</a> $299 video course offered on EdX.com from LinuxFoundation.
![k8s-arch-xteam-793x573]()

<a target="_blank" href="https://user-images.githubusercontent.com/300046/132930586-4634a11c-7aa1-4667-ab24-b019144a2265.png"><img alt="k8s-arch-xteam-793x573" width="793" height="573" src="https://user-images.githubusercontent.com/300046/132930586-4634a11c-7aa1-4667-ab24-b019144a2265.png"></a>
Source: <a target="_blank" href="https://x-team.com/blog/introduction-kubernetes-architecture/">X-Team</a>


PROTIP: To list clusters and switch between them, consider brew installing utilities <a target="_blank" href="https://github.com/ahmetb/kubectx">https://github.com/ahmetb/kubectx</a> and kubens.

kube-ps1.sh creates a shell pod envbin.

<hr />


<a name="K8s_API"></a>
<a name="Workloads"></a>
<a name="Metadata"></a>
<a name="Clusters"></a>


https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/

   <pre>k create cronjob my-job --image=busybox --schedule="*/1 * * * *" --logger hello</pre>


<a name="Deployments"></a>

### Deployments

   * <a target="_blank" href="https://kubernetesbyexample.com//deployments/">kubernetesbyexample.com: Deployments</a>

A Deployment is an API object that manages a replicated application, typically by running Pods with no local state.

   * auth.yaml
   * frontend.yaml
   * hello-green.yaml
   * hello-canary.yaml
   * hello.yaml

1. Create a yaml file from a command to deploy 3 replica pods:

   <pre><strong>kubectl create deployment nginx-lab8 --image=nginx --replicas=3 --dry-run=client -o yaml > lab8.yaml
   </strong></pre>

1. To delete a deployment:

   <pre>kubectl delete deployments.app pod mydep ???</pre>


<hr />

<a name="HealthChecks"></a>

## Health Checks

   * <a target="_blank" href="https://kubernetesbyexample.com//healthz/">kubernetesbyexample.com: Health Checks</a>
   * <a target="_blank" href="https://inlets.dev/blog/2020/12/15/multi-cluster-monitoring.html">How to monitor multi-cloud Kubernetes with Prometheus and Grafana</a> (on Equinix Metal) Inlets blog December 15, 2020 by Johan Siebens 

<a name="Probes"></a>

## Probes

<table border="1" cellpadding="4" cellspacing="1">
<tr valign="top"><td> Accept traffic? </td><td> readinessProbe </td><td> actuator/health </td></tr>
<tr valign="top"><td> Restart the container? </td><td> livenessProbe </td><td> actuator/info </td></tr>
</table>

<a name="ReadinessProbes"></a>
<a name="LivenessProbes"></a>

1. Configure "livenessProbe" (in folder health) and 

   "readinessProbe" (in folder readiness) on port 80

   In healthy-monolith-with-probes.yaml 

   <pre>...
  livenessProbe:
    httpGet: 
      path: "/actuator/info"
      port: 8080
    failureThreshold: 3      # Default is 3
    successThreshold: 1
    initialDelaySeconds: 5   # after init/startup before applying probe
    periodSeconds: 30        # Default is 10
    timeoutSeconds: 10       # Default is 1
  readinessProbe:
    httpGet: 
      path: "/actuator/health"
      port: 8080
    failureThreshold: 3      # Default is 3
    successThreshold: 1     
    initialDelaySeconds: 15  # before applying health checks
    periodSeconds: 30        # Default is 10
    timeoutSeconds: 10  # Needed?
   </pre>

   * ExecAction executes an action inside the container
   * TCPSocketAction checks against the container's IP address on a specified port
   * HTTPGetAction - HTTP Get request against container
   <br /><br />

Alternately:

   <pre> httpGet: 
      path: "/index.html"
      port: 80
   </pre>


Probes with Dekorate

   <pre>...
  startupProbe:
    httpGet: 
      path: "/healthz"
      port: liveness-port
    failureThreshold: 30
    periodSeconds: 10
   </pre>

Skaffold

Oketeto


<a name="Logging"></a>

### Logging

   * <a target="_blank" href="https://kubernetesbyexample.com//logging/">kubernetesbyexample.com: Logging</a>
   <br /><br />

1. Get pod name

   kubectl get pods

1. List log entries for pod:

   kubectl logs -f <em>POD NAME HERE</em> event-simulator


PROTIP: To display the tail end of logs for containers and multiple pods (rather than scrolling through an entire log), install <a target="_blank" href="https://github.com/wercker/stern/tree/master/stern">stern at https://github.com/wercker/stern/tree/master/stern</a>. It's from Wercker (which was acquired by Oracle in 2017). BTW, on a ship stern is the tail end.
Install from <a target="_blank" href="https://github.com/wercker/stern/releases">https://github.com/wercker/stern/releases</a>


<hr />

<a name="#k8s_clouds"></a>

## Multi-cloud

Kubernetes in the cloud also enables <strong>multi-region</strong> setups. 

GCP has <tt>--horizontal-pod-autoscaler-downscal-stabilization</tt> to provide a wait period (5 minutes) before another scale-down action<a target="_blank" href="https://www.coursera.org/learn/deploying-workloads-google-kubernetes-engine-gke/lecture/obhDh/services-and-scaling">*</a> 

### IBM CloudLabs

https://www.youtube.com/watch?v=aSrqRSk43lY&list=PLOspHqNVtKABAVX4azqPIu6UfsPzSu2YN&index=2

### Equinix Metal, orion-equinix

https://inlets.dev/blog/2020/12/15/multi-cluster-monitoring.html


<hr />

<a name="GCP"></a>

<a name="GKE"></a>

### GKE (Google Kubernetes Engine) in GCP

<a target="_blank" href="https://cloud.google.com/kubernetes-engine/">Google Kubernetes Engine (GKE)</a> is Google's container management SaaS offering. GKE runs within the <a target="_blank" href="https://wilsonmar.github.io/gcp/">Google Compute Platform (GCP)</a> on top of Google Compute Engine (GCE) providing machines.

1. The marketing home page for all GCP is at:

   <a target="_blank" href="https://cloud.google.com/">https://cloud.google.com/</a>

1. Click on the Products drop-down and select "Google Kubernetes Engine":

   <a target="_blank" href="https://cloud.google.com/kubernetes-engine">https://cloud.google.com/kubernetes-engine</a>

1. CLick "Docs" for Documentation (video).

1. If you don't have an GCP account, get one, then get on the Google Cloud using a GCP account (for money):

   <a target="_blank" href="https://console.cloud.google.com/start">https://console.cloud.google.com/start</a>

   "4-way autoscaling" includes Cluster autoscaling working on a per-node-pool basis and vertical pod autoscaling continuously analyzes the CPU and memory usage of pods, automatically adjusting CPU and memory requests.

   <a name="GKE-submenu"></a>

1. On the GCP left menu, in the COMPUTE category, click "Kubernetes Engine" for this submenu:

   ![gke-menu-147x295](https://user-images.githubusercontent.com/300046/134752689-3a8de92b-1e8e-4b82-8750-c1e35256f7c3.png)

   The menu grows over time. Previously:
   ![k8s-gcp-738x314-14535](https://user-images.githubusercontent.com/300046/42350579-5b4fd060-806e-11e8-8bc4-f88cf32f8bc7.jpg)

   GKE provides networking within VPC, monitoring, logging, and CI/CD (Google Build).

1. Click on "Google Kubernetes Engine" you'll see:

   ![gke-api-landing-599x211](https://user-images.githubusercontent.com/300046/134751078-4e68d2ec-bff7-4a37-9770-5b8eaa74bff9.png)

1. Click "Enable". It takes a few minutes.

   ![gks-clusters-landing-475x171](https://user-images.githubusercontent.com/300046/134751227-2f2b716d-b581-48fd-89df-3f18c0e4b590.png)

1. Click "CREATE CLUSTER". DEFINITION: A cluster consists of at least one cluster control plane machine and multiple worker machines called nodes.

   ![gks-create-cluster-560x304](https://user-images.githubusercontent.com/300046/134751302-4f0c6c53-1562-40c1-a5e8-a0034fec82e9.png)

1. If you are not familiar with Autopilot, click "COMPARE" and "<a target="_blank" href="https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview?_ga=2.180381860.-2046351030.1631457473">Learn more</a>", then return here after reading.

1. Click "CONFIGURE" associated with "GKE Autopilot". Click "TRY THE DEMO" for a 13-step tutorial on creating Autopilot.

1. Click "CREATE NOW".

1. Click the "CONFIGURE" associated with "GKE Standard".

1. Rather than the default "cluster-1", customize a name for this cluster if you want.

1. Rather than the default "us-central1-c", choose a zone for this cluster if you want.

1. Click on the default-pool node pool.

1. Change the size to 4 nodes. ???

1. Click CREATE to create the cluster. It takes a few minutes for the cluster to finish provisioning.

   Notice the left menu is the <a href="#GKE-submenu">GKE Sub-menu</a>.

1. When the Status reaches a green checkmark, click "Run in Cloud Shell" for CLI.

1. Click the blue "Continue".

1. Following the tutorial, get the "Online Boutique" sample application from GitHub to run on your cluster 

   <pre><strong>git clone \
    https://github.com/GoogleCloudPlatform/microservices-demo.git
   </strong></pre>

1. Open the Cloud Shell Editor (workspace) to the directory just created from github:

   <pre><strong>cloudshell workspace microservices-demo
   </strong></pre>

   Let's take a few minutes to explore the sample application.

   Notice the source of each microservice resides in the src directory. For example, the frontend lives in the src/frontend directory.

   Once a release gets created, each microservice is compiled and processed into a Docker image according to rules set in a Dockerfile (such as src/frontend/Dockerfile).

   Finally, the sample application contains a set of Kubernetes resources in the form of YAML files (such as release/kubernetes-manifests.yaml) to define the various Services and Deployments.

1. To connect to the cluster, click the Editor left menu icon which has the name "CLOUD CODE - KUBERNETES".

1. Click "Add a clustser to the KubeConfig" blue box.

1. Select "Google Kubernetes Engine".

1. Select the name of your node ("cloud-1" by default).

1. Click "Open Terminal" at the top.
1. Deploy an app workload to your new GKE cluster.

   <pre><strong>cd microservices-demo/
kubectl apply -f ./release/kubernetes-manifests.yaml
    </strong></pre>

   The command deploys Kubernetes Deployments and Services corresponding to the different microservices in the sample application.

1. On the Kubernetes Explorer, expand your cluster details by double-clicking on its name.

1. Expand the "Namespaces > Pods" section, where you can track your deployment progress. As the pods are deployed, they'll display a green "Running" state:

   Once all pods are in a running state, the application has been fully deployed.

   ### Open the live application in your browser:

   To allow the application to be accessible externally, you have deployed a Service of type LoadBalancer called "frontend-external" which gets bound to an external IP address.

1. In the Kubernetes Explorer, navigate to "Namespaces > Services > frontend-external".

1. Copy the IP address under "External IPs".

1. Open a new web browser tab and visit your application by connecting to the IP address.

   The application should now be running and accessible publicly!

   ### Delete a cluster:

1. Click the "DELETE" icon at the top.

1. Open the Navigation menu, then click Kubernetes Engine.

1. Click the name of your cluster.

1. Click Delete, then click Delete.


   <a name="GKS"></a>

   ## GKS (Google Kubernetes Service)

1. A search for "Kubernetes" within the GCP Console yields:

   ![k8s-gcp-search-656x866-37655](https://user-images.githubusercontent.com/300046/42350888-a8aca044-806f-11e8-8848-813657b7660d.jpg)


<a target="_blank" href="https://bit.ly/33Cd4Uw/">First K8s app</a>

1. In the Google Cloud Console, on the Navigation menu, in the Dashboard, click "Go to APIs Overview.
1. Confirm Country and Terms of Service, then click "AGREE AND CONTINUE".
1. Click to expand APIs & Services. Click "+ ENABLE APIS AND SERVICES".
1. In the Search for APIs & Services box, enter "Cloud Build".
1. In the resulting card for the "Cloud Build API", if you do not see "API enabled", click the ENABLE button.
1. Use the Back button to return to the previous screen with a search box. In the search box, enter "Container Registry".
1. Click card "Google Container Registry API". If you do not see "API enabled", click the ENABLE button.

1. Click the "Activate Cloud Shell" icon. Drag the Console devider to see more. 
1. Create file: nano quickstart.sh

   <pre>#!/bin/sh
echo "Hello, world! The time is $(date)."
   </pre>

1. Press ctrl+S to save and ctrl+X to exit.
1. Create file: nano Dockerfile

   <pre>FROM alpine
COPY quickstart.sh /
CMD ["/quickstart.sh"]
   </pre>

1. Press ctrl+S to save and ctrl+X to exit.

1. In Cloud Shell, build an image based on the "Dockerfile":

   <pre><strong>gcloud builds submit --tag gcr.io/${GOOGLE_CLOUD_PROJECT}/quickstart-image .</strong></pre>

   Notice the dot at the end to specify that the source filecho $?e is in the current working directory.

1. Authorize Cloud Shell.
1. Create a soft link as a shortcut to the working directory <strong>~/ak8s</strong>:.

   <pre>ln -s ~/training-data-analyst/courses/ak8s/v1.1 ~/ak8s</pre>

1. Get the repo (wait for it to finish):

   <pre><strong>git clone https://github.com/GoogleCloudPlatform/training-data-analyst
ln -s ~/training-data-analyst/courses/ak8s/v1.1 ~/ak8s
cd ~/ak8s/Cloud_Build/a
   </strong></pre>

1. Confirm on the Navigation menu UI: scroll down to TOOLS section. Click Container Registry to select Images. Click quickstart-image for a list.

1. Run Google Cloud Build:

   <pre><strong>cd ~/ak8s/Cloud_Build/b
gcloud builds submit --config cloudbuild.yaml .
   </strong></pre>

1. Confirm whether the command shell knows the build failed (returns 1 instead of 0):

   <pre><strong>echo $?</strong></pre>

1. cat cloudbuild.yaml

   <pre>...
steps:
- name: 'gcr.io/cloud-builders/docker'
  args: [ 'build', '-t', 'gcr.io/$PROJECT_ID/quickstart-image', '.' ]
images:
- 'gcr.io/$PROJECT_ID/quickstart-image'
   </pre>

1. Start a Cloud Build

   <pre>gcloud builds submit --config cloudbuild.yaml .</pre>

1. Back in the Navigation menu UI, click Container Registry > Images and then click quickstart-image to see two versions of quickstart-image listed (a and b).


![kubernetes-pods-599x298-35069](https://user-images.githubusercontent.com/300046/31013696-81d30fc0-a4d4-11e7-9852-36be55b74499.jpg)

https://google-run.qwiklab.com/focuses/639?parent=catalog

PROTIP: For GKE we disable all legacy authentication, enable RBAC (Role Based Access Control), and enable IAM authentication.

Pods are defined by a <a href="#Manifest">manifest file</a> 
read by the <strong>apiserver</strong> which deploys nodes.

Pods go into "succeeded" state after being run because
pods have short lifespans -- deleted and recreated as necessary.

The <a target="_blank" href="https://cloud.google.com./container-engine/docs/replicationcontrollers/">
replication controller</a> automatically adds or removes pods to comply with the specified number of pod replicas declared are running across nodes.
This makes GKE "self healing" to provide high availability and reliability with
"autoscaling" up and down based on demand.

> PROTIP: The virtual reality mobile game Pokemon Go released in 2018 was the largest deployment of GKE at the time.

In <a target="_blank" href="https://x-team.com/blog/introduction-kubernetes-architecture/">this diagram</a>:

1. Create demo-cluster:

   <pre><strong>gcloud container clusters create demo-cluster --num-nodes=3
   </strong></pre>

   kubectl create deployment demo-app --image=gcr.io/demo-project-123/demo:1.0

   kubectl expose deployment demo-app --type=LoadBalancer --port 5000 --target-port 5000

1. List all pods, including in the system namespace:

   <pre><strong>kubectl get nodes --all-namespaces
   </strong></pre>

1. Scale:

   <pre><strong>kubectl scale deployment demo-app --replicas=3
   </strong></pre>

1. Loop responses:

   <pre><strong>while true; do sleep 0.1; curl http://xx.xx.xx.xxx:5000/; echo -e; done
   </strong></pre>

1. Delete GKE cluster:

   <pre><strong>kubectl delete service demo-app
gcloud container cluster delete demo-cluster
gcloud container images delete gcr.io/demo-project-123/demo:1.0
gcloud container images delete gcr.io/demo-project-123/demo:2.0
   </strong></pre>

   ## Google Kubernetes Threat Detection

   Google's Kubernetes Service offers KTD (Kubernetes Threat Detection). On each node a KTD daemonset that collects, interprets, and annotates signals for a back-end <strong>KTD Detection Plane</strong> that uses Machine Learning to make findings for the Google SCC (Security Command Center) and Cloud Logging:

   <a target="_blank" href="https://cloudonair.withgoogle.com/events/security-talks-march-2021/watch?talk=detect-threats"><img width="386" alt="k8s-ktd" src="https://user-images.githubusercontent.com/300046/109877993-e9ef9880-7c30-11eb-8320-ce3b431a9186.png"></a>

   Google's approach enables detection of broad, new classes of infection such as forclosing reverse shells (phoning home).







<hr />

<a name="AWSCLI"></a>

## AWS CLI

1. Identify version

   <pre>aws --version</pre>

   CAUTION: If you don't see "aws-cli/2.x.x", please upgrade to version 2.

1. Identify:

   <pre>which aws</pre>

1. To upgrade the AWS CLI version:

   <pre>sudo ./aws/install --bin-dir /usr/bin --install-dir /usr/bin/aws-cli --update
   </pre>

<a name="ECS"></a>
<a name="EKS"></a>

### Amazon AWS ECS & EKS

<a target="_blank" href="https://user-images.githubusercontent.com/300046/95669605-ccb21480-0b3f-11eb-956b-a5a09c90f3ac.png"><img alt="k8s-aws-kubernauts" src="https://user-images.githubusercontent.com/300046/95669605-ccb21480-0b3f-11eb-956b-a5a09c90f3ac.png"></a>

<a target="_blank" href="https://aws.amazon.com/ecs/">
Amazon ECS (Elastic Container Service for Kubernetes)</a> is "supercharged" by the<br /><a target="_blank" href="https://aws.amazon.com/eks/">Amazon EKS (Elastic Kubernetes Service)</a>, which provides deeper integration into AWS infrastructure (than ECS) for better reliability (at higher cost). Amazon said it runs upstream K8s, not a fork (such as AWS ELasticSearch), so it should be portable to other clouds and on-premises.

   ECS is free since Amazon charges for the underlying EC2 instances and related resources for each <strong>task</strong> ECS runs. 
   
   But each <strong>EKS cluster costs an additional $144 USD per month</strong> (20 cents per hour in the lowest cost us-east-1 region), for EKS to administer a "Control Plane" across Availability Zones.

   The diagram (<a target="_blank" href="https://cloudonaut.io/eks-vs-ecs-orchestrating-containers-on-aws/">from cloudnaut</a>) illustrates the differences between ECS vs. EKS clusters.

   <a target="_blank" href="eks-ecs-load-balacing-960x720-32943.png" href="https://user-images.githubusercontent.com/300046/58647812-931f9700-82c5-11e9-8492-ba2c65f5f865.png"><img alt="eks-ecs-load-balacing-960x720-32943.png" src="https://user-images.githubusercontent.com/300046/58647812-931f9700-82c5-11e9-8492-ba2c65f5f865.png"></a>

   ECS uses an Application Load Balancer (ALB) to distribute load servicing clients.
   When EKS was introduced December 2017, it supported only Classic Load Balancer (CLB), with beta support for Application Load Balancer (ALB) or Network Load Balancer (NLB). 
   
   Within the cluster, distribution among pods can be random or based on the round robin algorithm. 

   EKS incurs additional <strong>cross-AZ network traffic charges</strong> because, to ensure high availability, EKS runs within each <strong>node</strong> a <strong>proxy</strong> to distribute traffic in and out of pods across three Kubernetes masters across three Availability Zones. So this additional processing may also require <strong>larger instance types</strong>, which EKS automatically selects.

   Instance type selection is an important consideration because AWS limits the <a target="_blank" href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html#AvailableIpPerENI">number of IP Addresses per network interface based on instance size</a>, from 2 to a <strong>max of 15</strong>. 
   Not all AWS EC2 instance types are equipped with the <a target="_blank" href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html">Elastic Network Interface (ENI)</a> that ECS and EKS need to virtually redistribute load among pods. Both ECS and EKS detects and automatically replaces unhealthy masters, provide version upgrades, and automated patching for masters. A secondary private IPv4 network interface is used so that in the event of an instance failure, that interface and/or secondary private IPv4 address can be transferred to a hot standby instance by EKS.

   ![eks-ecs-vpc-eni-960x720-31322](https://user-images.githubusercontent.com/300046/58670099-27f0b780-82fb-11e9-8cbf-443c37cc2bfd.png)

   While ECS assigns separate ENI to each ECS task (a group of containers), EKS attaches <a target="_blank" href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/MultipleIP.html">multiple ENIs</a> per instance, with multiple private IP addresses assigned to each ENI. Since EKS shares network interfaces among pods, a different Security Group cannot be specified to restrict a specific pod.
   
   <a target="_blank" href="https://lucid.app/lucidchart/4cdfbb0f-f55c-4946-9ff1-20cb322bba13/view?page=.KLxqmC.JY2R#"><img width="460" alt="k8s-networking-920x840" src="https://user-images.githubusercontent.com/300046/109592053-e098eb80-7acb-11eb-8805-262ec4797c5d.png"></a>

   Moreover, network interfaces, multiple private IPv4 addresses, and IPv6 addresses are only available for instances running under a <strong>isolated VPC</strong> (Virtual Private Cloud) and perhaps with AWS PrivateLink access. So EKS requires AWS VPC. For best isolation (rather than sharing), create a different VPC and Security Group for each cluster.

   Both ECS and EKS is accessed from its ECS CLI console and supports ECS API commands and <strong>Docker Compose</strong>. AWS CloudTrail logging.

   Also, EKS leverage IAM authentication, but did not provide out-of-the-box support <a target="_blank" href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html">Task IAM Roles</a> (pods) used to grant access to AWS resources like ECS (AmazonEKSClusterPolicy and AmazonEKSServicePolicy).
   
   For example, to allow containers to access S3, DynamoDB, SQS, or SES at runtime.

   Behind the scenes, Amazon used HashiCorp Packer <a target="_blank" href="https://github.com/awslabs/amazon-eks-ami">config. scripts</a> to make EKS-optimized AMIs run on Amazon Linux 2. The machines are preconfigured with Docker, kubelet, and the <a target="_blank" href="https://github.com/kubernetes-sigs/aws-iam-authenticator">AWS/Heptio AMI Authenticator</a> DaemonSet, plus a EC2 User Data bootstrap script that automatically join an EKS cluster. AMIs that have GPU support are also generated for users who have defined a AWS Marketplace Subscription.

   See the <a target="_blank" href="https://interactive.linuxacademy.com/diagrams/TheEKSManifest.html">EKS Manifest diagram</a> explained by Mark Richman (@mrichman) in his <a target="_blank" href="https://linuxacademy.com/cp/modules/view/id/293">video class</a>, with code at <a target="_blank" href="https://github.com/linuxacademy/eks-deep-dive-2019">https://github.com/linuxacademy/eks-deep-dive-2019</a>.
   

   PROTIP: My sample.sh installs the utilities and brings up a EKS cluster with one command. It costs $110 per month.

EKS makes use of <a target="_blank" href="https://aws.amazon.com/fargate/">AWS Fargate</a> Launch Type provides for horizontal scaling on Amazon's own fleet of EC2 clusters. It's informally called the "AWS Container Manager".

   Fargate supports <a target="_blank" href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html">"awsvpc" network mode</a> natively so that tasks running on the same instance share that's instance's ENI.

   "Once you do get your cluster running, there's nothing to worry about except <strong>monitoring performance</strong> and, as demand changes, adjusting the scale of your service." -- <a target="_blank" title="1:45 into" href="https://app.pluralsight.com/player?course=using-docker-aws&author=david-clinton&name=440cc04e-14c6-45e5-ba8d-2df97c1b1358&clip=2&mode=live">David Clinton*</a>

   <a target="_blank" href="https://blog.totalcloud.io/ecs-vs-eks-vs-fargate-good-bad-ugly/">This totalcloud.io article</a> compares ECS, EKS, and Fargate.

   A concern with Fargate is its time to load.

<a name="KOPS"></a>

### KOPS

   KOPS for AWS (at <a target="_blank" href="https://github.com/kubernetes/kops">https://github.com/kubernetes/kops</a>) is open-source to enable multi-master, multi-AZ cluster setup and management of multiple instance groups. Admins must stand up the master (Control Plane), unlike in ECS/EKS. See <a target="_blank" title="Oct 27, 2017 by Tristan Colgate-McFarlane" href="https://medium.com/qubit-engineering/kubernetes-up-integrated-authentication-5d2c908c2810">"How Qubit built its production ready Kubernetes (k8s) environments"</a>

1. Manage EKS nodepgroups:

   <pre><strong>eksctl get nodegroup --cluster=demo-cluster-ec2
eksctl scale nodegroup --cluster=demo-cluster-ec2 --nodes=1 --name=ng-exxx
   </strong></pre>

1. Delete to stop charges:

   <pre><strong>kubectl delete service demo-app
eksctl delete cluster --name demo-cluster-ec2
aws ecr list-images --repository-name demo
aws ecr batch-delete-image --repository-name demo --image-ids xxx
aws ecr delete-repository --repository-name demo --force
   </strong></pre>


<a name="AKS"></a>

## Microsoft's Azure Kubernetes Service (AKS)

<a target="_blank" href="https://www.youtube.com/watch?v=DRsEQqjcv4g&list=PLD7svyKaquTn7bkKclDkYktSAAcmyuoaj">
VIDEO "K8s on MS Azure"</a>

<a target="_blank" href="https://user-images.githubusercontent.com/300046/116794209-86df7e00-aa88-11eb-955f-6c0ee129bdec.png">
<img width="2236" height="1258" alt="az-k8s-flow-2236x1258" src="https://user-images.githubusercontent.com/300046/116794209-86df7e00-aa88-11eb-955f-6c0ee129bdec.png"></a>
<a target="_blank" href="https://www.youtube.com/watch?v=7z6VduCVYH4&list=PLlI3peB1V-rrzvs2SEgZkg-9DIvS7Dmcw&time=8m38s" title="K21Academy">*</a>

AKS manages the Control Plane master node.

kubectl is included as part of the Azure Cloud Shell.

SF (Service Fabric) is the core technology.

ACR (Azure Container Regustry) stores Docker images (like DockerHub).
   * Users are named like "user1.azurecr.io"
   * Change the "$mine.yaml" to specify use of ACR user instead of "Microsoft" in Dockerhub.
   * Lock down Container Registry access
   * RBAC
QUESTION: Azure and Notary to reference images as certs?
   <br /><br />

ACI (Azure Container Instances) provides hypervisor isolation.
See <a target="_blank" href="https://docs.microsoft.com/en-us/azure/aks/kubernetes-walkthrough-portal">Quickstart: hands-on Deploy AKS to ACI</a>
ACI (Azure Container Instances) connector :
<ul>
   <pre><strong>az container create --resource-group myResourceGroup -- name mycontainer --image microsoft/acl-helloworld --dns-name --label myClustre --port 80</strong></pre>
</ul>

Deploy a model as web service on Azure Container Instances by combining ACI with ACI Logic Apps connector, Azure queues, Azure Functions, Azure Machine Learning to 

1. To run an app in AKS, post App Descriptor to the K8s API Server, and Scheduler schedules worker nodes.
   * kubtl apply -f "$mine.yaml"
   * kubectl get service "$APPNAME" --watch
   * kubectl scale replicas=3 "deployment/$APPNAME"
   * kubectl get pods
   * Scale by CPU: <tt>az aks scale --name $appname --node-count 3 \ 
   --resource-group $container_rg</tt>
   <br /><br />

1. Add <strong>metrics</strong> to Container service:
   * Number of pods by phase 
   * Number of pods in Ready state
   * Total amount of available memory in a managed cl...
   * Total number of available cpu cores in a managed ...
   <br /><br />

1. To scan containers, add from Marketplace one of these:
   * Twistlock 
   * Aqua cloud native security platform
   * Sysdig
   <br /><br />

References:

   * Manoj Nair (ManojNair.in) on Pluralsight: <a target="_blank" href="https://app.pluralsight.com/library/courses/azure-container-service-big-picture/table-of-contents" title="13 Aug 2018">Azure Kubernetes Service (AKS) – The Big Picture</a> 

   * <a target="_blank" href="https://www.whizlabs.com/learn/course/deploying-microservices-to-kubernetes-using-azure-devops/">Whizlabs: Deploying Microservices to Kubernetes using Azure DevOps</a> [06:43:32]

   * <a target="_blank" href="https://www.youtube.com/watch?v=7E-qafxx6ic&list=RDCMUC0m-80FnNY2Qb7obvTL_2fA&start_radio=1" title="Apr 14, 2021 by Bill Maxwell of Suse Rancher">How to enable consistent Azure Kubernetes operations everywhere</a> using Azure Arc.


<a name="MS-Draft"></a>

### Microsoft Draft

Microsoft created <a target="_blank" href="https://github.com/Azure/draft">Draft</a> (like Scaffold) to simplify getting started in Azure to <a target="_blank" href="https://github.com/PatrickLang/fabrikamfiber/tree/helm-2019-mssql-linux">lift-and-shift</a> Windows ASP.NET apps. It has two commands:

<ul><pre><strong>
   draft create  # helm chart and Dockerfile
   draft up      # deploy</strong></pre>
</ul>

Draft uses language packs for Ruby, C# .NET Core 2.2 with Windows packs, 
authenticated to Azure Container Registry (ACR) and <a href="#AKS">AKS</a>.

* <a target="_blank" href="https://docs.microsoft.com/en-us/azure/architecture/reference-architectures/containers/aks/secure-baseline-aks">"Baseline architecture for an Azure Kubernetes Service (AKS) cluster"</a> reference architecture
https://github.com/mspnp/aks-secure-baseline


<hr />

## Other Orchestration systems managing Docker containers

   * OpenShift dedicated
   * OpenShift Online (cloud-based)
   * Kubernetes by Google
   * Centos
   * Atomic
   * Consul, Terraform
   * Serf
   * Cloudify
   * Helios
   <br /><br />

## Competing Orchestration systems

* Docker Swarm incorporated <a href="#Rancher">Rancher</a> from Rancher Labs (#RancherK8s).

   <a target="_blank" href="https://rancher.com/">Rancher Kubernetes Engine (RKE)</a> simplifies cluster administration (on EC2, Azure, GCE, Digital Ocean, EKS, <a href="#AKS">AKS</a>, GKE, vSphere or bare metal) - (provisiong, authentication, RBAC, Policy, Security, monitoring, Capacity scaling, Cost control). Its catalog is based on <a href="#Helm">Helm</a>. See <a target="_blank" href="https://rancher.com/docs/rancher/v2.x/en/cluster-provisioning/rke-clusters/node-pools/ec2/">Creating an Amazon EC2 Cluster using Rancher</a>.

* <a target="_blank" href="https://mesosphere.com/product/">Mesosphere DC/OS</a> (Data Center Operating System) runs Apache Mesos to abstract CPU, memory, storage to provide an API to program a multi-cloud multi-tenant data center (at Twitter, Yelp, Ebay, Azure, Apple, etc.) as if it's a single pool of resources. Kubernetes can run on top of it, but the DC/OS has premium (licensed) enterprise features. So it's not for you if you never want to pay for anything.

   <a target="_blank" href="https://translate.googleusercontent.com/translate_c?depth=1&hl=en&rurl=translate.google.com&sl=ko&sp=nmt4&tl=en&u=https://www.yongbok.net/blog/apache-mesos-cluster-resource-management/&usg=ALkJrhjiggTWHQtSdhkl8jOvGnAx43NIQw">Mesos from Apache</a>, which runs other containers in addition to Docker. K8SM is a Mesos Framework developed for Apache Mesos to use Google's Kubernetes. <a target="_blank" href="https://translate.google.com/translate?hl=en&sl=ko&tl=en&u=http://www.yongbok.net/blog/how-to-install-kubernetes-mesos-framework-on-ubuntu/">Installation</a>.

   See <a target="_blank" href="https://www.youtube.com/watch?v=NRZ6N4e-Mko">Container Orchestration Wars (2017)</a> at the Velocity Conf 19 Jun 2017 by Karl Isenberg (@karlfi) of Mesosphere

* HashiCorp <a target="_blank" href="https://www.nomadproject.io/intro/index.html">Nomad</a>
   is a lighter-weight orchestrator, not just for containers.

* Red Hat (which IBM bought in 2018) offers its <strong>OpenShift</strong> to enable Docker and Kubernetes for the enterprise by adding external host names (projects) that add role-based security around <a href="#Namespaces">namespaces</a>. OpenStack enables running of k8s containers in other clouds or within private data centers.

   OpenShift runs under OKD (Origin Kubernetes Distribution) which include a container and Istio mesh. NOTE: IBM is pushing its "<strong>containerd</strong>", its replacement for Docker. Azure uses containerd by default.

   See <a target="_blank" href="https://www.redhat.com/en/technologies/cloud-computing/openshift">https://www.redhat.com/en/technologies/cloud-computing/openshift</a>,
  
   * <a target="_blank" href="https://www.youtube.com/watch?v=KTN_QBuDplo">What is OpenShift?</a> Aug 1, 2019
   * <a target="_blank" href="https://www.youtube.com/watch?v=cTPFwXsM2po">Kubernetes vs. OpenShift</a>: is not open-source. OpenShift is opinionated about a Docker Registry and CI/CD.
   <br /><br />

<hr />

Each cluster has a master and several nodes.

<a name="Nodes"></a>

## Nodes

   * <a target="_blank" href="https://kubernetesbyexample.com//nodes/">kubernetesbyexample.com: Nodes</a>
   <br /><br />

Each node is created with a <a href="#Kublet">kubelet</a> process, container tooling (Docker), <a href="#kube-proxy">kube-proxy</a>, supervisord.

Internally, Kubernetes itself does NOT create nodes. 

Cluster admins use the kubeadm CLI to create nodes and add them to Kubernetes.

1. To list resource usage across nodes of the cluster:

   <pre><strong>kubectl top nodes</strong></pre>

   <pre>NAME                            CPU(cores)   CPU%  MEMORY(bytes)  MEMORY%
gke-standard-cluster-1-def...   29m          3%    431Mi          16%
   </pre>

1. To list resource usage across pods of the cluster:

   <pre><strong>kubectl top pods</strong></pre>

   <pre>NAME                            CPU(cores)   CPU%  MEMORY(bytes)  MEMORY%
gke-standard-cluster-1-def...   29m          3%    431Mi          16%
   </pre>


### GCP GKE masters

Within a <a target="_blank" href="https://wilsonmar.github.io/gcp/">GCP</a>, GKE provides the master node Kubernetes Control Plane components, which include node creation by deploying and registering Google Compute Engine instances as nodes. 

GKE exposes IP addresses, which can be isolated from the public internet.

GCP does not charge for the master, which is an abstract part of the GKE service not exposed to GCP customers

Each Google <strong>regional cluster</strong> spans several physical Zones, each with a master and its worker nodes.
The same number of nodes is the same in each zone.

Multiple GCP projects can run on a single cluster.

Use the Google Console to specify the size of hardward in each <strong>node pool</strong> (a GKE feature).


## Master Node (Control Plane)

   * Kubernetes Control Plane security: https://cloud.google.com/kubernetes-engine/docs/concepts/control-plane-security
   <br /><br />

Each Cloud Kubernetes offering provides (hides) its Control Plane.

Secure communications between the master and nodes within a cluster automatically relies on the shared root of trust provided by certificates issued by a CA. Each cluster has its own root Certificate Authority (CA). An internal Google service manages root keys for the CA, so you can't manually rotate the etcd certificates and GKE.

GKE uses a separate per cluster CA to provide certificates for the etcd databases within a cluster.

Separate CA's are used for each separate cluster.
When a new node of a Kubernetes cluster is created, the node is injected with a shared secret as part of its creation.
This secret is then used by its kubelet to submit certificate signing requests to the cluster root CA.
That way, it can get client certificates when the node is created, and new certificates when they need to be renewed or rotated 

Secret can be accessed by pods and by extension their containers, unless metadata concealment is enabled.


1. Create a new IP address for the cluster master along with its existing IP address.

New credentials are issued to the control plane.
Note that the API server will not be available during this period although pods continue to run.
After the masters reconfigured, the nodes are automatically updated by GKE to use the new IP and credentials.

This causes GKE to also automatically upgrade the node version to the closest supported version.
All of your API clients outside the cluster must also be updated to use the new credentials.
Rotation must be completed for the cluster master to start serving with the new IP address and new credentials,
and remove the old IP address and old credentials.
If the rotation is not completed manually, GKE will automatically complete the rotation after seven days.

Note that you can also rotate the IP address for your cluster.
This essentially goes through the same process because their certificates must be renewed when the master IP address is changed,
but with different commands:<a target="_blank" href="https://www.coursera.org/learn/deploying-secure-kubernetes-containers-in-production/lecture/OK7gE/kubernetes-control-plane-security">*</a>

1. Initiate credential rotation:

   <pre><strong>gcloud container clusters update <em>[CLUSTER-NAME]</em> --start-credential-rotation</strong></pre>

2. Complete credential rotation:

   <pre><strong>gcloud container clusters update <em>[CLUSTER-NAME]</em> --complete-credential-rotation</strong></pre>

3. Initiate IP rotation:

   <pre><strong>gcloud container clusters update <em>[CLUSTER-NAME]</em> --start-ip-rotation</strong></pre>

4. Complete IP rotation:

   <pre><strong>gcloud container clusters update <em>[CLUSTER-NAME]</em> --complete-ip-rotation</strong></pre>


Pods can access the metadata of the nodes that they're running on, such as the node secret that is used for node configuration.
If a pod is compromised, this could potentially be used in unintended ways.
To prevent such exposure, always configure the Cloud IAM service account for the node with minimal permissions.

But don't confuse as Google service account with the Kurbenetes Service account.
This is the Cloud IAM service account used by the node VM itself.

Don't use the <tt>compute.instances.get</tt> permission through a service account, compute instance admin role, or any custom roles.
Omitting this permission blocks holders of the role from getting metadata on GKE nodes by making direct Compute Engine API calls to those nodes.

Disable legacy metadata APIs. V1 APIs restrict the retrieval of metadata. But Compute Engine API endpoints using versions 0.1 and V1 beta-1, support querying of metadata.

From GKE version 1.12+, legacy Compute Engine metadata endpoints are disabled by default.
With earlier versions, they can only be disabled by creating a new cluster or adding a new node port to an existing cluster.

#### metadata concealment

To prevents a pod from accessing node metadata, there is a temporary solution that will be deprecated as better security improvements are developed in the future. It does this by restricting access to cube NF which contains cubic credentials and the virtual machines instance identity token. See <a target="_blank" href="https://cloud.google.com/kubernetes-engine/docs/how-to/protecting-cluster-metadata">"protecting cluster metadata"</a>


<a name="PodSecurityContexts"></a>

#### Pod Security contexts

By default, containers inside a pod allow privilege elevation, and can access the host file system and the host network.
But although convenient, that can be undesirable from a security perspective.

   To restrict what containers in a pod can do, set <strong>security contexts</strong> in the pod specification so it's applied to all of the pod's containers.

1. To display the current context ID within GKE:

   <pre><strong>kubectl config current-context</strong></pre>

   <pre>gke_[PROJECT_ID]_us-central1-a_standard-cluster-1</pre>


1. To list all cluster contexts' namespace and AUTHINFO:

   kubectl config get-contexts

1. To change context:

   <pre>kubectl config use-context gke_${GOOGLE_CLOUD_PROJECT}_us-central1-a_standard-cluster-1</pre>

   Using security contexts in a pod definition, you can exercise a lot of control over the use of the host namespace, networking, file system, and volume types, whether privilege containers can run, and whether code in the container can escalate to root privileges.

   This sample privileged-pod.yaml is used to define a pod's security policy:

   <pre>kind: Pod
apiVersion: v1
metadata:
  name: privileged-pod
spec:
  containers:
  - name: privileged-pod
    image: nginx
    securityContext:
      privileged: true
   </pre>

   This sample provides specific user and group context for containers:

   <pre>...
spec:
  securityContext:
    runAsUser: 1000
      fsGroup: 2000
   </pre>

   <tt>runAsUser</tt> ID "1000" for any containers in the pod. This should not be zero because, in a Linux system, zero is the privileged <strong>root</strong> user's User ID. Taking away root privilege from the code running inside the container limits what it can do in case of compromise.

   <tt>fsGroup</tt> ID "2000" is associated with all containers in the pod. 

   * Enable <strong>#Seccomp</strong> to block code running in containers from making system calls. 
   * Enable <strong>AppArmor</strong> to restrict individual program actions.
   <br /><br />

Such direct configuration of security contexts in each individual pod can be a lot of work.


<a name="PodSecurityPolicies"></a>

#### psp = Pod Security policies

   <img align="right" width="128" src="https://github.com/kubernetes/community/blob/master/icons/png/resources/labeled/psp-128.png?raw=true">
   
<a target="_blank" href="https://www.infoq.com/news/2021/09/kubernetes-hardening-guidance/">NSA's Kubernetes Hardening Guidance</a> include use of Admission Control Webhook:

![k8s-nsa-image-scanning-admission-controller-613x566](https://user-images.githubusercontent.com/300046/134338991-52cf7e08-609f-4966-8d7b-70c7256e58d4.png)

A request can be passed through multiple controllers.
If the request fails at any point, the entire request is rejected immediately, with the end user receiving an error.

Pod security policies apply to multiple pods without having to specify and manage those details in each pod definition.
Defining pod security policies creates reusable security contexts. It's easier to define and manage security configurations separately, and then apply them to the pods that need them.

Each pod security policy consists of an <strong>object</strong> and an <a href="#Admission">admission controller</a>.

The pod security policy object (a set of restrictions, requirements, and defaults) are defined in the same way as
a security context inside a pod, and can be used to control the same security features.

The pod security policy <a href="#Admission">admission controller</a> acts on the creation and modification of pods.

During the creation or update of a pod, the Container Runtime enforces pod security policies based on the requested security context which defines whether the pod should be admitted. 

For pod to be admitted to the cluster, it must fulfill all of security conditions defined in the pod security policy.
These rules are only applied when a pod is being created or updated.

The pod security policy <a href="#Admission">admission controller</a> validates or modifies requests to create or update pods against security policies.
A non-mutating admission controller just validates requests.
A mutating and mission controller can modify and validate requests.

   <pre>apiversion: policy/v1beta1
kind: PodSecurityPolicy
metadata:
  name: demo-psp
spec:
  privileged: false   # Don't allow privileged pods
  allowPrivilegeEscalation: false
  volumes: 
    - 'configMap'
    - 'emptyDir'
    - 'projected'
    - 'secret'
    - 'persistentVolumeClaim'
  hostNetwork: false
  hostIPC: false
  hostPID: false
  selLinux:
    rule: 'RunAsAny'
  fsGroup:
    rule: RunAsAny
  runAsUser:
    rule: 'MustRunAsNonRoot'
  readOnlyRootFileSystem: false
  volumes: 
  - '*'
   </pre>


After defining a pod security policy, authorize it.
Otherwise it'll prevent other Pods from being created.

<a target="_blank" href="https://googlecoursera.qwiklabs.com/focuses/13131899?parent=lti_session">Securing Google Kubernetes Engine with Cloud IAM and Pod Security Policies</a> 90m.

More fine grained/dynamic policies can be defined by third-party add-on <a target="_blank" href="https://www.styra.com/">Styra</a> for K8s, which is a use case for Styra's more generic OPA (Open Policy Agent) policy language which decouples a policy model from app code. Since OPA API works for many products and services it provides a unified toolset and framework for policy enforcement across the cloud native stack.

This is similar to what Terraform Enterprise provides.

In the future, policies can be generated from AI/ML model processing, perhaps dynamically.


<a name="ClusterRoles"></a>

#### ClusterRoles

You can authorize a policy using Kubernetes Role-Based Access Control.

Here, a clusterRole allows the pod security policy to be used: restricted-pods-role.yaml 

   <pre>apiVersion: rbac.authorization.k8s.io/vi
kind: ClusterRole
metadata:
  name: psp-clusterole
rules:
- apiGroups:
  - extensions
  resources:
  - podsecuritypolicies
  resourceNames:
  - demo-psp
  verbs:
  - use
   </pre>

Next define a role binding to bind the previous cluster role to users or groups.
In this example, two subjects for the role binding are specified.

   <pre>apiVersion: rbac.authorization.k8s.io/vi
kind: RoleBinding
metadata:
  name: psp-rolebinding
  namespace: demo
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: psp-clusterrole
subjects:
- apiGroup: rbac.authorization.k8s.io
  kind: Group
  name: system.serviceaccounts
- kind: ServiceAccount
  name: service@example.com
  namespace: demo
   </pre>


The first is a group containing all service counts within the demo name-space.
The other is a specific service account in the demo name space.
The role binding can grant permission to the creator of the pod, which might be a deployment,
replica set or other template controller.

It can grant permission to the created pods service account.
Note that granting the controller access to the policy, would grant access for all pods created by that controller.
So the preferred method for authorizing policies is to grant access to the pods service account.
Without a pod security policy controller, pod security policies mean nothing.
You need both to define policies, and to enable the pod security policy controller.
Careful, the order here matters. 
If you enable the pod security policy controller before defining any policies, you've just commanded that nothing is allowed to be deployed.
In GKE, the pod security policy controller is disabled by default.
If you choose to use pod security policies, first define them, and then enable the controller with the G-Cloud command shown here. 
Name represents the name of your cluster.

You can take additional security measures in kubernetes, and many of these are enabled by default in GKE, 
especially if you choose to run recent versions of kubernetes in your GKE cluster.

For example, GKE by default uses Google's container optimized OS for the node OS.
Unlike a general purpose Linux distribution, the container optimized OS implements a minimal read-only file system.
Performs system integrity checks and implements firewalls, audit logging, and automatic updates.
You can enable node auto upgrades to keep all of your nodes running the latest version of Kubernetes.
You can choose to run private clusters, which contain nodes without external IP addresses.
You can also choose to run the cluster master for a private cluster without a publicly reachable end point using Master authorized networks.
By default, private clusters do not allow TCP IP addresses to access the cluster master end point.
Using private clusters with master authorized networks, makes your cluster master reachable only by the specific address ranges that you choose.
Nodes within your cluster VPC network can still access the master, and so can Google's internal production jobs that manage it for you.
Make sure to protect your secrets by using encrypted secrets.
To store sensitive configuration information rather than storing them in config maps.
Whenever possible, grant privilege to groups rather than individual users.
This applies both to Cloud IAM which lets you grant rules to Google groups, as well as kubernetes are back which lets you
grant roles to kubernetes groups.
Suppose you grant privileges to an administrator named Pat in many places and then Pat leaves your company.
You now must track down all the places where Pat has privileges, and remove them.
That's tedious and error-prone.

If you follow the best practice of always granting privileges to groups rather than to users, you can remove Pat's access simply
by taking Pat out of the administrator group. 

<a target="_blank" href="https://googlecoursera.qwiklabs.com/focuses/13131337?parent=lti_session">Qwiklab: Implementing Role-Based Access Control with Google Kubernetes Engine</a>:


<hr />

<a name="MasterNode"></a>

### Master node

Nodes are joined to the master node using the <strong>kubeadm join</strong> program and command.

The master node runs the kube-apiserver and componenets etcd, controller, scheduler.

The master node itself is crated by the <strong>kubeadm init</strong> command which establishes folders 
and invokes the Kubernetes <a href="#API_Server">API server</a>. That command is installed along with the 
<strong>kubectl</strong> client. 
There is a command with the same name used to obtain the <strong>version</strong>.


1. View memory and CPU usage of pods across nodes from the K8s Metrics Server:

   <pre><strong>kubectl top node</strong></pre>

   <pre><strong>kubectl top pod</strong></pre>


<a name="API_Server"></a>

### API Server

   * <a target="_blank" href="https://kubernetesbyexample.com//api/">kubernetesbyexample.com: API Server</a>


   The kubectl client communicates using REST API calls to an <strong>API Server</strong> 
   which handles authentication and authorization.

   <pre>kubectl get apiservices</pre>

   API's were initially monolithic but has since been split up into:
   * core "" to handle pod & svc & ep (endpoint)
   * apps to handle deploy, sts, ds
   * authorization to handle role, rb
   * storage to handle pv (persistent volume) and <a href="#PVC">pvc</a>, sc (storage classes)
   <br /><br />



<a name="kube-proxy"></a>

### Kube-proxy

The kube-proxy maintains network connectivity among the Pods in a cluster.

kube-proxy <strong>watches</strong> the <a href="#API_Server">API server</a> for addition and removal requests.
For each new service, kube-proxy opens a randomly chosen port on the local node.
It then makes proxied connections to one of the corresponding back-end pods.

The "proxy" in kube-proxy means that it can do simple network stream or round-robin forwarding across a set of backends.

Three modes:

   * User space mode
   * Iptables mode
   * Ipvs mode (alpha as of v1.8)



<a name="Kubelet"></a>

### Kubelet

A Kublet agent program is automatically installed in each node created.

Kubelet serves as Kubernetes’s agent on each node.

Kubelet only manages containers created by the <a href="#API_Server">API server</a> - not any container running on the node.

Kublet communicates with the <a href="#API-server">API server</a> to see if pods have been assigned to nodes.

Kubelets communicate with the Kubernetes API server using secured network communications protocols TLS and SSH based on certificates issued by the clusters root CA to support those protocols.


Kubelet takes a set of <a href="#Podspecs">Podspecs</a> provided bythe kube-apiserver to ensure that containers described are running and healthy.

Kubelet mounts and runs pod  <a href="#Volumes">volumes</a> and <a href="#Secrets">secrets</a>.

   Image pull secrets authenticates with private container registries.

Kubelet executes health checks to identify pod/node status.

   Service accounts can also store image pull secrets.


Each <strong>kubelet</strong> manages the <strong>"Control Pane"</strong> which allocates IP addresses and runs nodes under its control. 

Kublet constantly compares the status of pods against what is declared in yaml files, and starts or deletes pods as necessary to meet the request. 

Restarting Kublet itself depends on the operating system (`monit` on Debian or `systemctl` on systemd-based systems).



<a name="RBAC"></a>

RBAC (Role-Based Access Control)


<a name="Scheduler"></a>
<a name="Scheduling"></a>
   
### Scheduler Pod stats

   The <a href="#API_Server">API Server</a> puts nodes in "pending" state when it sends requests to bring them up and down to the <strong>Scheduler</strong> to do so only when there are enough resources available.
   The scheduler operate according to a schedule.

Pod phases:
1. Pending - accepted, but being scheduled (being pull from repo)
2. Running after being attached to a node and containers created
3. Succeeded means all containers are running (terminated as specified)
4. Failed - 
5. Unknown - communication error
6. CrashLoopBackOff - pod not configured correctly

   <a target="_blank" href="https://kubernetes.io/docs/concepts/scheduling-eviction/scheduler-perf-tuning/">perf tunint</a>

   Rules obeyed by the Scheduler about pods are called <strong>"Tolerances"</strong>.


<hr />

## Taints and Tolerations

   * <a target="_blank" href="https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/">REF</a>:
   * https://mckinsey.udemy.com/course/certified-kubernetes-application-developer/learn/lecture/12903100#notes
   <br /><br />

<a target="_blank" href="https://kodekloud.com/courses/kubernetes-certification-course-labs/lectures/12077181">KLab</a>:
Taints and tolerations work together to ensure that pods are not scheduled onto inappropriate nodes and pods. 

  * Taints on <strong>nodes</strong> with <tt>keyname=value:effect</tt> in commands targeting nodes.

  * Tolerations on <strong>pods</strong> in PodSpec yaml with matching taints.

<a name="Taints"></a>

### Taints repel from nodes

To taint nodes, <a target="_blank" href="https://kodekloud.com/courses/kubernetes-certification-course-labs/lectures/12077203">KLab</a>: 

1. Use the <tt>taint nodes</tt> subcommand to specify to the Scheduler a node to <strong>repel</strong> pods matching the key:

   <pre><strong>kubectl taint nodes <em>node1</em> keyname=value:taint-effect dedicated=group1:NoSchedule</strong></pre>

   <tt>taint-effect</tt> defines what happens to pods which do not tolerate the taint.

   * <tt>NoSchedule</tt>

   * <tt>effect: "PreferNoSchedule"</tt> defines a "preference" or "soft" version of NoSchedule -- the system will try to avoid placing a pod that does not tolerate the taint on the node, but it is not required. 

   * <tt>effect: "NoExecute"</tt> causes any pods that do not tolerate the taint to be evicted immediately, and pods that do tolerate the taint will never be evicted. 

1. PROTIP: <tt>tolerationSeconds: 3600</tt> optionally added to <strong>NoExecute</strong> effect dictates how many seconds the pod stays bound to the node after the taint is added. If this pod is running and a matching taint is added to the node, then the pod will stay bound to the node for 3600 seconds, and then be evicted. If the taint is removed before that time, the pod will not be evicted.

   NOTE: No more than one taint can be applied to a node.

1. PROTIP: Remove a taint by a <strong>dash after the taint effect</strong>:

   <pre><strong>kubectl taint nodes node1 key=value:NoSchedule-</strong></pre>


   <a name="Tolerations"></a>

   ### Tolerations attract into pods

1. Tolerate (ignore taints) in <strong>PodSpec yaml</strong> spec: to allow (but do not require) certain pods to schedule onto nodes with matching taints.

   NOTE: Tolerations are one of a few PodSpec items which can be edited while active, along with <tt>containers&91;*].image</tt>, <tt>initContainers&91;*].image</tt>, and <a href="#Jobs"><tt>Job activeDeadlineSeconds</tt></a>.

  <pre>spec:
  ...
  tolerations:
  - key: "app"
    operator: "Equal"
    value: "blue"
    effect: "NoSchedule"
   </pre>

   The equivalent imperative command format:

   <pre>kubectl taint nodes node1 app=blue:NoSchedule
   </pre>

1. Such details are reaveled using the <tt>kubectl describe nodes</tt> command.
   
   <pre><strong>kubectl edit pod <em>pod name</em></strong></pre>

   If attempt fails, the file is saved to <tt>/tmp/kubectl-edit-ccvrq.yaml</tt>


<a name="NodeSelectors"></a>

### NodeSelectors

For pods defined with nodeSelector such as:

   <pre>
  nodeSelector:
    size: Large
   </pre>

That k8s matched them with nodes specs are defined: 

???


<a name="nodeAffinity"></a>

### nodeAffinity & podAntiAffinity

   * <a target="_blank" href="https://mckinsey.udemy.com/course/certified-kubernetes-application-developer/learn/lecture/12903116#notes">KK VIDEO</a>
   * https://www.coursera.org/learn/deploying-workloads-google-kubernetes-engine-gke/lecture/aJh3H/affinity-and-anti-affinity
   <br /><br />

"Node affinity" is a property of Pods that <strong>attracts</strong> them to a set of nodes (either as a preference or a hard requirement). The Node controller uses built-in taints to specify conditions: "network-unavailable", "unshedulable", "cloudprovider unitialized", "not-ready", "memory-pressure", "disk-pressure", "out-of-disk",

   <pre>spec:
  containers:
  ...
  affinity:
    nodeAffinity:
    <strong>requiredDuringScheduleingIgnoredDuringExecution:</strong>
      nodeSelectorTerms:
      - matchExpressions:
        - key: size
          operator: In
          values:
          - Large
   </pre>

Affinity settings are used to put in each zones one and only one web server Pod and cache Pod:

![k8s-affinity-zones-1554x778](https://user-images.githubusercontent.com/300046/103451396-f67f6100-4c80-11eb-8298-93ec7b0090da.png)

Types:

1. <strong>requiredDuringScheduleingIgnoredDuringExecution:</strong>
2. <strong>preferredDuringScheduleingIgnoredDuringExecution:</strong>
3. <strong>requiredDuringScheduleingRequiredDuringExecution:</strong>
Put another way:
<table border="1" cellpadding="4" cellspacing="0">
<tr><th>.</th><th>DuringScheduling</th><th>DuringExecution</th></tr>
<tr valign="top"><td>Type 1 </td><td>Required </td><td> Ignored </td></tr>
<tr valign="top"><td>Type 2 </td><td>Preferred </td><td> Ignored </td></tr>
<tr valign="top"><td>Type 3 </td><td>Required </td><td> Required </td></tr>
</table>

Alternatively:
To a single Node with nodeAffinity:

   <pre>apiVersion: v1
kind: PersistentVolume
metadata:
  name: local-pv
spec:
  capacity:
    storage: 100 Gi
  volumeMode: Filesystem
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Delete
  storageClassName: local-storage
  local:
    path: /mnt/disks/ssd1
  nodeAffinity:
    required:
      nodeSelectorTerms:
      - matchExpressions:
        - key: kubernetes.io/hostname
          operator: In
          values:
          - <em>node-name</em>
   </pre>


   <pre>volumeMode: Block</pre>

   <tt>persistentVolumeReclaimPolicy</tt> (Recycling) policies are:
   * Delete
   * <strong>Retain</strong> (keep the contents) 
   * <strong>Recycle</strong> (Scrub the contents).
   <br /><br />


## Extract pod yaml from running podspec

   <pre><strong>kubectl get pod &LT;pod name> -o yaml > my-new-pod.yaml </strong></pre>

   <a target="_blank" href="https://kodekloud.com/courses/kubernetes-certification-course-labs/lectures/12039454">https://kodekloud.com/courses/kubernetes-certification-course-labs/lectures/12039454</a>


<a name="#etcd"></a>

### etcd storage 

   The <a href="#API_Server">API Server</a> and Scheduler persists their configuration and status information in a 
   <strong>ETCD cluster</strong> 
   <a target="_blank" href="https://coreos.com/etcd/docs/latest/getting-started-with-etcd.html">
   (from CoreOS)</a>.
   
   Kubernetes data stored in etcd includes jobs being scheduled, created and deployed, pod/service details and state, namespaces, and replication details.

   It's called a <strong>cluster</strong> because, for resiliancy, etcd replicates data across nodes. This is why there is a minimum of two worker nodes per cluster.


<a name="eksctl"></a>

### eksctl

1. See <a target="_blank" href="https://eksctl.io/">https://eksctl.io</a> about installing the <strong>eksctl</strong> CLI tool for creating clusters on EKS. It is written and supported (via Slack) by GitOps vendor <a target="_blank" href="https://www.weave.works/">weave.works</a> in Go, and uses CloudFormation. 

1. To create a EKS cluster:

   <pre><strong>eksctl create cluster</strong></pre>


<a name="Controllers"></a>
   
### Node Controllers and Ingress


   The <strong>Node controller</strong> assigns a CIDR block to newly registered nodes,
   then continually monitors node health. When necessary, it taints unhealthy nodes and
   gracefully evicts unhealthy pods. The default timeout is 40 seconds.

   Load balancing among nodes (hosts within a cloud) are handled by third-party port forwarding
   via Ingress controllers. See <a target="_blank" href="https://kubernetes.io/docs/concepts/services-networking/ingress/">Ingress definitions</a>.

<a name="Ingress"></a>

   <img align="right" width="128" src="https://github.com/kubernetes/community/blob/master/icons/png/resources/labeled/ing-128.png?raw=true">

   An <strong>"Ingress"</strong> is a collection of rules that allow inbound connections to reach the cluster services.

   <strong>Ingress Resource</strong> defines the connection rules.

   In Kubernetes the <strong>Ingress Controller</strong> could be a NGINX container providing reverse proxy capabilities.

In Google Kubernetes Engine, by default LoadBalancers give access to a regional Network Load Balancing configuration. 
To get access to a global HTTP(S) Load Balancing configuration, use an Ingress object.


<a name="Plug-in_Network"></a>

### Plug-in Network

   PROTIP: Kubernetes uses third-party services to handle load balancing and port forwarding through 
   <strong>ingress objects</strong> managed by an ingress controller.

   CNI (Container Network Interface) <a target="_blank" href="https://github.com/containernetworking/cni">spec</a>

   An alternative is <strong>kubenet</strong> 

   Other CNI vendors include Calico, Cilium, Contiv, 

   Weavenet. Flannel on Azure?

1. Find which cni is installed:

   <pre>ps -ef | grep cni</pre>

   <pre>student   3638  9589  0 23:24 pts/0    00:00:00 grep --color=auto cni
root      9735     1  3 Oct07 ?        00:54:09 /usr/bin/kubelet --bootstrap-kubeconfig=/etc/kubernetes/bootstrap-kubelet.conf 
--kubeconfig=/etc/kubernetes/kubelet.conf 
--config=/var/lib/kubelet/config.yaml 
--network-plugin=cni 
--pod-infra-container-image=k8s.gcr.io/pause:3.2
   </pre>

1. View cni installer files (to troubleshooting network configuration issues):

   <pre>sudo more $(sudo find / -name *install-cni* | grep /log/containers)</pre>

   <pre>sudo less /var/log/calico/cni/cni.log</pre>

   <pre>sudo less /etc/cni/net.d/calico-kubeconfig</pre>


<a name="cAdvisor"></a>

## cAdvisor

   To collect resource usage and performance characteristics of running containers,
   many install a pod containing <a target="_blank" href="https://github.com/google/cadvisor">Google's</a> Container Advisor (<strong>cAdvisor</strong>). It aggregates and exports telemetry to an <strong>InfluxDB</strong> database for visualization using <strong>Grafana</strong>.

   Google's Heapster is also be used to send metrics to Google's cloud monitoring console.

<hr />

<a name="yaml-files"></a>

Containers are declared by yaml such as this to run Alphine Linux Docker container:

   <pre>
apiVersion: v1
kind: Pod
metadata:
  name: alpine
  namespace: default
spec:
  containers:
  - name: alpine
    image: alpine
    command:
      - sleep
      - "3600"
    imagePullPolicy: IfNotPresent
  restartPolicy: Always
   </pre>

Other command:

   <pre>command:
    - sh
    - "-c"
    - echo Hello Kubernetes! && sleep 3000
    </pre>


<hr />

<a name="Nodes"></a>

### Nodes Architecture diagram

<a target="_blank" href="https://translate.google.com/translate?hl=en&sl=ko&tl=en&u=http%3A%2F%2Fwww.yongbok.net%2Fblog%2F">
Yongbok Kim (who writes in Korean)</a> <a target="_blank" href="https://cdn.yongbok.net/ruo91/architecture/k8s/v1.1/kubernetes_architecture.png">posted (on Jan 24, 2016)</a> a master map of how all the pieces relate to each other:<br />
<small>Click on the diagram to pop-up a full-sized diagram</small>:
<a target="_blank" title="k8s_details-ruo91-2071x2645.png" href="https://user-images.githubusercontent.com/300046/33525160-4dc5931a-d7e7-11e7-8b83-9e373fc5ac7d.png">
<img alt="k8s_details-ruo91-350x448.jpg" src="https://user-images.githubusercontent.com/300046/33525167-7a5d3b9e-d7e7-11e7-8dd6-99694dc31782.jpg"></a>

BTW What are now called <a href="#Nodes">nodes</a> were previously called "minions", perhaps in deference to NodeJs, which refers to nodes differently.

<a target="_blank" href="https://kodekloud.com/courses/kubernetes-certification-course-labs/lectures/12039436">Klab</a>:
Nodes are managed together within each namespace.


<a name="TestingK8s"></a>

## Testing K8s

1. Dry-run
 
   <pre><strong>kubectl create -f pod.yaml --dry-run=client</strong></pre>

End-to-end tests by those who develop Kubernetes are coded in 
Ginko and Gomega (because Kubernets is written in Go).

The Kubtest suite builds, stages, extracts, and brings up the cluster.
After testing, it dumps logs and tears down the test rig.



<hr />

<a name="Install"></a>

## Installation options

There are several ways to obtain a running instance of Kubernetes.

<a name="Rancher"></a>

#### Rancher

<a target="_blank" href="http://docs.rancher.com/rancher/v1.5/en/quick-start-guide/">
Rancher</a> is a deployment tool for Kubernetes that also provides networking and load balancing support.
Rancher initially created it's own framework (called Cattle) to coordinate Docker containers across multiple hosts, at a time when Docker was limited to running on a single host. 
Now Rancher's networking provides a consistent solution across a variety of platforms, especially on bare metal or standard (non cloud) virtual servers.
In addition to Kubernetes, Rancher enables users to deploy a choice of Cattle, Docker Swarm, Apache Mesos upstream project for DCOS (Data Center Operating System). Rancher eventually become part of Docker Swarm.

Within <a target="_blank" href="https://github.com/kubernetes/kops/">KOPS</a>


#### Minikube offline

B) <a href="#Minikube">Minikube spins up a local environment on your laptop</a>.

   NOTE: Ubuntu on LXD offers a 9-instance Kubernetes cluster on localhost.

   PROTIP: CAUTION your laptop going to sleep may ruin minikube.

#### Server install

C) <a href="#Centos">install Kubernetes natively on CentOS</a>.

D) <a href="#DockerHub">Pull an image from Docker Hub</a> 
   within a Google Compute or AWS cloud instance.

CAUTION: If you are in a large enterprise, confer with your security team before 
installing. They often have a repository such as Artifactory or Nexus where
installers are available after being vetted and perhaps patched
for security vulnerabilities.

See <a target="_blank" href="https://kubernetes.io/docs/setup/pick-right-solution/">
https://kubernetes.io/docs/setup/pick-right-solution</a>



### On GCP

1. On GCP:

   <pre>gcloud container clusters get-credentials guestbook2</pre>

kubectl get pods --all-namespaces


<hr />

## OS for K8s

As a brainchild of the Linux Founderation, one would expect Kubernetes to run on different flavors of Linux.

<a name="Centos"></a>

### CentOS

First, install kubeadm 

cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
chown $(id -u):$(id -g) $HOME/.kube/config


   <pre>
cat &LT; /etc/yum.repos.d/kubernetes.repo
&91;kubernetes]
name=Kubernetes
baseurl=https://packages.cloud.google.com/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=1
repo_gpgcheck=1
gpgkey=https://packages.cloud.google.com/yum/doc/yum-key.gpg https://packages.cloud.google.com/yum/doc/rpm-package-key.gpg
EOF
   </pre>
   Also:
   <pre>
cat <  /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF
   </pre>

<a name="IPVS"></a>

Since K8s v1.11 Kube-proxy uses IPVS Mode instead of IPTABLES.
It is more scalable because it uses a Linux kernel IP Virtual Server 
with a native Layer 4 load balancer that supports more load balancing algorithms.


<a name="Ubuntu"></a>

### Ubuntu

1. On Ubuntu, install:

   <pre>apt install -y docker.io</pre>

2. To make sure Docker and Kublet are using the same systemd driver:

   <pre>cat &LT;&LT;EOF >/etc/docker/daemon.json
   {
     "exec-opts": &91;"native.cgroupdriver=systemd"]
   }
   EOF</pre>

3. Install the keys:

   <pre>curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add -</pre>

4. sources:

   <pre>cat &LT;&LT;EOF >/etc/apt/sources.list.d/kubernetes.list
   &LT;deb http://apt.kubernetes.io/ kubernetes-xenial main
   &LT;EOF</pre>

5. To download new sources:

   <pre>apt update</pre>

6. To download the programs:

   <pre>apt install -y kubelet kubeadm kubectl</pre>

<hr />

<a name="Details"></a>

## Architectural Details

This section further explains the <a href="#Architecture">architecture diagram above</a>.

<!-- https://linuxacademy.com/cp/guides/download/refsheets/guides/refsheets/linuxacademy-kubernetesadmin-archdiagrams-1_1516737832.pdf -->

<a target="_blank" href="https://linuxacademy.com/cp/exercises/view/id/670/module/155">This sequence of commands</a>:

1. Select "CloudNativeKubernetes" sandboxes.
1. Select the first instance as the "Kube Master".
1. Login that server (user/123456).
1. Change the password as prompted on the Ubuntu 16.04.3 server.

   <a name="MasterDeploy"></a>
   
   ### Deploy Kubernetes master node

<img align="right" width="128" src="https://github.com/kubernetes/community/blob/master/icons/png/resources/labeled/deploy-128.png?raw=true">

1. Use this command to deploy the <strong>master node</strong> which controls the other nodes. 
   So it's <a href="#MasterDeploy">deployed first</a> which invokes the <a href="#API_Server">API Server</a>

   <pre>sudo kubeadm init --pod-network-cidr=10.244.0.0/16</pre>

   ![kubernetes-nodes-363x120-20150](https://user-images.githubusercontent.com/300046/39900888-328f060e-5482-11e8-89eb-14439d7db270.jpg)

   The address is the default for <strong>Flannel</strong>.


   <a name="FlowDiagram"></a>

   ### Flow diagram

   ![k8s-services-flow-847x644-100409](https://user-images.githubusercontent.com/300046/33525135-9b69e09a-d7e6-11e7-857f-513e8582d450.jpg)

   The diagram above is by <a target="_blank" href="https://www.slideshare.net/walterliu7/kubernetes-workshop-78554820"
   title="Kubernetes Workshop published Aug 4, 2017">Walter Liu</a>

   ### Flannel for Minikube

   When using Minikube locally, a CNI (Container Network Interface) is needed. 
   So setup <a target="_blank" href="https://github.com/coreos/flannel">
   Flannel from CoreOS</a> using the open source Tectonic Installer (<a target="_blank" href="https://twitter.com/TectonicStack/">@TectonicStack</a>). 
   It configures a IPv4 "layer 3" network fabric designed for Kubernetes.

   The response suggests several commands:

1. Create your .kube folder:

   <pre>mkdir -p $HOME/.kube</pre>

1. Copy in a configuration file:

   <pre>sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config</pre>

1. Give ownership of "501:20":

   <pre>sudo chown $(id -u):$(id -g) $HOME/.kube/config</pre>

1. Make use of CNI:

   <pre>sudo kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/v0.9.1/Documentation/kube.flannel.yml</pre>

   The response:

   <pre>clusterrole "flannel" created
clusterrolebinding "flannel" created
serviceaccount "flannel" created
configmap "kube-flannel.cfg" created
daemonset "kube-flannel.ds" created
   </pre>

   <a href="#ConfigMaps">ConfigMaps</a> in cfg files are used to define <strong>environment variables</strong>.

1. List pods created:

   <pre>kubectl get pods --all-namespaces -o wide</pre>

   Specifying wide output adds the IP address column

   Included are pods named:
   * <a href="#API_Server">api server</a> (aka "master") accepts kubectl commands
   * <a href="#etcd">etcd</a> (cluster store) for HA (High Availability) in control pane
   * controller to watch for changes and maintain desired state
   * dns (domain name server)
   * proxy load balances across all pods in a service
   * scheduler watches api server for new pods to assign work to new pods
   <br /><br />
   
   System administrators control the <strong>Master node</strong>
   UI in the cloud or write scripts that invoke 
   <a href="#kubectl">kubectl command-line client program</a>
   that controls the <strong>Kubernetes Master</strong> node.

   <a target="_blank" href="https://www.youtube.com/watch?v=PH-2FfFD2PU">
   Kubernetes in 5 mins</a> Desired State Management

   
   ### Proxy networking

   The Kube Proxy communicates only with Pod admin. whereas Kubelets communicate with individual pods as well.

   Each node has a Flannel and a proxy.

   The Server obtains from Controller Manager ???

1. Switch to the webpage of servers to Login to the next server.
1. Be root with <tt>sudo -i</tt> and provide the password.
1. Join the node to the master by pasting in the command captured earlier, as root:

   <pre>kubeadm join --token ... 172.31.21.55:6443 --discovery-token-ca-cert-hash sha256:...</pre>

   Note the above is one long command. So you may need to use a text editor.

   Deployments manage Pods. 

   ![kubernetes-ports-381x155-19677](https://user-images.githubusercontent.com/300046/39901343-1484c54c-5485-11e8-8a2d-2681f819c4ce.jpg)

1. Switch to the webpage of servers to Login to the 3rd server. 
1. Again Join the node to the master by pasting in the command captured earlier:
1. Get the list of nodes instantiated:

   <pre><strong>kubectl get nodes</strong></pre>

1. To get list of events sorted by timestamp:

   <pre>kubectl get events --sort-by='.metadata.creationTimestamp'</pre>

1. Create the initial log file so that Docker mounts a file instead of a directory:

   <pre>
   touch /var/log/kube-appserver.log
   </pre>

1. Create in each node a folder:

   <pre>
   mkdir /srv/kubernetes
   </pre>

1. Missing: Get a utility to generate TLS certificates:

   <pre><strong>brew install easyrsa
   </strong></pre>

1. Run it:

   <pre>
   ./easyrsa init-pki
   </pre>

   <a name="MasterIP"></a>
   
   ### Master IP address

1. Run it:

   <pre>
   MASTER_IP=172.31.38.152
   echo $MASTER_IP
   </pre>

1. Run it:

   <pre>
   ./easyrsa --batch "--req-cn=${MASTER_IP}@`date +%s`* build-ca nopass
   </pre>


   <a name="Watchers"></a>

   ### Watchers
   
   To register watchers on specific nodes.???
   Kubernetes supports TLS certifications for encryption over the line.

   REST API CRUD operations are used 
   

<hr />

<a name="Admission"></a>

## Admission Controller

   The K8s Admission Controller enables less coding in yaml files by adding what is necssary.

   <pre><strong>kubectl details? </strong></pre>


In the example folder (for each node):

   * basic_auth.csv user and password
   * ca.crt - the certificate authority certificate from pki folder
   * known_tokens.csv kublets use to talk to the apiserver
   * kubecfg.crt - client cert public key
   * kubecfg.key - client cert private key
   * server.cert - server cert public key from issued folder
   * server.key - server cert private key
   <br /><br />

1. Copy from <a href="#API_Server">API server</a> to each master node:

   <pre><strong>
   cp kube-apiserver.yaml  /etc/kubernetes/manifests/
   </strong></pre>

   The kublet compares its contents to make it so, uses the manifests folder to create kube-apiserver instances.

1. For details about each pod:

   <pre><strong>
   kubectl describe pods
   </strong></pre>

   ### Expose

   ### Deploy service

1. To deploy a service:

   <pre>kubectl expose deployment *deployment-name* &91;options]</pre>


<hr />

<a name="CSI"></a>

## Container Storage Interface (CSI)

https://github.com/container-storage-interface/spec


<a name="ConfigMaps"></a>

## Configmap

<a href="https://www.youtube.com/watch?v=X48VuDVv0do&t=2h51m42s">VIDEO: Nana</a>

Use ConfigMaps as environment variables or using a volume mount in a specific namespace.

<pre>env:
  - name: SPECIAL_LEVEL_KEY
    valueFrom:
      configMapKeyRef:
        name: special-config
        key: special.how
</pre>

Within a pod manifest, <tt>valueFrom</tt> key and the configMapKeyRef value to read the values:

<pre>volumes:
  - name: config-volume
  configMap:
    name: special-config
</pre>


<a name="EnvironmentVariables"></a>

   * <a target="_blank" href="https://kubernetesbyexample.com//envs/">kubernetesbyexample.com: Environment Variables</a>


<hr />


<a name="Volumes"></a>

### Volumes of persistent data storage

   <img align="right" width="128" src="https://github.com/kubernetes/community/blob/master/icons/png/resources/labeled/vol-128.png?raw=true">

   <a target="_blank" href="https://www.youtube.com/channel/UCdngmbVKX1Tgre699-XLlUA&t=2h38m07s">VIDEO: from "Nana's TechWorld"</a>
   * <a target="_blank" href="https://kubernetesbyexample.com//volumes/">kubernetesbyexample.com: Volumes</a>

![k8s-sc-pvc-pv-453x248](https://user-images.githubusercontent.com/300046/102702327-c6ff3c00-421e-11eb-8388-a7936121a2e7.png)
<a target="_blank" href="https://app.pluralsight.com/course-player?clipId=808b5550-4ef6-48af-87f7-7143ba693937">(credit)</a>

   Docker Containers share attached data <strong>volumes</strong> available within each Pod:

   REMEMBER: Local Volumes defined in pods disappear when each pod dies.

   Sample pod yaml definining the volumes mounted within its containers:

   <pre>apiVersion: v1
kind: Pod
metadata:
  name: mypod
spec:
  containers:
    - name: myfrontend
    image: nginx
    volumeMounts:
    - mountPath: "/var/www/html"
      name: mypd
  volumes:
    - name: mypd
      persistentVolumeClaim:
        claimName: pvc-name
   </pre>



<a name="PersistentVolume"></a>

### Persistent Volume (PV)

   <img align="right" width="128" src="https://github.com/kubernetes/community/blob/master/icons/png/resources/labeled/pv-128.png?raw=true">

   * <a target="_blank" href="https://kubernetesbyexample.com//pv/">kubernetesbyexample.com: Persistent Volumes</a>
   * <a target="_blank" href="https://www.youtube.com/watch?v=ZxC6FwEc9WQ">Persistent Volumes on Kubernetes for beginners</a> by That DevOps Guy
   <br /><br />

PV's are a cluster resource, not to a specific _____.

Admins create a Persistent Volume (PV) to provision blocks of storage (of specific Gigabit capacity sizes) for use within a specific cluster. 

   PV's are like an external plugin to a cluster.

   A complete list in kubernetes.io.

   For a elastic-app, define several volume types in a container referencing PVC names in awsElasticBlockStore:

   <pre>spec:
  containers:
  - image: elastic:latest
    name: elastic-container
    ports:
    - containerPort: 9200
    volumeMounts:
    - name: es-persistent-storage
      mountPath: /var/lib/data
    - name: es-secret-dir
      mountPath: /var/lib/secret
    - name: es-config-dir
      mountPath: /var/lib/config
  volumes:
  - name: es-persistent-storage
    persistentVolumeClain:
      claimName: es-pv-claim
  - name: es-secret-dir
    secret:
      secretName: es-secret
  - name: es-config-dir
    configMap:
      name: es-config-map
   </pre>

#### For a NFS (Network File System):

   <pre>apiVersion: v1
kind: PersistentVolume
metadata:
  pv-name
spec:
  capacity:
    storage: 5 Gi
  volumeMode: Filesystem
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Recycle
  storageClassName: slow
  mountOptions:
    - hard
    - nfsvers=4.0
  nfs:
    path: /dir/path/on/nfs/server
    server: nfs-server-ip-address
   </pre>


   On a Google Cloud ext4 type volume:

   <pre>apiVersion: v1
kind: PersistentVolume
metadata:
  name: google-cloud-volume
  labels:
    failure-domain.beta.kubernetes.io/zone: us-central1-a__us-central1-b
spec:
  capacity:
    storage: 400 Gi
  volumeMode: Filesystem
  accessModes:
    - ReadWriteOnce
  gcePersistantDisk:
    pdName: my-data-disk
    fsType: ext4
   </pre>


## Cloud Volumes (Geo-replicated)

* AWS Elastic Block Store (EBS)
* GCP GCE Persistent Disk
* Azure Disk and Azure FIle
<br /><br />

   <pre>apiVersion: v1
kind: Pod
metadata:
  name: azure-pod-azure
spec:
  volumes:
  - name: data   
    azureFile:   # Azure File storage
      secretName: <em>azure-secret</em>
      shareName: <em>share-name</em>
      readOnly: false
  containers:
  - image: someimage
    name: my-app
    volumeMounts:
    - name: data
      mountPath: /data/storage
   </pre>

Alternately on Google:

   <pre>    gcePersistentDisk:
      pdName: datastorage
      fsType: ext4
   </pre>

Alternately:

   <pre>    awsElesticBlockStore:   # AWS EBS
      volumeID: <em>volume_ID</em>
      fsType: ext4
   </pre>



<a name="StorageClasses"></a>

## Storage Classes

   <img align="right" width="128" src="https://github.com/kubernetes/community/blob/master/icons/png/resources/labeled/sc-128.png?raw=true">

A storage class (sc) is a type of <strong>template</strong> used to <strong>dynamically</strong> provision data storage.

Create persistent volumes dynamically:

   <pre>apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: storage-class-name
provisioner: kubernetes.io/aws-ebs
parameters:
  type: io1
  iopsPerGB: "10"
  fsType: ext4
   </pre>

   REMEMBER: <tt>name: storage-class-name</tt> must match <a href="#PVC">PVC config</a> <tt>storageClassName: storage-class-name</tt>


<a name="PVC"></a>

### Persistant Volume Claim (PVC)

<img align="right" width="128" src="https://github.com/kubernetes/community/blob/master/icons/png/resources/labeled/pvc-128.png?raw=true">

   A Persistent Volume Claim (PVC) is a request for that storage by a user.

   Once granted, a PVC is used as a "claim check" for the storage.

   <pre>apiVersin: v1
kind: PersistentVolumeClaim
metadata:
  name: pvc-name
spec:
  storageClassName: manual
  accessModes:
  - ReadWriteOnce
  resources:
    requests:
      storage: 10Gi
  storageClassName: storage-class-name
   </pre>

   REMEMBER: The <tt>metadata: name:</tt> in the PVC definition needs to match the Pod's <tt>claimName: pvc-name</tt>.

   Kubernetes tries to find a PV that matches the <tt>capacity: 10Gi</tt> with a compatible persistent volume in the cluster.

   REMEMBER: <tt>name: storage-class-name</tt> in pod definition must match <a href="#PVC">PVC config</a> <tt>storageClassName: storage-class-name</tt>

More:
* https://redhat-scholars.github.io/kubernetes-tutorial/kubernetes-tutorial/volumes-persistentvolumes.html
* https://github.com/burrsutter/9stepsawesome/blob/master/9_databases.adoc

<hr />

<a name="micro-services"></a>

## Sample micro-service apps

   * <a target="_blank" href="https://kubernetesbyexample.com//services/">kubernetesbyexample.com: Services</a>


Bob Reselman's 3-day hands-on classes on Kubernetes makes use of <strong>bash scripts</strong> and sample app at <a target="_blank" href="https://github.com/reselbob/CoolWithKube">https://github.com/reselbob/CoolWithKube</a>
  
The repo is based on work from others, 
especially Kelsy Hightower, the Google Developer Advocate.

   * https://github.com/kelseyhightower/app - an example 12-Factor application. 
   * https://hub.docker.com/r/kelseyhightower/monolith - Monolith includes auth and hello services.
   * https://hub.docker.com/r/kelseyhightower/auth - Auth microservice. Generates JWT tokens for authenticated users.
   * https://hub.docker.com/r/kelseyhightower/hello - Hello microservice. Greets authenticated users.
   * https://hub.docker.com/r/ngnix - Frontend to the auth and hello services.

These sample apps are manipulated by
https://github.com/kelseyhightower/craft-kubernetes-workshop

1. Install
2. Create a Node.js server
3. Create a Docker container image
4. Create a container cluster
5. Create a Kubernetes pod
6. Scale up your services

1. Provision a complete Kubernetes cluster using Kubernetes Engine.
2. Deploy and manage Docker containers using kubectl.
3. Break an application into microservices using Kubernetes' Deployments and Services.

This "Kubernetes" folder contains scripts to implement what was described in the
<a target="_blank" href="https://run.qwiklab.com/focuses/7044">
"Orchestrating the Cloud with Kubernetes"</a> hands-on lab
which is part of the <a taget="_blank" href="https://run.qwiklab.com/quests/29">
"Kubernetes in the Google Cloud" quest</a>.


<a name="IAC"></a>

## Infrastructure as code

1. Use an internet browser to view 

   <a target="_blank" href="https://github.com/wilsonmar/DevSecOps/blob/master/Kubernetes/k8s-gcp-hello.sh">
   https://github.com/wilsonmar/DevSecOps/blob/master/Kubernetes/k8s-gcp-hello.sh</a>

   The script downloads a repository forked from googlecodelabs:
   https://github.com/wilsonmar/orchestrate-with-kubernetes/tree/master/kubernetes

   ### Declarative
   
   This repository contains several kinds of .yaml files, which can also have the extension .yml.
   Kubernetes also recognizes .json files, but YAML files are easier to work with.

   The files are call "Manifests" because they declare the desired state.


2. Open an internet browser tab to view it.

   ### reverse proxy to front-end

   The web service consists of a front-end and a proxy served by the NGINX web server configured using two files in the `nginx` folder:

   * frontend.conf
   * proxy.conf
   <br /><br />
   
   These are explained in detail at https://www.digitalocean.com/community/tutorials/how-to-configure-nginx-as-a-web-server-and-reverse-proxy-for-apache-on-one-ubuntu-14-04-droplet

   ### SSL keys

   SSL keys referenced are installed from the `tls` folder:

   * ca-key.pem - Certificate Authority's private key
   * ca.pem - Certificate Authority's public key
   * cert.pem - public key
   * key.pem - private key



<a name="Manifest"></a>

## pod.yml manifests

<a target="_blank" href="https://github.com/timstclair/kube-contrib/blob/master/devel/manifests/cadvisor-pod.yaml">An example (cadvisor)</a>:

   <pre>apiVersion: v1
kind: Pod
metadata:
  name:   cadvisor
spec:
  containers:
    - name: cadvisor
      image: google/cadvisor:v0.22.0
      volumeMounts:
        - name: rootfs
          mountPath: /rootfs
          readOnly: true
        - name: var-run
          mountPath: /var/run
          readOnly: false
        - name: sys
          mountPath: /sys
          readOnly: true
        - name: docker
          mountPath: /var/lib/docker
          readOnly: true
      ports:
        - name: http
          containerPort: 8080
          protocol: TCP
      args:
        - --profiling
        - --housekeeping_interval=1s
  volumes:
    - name: rootfs
      hostPath:
        path: /
    - name: var-run
      hostPath:
        path: /var/run
    - name: sys
      hostPath:
        path: /sys
    - name: docker
      hostPath:
path: /var/lib/docker
   </pre>


<a name="Labels"></a>

### Labels and Selectors

<tt>app</tt> labels are specified in pods for services to reference them:

   <img alt="k8s-label-service-link" width="743" height="249" src="https://user-images.githubusercontent.com/300046/101234429-65ff3200-367c-11eb-9818-8462f0eb1486.png">

Sample labels and values:

   * app: <em>myapp</em>
   * release: stable, canary
   * environment: eve, qa, production
   * tier: frontend or backend or cache
   * team: ecommerce, auth, purchasing, marketing
   * author: name
   * maintainer: joe
   * tech-lead: name
   * application-type: ui
   * release-version: 1.0
   <br /><br />

1. Create label automatically 

   <pre><strong>kubectl expose ...</strong></pre>

1. Overwrite (Add) a label after a pod created:

   <pre><strong>k label po/helloworld app=helloworldapp --overwrite</strong></pre>

1. List labels for a pod created:

   <pre><strong>k get pods --show-labels</strong></pre>

   <pre><strong>... app=helloworldapp</strong></pre>


   ### kubectl describe

1. View labels using grep flags:

   <pre><strong>k describe po mssaging | grep -C 5 -i labels</strong></pre>

   BLAH: grep commands are simple and display extra text.


   <a name="JSONPath"></a>

   ### JSONPath

   <a target="_blank" href="https://www.youtube.com/watch?v=vljkDorNiuw&list=RDCMUCSWj8mqQCcrcBlXPi4ThRDQ&start_radio=1">VIDEO</a>: To precisely define extracts for processing by another command, use <a target="_blank" href="https://kubernetes.io/docs/reference/kubectl/jsonpath/">JSONPath</a>:

1. Get the IP of the pods with label app=nginx, using JSONPath:

   <pre>kubectl get pods -l app=nginx -o jsonpath='{range .items&91;*]}{.status.podIP}{"\n"}{end}'</pre>

   instead of

   <pre>kubectl get pods -o wide --no-headers | awk '{print $1,$6}'</pre>

   Note that JSONPath references object names which makes the request more understandable than
   awk referencing relative positions in output, which can change over time.

   More examples of JSONPath:
   https://github.com/himadriganguly/k8s-jsonpath/tree/main/pods   


1. List containers running within a pod:

   <pre><strong>kubectl get pods &91;pod-name-here] -n &91;namespace] -o jsonpath='{.spec.containers&91;*].name}*</strong></pre>

   
1. Custom columns

   https://kubernetes.io/docs/reference/kubectl/cheatsheet/#formatting-output

   <a name="Selectors"></a>

   ### Selectors

1. show pods labeled with values matching in list of values:

   k get pods -l 'release-version in (1.0, 2.0)'

   <a name="Selectors"></a>

   Label Selectors above select a set of objects using a single statement.

   "=", "!=", IN, NOTIN, EXISTS are valid selectors.

1. Delete pods

   <pre>k delete pods -l application-level=1.0</pre>

NOTE: After a pod is deleted, Kubernetes automatically creates another one to ensure the number of replicas are fulfilled.


<a name="rc"></a>

### Replication rc.yml

A ReplicaSet configures a Deployment controller to create and maintain a specific version of the Pods that the Deployment specifies.

The `rc.yml` (Replication Controller) defines the number of replicas and 

   <pre>
apiVersion: v1
kind: ReplicationController
metadata:
  name: cadvisor
spec:
  replicas: 5
  selector:
     app hello
  template:
    metadata:
      labels:
        app: hello-world
  spec:
    containers:
    - name: hello
      image: account/image:latest
      ports:
        containerPort: 8080
   </pre>

0. Apply replication:

   <pre><strong>kubectl apply -f rc.yml
   </strong></pre>

   The response expected:

   <pre>replicationcontroller "hello" configured
   </pre>

0. List, in wide format, the number of replicated nodes:

   <pre><strong>kubectl get rc -o wide
   </strong></pre>

   <pre>DESIRED, CURRENT, READY
   </pre>

0. Get more detail:

   <pre><strong>kubectl describe rc
   </strong></pre>


<a name="ServiceYml"></a>

### Service rc.yml

The `svc.yml` defines the services:

   <pre>apiVersion: v1
kind: Service
metadata:
  name: hello-svc
    labels:
      app: hello-world
spec:
  type: NodePort
  ports:
  - port: 8080
    protocol: TCP
  selector:
    app: hello-world
   </pre>

   The .spec.template field specifies how to create new pods in this ReplicaSet—containers using the nginx image on Docker Hub. 
   New containers are named the value in metadata.nam".

   The .spec.selector field defines how to find pods to manage as part of this ReplicaSet—in this case using MatchLabels
   PROTIP: The selector should match the pods.xml.

0. To create services:

   <pre><strong>
   kubectl create -f svc.yml
   </strong></pre>

   The response expected:

   <pre>
   service "hello-svc" created
   </pre>

0. List:

   <pre><strong>
   kubectl get svc
   </strong></pre>

0. List details:

   <pre><strong>
   kubectl describe svc hello-svc
   </strong></pre>

0. List end points addresses:

   <pre><strong>
   kubectl describe ep hello-svc
   </strong></pre>


<a name="DeploymentYml"></a>

### Deploy yml Deployment

The `deploy.yml` defines the deploy:

   <pre>
apiVersion: apps/v1beta2
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
  spec:
    containers:
    - name: nginx
      image: nginx:1.7.9
      ports:
      - containerPort: 80
        protocol: TCP
    nodeSelector:
      net: gigabit
   </pre>


   <pre>...
spec:
  resources:
    requests:
      memory: "300Mi"
      cpu: "250m"  # 1/4 core
    limits:
      memory: "400Mi"
      cpu: "1000m"  # 1 core
   </pre>

   Deployment wraps around <strong>replica sets</strong>, a newer version of doing rolling-update on Replication Controller. Old replica sets can revert roll-back by just changing the deploy.yml file.

   PROTIP: Don't run apt-upgrade within containers, which breaks the image-container relationship controls.

1. Retrieve the yaml for a deployment:

   <pre>kubectl get deployment nginx-deployment -o yaml</pre>

   <a name="RollingUpdate"></a>

   ### Rolling Update Strategy

   In the yaml, RollingUpdate is part of strategy:

   <pre>strategy:
  RollingUpdate: 
    maxSurge: 25% 
    maxUnavilable: 25%
  type: RollingUpdate
   </pre>


1. Begin rollout of a new desired version from the command line:

   <pre>kubectl set image deployment/nginx-deployment nginx=nginx:1.8</pre>

   Alternately, edit the yaml file to nginx:1.9.1 and:

   <pre>kubectl apply -f nginx-deployment.yaml</pre>

1. View Rollout a new desired version:

   <pre>kubectl rollout status deployment/nginx-deployment</pre>

1. Pause Rollout to control what is included in update:

   <pre>kubectl pause deployment/nginx-deployment</pre>

1. Describe the yaml for a deployment:

   <pre>kubectl describe deployment nginx-deployment</pre>

1. List the DESIRED, CURRENT, UP-TO-DATE, AVAILABLE:

   <pre>kubectl get deployments </pre>

1. List the DESIRED, CURRENT, UP-TO-DATE, AVAILABLE:

   <pre>kubectl get deployments </pre>


   <a name="Rollbacks"></a>

   ### Record Rollback history

   `--record=true`  # to save rollback history obtained by:

   <pre>k rollout history deployment/some-deployment</pre>

1. List the history:

   <pre>kubectl rollout history deployment/nginx-deployment --revision=3</pre>

1. rollout (rollback) Backout the revision to a specific revision:

   <pre>kubectl rollout undo deployment/nginx-deployment --to-revision=2</pre>

   PROTIP: Notice the difference between --to-revision= and --revision=

1. <strong>Undo</strong> rollout (rollback):

   <pre>k rollout undo deployment/my-deployment --revision=v1.2</pre>

   The default spec.revisionHistoryLimit is 10 versions retained.


<a name="SecurityContext"></a>

### Security Context

This `security.yml` defines a secrurity context pod:

   <pre>
apiVersion: v1
kind: Pod
metadata:
  name: security-context.pod
spec:
  securityContext:
    runAsUser: 1000
    fsGroup: 2000
  volumess:
  - name: sam-vol
    emptyDir: {}
  containers:
  - name: sample-container
    image: gcr.io/google-samples/node-hello:1.0
    volumeMounts:
    - name: sam-vol
      mountPath: /data/demo
    securityContext:
      allowPrivilegeEscalation: false
   </pre>

1. Create the pod:

   <pre>kubectl create -f security.yaml</pre>
   
   This can take several minutes.

1. Bring up a shell the security context pod:

   <pre>kubectl exec -it security-context-pod -- sh</pre>
   
1. Bring up shell and execute shell command (such as ls, ps aux to see processes):

   <pre>kubectl exec -c <em>container id</em> -it <em>pod name</em> -- <em>command</em> </pre>

   <tt>-c</tt> if there are several containers in a pod.

1. Within the instance, install networking utilities:

   <pre>apt-get install iputils-ping curl dnsutils iproute2 -y</pre>

1. See that the group is "2000" as specified:

   <pre>cd /data && ls -al</pre>

1. Exit the security context:

   <pre>exit</pre>

1. Delete the security context:

   <pre>kubectl delete -f security.yaml</pre>


<a name="Kubelet"></a>

## Kubelet Daemonset.yaml

Kubelets instantiate pods -- each a set of containers running under a single IP address,
the fundamental units nodes.

A Kubelet <strong>agent program</strong> is installed on each server
to watch the apiserver and register each node with the cluster.


PROTIP: Use a DaemonSet when running clustered Kubernetes with static pods to run a pod on every node. Static pods are managed directly by the kubelet daemon on a specific node, without the <a href="#API_Server">API server</a> observing it. 

   * https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/

A DaemonSet ensures that all (or some) Nodes run a copy of a Pod. 
As nodes are added to the cluster, Pods are added to them. 
As nodes are removed from the cluster, those Pods are garbage collected. 

Deleting a DaemonSet will clean up the Pods it created.
Some typical uses of a DaemonSet are:

   * running a cluster storage daemon, such as glusterd, ceph, on each node.
   * running a logs collection daemon on every node, such as fluentd or logstash.
   * running a node monitoring daemon on every node, such as Prometheus Node Exporter, collectd, Datadog agent, New Relic agent, or Ganglia gmond.

1. Start kubelet daemon:

   <pre><strong>
   kubelet --pod-manifest-path=<em>the directory</em> 
   </strong></pre>

   This periodically scans the directory and creates/deletes static pods as yaml/json files appear/disappear there. 

   Note: Kubelet ignores files starting with a dot when scanning the specified directory.

   PROTIP: By default, Kubelets exposes endpoints on port <strong>10255</strong>.

   Containers can be Docker or rkt (pluggable)

   /spec, /healthz reports status.

The container engine pulls images and stopping/starting containers.

   * https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/


### CNI Plugins

The Controller Network Interface (CNI) is installed using 
basic cbr0 using the bridge and host-local CNI plugins.

The CNI plugin is selected by passing Kubelet the command-line option:

   <pre>
   --network-plugin=cni 
   </pre>

See https://kubernetes.io/docs/concepts/cluster-administration/network-plugins/

<table border="1" cellpadding="4" cellspacing="0">
<tr valign="bottom"><th>Plugin</th><th>-</th><th> vxlan</th><th> L2</th><th>L3</th><th>Pol</th><th>Encrypt</th></tr>
<tr valign="top"><td><a target="_blank" href="https://docs.projectcalico.org/v3.0/introduction/">Project Calico</a></td><td>
   </td><td> Y</td><td> -</td><td>Y</td><td>-</td><td>Y
   </td></tr>
<tr valign="top"><td><a target="_blank" href="https://docs.projectcalico.org/v3.0/getting-started/kubernetes/installation/hosted/canal">Calico with Canal</a></td><td>
   </td><td> Y</td><td> Y</td><td>-</td><td>Y</td><td>Y
   </td></tr>
<tr valign="top"><td><a target="_blank" href="https://github.com/coreos/flannel"> 
   Flannel</a></td><td>
   </td><td> Y</td><td> Y</td><td>-</td><td>-</td><td>-
   </td></tr>
<tr valign="top"><td><a target="_blank" href="https://www.weave.works/docs/net/latest/kubernetes/kube-addon">Weave Works (Weave Net)</a></td><td>
   </td><td> Y</td><td> Y</td><td>-</td><td>Y</td><td>Y
   </td></tr>
<tr valign="top"><td><a target="_blank" href="http://romana.io/how/romana basics/"> 
   Romana</a></td><td>
   </td><td> -</td><td> -</td><td>Y</td><td>Y</td><td>-
   </td></tr>
<tr valign="top"><td><a target="_blank" href="https://www.kube-router.io">
   Kube Router</a></td><td>
   </td><td> -</td><td> -</td><td>Y</td><td>Y</td><td>-
   </td></tr>
<tr valign="top"><td><a target="_blank" href="https://github.com/kopeio/networking">Kopeio</a></td><td>
   </td><td> Y</td><td> Y</td><td>-</td><td>-</td><td>Y
   </td></tr>
</table>

Others:
   * Cisco ACI
   * Cilium
   * Contiv
   * Contrail
   * NSX-T
   * OpenVswitch


## Make your own K8s

Kelsey Hightower, in <a target="_blank" href="https://github.com/kelseyhightower/kubernetes-the-hard-way">
https://github.com/kelseyhightower/kubernetes-the-hard-way</a>, 
shows the steps of how to create Compute Engine yourself:

   * Cloud infrastructure firewall and load balancer provisioning
   * setup a CA and TLS cert gen.
   * setup TLS client bootstrap and RBAC authentication
   * bootstrap a HA etcd cluster
   * bootstrap a HA Kubernetes Control Pane
   * Bootstrap Kubernetes Workers
   * Config K8 client for remote access
   * Manage container network routes
   * Deploy clustesr DNS add-on
   <br /><br />




## Kubeflow

<a target="_blank" href="https://github.com/kubeflow/kubeflow">https://github.com/kubeflow/kubeflow</a> makes deployment of Kubernetes for Machine Learning (TensorFlow)
<a target="_blank" href="http://www.kai-waehner.de/blog/2018/05/09/deep-learning-at-extreme-scale-%E2%80%A8with-apache-kafka-open-source-ecosystem/">using Kafka</a>




## References

by Adron Hall:

   * <a target="_blank" href="https://www.pelo.tech/blog/running-kubernetes/">
   Kubernetes with GCloud and Terraform</a> April 5, 2017

   * <a target="_blank" href="http://blog.adron.me/articles/setting-up-gcp-container-cluster/">
   Setting up a GCP Container Cluster - Part I</a> January 31, 2017.

Julia Evans

   * https://jvns.ca/categories/kubernetes/

Drone.io


http://www.nkode.io/2016/10/18/valuable-container-platform-links-kubernetes.html

https://medium.com/@ApsOps/an-illustrated-guide-to-kubernetes-networking-part-1-d1ede3322727

https://cloud.google.com/solutions/heterogeneous-deployment-patterns-with-kubernetes

https://cloud.google.com/solutions/devops/

https://docs.gitlab.com/ee/install/kubernetes/gitlab_omnibus.html

https://www.terraform.io/docs/providers/aws/guides/eks-getting-started.html

https://devops.college/the-journey-from-monolith-to-docker-to-kubernetes-part-1-f5dbd730f620

https://github.com/ramitsurana/awesome-kubernetes



## Jobs for you

<a target="_blank" href="https://www.sdxcentral.com/articles/news/kubernetes-dominates-in-it-job-searches/2019/01/">
Kubernetes Dominates in IT Job Searches</a>


## Learning, Video and Live

<a target="_blank" href="https://www.youtube.com/watch?v=1lgsQ3PKz9M">
Kubernetes for Beginners</a> by Siraj  Jan 8, 2019 [11:04]

<a target="_blank" href="https://www.youtube.com/watch?v=90kZRyPcRZw">
Kubernetes Deconstructed</a> Dec 15, 2017 [33:14]
by Carson Anderson of DOMO (@carsonoid)

<a target="_blank" href="https://www.youtube.com/watch?v=i425aTrW6Gg">
Solutions Engineering Hangout: Terraform for Instant K8s Clusters on AWS EKS</a>
by HashiCorp

<a target="_blank" href="https://www.youtube.com/watch?v=1xo-0gCVhTU">
Introduction to Microservices, Docker, and Kubernetes</a>
by James Quigley

<a target="_blank" href="http://bit.ly/2KabhKB">
Kubernetes in Docker for Mac</a> April 17, 2018
by Guillaume Rose, Guillaume Tardif

YOUTUBE: <a target="_blank" href="https://www.youtube.com/watch?v=ALW6VBviSgQ&list=PLyqga7AXMtPMfBejtyw1vJOHspvsNRJkC&index=109">
What is Kubernetes?</a> Jun 18, 2018 by Jason Rahm



## Kubernetes for Machine Learning

<a target="_blank" href="https://opensource.com/article/19/1/why-data-scientists-love-kubernetes">This article</a>
talks about Jupyter notebooks correctness and functionality being dependent on their environment, called "training serving skew".
To get around that, use the <a target="_blank" href="https://mybinder.org/">Binder service</a> which takes Jupyter notebooks within a Git repository to build a container image, then launches the image in a Kubernetes cluster with an exposed route accessible from the public internet. 

<a target="_blank" href="https://github.com/openshift/source-to-image">OpenShift's Source-to-image (S2I)</a> and
<a target="_blank" href="https://github.com/jupyter-on-openshift/s2i-notebook-builder">
Graham Dumpleton's OpenShift S2I builder </a>
builds artifacts from source and injects them into docker images.

It's used by <a target="_blank" href="https://github.com/SeldonIO/seldon-core/blob/master/docs/articles/openshift_s2i.md">Seldon-Core</a>
to scale Machine Learning environments. There are <a target="_blank" href="https://github.com/kubeflow/example-seldon">Seldon-Core Examples</a>

Seldon-Core is used by
<a target="_blank" href="https://www.kubeflow.org/docs/about/kubeflow/">Kubeflow</a> makes deployments of machine learning (ML) workflows on Kubernetes simple, portable and scalable. It provides templates and custom resources to deploy TensorFlow and other machine learning libraries and tools on Kubernetes.
Included in Kubeflow is JupyterHub to create and manage multi-user interactive Jupyter notebooks.
It began as <a target="_blank" href="https://www.tensorflow.org/tfx/">TensorFlow Extended</a> at Google.

<a target="_blank" href="https://github.com/kubernetes-incubator">https://github.com/kubernetes-incubator</a>
is a collection of repositories such as the 
spartakus Anonymous Usage Collector,
metrics-server, 
external-dns which configures external DNS servers (AWS Route53, Google CloudDNS and others) for Kubernetes Ingresses and Services,
and kube-aws which is a command-line tool to declaratively manage Kubernetes clusters on AWS.

<a target="_blank" href="https://radanalytics.io/">https://radanalytics.io</a>
Oshinko empowers intelligent app developement on the OpenShift platform
deploying and managing Apache Spark clusters
It has a spark cluster management app (oshinko-webui)


## Resources

<a target="_blank" href="https://www.youtube.com/watch?v=CuWSY_fwV6M&list=PL7bmigfV0EqQw4WnD0wF-SRBYttCFeBbF">
8 Lightboard VIDEOS</a>: Understanding Kubernetes series by VMware.

<a target="_blank" href="https://github.com/hjacobs/kubernetes-failure-stories">
https://github.com/hjacobs/kubernetes-failure-stories</a>

Kubstack

<a target="_blank" href="https://www.youtube.com/watch?v=OcOkh2mYLoA">
Daniel Pacak's experience with CKAD</a> (from Aqua Security)

<a target="_blank" href="https://twitter.com/pst418">@pst418</a>


<a target="_blank" href="https://www.gcppodcast.com/post/">GCP PODCAST</a>: <a target="_blank" href="https://www.gcppodcast.com/post/episode-3-kubernetes-and-google-container-engine/">Kubernetes and Google Container Engine</a> hosts Francesc Campoy Flores and Mark Mandel interview Brian Dorsey, Developer Advocate, Google Cloud Platform. Comments at <a target="_blank" href="https://www.reddit.com/r/gcppodcast/comments/3sf3yr/episode_3_kubernetes_and_google_container_engine/">r/gcppodcast</a>

<a target="_blank" href="http://post.oreilly.com/rd/9z1z07qqefah7igu9ftil9os3s666asu5a6lfhh1eko">O'Reilly book</a>
Kubernetes adventures on Azure, Part 1 (Linux cluster)
Having read several books on Kubernetes, Ivan Fioravanti, writing for Hackernoon, says it's time to start adventuring in the magical world of Kubernetes for real! And he does so using Microsoft Azure. Enjoy the step-by-step account of his escapade (part 1).

Microsoft's "<a target="_blank" href="https://azure.microsoft.com/mediahandler/files/resourcefiles/kubernetes-learning-path/Kubernetes%20Learning%20Path%20version%201.0.pdf?utm_campaign=ossonazure">PDF: 50 days from zero to hero with Kubernetes</a>" includes:

1. [<a target="_blank" href="#Terraform">Terraform</a>] <a target="_blank" href="https://azure.microsoft.com/mediahandler/files/resourcefiles/phippy-goes-to-the-zoo/Phippy%20Goes%20To%20The%20Zoo_MSFTonline.pdf">Phippy Goes to the Zoo</a> is a children's book character Phippy (from Docker) introduct pods, replica sets, deployments, ingress.

2. <a target="_blank" href="https://www.youtube.com/watch?v=EUitQ8DaZW8&list=PLLasX02E8BPCrIhFrc_ZiINhbRkYMKdPT&index=1&t=0s">The 6-part YouTube videos</a> by Brendan Burns drawing behind glass.

3. <a target="_blank" href="https://docs.microsoft.com/en-us/azure/aks/concepts-clusters-workloads">Kubernetes core concepts for Azure Kubernetes Service (AKS)</a> explore basic concepts like YAML definitions, networking, secrets, and application deployments from source code.

4. <a target="_blank" href="https://www.katacoda.com/courses/kubernetes/launch-single-node-cluster">Katacoda</a> provides a Bash terminal as if you are running Minikube and kubectl locally just by clicking the code on the left pane rather than typing. 

5. <a target="_blank" href="https://docs.microsoft.com/en-us/azure/architecture/reference-architectures/microservices/aks">Microservices architecture on Azure Kubernetes Service (AKS)</a> describes a reference implementation at https://github.com/mspnp/microservices-reference-implementation

6. <a target="_blank" href="https://aksworkshop.io/">https://aksworkshop.io/</a> is a hands-on workshop to create a Kubernetes cluster, deploy a microservices-based application, and set up a CI/CD pipeline.

   * Kubernetes deployments, services and ingress
   * Deploying MongoDB using Helm
   * Azure Monitor for Containers, Horizontal Pod Autoscaler to add more pods by updating the replicas count in the Deployment (based on targetCPUUtilizationPercentage: 50) and the Cluster Autoscaler to add more nodes to the cluster
   * Building CI/CD pipelines using Azure DevOps and Azure Container Registry
   * Scaling using Virtual Nodes, setting up SSL/TLS for your deployments, using Azure Key Vault for secrets
   <br /><br />

7. <a target="_blank" href="https://azure.microsoft.com/en-us/topic/what-is-kubernetes/">https://azure.microsoft.com/en-us/topic/what-is-kubernetes</a>

8. <a target="_blank" href="https://aka.ms/k8slearning">https://aka.ms/k8slearning</a>

9. <a target="_blank" href="https://learnk8s.io/troubleshooting-deployments/">A visual guide on troubleshooting Kubernetes deployments</a> DECEMBER 2019

1. [<a target="_blank" href="#Terraform">Terraform</a>] <a target="_blank" href="https://coreos.com/blog/kubectl-tips-and-tricks">https://coreos.com/blog/kubectl-tips-and-tricks</a>

   <a target="_blank" href="https://www.youtube.com/watch?v=GEKTz5E22hY">VIDEO</a> from Jun 22, 2017
   Covers bash completion   


<a name="cgroups"></a>

#### cgroups

A cgroup (control group) is a group of Linux processes providing resource allocation,
with optional resource isolation, accounting, and limits.
Cgroups ensure that a container cannot get more than the resources specified for it.

<a name="chroot"></a>

#### chroot

CGroups evolved from chroot.
The chroot jail, introduced in the 1970s, is still used as the foundation of each container.
It isolates processes from the root by presenting only the contents of a specific directory (folder) to the process.



<a name="Secrets"></a>

## Secrets

   <img align="right" width="128" src="https://github.com/kubernetes/community/blob/master/icons/png/resources/labeled/secret-128.png?raw=true">

   * <a target="_blank" href="https://kubernetesbyexample.com//secrets/">kubernetesbyexample.com: Secrets</a>
   * In https://kubernetes.io/docs/concepts/secret/#best-practices
   * https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data Enable encryption at rest for cluster data

<a target="_blank" href="https://banzaicloud.com/blog/inject-secrets-into-pods-vault-revisited/">
Banzai cloud vault</a> uses a mutating admission webhook to inject an executable into containers inside Pods, which then request secrets from HashiCorp Vault through special environment variable definitions. This project was inspired by a number of other projects (e.g. channable/vaultenv, hashicorp/envconsul), but one thing that makes it unique is that it is a daemonless solution.

PROTIP: <a target="_blank" href="https://medium.com/@siri.c/inject-aws-secrets-to-containers-be55c859fbf6">BLOG</a>:
Don't follow the Kubernetes default of storing credentials in Secret resource in plain text, for acess by everyone who has access to Kubernetes clusters.
You don't have to modify source code to inject a secret from AWS Secret Manager into env. if you use Piggy (https://piggysec.com) for Elastic Kubernetes Service (EKS) in a Helm chart (as annotation).  See https://github.com/KongZ/piggy/tree/main/demo
   1. Piggy <strong>mutates</strong> pods during pod creation
   2. Piggy authenticates pods using a pod service account token with Kubernetes API. After pod has been authenticated, Piggy exchanges the <a target="_blank" href="https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html">ephemeral token</a> with <a target="_blank" href="https://awscli.amazonaws.com/v2/documentation/api/latest/reference/sts/index.html">AWS STS (Security Token Service)</a> to read values from AWS Secret Manager. This ephemeral token is time limited. Piggy does not keep tokens in the application. 
   3. Secrets from AWS Secret Manager are injected into the container process.

See https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html

### Base64 Encoding

What Kubernetes calls its secrets are actually Base64 encoded text.

PROTIP: custom controller turn proxies into Secrets. 
sealed secrets:
   * Bitnami's Secret Controller has a key in the Controller used to do asymmetric encrypt and decrypt of external secrets stored in Git.
   * AWS Secrets Manager (ASM)
   <br /><br />

1. Encode (not encrypt) plain text to base64 encoding using program within coreutils that comes with macOS/Linux operating systems:

   <pre><strong>echo -n 'supersecret' | base64 > encoded_file ; cat encoded_file</strong></pre>

   (echo -n removes invisible new line characters for conversion)

   <tt>c3VwAXJzZWNyZXQ=</tt>

1. Decode a base64 encoded file to text:

   <pre><strong>base64 --decode encoded_file</strong></pre>

1. Create a secret from a text literal and store in K8s:

   <pre><strong>k create secret generic my-secret-literal \
    --from-literal=my-password
   </strong></pre>

   <pre><strong>k create secret generic my-db-password \
    --from-literal=db-password='password'
    --from-literal=db-root-password='password'
   </strong></pre>

1. Create a secret keypair and store in K8s:

   <pre><strong>k create secret generic my-secret-file \
    --from-file=ssh-privatekey=~/.ssh/id_rsa
    --from-file=ssh-publickey=~/.ssh/id_rsa.pub
   </strong></pre>

1. Create a secret from a keypair:

   <pre><strong>k create secret tls tls-secret  \
    --cert=<em>path/to</em>/tls.cert
    --key=<em>path/to</em>/tls.key
   </strong></pre>


### Secrets - custom controllers

REMEMBER: Pods consume <strong>static</strong> ConfigMaps and Secrets. 

PROTIP: To monitor for changes apply updates to hash in PodSpec, then triggers changes:
install custom controller "Wave" at <a target="_blank" href="https://github.com/pusher/wave">https://github.com/pusher/wave</a>.

1. Use encoded secret (saved insecurely encoded in Base64):

   <pre>apiVersion: v1
kind: Secret
metadata
  name: database-secrets
type: Opaque
data:
  DB_PASSWORD: "c3VwAXJzZWNyZXQ="   # encoded Base64 (not secret)
volumes:
  - name: database-secrets
  secrets:
    secretName: database-secrets
   </pre>

   * Encrypting data on rest: https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/
   * Using Sealed Secrets that allow us to encrypt everything in Git:
   <a target="_blank" href="https://github.com/bitnami-labs/sealed-secrets">https://github.com/bitnami-labs/sealed-secrets</a>
   * Using Vault to store them: https://github.com/coreos/vault-operator
   <br /><br />

PROTIP: K8s stores secrets in memory (tempfs on a Node, not on disk) in etcd (which should be limited to admin users).

TOOL: "Studio 3T" to connect to MongoDB.




<a name="Debugging"></a>

## Debugging

K8s does not come with debuggers. Output to logs, then use tracing. Printlines.

<a target="_blank" href="https://datadoghq.com/">DatadogHQ.com</a> for metrics & traces

<a target="_blank" href="https://unumotors.com/">unu</a> uses Jaeger for auto-instrumentation 

<a target="_blank" href="https://mindspace.net">Mindspace.net</a> provides IDE connecting to node remote debugging.

<a target="_blank" href="https://cluster-api.sigs.k8s.io/">cluster-api.sigs.k8s.io</a> printlines


<a target="_blank" href="https://docs.gitlab.com/12.10/charts/development/kube-monkey/#:~:text=kube%20monkey%20is%20an%20implementation,of%20a%20highly%20available%20system">KubeMonkey</a>
is a Chaos Monkey forcing random failures within Kubernetes -- to test the fault tolerance of our deployments.


<hr />

## Blogs

<a target="_blank" href="https://kubernetesbyexample.com/">https://kubernetesbyexample.com</a> provides in-depth yet concise coverage, with sample code:

   * <a target="_blank" href="https://kubernetesbyexample.com//api/">API Server</a>
   * <a target="_blank" href="https://kubernetesbyexample.com//deployments/">Deployments</a>
   * <a target="_blank" href="https://kubernetesbyexample.com//envs/">Environment Variables</a>
   * <a target="_blank" href="https://kubernetesbyexample.com//healthz/">Health Checks</a>
   * <a target="_blank" href="https://kubernetesbyexample.com//ic/">Init Containers</a>
   * <a target="_blank" href="https://kubernetesbyexample.com//jobs/">Jobs</a>
   * <a target="_blank" href="https://kubernetesbyexample.com//labels/">Labels</a>
   * <a target="_blank" href="https://kubernetesbyexample.com//logging/">Logging</a>
   * <a target="_blank" href="https://kubernetesbyexample.com//ns/">Namespaces</a>
   * <a target="_blank" href="https://kubernetesbyexample.com//nodes/">Nodes</a>
   * <a target="_blank" href="https://kubernetesbyexample.com//pods/">Pods</a>
   * <a target="_blank" href="https://kubernetesbyexample.com//pv/">Persistent Volumes</a>
   * <a target="_blank" href="https://kubernetesbyexample.com//pf/">Port Forward</a>
   * <a target="_blank" href="https://kubernetesbyexample.com//secrets/">Secrets</a>
   * <a target="_blank" href="https://kubernetesbyexample.com//services/">Services</a>
   * <a target="_blank" href="https://kubernetesbyexample.com//sd/">Service Discovery</a>
   * <a target="_blank" href="https://kubernetesbyexample.com//statefulset/">Stateful Sets</a>
   * <a target="_blank" href="https://kubernetesbyexample.com//volumes/">Volumes</a>
   <br /><br />

<a target="_blank" href="https://www.ibm.com/cloud/architecture/content/course/kubernetes-101/deployments-replica-sets-and-pods/">
IBM's Kubernetes 101</a> is an excellent overview.


<a target="_blank" href="https://www.linkedin.com/pulse/from-zero-ckad-30-days-pranam-mohanty/">From zero to CKAD in 30 days</a> August 9, 2020 by Pranam Mohanty

https://lnkd.in/f3BciG5

Sandeep Dinesh (@sandeepdinesh) from 2018
   * https://medium.com/google-cloud/kubernetes-best-practices-season-one-11119aee1d10
   * https://www.youtube.com/playlist?list=PLIivdWyY5sqL3xfXz5xJvwzFW_tlQB_GB
   <br /><br />

<a target="_blank" href="https://searchitoperations.techtarget.com/news/252492344/Observability-standards-emerge-as-Kubernetes-matures">
Observability</a>

Burr Sutter (<a target="_blank" href="httpps://www.burrsutter.com/">burrsutter.com</a>)
As a Red Hat employee:
   * <a target="_blank" href="https://github.com/redhat-scholars/kubernetes-tutorial">
   https://github.com/redhat-scholars/kubernetes-tutorial</a>
   * bit.ly/9stepsawesome
   * 11 Steps to Awesome with Kubernetes, Istio, and Knative
   * https://developers.redhat.com/devnation/master-course/kubernetes (fundamentals)
   <br /><br />

Alex Soto (lordofthejars.com)
   * https://github.com/redhat-scholars/kubernetes-tutorial

https://itnext.io/bootstrapping-kubernetes-clusters-on-aws-with-terraform-b7c0371aaea0
using kubeadm on AWS


<a name="Production"></a>

## Production

Google on Coursera has a video course <a target="_blank" href="https://www.coursera.org/learn/deploying-secure-kubernetes-containers-in-production/">Architecting with Google Kubernetes Engine: Production</a>
by Maya Kaczorowski (Product Manager, Container Security). 

Every operation on a GCP resource is performed using an API call for which accesses is controlled using a permission.

OpenID Connect to API server operates on top of OAuth, safer than x509 certs.
Windows AD servers can sync one-way via Google Cloud Directory Sync (GCDS) by grouping GCP permissions into <strong>roles</strong> based on common user flows. NOTE: Permissions can't be individually assigned to members,

Get a G-Suite Domain or Cloud Identity domain (free). 

Cloud IAM policy grants roles to users.
Cloud IAM defines a list of bindings designating which members can view or change GKE cluster configurations.

An IAM policy can be attached to a specific resource, a project, a project folder, or a whole organization.

Inside the cluster, K8s RBAC, Pod Security.

Access control can be setup at any level within the GCP organizational hierarchy and choose the most appropriate level for each IAM policy.
Within an organization, you can have multiple folders containing multiple projects and so on.

Cloud IAM policies applied at higher levels of a GCP organizational hierarchy are <strong>inherited</strong> by resources lower down that hierarchy. An IAM policy attached at the organizational level will automatically have access to all folders, all projects, and ultimately all relevant resources. There's no way to grant a permission at higher level in the hierarchy and then take it away below.

So, in general, the policies applied at higher levels should grant very few permissions and policies applied at lower levels
should grant additional permissions to only those who need them. 


There are three kinds of roles in cCloud IAM: primitive, predefined, and custom.
<strong>Primitive roles</strong> grant users global access to all GCP resources within a <strong>project</strong>
(app engine, compute engine, and cloud storage).
They existed before Cloud IAM, but can still be used with Cloud IAM. 
The three primitive roles: <strong>viewer role</strong> permits read-only actions, such as viewing existing resources or data across the whole project. <strong>editor role</strong> adds modifying of existing resources.
<strong>owner role</strong> adds the right to manage roles and permissions and set up billing for a project.<a target="_blank" href="https://googlecoursera.qwiklabs.com/focuses/13134687?parent=lti_session">*</a>

   <pre>kubectl apply -f pod-reader-role.yaml</pre>

   <pre>kind: Role
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  namespace: production
  name: pod-reader
rules:
- apiGroups: &91;""]
  resources: &91;"pods"]
  verbs: &91;"create", "get", "list", "watch"]
   </pre>

GKE provides several <strong>Predefined roles</strong> to provide granular access to Kubernetes engine resource.
<strong>GKE viewer role</strong> gives read-only access as might be needed for auditing.
<strong>GKE developer role</strong> grants developers and release engineers full control to all resources within a cluster.
<strong>GKE admin role</strong> gives project owners, system administrators, and on-call engineers full access to clusters and Kubernetes engine resource is inside the clusters (create, delete, update, view clusters), but provides no access to Kubernetes resources.

<strong>GKE custom roles</strong> provides even more granular control to a specific user account managing software running inside a certain GKE cluster, but not have any access to view GCP resources, and nothing else.

## Quotas

   <img align="right" width="128" src="https://github.com/kubernetes/community/blob/master/icons/png/resources/labeled/quota-128.png?raw=true">


<hr />



## References

K8s failure stories at <a target="_blank" href="https://k8s.af/">k8s.af</a>

K8s experts Fairwinds.com has https://github.com/FairwindsOps/apprentice-learning-plan for new Site Reliability Engineers.
Fairwinds also has open-source tools at <a target="_blank" href="https://github.com/FairwindsOps">their FairwindsOps GitHub</a> using @goreleaser:

   * Polaris validates best practices as defined at their <a target="_blank" href="https://www.fairwinds.com/kubernetes-best-practices-comprehensive-white-paper">K8s Best Practices" white paper PDF</a>
   * reckoner to declaratively install and manage multiple Helm chart releases
   * terraform-bastion instance to proxy SSH and API access to a private Kubernetes cluster.
   * gemini to automate backups of PersistentVolumeClaims in Kubernetes using VolumeSnapshots
   * ClusterOps 
   * <a target="_blank" href="https://github.com/FairwindsOps/k8s-workshop">https://github.com/FairwindsOps/k8s-workshop</a>
   <br /><br />

k8s-school.fr:
   * https://k8s-school.fr/resources/en/blog/kubectl-run-deprecated/

LevelUpEducation:
   * https://github.com/LevelUpEducation/kubernetes-demo/issues/31

https://www.tutorialspoint.com/kubernetes/kubernetes_replica_sets.htm

<a target="_blan" href="https://itnext.io/kubernetes-journey-cka-ckad-exam-tips-ff73e4672833">
Exam</a> by Brad McCoy

https://www.linkedin.com/pulse/effectively-choosing-k8-node-size-capacity-anurag-gupta/

https://kubernetes.io/docs/concepts/scheduling-eviction/pod-overhead/

https://medium.com/windmill-engineering/why-does-developing-on-kubernetes-suck-4f4ae6812c8d

https://www.tikalk.com/posts/2020/05/14/2020-05-14-Kubexperience-for-developers/



Factors taken into account for scheduling decisions include, individual and collective resource requirements, hardware/software/policy constraints, affinity and anti-affinity specifications, data locality, inter-workload interference and deadlines.


<a name="Videos"></a>

## Latest videos about K8s

For the most up-to-date information by practioners:

<a target="_blank" href="https://www.youtube.com/watch?v=QJ4fODH6DXI">
Kubernetes Concepts Explained in 9 minutes!</a> Oct 31, 2019 by <a target="_blank" href="https://www.linkedin.com/in/mmumshad/">Mumshad Mannambeth</a> 

Kubcon conferences are held 3 times a year in Asia, Europe, and US from https://events.linuxfoundation.org.

   * <a target="_blank" href="https://www.youtube.com/playlist?list=PLj6h78yzYM2O1wlsM-Ma-RYhfT5LKq0XC">YouTube Videos from Kubcon + CloudNativeCon Europe 2020</a>

Others:

   * <a target="_blank" href="https://mauilion.dev/about/">weekly video chat</a> on Heptio's YouTube channel of Duffie Cooley (<a target="_blank" href="https://twitter.com/mauilion">@mauilion</a>).

O'Reilly's <a target="_blank" href="https://learning.oreilly.com/live-training/courses/oreilly-infrastructure-ops-superstream-series/0636920410027/?utm_medium=email&utm_source=platform+b2b&utm_campaign=superstream&utm_content=20201022+reminder4+io+ev3"> Infrastructure & Ops Superstream Series: Session 3 Oct. 21, 2020: Kubernetes</a> 

Interactive KataKoda lab on OReilly.com: <a target="_blank" href="https://learning.oreilly.com/scenarios/deploying-python-apis/9781492090465/">Deploying Python APIs on Kubernetes: Deploying a Development Kubernetes Cluster</a> 
   using the slim K3s Kubernetes distribution from Rancher, a Certified Lightweight Kubernetes Distribution built for IoT and Edge remote ecomputing. It stores data using sqlite3 instead of etcd. It bootstrap script K3sup installer at <a target="_blank" href="https://github.com/alexellis/k3sup">https://github.com/alexellis/k3sup</a>.

k3s.io with traefix.io/traefix based on https://github.com/lima-vm/lima

arkade - portable Kubernetes marketplace

<a target="_blank" href="https://learning.oreilly.com/library/view/kubernetes-patterns/9781492050278/">
BOOK: Kubernetes Patterns</a>
by Bilgin Ibryam, Roland Huß


Jonathan Johnson

   * <a target="_blank" href="https://learning.oreilly.com/scenarios/kubernetes-pipelines-sonarqube/9781492078975/">
   Kubernetes Pipelines: SonarQube</a>

   * <a target="_blank" href="https://learning.oreilly.com/scenarios/kubernetes-pipelines-registries/9781492078951/">
   Kubernetes Pipelines: Registries</a>

   * <a target="_blank" href="https://learning.oreilly.com/scenarios/kubernetes-pipelines-tekton/9781492083900/">
   Kubernetes Pipelines: Tekton Pipelines</a>

   * <a target="_blank" href="https://learning.oreilly.com/scenarios/kubernetes-pipelines-python/9781492090182/">
   Kubernetes Pipelines: Python Pipeline to Kubernetes (using Tekton Pipelines to package Python in an efficient container)</a>
   Kaniko container


@EllenKorbes: "Successful Kubernetes Development Workflows"

<a target="_blank" href="https://www.linkedin.com/in/javajon/">Jonathan Johnson</a>'s live online training "Kubernetes in Three Weeks" courses through O'Reilly:

   * <a target="_blank" href="https://learning.oreilly.com/live-training/courses/kubernetes-in-three-weeks-part-ii/0636920411109/">Part I</a> - Meshing and Observability

   * <a target="_blank" href="https://learning.oreilly.com/live-training/courses/kubernetes-in-three-weeks-part-ii/0636920411109/">Part II</a> - Operators and Serverless

   * Part III - CI/CD Pipelines on Kubernetes

Programming Kubernetes (book)

Kubernetes Best Practices (book)

Kubernetes Up and Running, second edition (book)


## Video courses

Research into learning point to "spaced repetition" as the way to get what want to remember in our long-term memory.

Different instructors explain concepts in different logical sequences.

So looking at different video classes provides that.


<a name="KodeKloud"></a>

### KodeKloud also from Udemy.com

PROTIP: This I think is the most thoroughly and logically presented tutorials for CKAD and CKA.

I have several tabs open taking it:

1. The courses is available for USD $228/year (less occassional discounts) at <a target="_blank" href="https://kodeKloud.com/">KodeKloud.com</a> where <a target="_blank" href="https://kodekloud.com/courses/enrolled/675122">Videos are presented on KodeKloud.com</a> (using the Teachable.com platform).

1. The courses can also be purchased at Udemy.com:

   * <a target="_blank" href="https://www.udemy.com/course/certified-kubernetes-application-developer/">Kubernetes Certified Application Developer (CKAD) with Tests</a>, with 9 hours of videos, and<br />
   <a target="_blank" href="https://www.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/">Kubernetes Certified Application Developer (CKA) with Tests</a>, with 18 hours of videos.
   <br /><br />

1. Either way purchased, the course includes access to a KataKoda-powered <a target="_blank" href="https://kodekloud.com/courses/enrolled/675122">lab environment</a> for one hour at a time. 

   PROTIP: The <a href="#Aliases">k alias for kubectl</a> is already configured, so type <tt>k</tt> instead of <tt>kubectl</tt>.

1. A "Quiz Portal" invoked from within the labs UI provides challenge questions and answers.

   Some hints reference answer files in folder "/var/answers", viewed by a command in the Terminal, such as:

   <pre>cat /var/answers/answer-ubuntu-sleeper-2.yaml</pre>

1. Within the quiz, some links to solutions to labs on YouTube are broken. So stay on the Udemy UI for Solution videos.

   <a target="_blank" href="https://www.youtube.com/channel/UCSWj8mqQCcrcBlXPi4ThRDQ">KodeKloud's YouTube channel</a> still provides a series for absolute beginners on <a target="_blank" href="http://bit.ly/GitForBeginnersKodeKloud">Git</a>, Ansible, Puppet, Shell, Docker, Kubernetes. https://www.youtube.com/watch?v=QJ4fODH6DXI

1. Teacher and founder <a target="_blank" href="https://www.linkedin.com/in/mmumshad/">Mumshad Mannambeth</a> (living in Singapore) also created a free work simulator for people to gain "real" work experience at <a target="_blank" href="https://kodekloud.com/p/kodekloud-engineer">https://kodekloud.com/p/kodekloud-engineer</a>.

1. For CKA, he also authored <a target="_blank" href="https://github.com/mmumshad/kubernetes-the-hard-way">https://github.com/mmumshad/kubernetes-the-hard-way</a> (on Virtualbox and Vagrant using Docker instead of containerd) which takes a manual approach to bootstrap a Kubernetes cluster from scratch, for learning to understand each task performed by the automation. The tutorial adapts the original using GCP developed by Kelsey Hightower.

1. [<a target="_blank" href="#Terraform">Terraform</a>] <a target="_blank" href="https://join.slack.com/t/kodekloudworkspace/shared_invite/zt-fz4nok2p-4~RJZBLNgThqSeuroLSPiQ">Join</a> the Slack channel for <a target="_blank" href="https://app.slack.com/client/TDSBA9B9V/CDR4R9Z7E/thread/CDR4R9Z7E-1604511588.117400">CKAD</a> and <a target="_blank" href="https://app.slack.com/client/TDSBA9B9V/CHMV3P9NV/thread/CDR4R9Z7E-1604511588.117400">CKA</a> students.

1. KodeKloud's Mock Tests, which Ansar (Amoury) Memon's <a target="_blank" href="https://www.youtube.com/channel/UCXOYtKi39m28Gd7FGaDVYGw">"The FrontOpsGuys" on YouTube</a> answers for 
   <a target="_blank" href="https://www.youtube.com/channel/UCXOYtKi39m28Gd7FGaDVYGw">Test 1</a> and 
   <a target="_blank" href="https://www.youtube.com/watch?v=BiY3b7F96wc">Test 2</a>

                         
For CKA, https://github.com/kodekloudhub/certified-kubernetes-administrator-course


<a name="LFS258"></a>

### Linux Foundation LFS258

On would think the definitive courses would be from the same organization that created the exam.

The <a target="_blank" href="https://training.linuxfoundation.org/training/kubernetes-for-developers/">35-hour video/on-site course LFD259</a> $199 upgrade offered with the <a target="_blank" href="https://www.cncf.io/certification/ckad/">CKAD exam sign-up</a> covers this series of <strong>topics</strong>:

   1. Course Introduction
   2. Kubernetes Architecture
   3. Build
   4. Design
   5. Deployment Configuration
   6. Security
   7. Exposing Applications
   8. Troubleshooting
   <br /><br />

LFD459 is the 3-day on-site equivalent course code.

PROTIP: LF class materials (<a target="_blank" href="https://training.linuxfoundation.org/cm/prep/">
https://training.linuxfoundation.org/cm/prep</a>) are distributed in .bz2 format which can be opened on macOS by the <a target="_blank" href="https://apps.apple.com/us/app/the-unarchiver/id425424353?mt=12&ign-mpt=uo%3D4">
Unarchiver</a>

I took <a target="_blank" href="https://training.linuxfoundation.org/cm/prep/?course=LFS258">
https://training.linuxfoundation.org/cm/prep/?course=LFS258</a> but found it to be like "drinking water from a fire hose" in that the 600 page coureware is comprehensive. But exercises during the class are not repeatable after the class.

The Linux Foundation exam focuses only on "pure" Kubernetes commands and excludes <a href="#Addons">add-ons</a> such as OpenStack, Helm, Istio. However, LFD259 covers Istio anyway.

Ready-for.sh establishes the environment:

   <pre>wget http://bit.ly/LFready -O ready-for.sh
   chmod 755 ready-for.sh
   ./ready-for.sh --help
   # Not for macOS
   </pre>

<a target="_blank" href="https://github.com/cncf/curriculum">https://github.com/cncf/curriculum</a> - v1.19
contains one-page curriculum pdf's.


### Nana's TechWorld on YouTube

<a target="_blank" href="https://www.youtube.com/channel/UCdngmbVKX1Tgre699-XLlUA">
YouTube channel "Nana's TechWorld"</a> by <a target="_blank" href="https://www.linkedin.com/in/nana-janashia/">entrepreneur Nana Janashia</a> (from Austria) features animated illustrations.

<a target="_blank" href="https://www.youtube.com/watch?v=3c-iBn73dDE&list=RDCMUCdngmbVKX1Tgre699-XLlUA&start_radio=1">Docker Tutorial for Beginners [Full Course in 3 Hours]</a>.

<a target="_blank" href="https://www.youtube.com/watch?v=I5c8Pfg2tys">VIDEO intro of</a>
Unique Udemy course <a target="_blank" href="https://www.udemy.com/course/logging-in-kubernetes-with-efk-stack/?couponCode=UDEMY_NANA_NOV2020">
Logging in Kubernetes with EFK Stack | The Complete Guide</a>
covers how to set up K8s clusters from scratch and configure logging with ElasticSearch, Fluentd and Kibana 


### EdX

edX.org publishes some courses from Linux Academy.

<a target="_blank" href="https://www.edx.org/course/introduction-to-kubernetes"><strong>LFS158x</strong>: Introduction to Kubernetes</a>


### O'Reilly

<a target="_blank" href="https://learning.oreilly.com/learning-paths/learning-path-certified/9781492061021/">
Certified Kubernetes Application Developer (CKAD) Prep Course</a> July 2019 [4h 53m] uses
<a target="_blank" href="https://github.com/bmuschko/ckad-study-guide">https://github.com/bmuschko/ckad-study-guide</a>
and <a target="_blank" href="https://github.com/bmuschko/ckad-crash-course">https://github.com/bmuschko/ckad-crash-course "In-depth and hands-on practice for acing the exam"</a> by Benjamin Muschko (@bmuschko, <a target="_blank" href="https://www.bmuschko.com/">bmuschko.com</a>, <a target="_blank" href="https://www.automatedascent.com/">automatedascent.com</a>) 

https://github.com/bmuschko/cka-crash-course


<a name="Sanders"></a>

#### Sander's class

<a target="_blank" href="https://learning.oreilly.com/videos/certified-kubernetes-application/">
7h video class over 3 days live course</a> by <a target="_blank" href="https://www.linkedin.com/in/sandervanvugt/">Sander van Vugt</a>, who, as a Linux expert, provides in-depth CentOS install advice (including SELinux) and <a target="_blank" href="https://github.com/sandervanvugt/ckad">files</a> available nowhere else. His diagrams are on a lightboard. <!-- mail@sandervanvugt.nl -->

BLAH: O'Reilly's videos are annoying because you have to move the sound up on every new chapter.

### Pluralsight

PROTIP: Pluralsight videos can be viewed as a <strong>Tivo app</strong> on my TV. That's a big plus. No others offer that.

<a target="_blank" href="https://app.pluralsight.com/paths/certificate/certified-kubernetes-application-developer-ckad">Pluralsight has a 14-hour series of videos on CKAD</a> by Dan Wahlin (@danwahlin, codewithdan.com). Courses in chron order:

   * <a target="_blank" href="https://app.pluralsight.com/library/courses/kubernetes-developers-core-concepts">Kubernetes for Developers: Core Concepts</a> 4h 34m Sept 15, 2019 with files at <a target="_blank" href="https://github.com/DanWahlin/DockerAndKubernetesCourseCode">https://github.com/DanWahlin/DockerAndKubernetesCourseCode</a> shows setup and troubleshooting of a whole NGINX app with Redis and MongoDB. <a target="_blank" href="https://app.pluralsight.com/course-player?clipId=ffb6bf03-179b-405c-8a4c-99a5d1567b6c">VIDEO</a>: His sample code references environment variables set on the Terminal before invoking K8s:

   <pre>export APP_ENV=development
   export DOCKER_ACCT=codewithdan
   </pre>

   * <a target="_blank" href="https://app.pluralsight.com/library/courses/kubernetes-developers-deploying-code">Kubernetes for Developers: Deploying Your Code</a> 3h 4m Feb 26, 2020

   * <a target="_blank" href="https://app.pluralsight.com/library/courses/kubernetes-developers-moving-cloud">Kubernetes for Developers: Moving to the Cloud</a> by Craig Golightly (@seethatgo, seethatgo.com) 1h 3m Dec 19, 2019 deploys the same simple sample Python app (kubernetes-developers-moving-cloud.zip) to <a href="#k8s_clouds">AKS, EKS, and GKE clouds</a>.
 
   CAUTION: <a target="_blank" href="https://aws.amazon.com/blogs/developer/aws-cli-v2-is-now-generally-available/">
   aws v2 CLI</a> became generally available in Feb 2020 shortly after this course was published.

   * <a target="_blank" href="https://app.pluralsight.com/library/courses/kubernetes-developers-docker-compose-to-kubernetes">Kubernetes for Developers: Moving from Docker Compose to Kubernetes</a> 2h 20m May 28, 2020

Nigel Poulton (@NigelPoulton, <a target="_blank" href="https://www.nigelpoulton.com/">nigelpoulton.com</a>), Docker Captain:

   * <a target="_blank" href="https://app.pluralsight.com/library/courses/getting-started-kubernetes/exercise-files">
   Getting Started with Kubernetes</a> 22 May 2017

   * <a target="_blank" href="https://app.pluralsight.com/library/courses/kubernetes-developers-integrating-volumes-using-multi-container-pods">2h 26m VIDEO course: "Kubernetes for Developers: Integrating Volumes and Using Multi-container Pods"</a> by Nigel Poulton Apr 23, 2020

   * Book: "Docker for Sysadmins"

   * Book: "Docker Deep Dive"

   * Book: "Kubernetes Deep Dive"

   * Video course <a target="_blank" href="https://acloud.guru/course/kubernetes-deep-dive/dashboard">"Kubernetes Deep Dive"</a> (released Oct 2018) references a WordPress sample app at <a target="_blank" href="https://learn.acloud.guru/course/kubernetes-deep-dive/learn/code/demo/watch">VIDEO</a>: <a target="_blank" href="https://github.com/nigelpoulton/k8s-sample-apps">https://github.com/nigelpoulton/k8s-sample-apps</a>


### Coursera

<a target="_blank" href="https://www.coursera.org/specializations/architecting-google-kubernetes-engine">Coursera's "Architecting with Google Kubernetes Engine Specialization"</a> is focused on building efficient computing infrastructures using Kubernetes and Google Kubernetes Engine (GKE). The specialization introduces participants to deploying and managing containerized applications on GKE and the other services provided by Google Cloud Platform. Through a combination of presentations, demos, and hands-on labs, participants explore and deploy solution elements, including infrastructure components such as pods, containers, deployments, and services; as well as networks and application services. The specialization also covers deploying practical solutions including security and access management, resource management, and resource monitoring. 

1. [<a target="_blank" href="#Terraform">Terraform</a>] <a target="_blank" href="https://www.coursera.org/learn/gcp-fundamentals">Google Cloud Platform Fundamentals: Core Infrastructure</a>

   This course introduces you to concepts and terminology for working with Google Cloud Platform (GCP). You learn about, and compare, many of the computing and storage services available in Google Cloud Platform, including Google App Engine, Google Compute Engine, Google Kubernetes Engine, Google Cloud Storage, Google Cloud SQL, and BigQuery. You learn about important resource and policy management tools, such as the Google Cloud Resource Manager hierarchy and Google Cloud Identity and Access Management. Hands-on labs give you foundational skills for working with GCP.

2. <a target="_blank" href="https://www.coursera.org/learn/foundations-google-kubernetes-engine-gke">Architecting with Google Kubernetes Engine: Foundations</a> reviews the layout and principles of Google Cloud Platform, followed by an introduction to creating and managing software containers and an introduction to the architecture of Kubernetes.

3. <a target="_blank" href="https://www.coursera.org/learn/deploying-workloads-google-kubernetes-engine-gke">Architecting with Google Kubernetes Engine: Workloads</a> by Alex Hanna. Covers: GKE Cluster; Deployments;Jobs and Cronjobs; Cluster Scaling; Pod placement; Pod Autoscaling and Node Pools; Pod networking; Services, Ingress; Load balancing; Network security; Volumes, Stateful Sets; ConfigMaps; Secrets; Persistent Data; 

4. <a target="_blank" href="https://www.coursera.org/learn/deploying-secure-kubernetes-containers-in-production">Architecting with Google Kubernetes Engine: Production</a>



### LinkedIn Learning (formerly Lynda)

<a target="_blank" href="https://www.linkedin.com/learning/kubernetes-essential-training-application-development/kubernetes-for-developers?u=26886050">"Kubernetes Essential Training: Application Development"</a> 
by Matt Turner (from England) is hands-on using minikube 1.9.2 and kubernetes-cli 1.18.2 on a Mac:

   * Running a local cluster
   * Running containers
   * Viewing logs
   * Remotely executing commands
   * Orchestrating real-world workloads
   * Batch processing with jobs and cron jobs
   * Managing resource usage
   * Keeping containers secure
   * Advanced deployment patterns
   * Analyzing traffic
   * Extending Kubernetes
   * DRY deployment and debugging tools
   <br /><br />

   <ul>The class has quizzes and covers 3rd-party tools such as <a target="_blank" href="https://www.linkedin.com/learning/kubernetes-essential-training-application-development/tools-for-dry-deployments-helm?u=26886050">Helm</a>, Kustomize, kubectl sniff (WireShark), Skaffold, telepresence.
   </ul>

<a target="_blank" href="https://www.linkedin.com/learning/learning-kubernetes/welcome?u=26886050">Learning Kubernetes</a> (on a Mac) by Karthik Gaekwad (<a target="_blank" href="https://www.linkedin.com/in/kgaekwad/">when he was at Oracle</a>) references files in 
<a target="_blank" href="https://github.com/karthequian/Kubernetes/blob/master/CourseHandout.md">https://github.com/karthequian/Kubernetes/blob/master/CourseHandout.md</a>.


<a target="_blank" href="https://www.linkedin.com/learning/devops-foundations-transforming-the-enterprise/transforming-your-organization">"DevOps Foundations: Transforming the Enterprise
Transforming your organization"</a> by Mirco Hering, Global DevOps Practice Lead at Accenture

### LinuxAcademy

The CKAD Troubleshooting class is highly recommended.


### Udemy

<a target="_blank" href="https://mckinsey.udemy.com/course/learn-kubernetes">"Learn Kubernetes"</a> provides a tutorial on yaml.

<a target="_blank" href="https://mckinsey.udemy.com/course/certified-kubernetes-application-developer/">Udemy.com has a CKAD course with Tests</a> updated 09/2020 with 9.5 hours of video. It includes 30-minute lightning rounds to practice the stress of taking the exam. Surviging this gives you confidence.

<a target="_blank" href="https://mckinsey.udemy.com/course/docker-and-kubernetes-the-complete-guide/learn/lecture/11582328?start=150#overview">"Docker and Kubernetes: The Complete Guide"</a>
by Stephen Grider. Diagrams for the 21h video uses draw.io accessing 
https://github.com/StephenGrider/DockerCasts/tree/master/diagrams


### Others on CKAD:

* <a name="[1]">[1]</a> <a target="_blank" href="https://www.youtube.com/watch?v=uzxSZqSqiLk&list=PLleCw-vqe90DzAwG6Z_f9GARu-y6HbHXf">Alta3 Research's Playlist</a> includes <a target="_blank" href="https://www.youtube.com/watch?v=5cgpFWVD8ds">VIDEO [11:02] : How to CRUSH the CKAD Exam!</a> Jul 27, 2020 shows sample quetions and suggestions to each of 19 objectives.

* <a target="_blank" href="https://www.youtube.com/watch?v=dIBX8TQJxW8">VIDEO: CKAD Certification Exam Tips</a> by Cloud and Beyond shows commands that threw him off:

   <pre>kubectl set image deployment/nginx nginx=nginx:191</pre>

   To <a target="_blank" href="https://kubernetes.io/tasks/tools/install-kubectl/">set autocomplete with alias to Kubernetes</a>:

   <pre>alias k=kubectl
   complete -F __start_kubectl k</pre>

* <a target="_blank" href="https://www.youtube.com/watch?v=qA4dNATs5nE">VIDEO: How to pass the Certified Kubernetes Application Developer (CKAD) exam</a> by Santiago Alejandro Agüero 
* <a target="_blank" href="https://medium.com/@krystiannowaczyk/how-i-passed-the-cka-certified-kubernetes-administrator-exam-f94b11566528">"How I passed the CKA Exam"</a> by Krystian Nowaczyk (who maintains <a target="_blank" href="https://github.com/ramitsurana/awesome-kubernetes">github.com/ramitsurana/awesome-kubernetes</a>) provides a list of resources he used.

<a target="_blank" href="https://www.youtube.com/watch?v=rnemKrveZks">Tips from Tips on preparing for CKAD</a> by Muralidaran Shanmugham

* <a target="_blank" href="https://www.youtube.com/watch?v=X48VuDVv0do&list=RDCMUCdngmbVKX1Tgre699-XLlUA&start_radio=1&t=1911">
Kubernetes Tutorial for Beginners [Full Course in 4 Hours]</a> Nov 6, 2020 (using k8s v1.17.0) by TechWorld with Nana


<a name="K21"></a>

#### K21Academy

https://k21academy.com/docker-kubernetes/certified-kubernetes-security-specialist-cks-step-by-step-activity-guide-hands-on-lab/
is normally $997, with a 60 day money-back guarantee.


### Others on CKA:

* <a target="_blank" href="https://medium.com/@writetomiglani/how-to-ace-the-certified-kubernetes-administrator-exam-in-7-days-e4603ac40746">"How to ace the CKA exam in 7 days</a> is click-bait?
* <a target="_blank" href="https://www.linkedin.com/learning/certified-kubernetes-application-developer-ckad-cert-prep-exam-tips?u=26886050">Certified Kubernetes Application Developer (CKAD) Cert Prep: Exam Tips</a> by Benjamin Muschko

https://cloud.google.com/kubernetes-engine/docs/concepts/verticalpodautoscaler

## References

<a target="_blank" href="https://www.youtube.com/watch?v=Bcji3AlT7v8&t=2511s">
Demo of Fairwinds Insights dashboard</a>
Trivy, Goldilocks to suggest CPU settings for "right sizing".

<a target="_blank" href="https://www.youtube.com/watch?v=xLmKQjdO2pg">
VIDEO: AWS EKS vs Azure AKS vs Google GKE</a> by Tung Nguyen, CEO of BoltOps

<a target="_blank" href="https://www.youtube.com/watch?v=Zztufl4mFQ4">
VIDEO: GKE Autopilot - Fully Managed Kubernetes Service From Google</a> Dec 13, 2021

https://tech.ebayinc.com/engineering/how-ebay-leverages-kubernetes-helm-charts-and-jenkins-pipelines-to-deliver-high-quality-software/

STAR: <a target="_blank" href="https://dev.to/aurelievache/understanding-kubernetes-in-a-visual-way-in-video-part-1-pods-1jpg">"Understanding Kubernetes in a visual way" 20-part series</a> by Aurélie Vache, in French with English subtitles. Like the <a target="_blank" href="https://www.imdb.com/title/tt0211915/">French film Amelie</a>, well worth the effort.

https://www.youtube.com/watch?v=oC0UZ-pms9o&list=RDCMUCBdfli20jrAscmR9COL35qg&start_radio=1&rv=oC0UZ-pms9o  
Cloud with Raj

<hr />

## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}

