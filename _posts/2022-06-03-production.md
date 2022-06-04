---
layout: post
title: "Production"
excerpt: "Typical patterns in Production vs. Tests"
tags: [security]
date: "2022-06-03"
file: "production"
image:
# cyber-security-hero-1900x500-22924.jpb/.png 
  feature: https://user-images.githubusercontent.com/300046/61989997-46bab400-aff5-11e9-9045-8075ede3d5a3.jpg
  credit: Addie Wagenknecht
  creditlink: http://www.placesiveneverbeen.com/details/asymmetric-love
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

We often see "this is for learning and not recommended for use in production".

So what is the recommendation for use in production?

Here are my notes on the pattern I've seen in production vs. regular test.

{% include whatever.html %}

<hr />

## Get to Production while in Test

If there is one piece of advice that DevOps practioners have it's this:

> PROTIP: While your team matures the application code, use that <strong>same timeframe</strong> to mature the operational procedures as well so you're not struggling at the end.


## Corporate policies and procedures

There will be processes which some developers object to, even if it adds only a few seconds of wait time for developers.

This is why a mechanism is needed where a <strong>corporate policy</strong> is issued by an executive to specify where a way of working needs to occur to ensure security or other important aspect.

Evidence of policies and actual proof of procedure usage are examined by auditors who issue SOC2 and ISO 27000 letters which customers and prospective customers request from salespeople.


<a name="Assessment"></a>

## Production Maturity Assessment

Here are some examples of requirements defined for production:

1. Monitor and restrict use of CLI (perhaps using AWS Config) instead of versioned IaC.

1. Dynamically generate user accounts and passwords instead of storing secrets.

1. Store secrets off laptops (one click on a phising scam would result in loss of control).

1. Limit "blast radius" from account loss by limiting the scope of actions by each account (such as only allowing special accounts to delete and limiting read of sensitive information).

1. Version Control Configurations files -- use a Git-based workflow (which some call "GitOps") so the "who, when, why" of each change is stored. 

1. Use CI/CD automation on laptops to automatically run scans.

1. Use CI/CD automation (such as Jenkins, CircleCI, GitHub Actions) to automatically conduct scans.

1. Run <a target="_blank" href="https://github.com/aquasecurity/kube-bench">kube-bench</a> CIS benchmark tests to ensure each cluster passes generic guidelines from the Center for Internet Security (CIS).

1. Specify the version, and confirm whether the latest version is being used. In today's hostile world, damage from immature versions is less than damage from not having bug fixes to improve security posture.

1. Disable metadata cloud providers metadata API exposing data to instances.[1]

1. Only use approved domain names in Ingress hostnames [1]

1. Enforce uniqueness in Ingress hostnames [1]

1. Automate end-to-end functional tests exercising GUI and APIs.

1. Have GitHub require GPG keys for verified commits. This ensures each committer has control of the email address which identity is based.

1. Scan for secrets in code before commit/push to GitHub.

1. Scan Terraform and other IaC for vulernabilities before push to GitHub.

1. Run data stores (Oracle, MongoDB, MySQL, PostgreSQL, etc.) outside of Kubernetes (for fine tuning necessary to optimization) [4]

1. Scan container images created.

1. Refer to assets (Container images) by SHA (rather than by name), so content changes can be detected before use.

1. Retrieve assets from an in-house registry (such as JFrog Artifactory, rather than public DockerHub), so that forensics can be performed in case of security issues. 3rd-party packages and libraries can have vulnerabilities injected.

1. Minimize Container Images -- since 3rd-party packages and libraries can contain vulnerabilities, remove those that are not used. Example: Alpine Images are almost 10 times smaller than Ubuntu. use smaller Amazon or Alpine OS instead of Ubuntu. Smaller Docker images take less storage space and build faster.

1. Use a read-only filesystem in containers [3] and OS.

1. Use an isolated/dedicated node for each purpose, to avoid resource contention and security issues. On Kubernetes, this can be accomplished by specifying taints and tolerations to restrict what pods can be scheduled to those nodes.

1. Use StatefulSets and Persistent Volumes in Kubernetes [2]

1. Mount Secrets as volumes, not enviroment variables [3]

1. Set memory limits and requests for all containers [3]

1. Close all idle keep-alive sockets [3]

1. Containers have Readiness probes set, so requests are not sent unless it's known to be ready. Otherwise, kubelet causes error sending traffic as soon as the container starts.

1. Containers have a passive Liveness probe.

1. App retries connecting to dependent services, using a back-off algorithm to avoid floods.

1. Prevent containers from running as root.

1. Ensure there’s always a Consul client available to manage sidecar proxies. On Kubernetes, run Consul clients as resource type DaemonSet to guarantee that one client pod runs on each node in the cluster. On VMs??? 

1. Enable verbose logging mode to trace activities within the application.

1. Use a daemon on each node to collect logs (instead of sidecars)

1. Use a log aggregation tool to ship logs to a separate location accessible only by a special account.

1. Obtain snapshots regularly from running databases

1. Use High Availability configurations to be resiliant when an entire Availability Center goes offline.

1. Use a policy to reject cloud resource creation without tags specifying metadata (dev vs. prod, product, etc.)

1. Use Multi-region

1. High Performance

1. Install Observability Tools (Datadog, Promethius, etc.)

1. Failure detection

1. Create test data based on dispersion patterns identified in production data (rather than copying production data for test use)

1. Version database structure definitions and use utilities which enable back-off restore in case of version migration failure.

1. Conduct Proof of Scalability

1. SOC (Security Operations Center)

1. Percentage and Blue/Green Deployments (without downtime), ensuring that only one version of the application runs, reducing the complexity of handling multiple concurrent versions.

1. Alerts based on log contents

1. Automated Escalation (Splunk Online or PagerDuty)

1. Monitor and predict resource consumption trends -- disk space and RAM have maximums.

   The audit policy of each Kubernetes cluster at <tt>/etc/Kubernetes/audit-policy.yaml</tt> -- how do you customize it?

1. Automated Remediation

1. Audit Logs Regularly -- On Linux systems, contents stored within <tt>/var/log/audit.log</tt> 



## Conduct Chaos Engineering

To see whether your organization is "production ready", conduct experiments to reveal vulnerabilities so that your organization improves its reliability and minimize down-time.

Schools conduct "fire drills" to ensure that students know how to evacuate the building in an orderly basis. Hospital emergency rooms conduct drills to ensure they have tools and procedures in place for various conditons, to see whether they are ready to handle emergencies with minimal mistakes and stress. 

Security professionals conduct what they call "TableTop Exercises during Game Day".

There is software available to help you plan and execute Chaos Engineering experiments.

   * Gremlin

   * https://harness.io/demo/chaos-engineering
   <br /><br />

It's called "Chaos Engineering" to emphasize a process that is well-planned and thoroughly executed. Here is a rough outline of the steps:

   1. Examine a <a href="#ChaosIdeas">list of possible vulnerabilities seen in other systems</a>, and note how others improved their risk posture. Vendors have a public "Chaos Hub".
   
   2. Identify possible vulnerabilities in your own organization and systems, sorted by possible impact ("blast radius").

   3. Design experiments to expose each vulnerability identified. 

   4. Estimate <strong>costs</strong>, to sequence experimentation by the best probable  payback.

   5. Install methods to gather and display metrics (RTO and RPO), so that measurements of time and resources can be taken during each experiment. This include use of <a href="#ObservabilityTools">observability tools</a> so that attention is focused on problem-solving rather than data gathering when emergencies occur
   
   6. Inform the organization. Explain the metrics and calendar experiments.
   
   7. Run Chaos Experiments on your target systems to simulate real-world scenarios.
   
   8. Analyze results gathered during experiments to identify extent of vulnerabilities and actions from lessons learned to improve reliability.

   9. Decide on implementation based on a balance between likely impact and affordability of each proactive action.

The above is not a "once and done" event.
SOC2 and ISO27000 audits occur every year.


<a name="ObservabilityTools"></a>

## Observability Tools

A line graph for each metrics over time, by system layer:

* # Regions

* # Availability Zones

* # Clusters

* # Pod instances

* Sidecar (within Node) memory

* Node (app) memory

* Process within app memory

* Component (Storage) usage

* Cost of each cloud service, each month, each account

* Number of technical and business transactions each month (for cost per transaction)

* Number of deployment runs

* Speed of deplyments from commit to production usage

* RTO and RPO of each incident over time

* Availability percentage each day, week, month, quarter, year


<a name="ChaosIdeas"></a>

## Possible vulnerabilities, experiments, defenses

By system layer:

* Region

* Availability Zone

* Cluster

* Pod instance

* Sidecar (within Node)

* Node (app)

* Process within app

* Component (Storage)



## References

[1] https://www.analyticsvidhya.com/blog/2022/01/a-basic-guide-to-kubernetes-in-production/

[2] https://learning.oreilly.com/library/view/consul-up-and/9781098106133/ch02.html#idm46161650103072

[3] https://learnk8s.io/production-best-practices

[4] https://techbeacon.com/devops/one-year-using-kubernetes-production-lessons-learned says "Just using HAProxy (without an ELB) could also work, but you would have to work around dynamic AWS IP addresses on the DNS level."
