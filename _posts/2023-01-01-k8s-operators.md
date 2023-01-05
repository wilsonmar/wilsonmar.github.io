---
layout: post
date: "2023-01-01"
file: "k8s-operators"
title: "K8s Operators"
excerpt: "Control Kubernetes internals from Golang programs, as a part of the Red Hat Industrial Complex"
tags: [kubernetes, hashicorp, security, secrets]
image:
# pic secret finger over mouth 1900x500
  feature: https://res.cloudinary.com/dcajqrroq/image/upload/v1672900896/k8s-operator-controller-1900x500_lnroj9.png
  credit: Kubermatic
  creditlink: https://www.kubermatic.com/blog/why-implementing-kubernetes-operators-is-a-good-idea/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

Docker was once the "next big thing".

Red Hat (now a part of IBM) is now claimed as the "next big thing" in Kubernetes with its Ansible, <a target="_blank" href="https://access.redhat.com/documentation/en-us/openshift_container_platform/4.11">OpenShift Container Platform</a>, CoreOS, Quay, and Kubernetes Operators.

<a name="OLM"></a>

## OLM (Operator Lifecycle Manager)

It has long been said that 

> "Kubernetes is a platform for building platforms"

Now the Operator Lifecycle Manager (OLM) - powered from https://github.com/operator-framework/operator-lifecycle-manager - is a platform! OLM extends Kubernetes to provide a declarative way to install, manage, and upgrade Operators within a Kubernetes cluster.

References:
   * https://olm.operatorframework.io/ says OLM facilitates installation, upgrade, and role-based access control (RBAC) of operators within a cluster.
   * https://techbloc.net/archives/4372
   <br /><br />
  
## Operator Hub Registry

https://operatorhub.io/?view=list was <a target="_blank" href="https://www.redhat.com/en/blog/introducing-operatorhubio-place-finding-kubernetes-native-services">launched by Red Hat Feb 2019</a> as, like Dockerhub (hub.docker.com), a registry (list) of Kubernetes Operators to install. 
It's powered by https://github.com/k8s-operatorhub/community-operators

PROTIP: Note that many Operators are for <strong>Open Shift</strong>, Red Hat's proprietary flavor of Kubernetes.

Scroll down to filter among <strong>Capability Levels</strong>:

<img alt="k8s-operator-registry-capabilities-384x370" width="384" height="370" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1672899605/k8s-operator-registry-capabilities-384x370_uka3ju.jpg">

At time of this writing (January 2023), there are less than 300 vs. thousands in hub.docker.com and terraform.io modules.

https://operatorhub.io/getting-started illustrates the different capability levels:

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1672899456/k8s-operator-2814x1154_g4ueml.jpg"><img alt="k8s-operator-2814x1154.jpg" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1672899456/k8s-operator-2814x1154_g4ueml.jpg"></a>

### From Helm to Ansible to Golang

The declarative nature of Helm charts (and Terraform) are limited to "Day-1" concerns of installation, configuration, etc. 
but not "Day-2" concerns of re-configuration, update, backup, failover, restore, etc.

QUESTIONS:
1. How to make use of an existing Helm chart.
2. How to quickly bring a "standard" production-quality Kubernetes cluster up with a full set of Operators? In one command?
3. How can one assure that all operators within Kubernetes all work well with each other?
4. How to get to Deep Insights and Auto Pilot?
5. What are all the Operators that are needed to achieve full production utility within an enterprise?
6. With Operators, how do we see version history of who changed what when? How to analyze logs emitted?

## Kubernetes Operators?

<a target="_blank" href="https://kubernetes.io/docs/concepts/extend-kubernetes/operator/">
Kubernetes Operators</a> are software extensions to Kubernetes that make use of custom resources to manage applications and their components. Operators follow Kubernetes principles, notably the control loop.

Kubernetes Operators, as a controller, runs as a Pod on Kubernetes cluster master nodes, in a software loop, continously auditing object states to ensure a desired state, by deploying applications in a standardized and opinionated way.

> "With Operators you can stop treating an application as a collection of primitives like Pods, Deployments, Services or ConfigMaps, but instead as a single object that only exposes the knobs that make sense for the application."

<a target="_blank" href="https://www.linkedin.com/in/brandonphilips/">Brandon Philips</a>, CTO of CoreOS <a target="_blank" href="https://web.archive.org/web/20170129131616/https://coreos.com/blog/introducing-operators.html">blogged on November 3, 2016</a> wrote:

> "An Operator is an application-specific controller that extends the Kubernetes API to create, configure, and manage instances of complex stateful applications on behalf of a Kubernetes user. ... Examples of complex administrative tasks that an Operator might handle include safe coordination of application upgrades, configuration of backups to offsite storage, service discovery via native Kubernetes APIs, application TLS certificate configuration, and disaster recovery."

Kubernetes Operators are installed as a Kubernetes deployment kind of yaml (Stateful Sets), which define a new third party application instance type.


<hr />

## operator-sdk

   * https://sdk.operatorframework.io/
   <br /><br />

1. Install Golang.

   PROTIP: Ironically, https://sdk.operatorframework.io/docs/building-operators/golang/installation/
   still specifies use of Docker.
 
1. There is a brew formula to install the <tt>operator-sdk</tt> app:

   <pre><strong>brew info operator-sdk</strong></pre>

3. Install the <tt>operator-sdk</tt> app. On a Mac:
   
   <pre><strong>brew install operator-sdk</strong></pre>

   <pre>==> Pouring go--1.19.4.arm64_monterey.bottle.tar.gz
🍺  /opt/homebrew/Cellar/go/1.19.4: 12,452 files, 629.1MB
==> Installing operator-sdk
==> Pouring operator-sdk--1.26.0.arm64_monterey.bottle.tar.gz
==> Caveats
zsh completions have been installed to:
  /opt/homebrew/share/zsh/site-functions
==> Summary
🍺  /opt/homebrew/Cellar/operator-sdk/1.26.0: 10 files, 201.1MB
==> Running `brew cleanup operator-sdk`...
Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
==> Caveats
==> operator-sdk
zsh completions have been installed to:
  /opt/homebrew/share/zsh/site-functions
   </pre>

   Alternately, see 
   * https://sdk.operatorframework.io/docs/installation/
   * https://sdk.operatorframework.io/docs/building-operators/golang/tutorial/
   <br /><br />
 

   <a name="KeyboardAlias"></a>

1. PROTIP: To save typing toil and time, I've defined <a target="_blank" href="https://github.com/wilsonmar/mac-setup/blob/main/aliases.zsh">among my other keyboard aliases</a> the letter "o" so I don't have to type "operator-sdk" every time:
   
   <pre><strong>alias o="operator-sdk"</strong></pre>

2. Run aliases.sh, then view the operator-sdk command menu using the alias:

   <pre><strong>o</strong></pre>

   <pre>CLI tool for building Kubernetes extensions and tools.
&nbsp;
Usage:
  operator-sdk [flags]
  operator-sdk [command]
&nbsp;
Examples:
The first step is to initialize your project:
    operator-sdk init [--plugins=<PLUGIN KEYS> [--project-version=<PROJECT VERSION>]]
&nbsp;
&LT;PLUGIN KEYS> is a comma-separated list of plugin keys from the following table
and &LT;PROJECT VERSION> a supported project version for these plugins.

                                   Plugin keys | Supported project versions
-----------------------------------------------+----------------------------
           ansible.sdk.operatorframework.io/v1 |                          3
              declarative.go.kubebuilder.io/v1 |                       2, 3
       deploy-image.go.kubebuilder.io/v1-alpha |                          3
                          go.kubebuilder.io/v2 |                       2, 3
                          go.kubebuilder.io/v3 |                          3
                    go.kubebuilder.io/v4-alpha |                          3
               grafana.kubebuilder.io/v1-alpha |                          3
              helm.sdk.operatorframework.io/v1 |                          3
 hybrid.helm.sdk.operatorframework.io/v1-alpha |                          3
           quarkus.javaoperatorsdk.io/v1-alpha |                          3
&nbsp;
For more specific help for the init command of a certain plugins and project version
configuration please run:
    operator-sdk init --help --plugins=&LT;PLUGIN KEYS> [--project-version=&LT;PROJECT VERSION>]
&nbsp;
Default plugin keys: "go.kubebuilder.io/v3"
Default project version: "3"
&nbsp;
&nbsp;
Available Commands:
  alpha            Alpha-stage subcommands
  bundle           Manage operator bundle metadata
  cleanup          Clean up an Operator deployed with the 'run' subcommand
  completion       Load completions for the specified shell
  create           Scaffold a Kubernetes API or webhook
  edit             Update the project configuration
  generate         Invokes a specific generator
  help             Help about any command
  init             Initialize a new project
  olm              Manage the Operator Lifecycle Manager installation in your cluster
  pkgman-to-bundle Migrates packagemanifests to bundles
  run              Run an Operator in a variety of environments
  scorecard        Runs scorecard
  version          Print the operator-sdk version
&nbsp;
Flags:
  -h, --help                     help for operator-sdk
      --plugins strings          plugin keys to be used for this subcommand execution
      --project-version string   project version (default "3")
      --verbose                  Enable verbose logging
&nbsp;
Use "operator-sdk [command] --help" for more information about a command.
   </pre>

1. Get the version (with Kubernetes meta) from https://github.com/operator-framework/operator-sdk/releases

   <pre><strong>operator-sdk version</strong></pre>

   <pre>operator-sdk version: "v1.26.0", commit: "cbeec475e4612e19f1047ff7014342afe93f60d2", kubernetes version: "v1.25.0", go version: "go1.19.4", GOOS: "darwin", GOARCH: "arm64"
   </pre>  

2. To get just the operator-sdk version number (such as <tt>v1.26.0</tt>):

   <pre><strong>operator-sdk version | awk '{print $3}' | tr -d '",' </strong></pre>

   <tt>awk '{print $3}'</tt> yields <tt>"v1.26.0",</tt>

   <tt>tr -d '",'</tt> removes the double-quotes and comma


   ### Modify existing Operator

   PROTIP: Deepak Singh Dhami <a target="_blank" href="https://www.techtarget.com/searchitoperations/tutorial/How-to-build-a-Kubernetes-operator">recommends modifying one before creating your own</a>.

   https://operatorhub.io/operator/vault at 
   https://github.com/banzaicloud/bank-vaults/tree/main/operator
   by <a target="_blank" href="https://www.linkedin.com/in/nandorkracser/">Nándor István Krácser</a> at <a target="_blank" href="https://banzaicloud.com/tags/vault/">Banzai Cloud</a> (acquired by Cisco).
   
   The yaml sample as part of the <a target="_blank" href="https://github.com/banzaicloud/pipeline">Banzai Cloud Pipeline</a>

   <pre>apiVersion: vault.banzaicloud.com/v1alpha1
kind: Vault
metadata:
  name: vault
spec:
  size: 1
  image: 'vault:1.0.0'
  bankVaultsImage: 'banzaicloud/bank-vaults:latest'
  annotations:
    prometheus.io/scrape: 'true'
    prometheus.io/port: '9102'
  serviceAccount: vault
  serviceType: ClusterIP
  ingress:
    annotations: null
    spec: {}
  unsealConfig:
    kubernetes:
      secretNamespace: default
  config:
    storage:
      file:
        path: /vault/file
    listener:
      tcp:
        address: '0.0.0.0:8200'
        tls_cert_file: /vault/tls/server.crt
        tls_key_file: /vault/tls/server.key
    telemetry:
      statsd_address: 'localhost:9125'
    ui: true
  externalConfig:
    policies:
      - name: allow_secrets
        rules: >-
          path "secret/*" { capabilities = ["create" "read" "update" "delete"
          "list"] }
    auth:
      - type: kubernetes
        roles:
          - name: default
            bound_service_account_names: default
            bound_service_account_namespaces: default
            policies: allow_secrets
            ttl: 1h
    secrets:
      - path: secret
        type: kv
        description: General secrets.
        options:
          version: 2
    startupSecrets:
      - type: kv
        path: secret/data/accounts/aws
        data:
          data:
            AWS_ACCESS_KEY_ID: secretId
            AWS_SECRET_ACCESS_KEY: s3cr3t
  vaultEnvsConfig:
    - name: VAULT_LOG_LEVEL
      value: debug
   </pre>

   CAUTION: Using vault:1.0.0?


   ### New Go Operator

   https://sdk.operatorframework.io/build/

1. Activate Go module support before using the SDK:
   
   <pre><strong>export GO111MODULE=on</strong></pre>

2. To create a new Operator of your very own:
   
   <pre><strong>operator-sdk init --domain example.com --repo github.com/example/memcached-operator
   </strong></pre>

   --domain is the prefix of the API group custom resources will be created in.

   The command above generates a go.mod file.

   References:
   * https://github.com/alexcpn/go_operator_2022 is referenced by
   * https://medium.com/techlogs/go-kubernetes-operator-963461e528c5 by Alex Punnen who recommands
   * https://sdk.operatorframework.io/docs/building-operators/golang/tutorial/
   * https://medium.com/techlogs/go-kubernetes-operator-963461e528c5
   * https://book.kubebuilder.io/quick-start.html
   * https://book.kubebuilder.io/cronjob-tutorial/cronjob-tutorial.html
   * Read till Section 1.7 https://book.kubebuilder.io/cronjob-tutorial/controller-implementation.html
   <br /><br />

   ### Unit Testing

3. Static tests consist of unit, formatting, and doc link tests.

   https://sdk.operatorframework.io/docs/contribution-guidelines/testing/

4. Docs only

   make test-static

5. Code

   make test-all

<hr />

## Utilities

* https://itnext.io/analyzing-value-of-operator-framework-for-kubernetes-community-5a65abc259ec

  <img src="https://miro.medium.com/max/1400/1*f0fp4e7RhoKSzC5N7UTxSw.webp">

* https://docs.tungsten.io/en/latest/tungsten-fabric-operator/working-with-kubernetes-operators-101.html

## Resources

* https://learning.oreilly.com/library/view/kubernetes-in-production/9781800202450/
* https://www.amazon.com/Kubernetes-Operators-Automating-Container-Orchestration/dp/1492048046
* https://www.youtube.com/watch?v=i9V4oCa5f9I 
* https://www.youtube.com/watch?v=ha3LjlD6g7g "Kubernetes Operator simply explained in 10 mins" by Nana
* https://k21academy.com/docker-kubernetes/kubernetes-operator/
* https://cloudark.medium.com/why-to-write-kubernetes-operators-9b1e32a24814 from 2018
* https://www.linux.com/topic/cloud/demystifying-kubernetes-operators-operator-sdk-part-1/
* https://shipit.dev/posts/k8s-operators-with-python-part-1.html Creating CRDs
* https://shipit.dev/posts/k8s-operators-with-python-part-2.html Implementing Controller
* https://www.cncf.io/blog/2022/06/15/kubernetes-operators-what-are-they-some-examples/
* https://nightlies.apache.org/flink/flink-kubernetes-operator-docs-main/
* https://www.weave.works/blog/creating-custom-kubernetes-operators
* https://cloud.redhat.com/blog/build-your-kubernetes-operator-with-the-right-tool
* <a target="_blank" href="https://github.com/cncf/tag-app-delivery/blob/eece8f7307f2970f46f100f51932db106db46968/operator-wg/whitepaper/Operator-WhitePaper_v1-0.md">CNCF Operator white paper</a>


<hr />

## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
