---
layout: post
title: "Kubernetes (K8s)"
excerpt: "Container engine in clouds, including OpenShift"
modified:
tags: [google, cloud]
date: "2020-10-04"
file: "kubernetes"
image:
# kubernetes-head-1900x500-472493.jpg
  feature: https://user-images.githubusercontent.com/300046/39955449-b791191e-558b-11e8-8bde-9042df1b66ab.jpg
  credit: Jeremy Thomas
  creditlink: https://www.flickr.com/photos/132218932@N03/page2
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

<a target="_blank" href="https://wilsonmar.github.io/kubernetes/">This</a> is a hands-on  introduction with insightful commentary carefully sequenced to make complex material easier to understand quickly. This is not a "demo", but an immersive step-by-step "deep dive" tutorial aimed to make you productive.

## Why Kubernetes?

Kubernetes is called "container orchestration" software because it automates the deployment, scaling and management of containerized applications<a target="_blank" href="https://en.wikipedia.org/wiki/Kubernetes">[Wikipedia]</a>. 

That enables the smashing of traditional barriers between dev and Ops teams who had complete charge of production operations. With Kubernetes, once Ops setup a cluster, the dev teams can deploy both application code and all the environment settings, at their own cadence, without ceremonies and wait time to coordinate releases.

## How? A summary

"Containerized" <a href="#micro-services">microservice apps</a> are <strong>dockerized</strong> into images pulled from <strong>DockerHub</strong> or private security-vetted images in Docker Enterprise, <a target="_blank" href="https://quay.io/">Quay.io</a>, or an organization's own binary repository setup using Nexus or Artifactory. Kubernetes also works with <strong>rkt</strong> (pronounced "rocket") containers. IBM Red Hat has their "containerd" technology. But this tutorial focuses on <strong>Docker</strong> containers.

Kubernetes automates resilience by abstacting the network and storage shared by ephemeral replaceable <strong>pods</strong> which the Kubernetes Controller replicates to increase capacity.

In the illustration below, each pod (each a different color) encapsulates one or more (Docker) container hosts (operating processes, each shown as a circle):

![k8s-container-sets-479x364.jpg](https://user-images.githubusercontent.com/300046/33526550-6c98a980-d800-11e7-9862-ff202492e08b.jpg)
<!-- From https://app.pluralsight.com/library/courses/getting-started-kubernetes/exercise-files -->

Containers within the same pod share the <strong>same IP address</strong>, hostname, Linux namespaces, cgroups, storage Volumes, and other resources.
Within a pod, each container has a different <strong>port number</strong> and can communicate with other containers in the same pod.

The <a target="_blank" href="https://wilsonmar.github.io/service-mesh">Service Mesh Istio architecture</a> has an "Envoy proxy" in each pod to facilitate the communictions and retry logic from the business logic containers in its pod.

Kubernetes replicates Pods (the same set of containers in each) across several worker <strong>Nodes</strong> (VM or physical machines).

Each set of pods are within a <strong>node</strong>.
Kubernetes assigns each node with a different <strong>external IP address</strong>.

![kubernetes-structure-502x205-12351.png](https://user-images.githubusercontent.com/300046/47167711-5cf45080-d2bc-11e8-8c95-a76b1b92373a.png)


<a name="Namespaces"></a>

Nodes are managed together as a <strong>namespace</strong>.
Kubernetes can manage several namespaces running in each <strong>cluster</strong>. 

   "The primary grouping concept in Kubernetes is the namespace. Namespaces are also a way to divide cluster resources between multiple uses. That being said, there is no security between namespaces in Kubernetes; if you are a "user" in a Kubernetes cluster, you can see _all_ the different namespaces and the resources defined in them." -- from the book: OpenShift for Developers, A Guide for Impatient Beginners by Grant Shipley and Graham Dumpleton.

### OpenShift project wall namespaces

   <strong>Projects</strong> in OpenShift provide "walls" between namespaces, ensuring that users or applications can only see and access what they are allowed to. OpenShift projects wrap a namespace by adding security annotations which control access to that namespace. Access is controlled through an authentication and authorization model based on users and groups. 

   <a target="_blank" href="https://docs.openshift.com/enterprise/3.2/architecture/core_concepts/routes.html">
   This diagram</a> illustrates what OpenShift adds: 
   ![kubernetes-openshift-502x375-107638](https://user-images.githubusercontent.com/300046/42333404-e3f5953a-8037-11e8-9691-0172a8a96388.jpg)

   OpenShift's Router is instead a HAProxy container (taking the place of NGINX).

   ![k8s-openshift-projects-461x277-64498](https://user-images.githubusercontent.com/300046/42337120-f421563c-8042-11e8-9d2b-d19615b4da0c.jpg)


### Cluster networking

   A private ClusterIP is accessible by nodes only within the same cluster.

   Services listen on the same <strong>nodePort</strong> (TCP 30000 - 32767 defined by `--service-node-port-range`).

<a target="_blank" title="from Yongbok Kim (who writes in Korean)" href="https://user-images.githubusercontent.com/300046/33525757-6fcd2624-d7f3-11e7-9745-79ce5f9600e9.jpg">
<img alt="k8s-arch-ruo91-797x451-104467" src="https://user-images.githubusercontent.com/300046/33525757-6fcd2624-d7f3-11e7-9745-79ce5f9600e9.jpg"></a>

The diagram above is referenced throughout this tutorial, particularly in the <a href="#Details">Details section below</a>. It is by Yongbok Kim who presents <a target="_blank" href="https://translate.google.com/translate?hl=en&sl=ko&tl=en&u=http://www.yongbok.net/blog/google-kubernetes-container-cluster-manager/">
animations on his website</a>.

   Communications with outside service network callers occur through a single Virtual IP address (VIP) going through a <strong>kube-proxy</strong> pod within each node.
   The Kube-proxy load balances traffic to <strong>deployments</strong>, which are load-balanced sets of pods within each node. Kube-proxy IPVS Mode is native to the Linux kernel.
   CBR0 (Custom Bridge zero) forwards the eth0, which rewrites the destination IP to a pod behind the Service<a target="_blank" href="https://acloud.guru/course/kubernetes-deep-dive/learn/2ddbcafb-9f4f-ed6c-3cec-912cb68a7944/36910c67-4dfd-3343-648a-3a266aa9f667/watch?backUrl=~2Fcourses&backUrl=~2Fcourses&backUrl=~2Fcourses,~2Fcourses">3:18 into chapter 6 Big Picture</a>

Kubernetes manages the instantiating, starting, stopping, updating, and deleting of a <strong>pre-defined number of pod replicas</strong> based on declarations in <strong>*.yaml</strong> files or interactive commands.

The number of pods replicated is based on <strong>deployment</strong> yaml files. 
Service yaml files specify what ports are used in deployments.

In 2019 Kubernetes added <strong>auto-scaling</strong> based on metrics API measurement of demand.

<a target="_blank" href="https://linuxacademy.com/cp/guides/download/refsheets/guides/refsheets/linuxacademy-kubernetesadmin-archdiagrams-1_1516737832.pdf">This Architectural Diagram pdf</a>:
<a target="_blank" href="https://user-images.githubusercontent.com/300046/51218893-5a75b700-18fc-11e9-89af-7ba9ca3000c5.jpg"><img alt="
k8s-linuxacademy-arch-912x415-32433.jpg" src="https://user-images.githubusercontent.com/300046/51218893-5a75b700-18fc-11e9-89af-7ba9ca3000c5.jpg"></a>
is described in the <a target="_blank" href="https://linuxacademy.com/cp/modules/view/id/155">
Linux Academy's CKA course</a> of 5:34:43 hours of videos by Chad Miller (<a target="_blank" href="https://twitter.com/OpenChad/">@OpenChad</a>). 

Read <a target="_blank" href="https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/">Docs</a> and <a target="_blank" href="https://kubernetes.io/docs/tutorials/">tutorials</a> from Kubernetes.io.


## Open Sourced and collaborative

Kubernetes was created inside Google (using the [Golang](/Golang/) programming language).

Kubernetes was used inside Google for over a decade before being open-sourced in 2014 to the Cloud Native Computing Foundation (<a target="_blank" href="https://www.cncf.io/">cncf.io</a>) collective.

<img align="right" alt="kubernetes-logo-125x134-15499.png" src="https://user-images.githubusercontent.com/300046/33524448-ca1d7e30-d7da-11e7-9358-45845910198c.png">
<a target="_blank" href="https://cloudplatform.googleblog.com/2016/07/from-Google-to-the-world-the-Kubernetes-origin-story.html">This blog</a> and
<a target="_blank" href="http://softwareengineeringdaily.com/2016/07/20/kubernetes-origins-with-craig-mcluckie/">podcast</a> 
revealed that the predecessor to Kubernetes was called "the Borg" becuase initial developers were fans of Star Trek Next Generation. In the TV series, the Borg <a target="_blank" href="https://www.merriam-webster.com/dictionary/subsume">subsumes</a> all  civilizations it encounters into its "collective". The logo for Kubernetes inside the 6 sided hexagons representing each Google service has 7 sides. This is because a beloved character in the TV series, played by the curvacious Jeri Ryan, is a converted Borg called <a target="_blank" href="https://en.wikipedia.org/wiki/Seven_of_Nine">"7 of 9"</a>. 

Its Google heritage means Kubernetes is about scaling for a lot of traffic
with redundancies to achieve high availability (HA).

Kubernetes is often abbreviated as <strong>k8s</strong>, with 8 replacing the number of characters between k and s. Thus, <a target="_blank" href="https://k8s.io/">https://k8s.io</a> redirects you to <a target="_blank" href="https://kubernetes.io/">https://kubernetes.io</a>, the home page for the software.

Although the word "kubernetes" is a Greek word meaning "captain", it has become a registered trademark of the Linux Foundation, which maintains the website <a target="_blank" href="https://kubernetes.io">https://kubernetes.io</a> and
   source code at <a target="_blank" href="https://github.com/kubernetes/kubernetes">
   https://github.com/kubernetes/kubernetes</a>

   * v1.0 was committed on July 2015 within GitHub, and released on July 21, 2015
   * v1.6 was led by a CoreOS developer
   * v1.7 was led by a Googler
   * v1.8 is led by <a target="_blank" href="https://www.linkedin.com/in/jaicesinger/">Jaice Singer DuMars</a> (<a target="_blank" href="https://twitter.com/jaicesd">@jaicesd</a>) after Microsoft joined the CNCF July 2017 <a target="_blank" href="https://twitter.com/jaydumars?lang=en">VIDEO</a>
   <br /><br />


## Professional certifications in Kubernetes

To ensure a comprehensive coverage of topics, I look to the <a target="_blank" href="https://www.cncf.io/certification/ckad/">2-hour Kubernetes Application Developer (CKAD)</a> and <a target="_blank" href="https://www.cncf.io/certification/expert/">3-hour Certified Kubernetes Administrator (CKA)</a> exams CNCF first announced November 8, 2016. For $300 ($499 with a <a target="_blank" href="https://training.linuxfoundation.org/training/kubernetes-for-developers/">35-hour video course LFD259</a>):

   1. Course Introduction
   2. Kubernetes Architecture
   3. Build
   4. Design
   5. Deployment Configuration
   6. Security
   7. Exposing Applications
   8. Troubleshooting
   <br /><br />

Instead of multiple choice questions, the exam consists of <strong>task-based practical responses while running live clusters.</strong> Each exam includes one free fail retake.

After two, you'll have to wait to take the exam again after 2 years.

To compare the domain focus for each exam:

<a name="CKAD_ExamDomains"></a>

### CKAD Exam Domains

<table border="1" cellspacing="0" cellpadding="4">
<tr valign="top"><td>
    13% Core Concepts (API, pods, namespaces)<br />
    18% Configuration (ConfigMaps, SecurityContexts, Resource Requirements, Secrets)<br />
    10% Multi-Container Pods (design pattern: Ambassador, Adapter, Sidecar)<br />
    18% Observability (Liveness & Readiness Probes, Container Logging, Metrics server, Monitoring apps, Debugging)<br />
    20% Pod Design (Deployments, Rolling Updates, Rollbacks, Labels, Selectors, Annotations, Rollbacks, Jobs, CronJobs)<br />
    13% Services &amp; Networking (NetworkPolicies)<br />
    08% State Persistence (Volumes, PersistentVolumeClaims)
</td></tr>
</table>

### CKA Exam Domains

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



## Preparations

   PROTIP: vim is the only editor available, so learn to search lines in vim (Esc, /, the text to be searched).
   
   <pre>:set shiftwidth=2</pre>

   To indent several lines with one command: Esc Shift+V for Visual Line mode, highlight lines, 
   Shift . to shift left, Shift , to shift right.

   To output a file:

   <pre>kubectl logs alta3pod | sudo tee ~/opt/answers/mypod.logs</pre>

   PROTIP: The Linux Foundation exam focuses only on "pure" Kubernetes commands and excludes add-ons such as OpenStack.

CNCF is part of the Linux Foundation, so... 
1. Get an account (Linux Foundation credentials ) at <a target="_blank" href="https://identity.linuxfoundation.org/">https://identity.linuxfoundation.org</a>. https://myprofile.linuxfoundation.org/

   It's a non-profit organization, thus the ".org".

2. Login to <a target="_blank" href="https://joinnow.platform.linuxfoundation.org/?project=tlf">linuxfoundation.org and join as a member</a> for a $100 discount toward certifications.

3. Go to <a target="_blank" href="https://training.linuxfoundation.org/linux-courses/system-administration-training/kubernetes-fundamentals">https://training.linuxfoundation.org/linux-courses/system-administration-training/kubernetes-fundamentals</a> and pay for the $300 exam plus $199 more if you want to take their class.

4. Find dates and times when you're in a quiet private indoor place where no one else (co-workers) are near.

4. Use your Linux Foundation credentials to sign-in at <a target="_blank" href="https://www.examslocal.com/">examslocal.com</a>, and select either or both of two exams from CNCF:

   * Linux Foundation : Certified Kubernetes Application Developer (CKAD) - English
   * Linux Foundation : Certified Kubernetes Administrator (CKA) - English
   <br /><br />

5. Click "Or Sign In With" tab and select "Sign in for exams powered by the Linux Foundation".
6. Log in using your preferred account.
7. Click "Handbook link" to download it.

8. PROTIP: You'll need a corded (Logitech) webcam (not one built-in).

9. Setup your home computer to take the exam <a target="_blank" href="http://www.examslocal.com/linuxfoundation/"> at home</a> using the <strong>Chrome extension</strong> from "Innovative Exams", which uses your laptop camera and microphone watching you use a virtual Ubuntu machine. 
9. <a href="#[1]">PROTIP: Create bookmarks in Chrome</a> for reference

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/95026201-e2f63700-064c-11eb-9651-0902cc7732df.png"><img width="390" alt="kubernetes-bookmarks" src="https://user-images.githubusercontent.com/300046/95026201-e2f63700-064c-11eb-9651-0902cc7732df.png"></a>

1. The exam takes 180 minutes (<strong>3 hours</strong>), so before you start, go to the bathroom. 
1. You can only have clear liquids in a clear bottle next to you.
1. Have your ID with you.
1. To the proctor, show your ID and pan all the way around the room.
1. <strong>19 questions</strong> means less than 10 minutes per question. But the recommended strategy is to avoid getting bogged down on long and complex questions. First go through all the questions to answer the easiest ones first. Along the way, mark ones you want to go back to.

   NOTE: Although there are 19 objectives, not all objectives may be in every exam.

1. A Notpad is available during the exam.

1. Create an Acclaim account.
1. If you pass the exam, go to acclaim to get your digital badge to post on social media.


### Video courses

<a target="_blank" href="https://cloudacademy.com/learning-paths/certified-kubernetes-application-developer-ckad-exam-preparation-451/">CloudAcademy.com has a 11-hour "Learning Path"</a> updated August 27th, 2019 by Logan Rakai. Its <a target="_blank" href="https://cloudacademy.com/lab/introduction-kubernetes-playground/?context_resource=lp&context_id=451">Playground lab</a> enables you to <strong>skip all the install details</strong> and get to learn kubernetes commands which build this:
<a target="_blank" href="https://user-images.githubusercontent.com/300046/95297556-e4378780-0837-11eb-9d12-7c924dc0f449.png"><img alt="k8s-cloudacademy-after" src="https://user-images.githubusercontent.com/300046/95297556-e4378780-0837-11eb-9d12-7c924dc0f449.png"></a>

The class also includes a Challenge and Cert Prep. off <a target="_blank" href="https://github.com/cloudacademy/intro-to-k8s">https://github.com/cloudacademy/intro-to-k8s</a>


<a target="_blank" href="https://app.pluralsight.com/paths/certificate/certified-kubernetes-application-developer-ckad">Pluralsight has a 14-hour series of videos on CKAD</a> by Dan Wahlin (@danwahlin, codewithdan.com). In chron order:

   * <a target="_blank" href="https://app.pluralsight.com/library/courses/kubernetes-developers-core-concepts">Kubernetes for Developers: Core Concepts</a> 4h 34m Sept 15, 2019

   * <a target="_blank" href="https://app.pluralsight.com/library/courses/kubernetes-developers-moving-cloud">Kubernetes for Developers: Moving to the Cloud</a> by Craig Golightly (@seethatgo, seethatgo.com) 1h 3m Dec 19, 2019 deploys the same simple sample Python app (kubernetes-developers-moving-cloud.zip) to <a href="#k8s_clouds">AKS, EKS, and GKE clouds</a>.
 
   CAUTION: <a target="_blank" href="https://aws.amazon.com/blogs/developer/aws-cli-v2-is-now-generally-available/">
   aws v2 CLI</a> became generally available in Feb 2020 shortly after this course was published.

   * <a target="_blank" href="https://app.pluralsight.com/library/courses/kubernetes-developers-deploying-code">Kubernetes for Developers: Deploying Your Code</a> 3h 4m Feb 26, 2020

   * <a target="_blank" href="https://app.pluralsight.com/library/courses/kubernetes-developers-integrating-volumes-using-multi-container-pods">Kubernetes for Developers: Integrating Volumes and Using Multi-container Pods</a> by Nigel Poulton 2h 26m Apr 23, 2020

   * <a target="_blank" href="https://app.pluralsight.com/library/courses/kubernetes-developers-docker-compose-to-kubernetes">Kubernetes for Developers: Moving from Docker Compose to Kubernetes</a> 2h 20m May 28, 2020

<a target="_blank" href="https://www.linkedin.com/learning/kubernetes-essential-training-application-development/kubernetes-for-developers?u=26886050">LinkedIn learning</a> by Matt Turner (from England) is hands-on using minikube 1.9.2 and kubernetes-cli 1.18.2 on a Mac:

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


<a name="LFS258"></a>

<strong>LFS258</strong>

https://training.linuxfoundation.org/cm/prep/
https://training.linuxfoundation.org/cm/prep/?course=LFS258
Ready-for.sh
   <pre>wget http://bit.ly/LFready -O ready-for.sh
   chmod 755 ready-for.sh
   ./ready-for.sh --help
   Not for macOS
   </pre>

Supplemental Materials	LFS258_V2020-09-01_SOLUTIONS.tar.bz2

<a target="_blank" href="https://www.udemy.com/course/certified-kubernetes-application-developer/">Udemy.com has a CKAD course with Tests</a> updated 09/2020 with 9.5 hours of video.

<a target="_blank" href="https://acloud.guru/learn/d068441f-75b4-4fe8-a7a6-df9153f24a35">ACloud.guru CKAD course</a> by <a target="_blank" href="https://www.linkedin.com/in/wilb/">William Boyd</a> has 3.5 hours of video organized according to <a href="#CKAD_ExamDomains">exam domains</a>, 13 hands-on labs, and 3 practice exams based on v1.13.


Others on CKAD:

* <a name="[1]">[1]</a> <a target="_blank" href="https://www.youtube.com/watch?v=uzxSZqSqiLk&list=PLleCw-vqe90DzAwG6Z_f9GARu-y6HbHXf">Alta3 Research's Playlist</a> includes <a target="_blank" href="https://www.youtube.com/watch?v=5cgpFWVD8ds">VIDEO [11:02] : How to CRUSH the CKAD Exam!</a> Jul 27, 2020 shows sample quetions and suggestions to each of 19 objectives.

* <a target="_blank" href="https://www.youtube.com/watch?v=dIBX8TQJxW8">VIDEO: CKAD Certification Exam Tips</a> by Cloud and Beyond shows commands that threw him off:

   <pre>kubectl set image deployment/nginx nginx=nginx:191</pre>

   To <a target="_blank" href="https://kubernetes.io/tasks/tools/install-kubectl/">set autocomplete with alias to Kubernetes</a>:

   <pre>alias k=kubectl
   complete -F __start_kubectl k</pre>

* <a target="_blank" href="https://www.youtube.com/watch?v=qA4dNATs5nE">VIDEO: How to pass the Certified Kubernetes Application Developer (CKAD) exam</a> by Santiago Alejandro Agüero 
* <a target="_blank" href="https://medium.com/@krystiannowaczyk/how-i-passed-the-cka-certified-kubernetes-administrator-exam-f94b11566528">"How I passed the CKA Exam"</a> by Krystian Nowaczyk (who maintains <a target="_blank" href="https://github.com/ramitsurana/awesome-kubernetes">github.com/ramitsurana/awesome-kubernetes</a>) provides a list of resources he used.

<a target="_blank" href="https://www.youtube.com/watch?v=rnemKrveZks">Tips from Tips on preparing for CKAD</a> by Muralidaran Shanmugham


Others on CKA:

* <a target="_blank" href="https://medium.com/@writetomiglani/how-to-ace-the-certified-kubernetes-administrator-exam-in-7-days-e4603ac40746">"How to ace the CKA exam in 7 days</a> is click-bait?
* <a target="_blank" href="https://medium.com/@writetomiglani/how-to-ace-the-certified-kubernetes-administrator-exam-in-7-days-e4603ac40746">how-to-ace-the-certified-kubernetes-administrator-exam-in-7-days</a>
* <a target="_blank" href="https://www.linkedin.com/learning/certified-kubernetes-application-developer-ckad-cert-prep-exam-tips?u=26886050">Certified Kubernetes Application Developer (CKAD) Cert Prep: Exam Tips</a> by Benjamin Muschko


<a name="#k8s_clouds"></a>

## Multi-cloud

Being open-source has enabled Kubernetes to flourish on several clouds<a target="_blank" href="https://codefresh.io/kubernetes-guides/kubernetes-cloud-aws-vs-gcp-vs-azure/">*</a>

* <a href="#GKE">Google Kubernetes Engine (GKE)</a> is a container management SaaS product.
GKE runs within the Google Compute Platform (GCP) on top of Google Compute Engine providing machines.
GKE in GCP integration covers networking and VPC, monitoring, logging, and CI/CD.

   ![k8s-gcp-738x314-14535](https://user-images.githubusercontent.com/300046/42350579-5b4fd060-806e-11e8-8bc4-f88cf32f8bc7.jpg)

   A search for "Kubernetes" within the GCP Console yields:

   ![k8s-gcp-search-656x866-37655](https://user-images.githubusercontent.com/300046/42350888-a8aca044-806f-11e8-8848-813657b7660d.jpg)

* <a target="_blank" href="https://aws.amazon.com/ecs/">
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

   While ECS assigns separate ENI to each ECS task (a group of containers), EKS attaches <a target="_blank" href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/MultipleIP.html">multiple ENIs</a> per instance, with multiple private IP addresses assigned to each ENI. Since EKS shares network interfaces among pods, a different Security Group cannot be specified to restric a specific pod.
   
   Moreover, network interfaces, multiple private IPv4 addresses, and IPv6 addresses are only available for instances running under a <strong>isolated VPC</strong> (Virtual Private Cloud) and perhaps with AWS PrivateLink access. So EKS requires AWS VPC. For best isolation (rather than sharing), create a different VPC and Security Group for each cluster.

   Both ECS and EKS is accessed from its ECS CLI console and supports ECS API commands and <strong>Docker Compose</strong>. AWS CloudTrail logging.

   Also, EKS leverage IAM authentication, but did not provide out-of-the-box support <a target="_blank" href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html">Task IAM Roles</a> (pods) used to grant access to AWS resources like ECS (AmazonEKSClusterPolicy and AmazonEKSServicePolicy).
   
   For example, to allow containers to access S3, DynamoDB, SQS, or SES at runtime.

   Behind the scenes, Amazon used Hashicorp Packer <a target="_blank" href="https://github.com/awslabs/amazon-eks-ami">config. scripts</a> to make EKS-optimized AMIs run on Amazon Linux 2. The machines are preconfigured with Docker, kubelet, and the <a target="_blank" href="https://github.com/kubernetes-sigs/aws-iam-authenticator">AWS/Heptio AMI Authenticator</a> DaemonSet, plus a EC2 User Data bootstrap script that automatically join an EKS cluster. AMIs that have GPU support are also generated for users who have defined a AWS Marketplace Subscription.

   See the <a target="_blank" href="https://interactive.linuxacademy.com/diagrams/TheEKSManifest.html">EKS Manifest diagram</a> explained by Mark Richman (@mrichman) in his <a target="_blank" href="https://linuxacademy.com/cp/modules/view/id/293">video class</a>, with code at <a target="_blank" href="https://github.com/linuxacademy/eks-deep-dive-2019">https://github.com/linuxacademy/eks-deep-dive-2019</a>.
   

   PROTIP: My sample.sh installs the utilities and brings up a EKS cluster with one command. It costs $110 per month.

EKS makes use of <a target="_blank" href="https://aws.amazon.com/fargate/">AWS Fargate</a> Launch Type provides for horizontal scaling on Amazon's own fleet of EC2 clusters. It's informally called the "AWS Container Manager".

   Fargate supports <a target="_blank" href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html">"awsvpc" network mode</a> natively so that tasks running on the same instance share that's instance's ENI.

   "Once you do get your cluster running, there's nothing to worry about except <strong>monitoring performance</strong> and, as demand changes, adjusting the scale of your service." -- <a target="_blank" title="1:45 into" href="https://app.pluralsight.com/player?course=using-docker-aws&author=david-clinton&name=440cc04e-14c6-45e5-ba8d-2df97c1b1358&clip=2&mode=live">David Clinton*</a>

   <a target="_blank" href="https://blog.totalcloud.io/ecs-vs-eks-vs-fargate-good-bad-ugly/">This totalcloud.io article</a> compares ECS, EKS, and Fargate.

   A concern with Fargate is its time to load.

* Microsoft's Azure Kubernetes Service (AKS)

* Digital Ocean - see <a target="_blank" href="https://blog.digitalocean.com/introducing-digitalocean-kubernetes/">
   https://blog.digitalocean.com/introducing-digitalocean-kubernetes</a>

* KUBE2GO, OpenShift Dedicated, OpenShift Online, 

* Kops for AWS (at <a target="_blank" href="https://github.com/kubernetes/kops">https://github.com/kubernetes/kops</a>) is open-source to enable multi-master, multi-AZ cluster setup and management of multiple instance groups. Admins must stand up the masters, unlike in ECS/EKS. See <a target="_blank" title="Oct 27, 2017 by Tristan Colgate-McFarlane" href="https://medium.com/qubit-engineering/kubernetes-up-integrated-authentication-5d2c908c2810">
"How Qubit built its production ready Kubernetes (k8s) environments"</a>

* https://github.com/kubernetes-sigs/kubespray
<br /><br />


## Add-ons to Kubernetes

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
* Red Hat <a href="#OpenShift">OpenShift</a> Enterprise platform as a service (PaaS)
* Rackspace's Kubernetes as a Service
* Stackpoint

* <a target="_blank" href="https://buddy.works/guides/how-optimize-kubernetes-workflow">Buddy</a>
   automates Kubernetes workflows.


## Other Orchestration systems managing Docker containers

   * OpenShift
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

   <a target="_blank" href="https://rancher.com/">Rancher Kubernetes Engine (RKE)</a> simplifies cluster administration (on EC2, Azure, GCE, Digital Ocean, EKS, AKS, GKE, vSphere or bare metal) - (provisiong, authentication, RBAC, Policy, Security, monitoring, Capacity scaling, Cost control). Its catalog is based on <a href="#Helm">Helm</a>. See <a target="_blank" href="https://rancher.com/docs/rancher/v2.x/en/cluster-provisioning/rke-clusters/node-pools/ec2/">Creating an Amazon EC2 Cluster using Rancher</a>.

* <a target="_blank" href="https://mesosphere.com/product/">Mesosphere DC/OS</a> (Data Center Operating System) runs Apache Mesos to abstract CPU, memory, storage to provide an API to program a multi-cloud multi-tenant data center (at Twitter, Yelp, Ebay, Azure, Apple, etc.) as if it's a single pool of resources. Kubernetes can run on top of it, but the DC/OS has premium (licensed) enterprise features. So it's not for you if you never want to pay for anything.

   <a target="_blank" href="https://translate.googleusercontent.com/translate_c?depth=1&hl=en&rurl=translate.google.com&sl=ko&sp=nmt4&tl=en&u=https://www.yongbok.net/blog/apache-mesos-cluster-resource-management/&usg=ALkJrhjiggTWHQtSdhkl8jOvGnAx43NIQw">Mesos from Apache</a>, which runs other containers in addition to Docker. K8SM is a Mesos Framework developed for Apache Mesos to use Google's Kubernetes. <a target="_blank" href="https://translate.google.com/translate?hl=en&sl=ko&tl=en&u=http://www.yongbok.net/blog/how-to-install-kubernetes-mesos-framework-on-ubuntu/">Installation</a>.

   See <a target="_blank" href="https://www.youtube.com/watch?v=NRZ6N4e-Mko">Container Orchestration Wars (2017)</a> at the Velocity Conf 19 Jun 2017 by Karl Isenberg (@karlfi) of Mesosphere

* Hashicorp <a target="_blank" href="https://www.nomadproject.io/intro/index.html">Nomad</a>.

* Red Hat (which IBM bought in 2018) offers its <strong>OpenShift</strong> to enable Docker and Kubernetes for the enterprise by adding external host names (projects) that add role-based security around <a href="#Namespaces">namespaces</a>. OpenStack enables running of k8s containers in other clouds or within private data centers.

   OpenShift runs under OKD (Origin Kubernetes Distribution) which include a container and Istio mesh. NOTE: IBM is pushing its "<strong>containerd</strong>", its replacement for Docker.

   See <a target="_blank" href="https://www.redhat.com/en/technologies/cloud-computing/openshift">https://www.redhat.com/en/technologies/cloud-computing/openshift</a>,
  
   * <a target="_blank" href="https://www.youtube.com/watch?v=KTN_QBuDplo">What is OpenShift?</a> Aug 1, 2019
   * <a target="_blank" href="https://www.youtube.com/watch?v=cTPFwXsM2po">Kubernetes vs. OpenShift</a>: is not open-source. OpenShift is opinionated about a Docker Registry and CI/CD.
   <br /><br />

<hr />

## Kublet

A Kublet agent program is automatically installed when a node is created.
Each <strong>kubelet</strong> manages what is called the "control pane" which allocates IP addresses and runs nodes under its control.

Kublet constantly compares the status of pods against what is declared in yaml files, and starts or deletes pods as necessary to meet the request. 

Restarting Kublet itself depends on the operating system (`monit` on Debian or `systemctl` on systemd-based systems).

### Master node

Nodes are joined to the master node using the <strong>kubeadm join</strong> program and command.

The master node itself is crated by the <strong>kubeadm init</strong> command which establishes folders 
and invokes the Kubernetes <strong>API server</strong>. That command is installed along with the 
<strong>kubectl</strong> package (pronounced "cube cuddle"). 
There is a command with the same name used to obtain the <strong>version</strong>.

1. View memory and CPU usage of pods across nodes from the K8s Metrics Server:

   <pre><strong>kubectl top node</strong>

   <pre><strong>kubectl top pod</strong>


### API Server

   The kubectl client communicates using REST API calls to an <strong>API Server</strong> 
   which handles authentication and authorization.

   <pre>kubectl get apiservices</pre>

   API's were initially monolithic but has since been split up into:
   * core "" to handle pod & svc & ep (endpoint)
   * apps to handle deploy, sts, ds
   * authorization to handle role, rb
   * storage to handle pv (persistent volume) and <a href="#PVC">pvc</a>, sc (storage classes)

<a name="Scheduler"></a>
<a name="Scheduling"></a>
   
### Scheduler

   The API Server puts nodes in "pending" state when it sends requests to bring them up and down to the <strong>Scheduler</strong> to do so only when there are enough resources available.
   The scheduler can operate according to a schedule.
   But whether it does or not are defined in rules (called <strong>"Taints"</strong>) obeyed by the Scheduler about nodes.
   Rules obeyed by the Scheduler about pods are called <strong>"Tolerances"</strong>.
   Such details are reaveled using the <tt>kubectl describe nodes</tt> command.
   
<a name="#etcd"></a>

### etcd storage 

   The API Server and Scheduler persists their configuration and status information in a 
   <strong>ETCD cluster</strong> 
   <a target="_blank" href="https://coreos.com/etcd/docs/latest/getting-started-with-etcd.html">
   (from CoreOS)</a>.
   
   Kubernetes data stored in etcd includes jobs being scheduled, created and deployed, pod/service details and state, namespaces, and replication details.

   It's called a <strong>cluster</strong> because, for resiliancy, etcd replicates data across nodes. This is why there is a minimum of two worker nodes per cluster.

#### eksctl

1. See <a target="_blank" href="https://eksctl.io/">https://eksctl.io</a> about installing the <strong>eksctl</strong> CLI tool for creating clusters on EKS. It is written and supported (via Slack) by GitOps vendor <a target="_blank" href="https://www.weave.works/">weave.works</a> in Go, and uses CloudFormation. 

1. To create a EKS cluster:

   <pre><strong>eksctl create cluster</strong></pre>


### HA Proxy cluster

   For network resiliency, <strong>HA Proxy cluster</strong> distributes traffic among nodes.


<a name="Controllers"></a>
   
### Node Controllers and Ingress

   The <strong>Node controller</strong> assigns a CIDR block to newly registered nodes,
   then continually monitors node health. When necessary, it taints unhealthy nodes and
   gracefully evicts unhealthy pods. The default timeout is 40 seconds.

   Load balancing among nodes (hosts within a cloud) are handled by third-party port forwarding
   via Ingress controllers. See <a target="_blank" href="https://kubernetes.io/docs/concepts/services-networking/ingress/">Ingress definitions</a>.

   An <strong>"Ingress"</strong> is a collection of rules that allow inbound connections to reach the cluster services.

   <strong>Ingress Resource</strong> defines the connection rules.

   In Kubernetes the <strong>Ingress Controller</strong> could be a NGINX container providing reverse proxy capabilities.

### Plug-in Network

   PROTIP: Kubernetes uses third-party services to handle load balancing and port forwarding through 
   <strong>ingress objects</strong> managed by an ingress controller.

   CNI (Container Network Interface)

   Flannel.  

   Other CNI vendors include Calico, Cilium, Contiv, Weavenet.

### cAdvisor

   To collect resource usage and performance characteristics of running containers,
   many install a pod containing <a target="_blank" href="https://github.com/google/cadvisor">Google's</a> Container Advisor (<strong>cAdvisor</strong>). It aggregates and exports telemetry to an <strong>InfluxDB</strong> database for visualization using <strong>Grafana</strong>.

   Google's Heapster is also be used to send metrics to Google's cloud monitoring console.

<hr />

<a name="Helm"></a>

## Helm charts

The name Kubernetes is the ancient Greek word for people who pilot cargo ships -- "helmsman" in English. 
Thus the nautical references and why Kubernetes experts are called "captain" and why associated products have nautical themes, such as "Helm".

<a target="_blank" href="https://www.youtube.com/watch?v=0vpM8E28aXQ&time=9m45s">VIDEO</a>: Helm (<a target="_blank" href="https://helm.sh/">helm.sh</a>) is the default package manager for Kubernets (like pip and NuGet). It was started by a company called Deis in October 2015 out of a hackathon.

Helm Charts are a collection of <strong>templates</strong> that can be pulled from a version-controlled Helm repo to define, install, and upgrade complex Kubernetes applications, thus reducing copy-and-paste (and room for error in repetition).

A Helm chart can be used to <a target="_blank" href="https://skillsmatter.com/skillscasts/10813-faas-and-furious-0-to-serverless-in-60-seconds-anywhere">
quickly create an OpenFaaS (Serverless) cluster</a>:

<ul>
   <pre>git clone https://github.com/openfaas/faas-netes && cd faas-netes
   kubectl apply -f ./namespaces.yml 
   kubectl apply -f ./yaml_armhf
   </pre>
</ul>

Microsoft created <a target="_blank" href="https://github.com/Azure/draft">Draft</a> (like Scaffold) to simplify getting started in Azure to <a target="_blank" href="https://github.com/PatrickLang/fabrikamfiber/tree/helm-2019-mssql-linux">lift-and-shift</a> Windows ASP.NET apps. It has two commands:

<ul><pre><strong>
   draft create  # helm chart and Dockerfile
   draft up      # deploy</strong></pre>
</ul>

Draft uses language packs for Ruby, C# .NET Core 2.2 with Windows packs, authenticated to Azure Container Registry (ACR) and AKS.

<a target="_blank" href="https://www.ibm.com/blogs/bluemix/2018/06/deploy-scalable-web-application-kubernetes-using-helm/">
IBM: Deploy a scalable web application to Kubernetes using Helm</a>


## Topics

* <a href="#IAC">Infrastructure as code</a>
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

Kubernetes is written in the Go language, so it can run on Windows, Linux, and MacOS
(the need to install a JVM).

### Raspberry Pi

Read how the legendary Scott Hanselman <a target="_blank" href="https://www.hanselman.com/blog/HowToBuildAKubernetesClusterWithARMRaspberryPiThenRunNETCoreOnOpenFaas.aspx"> 
built Kubernetes on 6 Raspberry Pi nodes</a>, each with a 32GB SD card to a 1GB RAM ARM chip (like on smartphones).

<a target="_blank" href="https://www.hanselminutes.com/612/serverless-and-openfaas-with-alex-ellis">
Hansel talked with</a>
<a target="_blank" href="https://www.alexellis.io/">Alex Ellis</a> (<a target="_blank" href="https://twitter.com/alexellisuk/">@alexellisuk</a>)
keeps his <a target="_blank" href="https://gist.github.com/alexellis/fdbc90de7691a1b9edb545c17da2d975#file-prep-sh">
instructions with shell file</a> updated for <a target="_blank" href="https://blog.alexellis.io/serverless-kubernetes-on-raspberry-pi/">running on the Pis</a> to install <a target="_blank" href="https://openfaas.com/">OpenFaaS</a>.

CNCF Ambassador Chris Short developed the
<a target="_blank" href="https://rak8s.io/"> rak8s (pronounced rackets) library</a> to 
<a target="_blank" href="https://chrisshort.net/my-raspberry-pi-kubernetes-cluster/">make use of Ansible</a>.

Others:
   * https://blog.hypriot.com/getting-started-with-docker-on-your-arm-device/
   * https://blog.sicara.com/build-own-cloud-kubernetes-raspberry-pi-9e5a98741b49

<a name="Architecture"></a>

### Architecture diagram

<a target="_blank" href="https://translate.google.com/translate?hl=en&sl=ko&tl=en&u=http%3A%2F%2Fwww.yongbok.net%2Fblog%2F">
Yongbok Kim (who writes in Korean)</a> <a target="_blank" href="https://cdn.yongbok.net/ruo91/architecture/k8s/v1.1/kubernetes_architecture.png">posted (on Jan 24, 2016)</a> a master map of how all the pieces relate to each other:<br />
<small>Click on the diagram to pop-up a full-sized diagram</small>:
<a target="_blank" title="k8s_details-ruo91-2071x2645.png" href="https://user-images.githubusercontent.com/300046/33525160-4dc5931a-d7e7-11e7-8b83-9e373fc5ac7d.png">
<img alt="k8s_details-ruo91-350x448.jpg" src="https://user-images.githubusercontent.com/300046/33525167-7a5d3b9e-d7e7-11e7-8dd6-99694dc31782.jpg"></a>

BTW What are now called "nodes" were previously called minions. Apparently Google namers forgot about the existance of NodeJs, which refers to nodes differently.

### Testing

1. Dry-run
 
   <pre><strong>kubectl create -f pod.yaml --dry-run=client</strong></pre>

End-to-end tests by those who develop Kubernetes are coded in 
Ginko and Gomega (because Kubernets is written in Go).

The Kubtest suite builds, stages, extracts, and brings up the cluster.
After testing, it dumps logs and tears down the test rig.

zzz

## Social

   * <a target="_blank" href="https://twitter.com/kubernetesio/">Twitter: @kubernetesio</a>
   * <a target="_blank" href="https://slack.k8s.io">https://slack.k8s.io</a>
   * <a target="_blank" href="https://plus.google.com/communities/115402602543170235291">
   Google+ Group: Kubernetes</a>
   * https://groups.google.com/forum/#!forum/kubernetes-announce for announcements
   * https://groups.google.com/forum/#!forum/kubernetes-dev for contributors to the Kubernetes project to discuss design and implementation issues.
   * https://stackoverflow.com/search?q=k8s+or+kubernetes for developers
   * https://serverfault.com/search?q=k8s+or+kubernetes for sysadmins.
   * https://groups.google.com/forum/#!forum/kubernetes-sig-scale
   * https://www.youtube.com/playlist?list=PL69nYSiGNLP1pkHsbPjzAewvMgGUpkCnJ&disable_polymer=true
   Kubernetes Google Community video chats

   * https://cloud.google.com/support/docs/issue-trackers to report bugs
   <br /><br />

   * <a target="_blank" href="https://www.KubeCon.io">KubeCon.io</a> Conferences (<a target="_blank" href="https://www.twitter.com/KubeConio/">#KubeConio</a>)

<hr />

<a name="Install"></a>

## Installation options

There are several ways to obtain a running instance of Kubernetes.

<a name="Rancher"></a>

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


<a name="Minikube"></a>

### Minikube

Minikube goes beyond Docker For Mac (DFM) and Docker for Windows (DFW)
and includes a node and a Master when it spins up in a local environment (such as your laptop).

CAUTION: At time of writing, <a target="_blank" href="https://github.com/kubernetes/minikube">https://github.com/kubernetes/minikube</a>
has 257 issues and 20 pending Pull Requests, but we're using it anyway.

1. Install on a Mac Docker:
 
   <pre><strong>brew install docker-machine-driver-xhyve
   </strong></pre>

1. Install on a Mac Minikube:

   <pre><strong>brew install minikube
   </strong></pre>

   This installs folder:<br />
   $HOME/.minikube

1. Verify Install:

   <pre><strong>minikube version
   </strong></pre>

   At time of writing, the verion 1.13.1

   <pre>==> Checking for dependents of upgraded formulae...
Error: No such file or directory - /usr/local/Cellar/eksctl/0.24.0
   </pre>

2. What is in the Kubernetes config file?

   <pre><strong>cat $HOME/.kube/config</strong></pre>

2. To avoid "The connection to the server localhost:8080 was refused"

   https://kubernetes.io/docs/tasks/debug-application-cluster/troubleshooting/

   <pre><strong>sudo touch $HOME/.kube/config</strong></pre>
   <pre><strong>sudo chown $USER $HOME/.kube/config
   chmod 600 $HOME/.kube/config
   </strong></pre>

   Deleted the old config from ~/.kube and then restarted docker (for macos) and it rebuilt the config folder. 

3. Show the current context:

   <pre><strong>
   kubectl config current-context
   </strong></pre>

   The expected response on minikube is "minikube".

   <a name="StartMinikube"></a>

3. Start the service:

   On Mac:

   <pre>
   minikube start --vm-driver=xhyve
   </pre>

   On Windows:

   <pre>
   minikube start --vm-driver=hyperv
   </pre>

   <pre>😄  minikube v1.13.1 on Darwin 10.15.7
✨  Using the docker driver based on existing profile
👍  Starting control plane node minikube in cluster minikube
🏃  Updating the running docker "minikube" container ...
🐳  Preparing Kubernetes v1.19.2 on Docker 19.03.8 ...
🔎  Verifying Kubernetes components...
🌟  Enabled addons: default-storageclass, storage-provisioner
🏄  Done! kubectl is now configured to use "minikube" by default
   </pre>

3. Open the Minkube Dashboard server localhost:53764 poped upped on your default browser:

   <pre>minikube dashboard</pre>

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

   Kubectl 1.8 scale is now the preferred way to control graceful delete.

   Kubectl 1.8 rollout and rollback now support stateful sets ???

1. To continue, <a href="#StartMinikube">start minikube again</a>.


   <a name="kubectl"></a>

   ## kubectl CLI client install

   Kubernetes administrators use <strong>kubectl</strong> (kube + ctl)
   the CLI tool running outside Kubernetes servers to control them. 
   It's automatically installed within Google cloud instances, but on Macs clients:

1. Install on a Mac:
 
   <pre><strong>brew install kubectl
   </strong></pre>

   <pre>🍺  /usr/local/Cellar/kubernetes-cli/1.8.3: 108 files, 50.5MB
   1.19.2
   </pre>

   It's required by eksctl and minikube.

0. Verify
 
   <pre><strong>kubectl version --client
   </strong></pre>

   <pre>Client Version: version.Info{Major:"1", Minor:"18", GitVersion:"v1.18.8", GitCommit:"9f2892aab98fe339f3bd70e3c470144299398ace", GitTreeState:"clean", BuildDate:"2020-08-13T16:12:48Z", GoVersion:"go1.13.15", Compiler:"gc", Platform:"darwin/amd64"}
   </pre>

   NOTICE that Golang is a component.

   If you get this error message:
   <pre>The connection to the server localhost:8080 was refused - did you specify the right host or port?
   </pre>

   1. Check the status of jobs
   
   <pre><strong>kubectl describe</strong></pre>

   <pre>error: You must specify the type of resource to describe. Use "kubectl api-resources" for a complete list of supported resources.</pre>

   2. When a job is complete, view its results:

   <pre><strong>kubectl logs counter</strong></pre>

   The API Server routes several <strong>kinds</strong> of <a href="#Ayaml-files">yaml declaration files</a>: Pod, Deployment of pods, Service, Job, Configmap.

   API primatives ???

1. Add 

   https://plugins.jetbrains.com/plugin/10485-kubernetes


1. View your current configuration settings and current context 

   <pre><strong>kubectl config view
   </strong></pre>

   Sample response from file <tt>~/.kube/config</tt>

   <pre>apiVersion: v1
clusters:
- cluster:
    certificate-authority: /Users/wilson_mar/.minikube/ca.crt
    server: https://127.0.0.1:32772
  name: minikube
contexts:
- context:
    cluster: minikube
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

   ### kubectl run

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


   ### On GCP

1. On GCP:

   <pre>gcloud container clusters get-credentials guestbook2</pre>

kubectl get pods --all-namespaces



<a name="Centos"></a>

### CentOS

First, install kubeadm 

cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
chown $(id -u):$(id -g) $HOME/.kube/config


   <pre>
cat &LT; /etc/yum.repos.d/kubernetes.repo
[kubernetes]
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

<a name="Ubuntu"></a>

### Ubuntu

1. On Ubuntu, install:

   <pre>apt install -y docker.io</pre>

2. To make sure Docker and Kublet are using the same systemd driver:

   <pre>cat &LT;&LT;EOF >/etc/docker/daemon.json
   {
     "exec-opts": ["native.cgroupdriver=systemd"]
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

## Details

This section further explains the <a href="#Architecture">architecture diagram above</a>.

<!-- https://linuxacademy.com/cp/guides/download/refsheets/guides/refsheets/linuxacademy-kubernetesadmin-archdiagrams-1_1516737832.pdf -->

<a target="_blank" href="https://linuxacademy.com/cp/exercises/view/id/670/module/155">This sequence of commands</a>:

1. Select "CloudNativeKubernetes" sandboxes.
1. Select the first instance as the "Kube Master".
1. Login that server (user/123456).
1. Change the password as prompted on the Ubuntu 16.04.3 server.

   <a name="MasterDeploy"></a>
   
   ### Deploy Kubernetes master node

1. Use this command to deploy the <strong>master node</strong> which controls the other nodes. 
   So it's <a href="#MasterDeploy">deployed first</a> which invokes the <strong>API Server</strong>

   <pre>sudo kubeadm init --pod-network-cidr=10.244.0.0/16</pre>

   ![kubernetes-nodes-363x120-20150](https://user-images.githubusercontent.com/300046/39900888-328f060e-5482-11e8-89eb-14439d7db270.jpg)

   The address is the default for <strong>Flannel</strong>.


   <a name="FlowDiagram"></a>

   ### Flow diagram

   ![k8s-services-flow-847x644-100409](https://user-images.githubusercontent.com/300046/33525135-9b69e09a-d7e6-11e7-857f-513e8582d450.jpg)

   The diagram above is by <a target="_blank" href="https://www.slideshare.net/walterliu7/kubernetes-workshop-78554820"
   title="Kubernetes Workshop published Aug 4, 2017">Walter Liu</a>

   ### Flannel for Minikube

   When using Minikube locally, a CNI () is needed. 
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

   configmaps in cfg files are used to define <strong>environment variables</strong>.

1. List pods created:

   <pre>kubectl get pods --all-namespaces -o wide</pre>

   Specifying wide output adds the IP address column

   Included are pods named:
   * api server (aka "master") accepts kubectl commands
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

   Every Pod has a unique IP. There is one IP Address per Pod.
   In other words, containers within a Pod share a network namespace. 

   Every <strong>container</strong> has its own unique <strong>port number</strong> within its pod's IP.

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

   ### Watchers
   
   To register watchers on specific nodes.???
   Kubernetes supports TLS certifications for encryption over the line.

   REST API CRUD operations are used 
   For authorization, Kubernetes supports Role Base Access Control (RBAC),
   (ABAC), and Webhook.
   Admission ???


1. Put in that folder (in each node):

   * basic_auth.csv user and password
   * ca.crt - the certificate authority certificate from pki folder
   * known_tokens.csv kublets use to talk to the apiserver
   * kubecfg.crt - client cert public key
   * kubecfg.key - client cert private key
   * server.cert - server cert public key from issued folder
   * server.key - server cert private key
   <br /><br />

1. Copy from API server to each master node:

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

   <pre>kubectl expose deployment *deployment-name* [options]</pre>

<hr />

## Container Storage Interface (CSI)

   <a name="PVC"></a>

   ### Volumes
   
   Containers also share attached data <strong>volumes</strong> available within each Pod.

   <a href="#kubelet">Kubelet agents</a>

   HAProxy
   VRRP (Virtual Router Redundancy Protocol)
   http://searchnetworking.techtarget.com/definition/VRRP
   automatically assigns available Internet Protocol routers to participating hosts.

   A Persistent Volume (PV) is a provisioned block of storage for use by the cluster. 

   A Persistent Volume Claim (PVC) is a request for that storage by a user, and once granted, is 
   used as a "claim check" for 

   Recycling policies are Retain (keep the contents) and Recycle (Scrub the contents).


## configmap

## Activities

1. To drain a node out of service temporarily for maintenance:

   <pre>kubectl drain node3.mylabserver.com --ignore-daemonsets</pre>

   ### DaemonSets

   daemonsets (ds) 

   Usually for system services or other pods that need to physically reside on every node in the cluster, such as for network services. They can also be deployed only to certain nodes using labels and node selectors.

1. To return to service:

   <pre>kubectl uncordon node3.mylabserver.com</pre>


<a name="micro-services"></a>

## Sample micro-service apps

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

Bob Reselman's 3-day hands-on classes on Kubernetes makes use of <strong>bash scripts</strong> and sample app at
<a target="_blank" href="https://github.com/reselbob/CoolWithKube">https://github.com/reselbob/CoolWithKube</a>
  

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

<a name="yaml-files"></a>

## Kind yaml files

The kinds of yaml files:

   ### Deployments

   * auth.yaml
   * frontend.yaml
   * hello-green.yaml
   * hello-canary.yaml
   * hello.yaml

   ### pods

   * healthy-monolith.yaml configures "livenessProbe" (in folder healthz) and "readinessProbe" (in folder readiness) on port 81
   * monolith.yaml
   * secure-monolith.yaml

   ### services samples

   * auth.yaml
   * frontend.yaml
   * hello-blue.yaml
   * hello-green.yaml
   * hello.yaml
   * monolith.yaml

   Label

<a name="GKE"></a>

### How Google Kubernetes Engine works

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

In <a target="_blank" href="https://x-team.com/blog/introduction-kubernetes-architecture/">this diagram</a>:


From the https://kubernetes.io/docs/user-guide/kubectl-cheatsheet/

0. List all pods, including in the system namespace:

   <pre><strong>
   kubectl get nodes --all-namespaces
   </strong></pre>



<a name="Manifest"></a>

## pod.yml manifests

<a target="_blank" href="https://github.com/timstclair/kube-contrib/blob/master/devel/manifests/cadvisor-pod.yaml">An example (cadvisor)</a>:

   <pre>
apiVersion: v1
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


<a name="rc"></a>

### Replication rc.yml

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

   <pre><strong>
   kubectl apply -f rc.yml
   </strong></pre>

   The response expected:

   <pre>
   replicationcontroller "hello" configured
   </pre>

0. List, in wide format, the number of replicated nodes:

   <pre><strong>
   kubectl get rc -o wide
   </strong></pre>

   <pre>
   DESIRED, CURRENT, READY
   </pre>

0. Get more detail:

   <pre><strong>
   kubectl describe rc
   </strong></pre>


<a name="ServiceYml"></a>

### Service rc.yml

The `svc.yml` defines the services:

   <pre>
apiVersion: v1
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

   PROTIP: The selector should match the pods.xml.

   One type of service is load balancer within a cloud:

   <pre>
apiVersion: v1
kind: Service
metadata:
  name: la-lb-service
spec:
  selector:
    app: la-lb
  ports:
  - port: 80
    protocol: TCP
    targetPort: 9376
  type: LoadBalancer
  clusterIP: 10.0.171.223
  loadBalancerIP: 78.12.23.17
   </pre>

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


### OpenShift routes to services

Services can be referenced by external clients using a host name such as "hello-svc.mycorp.com" by using
OpenShift Enterprise, which uses "routes" that defines the rules the HAProxy applies to incoming connections.

Routes are deployed by an OpenShift Enterprise administrator as <strong>routers</strong> to nodes in an OpenShift Enterprise cluster. To clarify, the default Router in Openshift is an actual HAProxy container providing reverse proxy capabilities.


<a name="DeploymentYml"></a>

### Deploy yml

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

   Deployment wraps around <strong>replica sets</strong>, a newer version of doing rolling-update on Replication Controller. Old replica sets can revert roll-back by just changing the deploy.yml file.

   PROTIP: Don't run apt-upgrade within containers, which breaks the image-container relationship controls.

1. Retrieve the yaml for a deployment:

   <pre>kubectl get deployment nginx-deployment -o yaml</pre>

   Notice the "RollingUpdateStrategy: 25% max unavilable, 25% max surge".

1. Begin rollout of a new desired version from the command line:

   <pre>kubectl set image deployment/nginx-deployment nginx=nginx:1.8</pre>

   Alternately, edit the yaml file to nginx:1.9.1 and:

   <pre>kubectl apply -f nginx-deployment.yaml</pre>

1. View Rollout a new desired version:

   <pre>kubectl rollout status deployment/nginx-deployment</pre>

1. Describe the yaml for a deployment:

   <pre>kubectl describe deployment nginx-deployment</pre>

1. List the DESIRED, CURRENT, UP-TO-DATE, AVAILABLE:

   <pre>kubectl get deployments </pre>

1. List the DESIRED, CURRENT, UP-TO-DATE, AVAILABLE:

   <pre>kubectl get deployments </pre>

1. List the history:

   <pre>kubectl rollout history deployment/nginx-deployment --revision=3</pre>

1. Backout the revision:

   <pre>kubectl rollout undo deployment/nginx-deployment --to-revision=2</pre>


<a name="SecurityContext"></a>

### Security Context

The `security.yml` defines a secrurity context pod:

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

1. Enter the security context:

   <pre>kubectl exec -it security-context-pod -- sh</pre>
   
1. See the users:

   <pre>ps aux</pre>

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


PROTIP: Use a DaemonSet when running clustered Kubernetes with static pods to run a pod on every node. Static pods are managed directly by the kubelet daemon on a specific node, without the API server observing it. 

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

   * Flannel
   * Cisco ACI
   * Cilium
   * Contiv
   * Contrail
   * NSX-T
   * OpenVswitch
   * Project Calico
   * Weave Net


## Learning resources

Nigel Poulton (@NigelPoulton, <a target="_blank" href="https://www.nigelpoulton.com/">nigelpoulton.com</a>), Docker Captain:

   * <a target="_blank" href="https://app.pluralsight.com/library/courses/getting-started-kubernetes/exercise-files">
   Getting Started with Kubernetes</a> 22 May 2017

   * Book: "Docker for Sysadmins"

   * Book: "Docker Deep Dive"

   * Book: "Kubernetes Deep Dive"

   * <a target="_blank" href="https://acloud.guru/course/kubernetes-deep-dive/dashboard">A Cloud Guru video course "Kubernetes Deep Dive"</a> (released Oct 2018) references a WordPress sample app at <a target="_blank" href="https://github.com/nigelpoulton/k8s-sample-apps">https://github.com/nigelpoulton/k8s-sample-apps</a>


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

<a target="_blank" href="http://post.oreilly.com/rd/9z1z07qqefah7igu9ftil9os3s666asu5a6lfhh1eko">O'Reilly book</a>
Kubernetes adventures on Azure, Part 1 (Linux cluster)
Having read several books on Kubernetes, Ivan Fioravanti, writing for Hackernoon, says it's time to start adventuring in the magical world of Kubernetes for real! And he does so using Microsoft Azure. Enjoy the step-by-step account of his escapade (part 1).

## Qwiklab

https://run.qwiklab.com/searches/lab?keywords=Build%20a%20Slack%20Bot%20with%20Node.js%20on%20Kubernetes&utm_source=endlab&utm_medium=email&utm_campaign=nextlab

The 8 labs covering 8 hours of the
<a target="_blank" href="https://webinars-run.qwiklab.com/quests/29">
Kubernetes in the Google Cloud Qwiklab quest</a>


## Kubeflow

<a target="_blank" href="https://github.com/kubeflow/kubeflow">https://github.com/kubeflow/kubeflow</a> makes deployment of Kubernetes for Machine Learning (TensorFlow)
<a target="_blank" href="http://www.kai-waehner.de/blog/2018/05/09/deep-learning-at-extreme-scale-%E2%80%A8with-apache-kafka-open-source-ecosystem/">using Kafka</a>

## AWS K8s Cluster Auto-scaler

<a target="_blank" href="https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/cloudprovider/aws/README.md">https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/cloudprovider/aws/README.md</a> 
provides deep-dive notes and code.

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


## Social

<a target="_blank" href="https://kubernetes.io/community/">https://kubernetes.io/community</a>


## Jobs

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

## Video courses

* <a target="_blank" href="https://training.linuxfoundation.org/training/kubernetes-fundamentals/">Kubernetes Fundamentals</a> $299 video course offered on EdX.com from LinuxFoundation.

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

<a target="_blank" href="https://github.com/hjacobs/kubernetes-failure-stories">
https://github.com/hjacobs/kubernetes-failure-stories</a>

Vicky Tanya Seno at Santa Monica College is preparing a course of Kubernetes on ACloud.guru

Kubstack
<a target="_blank" href="https://twitter.com/pst418">@pst418</a>


<a target="_blank" href="https://www.gcppodcast.com/post/">GCP PODCAST</a>: <a target="_blank" href="https://www.gcppodcast.com/post/episode-3-kubernetes-and-google-container-engine/">Kubernetes and Google Container Engine</a> hosts Francesc Campoy Flores and Mark Mandel interview Brian Dorsey, Developer Advocate, Google Cloud Platform. Comments at <a target="_blank" href="https://www.reddit.com/r/gcppodcast/comments/3sf3yr/episode_3_kubernetes_and_google_container_engine/">r/gcppodcast</a>

Microsoft's "<a target="_blank" href="https://azure.microsoft.com/mediahandler/files/resourcefiles/kubernetes-learning-path/Kubernetes%20Learning%20Path%20version%201.0.pdf?utm_campaign=ossonazure">PDF: 50 days from zero to hero with Kubernetes</a>" includes:

1. <a target="_blank" href="https://azure.microsoft.com/mediahandler/files/resourcefiles/phippy-goes-to-the-zoo/Phippy%20Goes%20To%20The%20Zoo_MSFTonline.pdf">Phippy Goes to the Zoo</a> is a children's book character Phippy (from Docker) introduct pods, replica sets, deployments, ingress.

2. <a target="_blank" href="https://www.youtube.com/watch?v=EUitQ8DaZW8&list=PLLasX02E8BPCrIhFrc_ZiINhbRkYMKdPT&index=1&t=0s">The 6-part YouTube videos</a> by Brendan Burns drawing behind glass.

3. <a target="_blank" href="https://docs.microsoft.com/en-us/azure/aks/concepts-clusters-workloads">Kubernetes core concepts for Azure Kubernetes Service (AKS)</a> explore basic concepts like YAML definitions, networking, secrets, and application deployments from source code.

4. <a target="_blank" href="https://www.katacoda.com/courses/kubernetes/launch-single-node-cluster">Katacoda</a> provides a Bash terminal as if you are running Minikube and kubectl locally just by clicking the code on the left pane rather than typing. 

5. <a target="_blank" href="https://docs.microsoft.com/en-us/azure/architecture/reference-architectures/microservices/aks">Microservices architecture on Azure Kubernetes Service (AKS)</a> describes a reference implementation at https://github.com/mspnp/microservices-reference-implementation

6. <a target="_blank" href="https://aksworkshop.io/">https://aksworkshop.io/</a> is a hands-on workshop to create a Kubernetes cluster, deploy a microservices-based application, and set up a CI/CD pipeline.

   * Kubernetes deployments, services and ingress
   * Deploying MongoDB using Helm
   * Azure Monitor for Containers, Horizontal Pod Autoscaler and the Cluster Autoscaler
   * Building CI/CD pipelines using Azure DevOps and Azure Container Registry
   * Scaling using Virtual Nodes, setting up SSL/TLS for your deployments, using Azure Key Vault for secrets

7. <a target="_blank" href="https://azure.microsoft.com/en-us/topic/what-is-kubernetes/">https://azure.microsoft.com/en-us/topic/what-is-kubernetes</a>

https://aka.ms/k8slearning

https://learnk8s.io/troubleshooting-deployments
A visual guide on troubleshooting Kubernetes deployments DECEMBER 2019

## Free Playpen

<a target="_blank" href="https://play-with-k8s.com/">play-with-k8s.com</a> gives you a 4-hour playpen. But that site is gone.

## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
