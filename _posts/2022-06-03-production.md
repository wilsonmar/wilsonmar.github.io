---
layout: post
title: "Get to Production (with less stress)"
excerpt: "Specific strategies and procedures to address concerns, on schedules, with metrics,"
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

This article presents the opposite of warnings such as "this is for learning and not recommended for use in production".

Here are my notes on the question of "how to get into production?", which can be one of the most stressful times for systems people.

{% include whatever.html %}

<hr />

## Get to Production while Testing

If there is one piece of advice that DevOps practioners have it's this:

> PROTIP: While your team matures the application code, use that <strong>same timeframe</strong> to mature the operational procedures as well so you're not struggling at the end.

<a href="#[5]" title="24:07 into">This podcast</a> asked "what's one thing you wish you would have known sooner when it comes to running software in production?"

> "Pivoting your understanding of failure in terms of bugs, unforseen events failure in a system. ... Being less freaked out when it happens. Failure is the system giving you new information. There is an opportunity to improve. It is natural. ... It would have saved a lot of stress, to say 'failure is OK'."


## Corporate policies and procedures

There will be processes which some developers object to, even if it adds only a few seconds of wait time for developers.

This is why a mechanism is needed where a <strong>corporate policy</strong> is issued by an executive to specify where a way of working needs to occur to ensure security or other important aspect.

Evidence of policies and actual proof of procedure usage are examined by auditors who issue <a target="_blank" href="https://wilsonmar.github.io/soc2">SOC2 and ISO 27000</a> attestion letters which most prospective customers request from salespeople.


## Day 0, 1, 2, N

<a href="#[7]" title="">Articles such as this</a> 
sequence Go-To-Production activities according to a "Crawl, Walk, Run" approach:

<strong>Day Zero (Stage and Preparations)</strong>

* Confirmation of <a href="#Communications">communications with stakeholders</a>

* Deployment to Stage environment
* Administrators prove access to workflows
* Verfication of transactions with dependencies

* Chaos Engineering by NOC/SOC (Network and Security Operations Center):
* Deployment (Blue/Green) fallback
* Disaster Recovery trials (to prove RTO & RPO)

* Proving of Day N activities in Stage environment
* Scheduling for Day One, Two, etc.

<strong>Day One</strong>

* Administrator access
* Deployment (Blue/Green)

* Secret Key Initialization
* Data transfer

* User access provisioning
* First user transactions

<strong>Day Two</strong>

* Gradually larger user access

<strong>Day N</strong>

* Key Rotation
* DR Promotion
* Policy Maintainance cadence
* Application on-boarding

<hr />

<a name="Concerns"></a>

## Concerns

<a href="#Requirements">Requirements for Production</a> can be categorized by these reasons for concern, prioritized:

<a href="#Communications">A. Communications</a>
<a href="#Scheduling">B. Scheduling</a>

<a href="#Security">C. Security</a>
<a href="#Observability">D. Observability</a>

<a href="#DeployVelocity">E. Velocity</a>
<a href="#Scalability">F. Scalability</a>
<a href="#Resiliency">G. Resiliency</a>
<br /><br />

<hr />

<a name="Communications"></a>

## A. Communications

A reliable mechanism for identifying and communicating with <strong>all stakeholders</strong> is the fundamental capability of management. Mechanisms need to include ways to keep the list of stakeholders updated with changes.

Messaging needs to be crafted in order to avoid misunderstandings. Wording may need to be adjusted for different audiences.

Better cooperation is achieved when stakeholders are not surprised, do not feel excluded, and hold assumptions of positive intent. 

Ever more important in today's hostile world, quick and thorough communication is needed to achieve coordinated action.

PROTIP: Compile a complete <strong>list of stakeholders</strong>, what is important to each of them; what channels is preferred and the best time to reach. Such information is needed to craft a plan for what is communicated to them at different points in time.

PROTIP: Questionaires obtain input and <strong>opinion surveys</strong> over time elicit feedback necessary to expose "blind spots".

PROTIP: Regularly scheduled <strong>one-on-one conversations</strong> provide opportunities to clear the air on what might become festering resentments which reduce productivity.

PROTIP: A mechanism to track who has (or has not) responded to specific communications (read email, complete questionaire, answer feedback, attending training) provides a guage for the readiness of individuals and the whole organization for production affecting all users.

On-going communications enable go-to-production teams to know ahead of time whether key personnel and systems are available and ready.


<a name="Scheduling"></a>

## B. Scheduling

By definition, "production" is generally an on-going repetitive activity rather than a temporary project forging new ground developing systems.

Teams are stood-up to provide continuous (365/24/7) survailance vigilence, and perform emergency response and remediation. Such teams maintain <strong>regular schedules</strong> of activities.

NOC (Network Operations Center) and SOC (Security Operations Center) analyze logs to monitor for violations and enforce policies.

Disk space usage and component versions need to be monitored for upgrades.

Keys need rotation.


<a name="Security"></a>

## C. Security

Due to the prevalence of sophisticated nation-states holding private data for ransomware and cyberwarfare "killware", keeping data secure is top-of-mind. 

PROTIP: Systematically catalog your <strong>attack surfaces</strong> so you know how to minimize risks. That means "locking down" access to networks, apps, data. Ideally, security is built-in to the architecture and programming. 

During development work, systems can be restricted to specific IP addresses of just development team members' laptops. However, production systems require wider and more sophisticated access controls, such as "least privilege". Quick yet thorough <strong>on-boarding and off-boarding</strong> becomes more important as adoption grows.

The trick here is to establish the security necessary with minimal slow-down to development work. To build-in security mechanisms, they need to "shift left", such as RBAC policies, requiring pull requests to be authorized, and having applications emit logs when performing activities with security implications.

HashiCorp Nomad, Consul, Vault pragmatically build mechanisms around components to avoid apps rewrite while making enterprise integration achievable.



<a name="Observability"></a>

## D. Metrics

<strong>Dashboards</strong> of metrics over time provide people at all levels of an organization a way to make more informed (rational) decisions. 

The <a href="#Telemetry">Telemetry section below</a> lists some of the dozens of metrics advanced organizations collect.

Metrics can be external (such as SLAs with customers), or internal within a team (such as Error Budgets).
There are quantitative and qualitative metrics.

Security and other adverse events can happen suddenly. In today's complex world, it is not enough for people to occassionally glance at dashboards. So <strong>automated alerts</strong> and <strong>automatic remediations</strong> are necessary to respond in a timely manner.



<a name="DeployVelocity"></a>

## E. Velocity

Metrics about the velocity of events, such as Time from Commit to Production, reveal the <strong>payback</strong> from use of automated CI/CD pipelines and other efforts. By inference, the effectiveness of teamwork.

Balance rates of errors and human mistakes.



<a name="Scalability"></a>

## F. Scalability and Portability

These two can be grouped together as they ultimately come down to the same thing: maximizing cluster performance. The aim is to ensure that you continue to benefit from Kubernetes’ ability to self-heal nodes, autoscale any infrastructure and adapt to your expanding business, without taking a performance hit.



<a name="Resiliency"></a>

## G. Resiliency

Using Kubernetes in conjunction with GitOps can help enormously with disaster recovery, bringing MTTR down from hours to minutes. Even in the case of complete cluster meltdown, GitOps enables you to recreate your container infrastructure quickly and easily.


<hr />

<a name="Requirements"></a>

## Requirements for Production 

Here are some examples of requirements defined for production, roughly sequenced according to the development workflow:

1. Configure GitHub organizations to require <a target="_blank" href="https://wilsonmar.github.io/">GPG keys for verified commits</a>. This reduces the chance of roque commits by ensuring that each committer has control of the email address which identity is based.

1. Monitor and restrict use of CLI (perhaps using AWS Config) instead of versioned IaC.

   When all changes are performed only <strong>authorized</strong> people, approved, and tracked, rogue changes are minimized. Vault ensures authentication.

1. Limit "blast radius" from account loss by limiting the scope of actions permitted by each account.

   For example, only allow special accounts to delete and limiting read of sensitive information.

1. Dynamically generate user accounts and passwords instead of storing secrets (Consul Dynamic Secrets)

   This ensures that secrets are not available for malicious actors to steal.
   When secrets are stored on laptops, one click on a phising scam would result in loss of control.

1. Version Control Configurations files -- use a Git-based workflow (which some call "GitOps") so the "who, when, why" of each change is stored. 

   Waypoint?

1. Use CI/CD automation on laptops to automatically run scans.

1. Use CI/CD automation (such as Jenkins, CircleCI, GitHub Actions) to automatically conduct scans.

1. Run <a target="_blank" href="https://github.com/aquasecurity/kube-bench">kube-bench</a> CIS benchmark tests to ensure each cluster passes generic guidelines from the Center for Internet Security (CIS).

1. Specify the version, and confirm whether the latest version is being used. In today's hostile world, damage from immature versions is less than damage from not having bug fixes to improve security posture.

1. Disable metadata cloud providers metadata API exposing data to instances.[1]

1. Only use approved domain names in Ingress hostnames [1]

1. Enforce uniqueness in Ingress hostnames [1]

1. Automate end-to-end functional tests exercising GUI and APIs.

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


<a name="Telemetry"></a>

## Metrics Telemetry 

Added to a time-series database are:

* <strong>Logs</strong> emitted from apps is used to scan for issues (errors) after they occur. This enables analysis of patterns of activity over time. Centralized logging enables correlation of events happening at different parts of the system.

* <strong>Monitoring</strong> of resource usage (disk space, memory, etc.) (collected by agents) and response times (latency) are used to identify what conditions led up to an adverse event.

* <strong>Tracing</strong> is used to follow what happens in the system after a user makes a request

* <strong>Synthetic transactions</strong> such as logins are injected to provide readings from a consistent load over time.

* <strong>Observability</strong> is about characteristics inferred from metrics, to figure out why something is wrong.

They are used as the basis for alerts to be triggered.

<a name="Metrics"></a>

## Metrics graphed

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

* Availability percentage each day, week, month, quarter, year

* Peak, minimum, average RTO and RPO of incidents over time

* SLO/SLIs

   <a name="Ratios"></a>

   ### Ratios

* PROTIP: Financial analysts <a target="_blank" href="https://www.suredividend.com/ratios-metrics/#cash">make heavy use</a> of <strong>ratios</strong> to highlight the interaction between two metrics, such as the "Quick Ratio" of cash vs. receivables, Margin, Return on Assets, and other percentages. In IT, the custom ratios include "revenue per transaction", "downloads per user session", <a target="_blank" href="https://erikbern.com/2014/01/23/ratio-metrics.html">clicks per user</a>, etc.
https://cloud.google.com/monitoring/mql/examples#qlx-ratios

* Internal Error Budget. (popularized by Google SREs) are based

   SLI = Service Level Indicator (percent):

   SLI = ( good events / valid events ) * 100

   Error Budget = Allowable bad events

   Error Budget = 100 - SLI


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



## Conduct Chaos Engineering

To see whether your organization is "production ready", conduct experiments to reveal vulnerabilities so that your organization improves its reliability and minimize down-time.

Broadway shows conduct "dressed rehersals". Schools conduct "fire drills" to ensure that students know how to evacuate the building in an orderly basis. Hospital emergency rooms conduct drills to ensure they have tools and procedures in place for various conditons, to see whether they are ready to handle emergencies with minimal mistakes and stress. Security professionals conduct what they call "TableTop Exercises during Game Day".

> <a target="_blank" href="https://www.bigmarker.com/gremlin/Reducing-Trauma-in-Production-with-SLOs-and-Chaos-Engineering">VIDEO</a>: "We inject failure proactively to validate SLOs/SLIs"

There is software available to help you plan and execute Chaos Engineering experiments.

   * Gremlin

   * https://harness.io/demo/chaos-engineering
   <br /><br />

It's called "Chaos Engineering" to emphasize a process that is well-planned and thoroughly executed. Here is a rough outline of the steps:

   1. Examine a <a href="#ChaosIdeas">list of possible vulnerabilities seen in other systems</a>, and note how others improved their risk posture. Vendors have a public "Chaos Hub".
   
   2. Identify possible vulnerabilities in your own organization and systems, sorted by possible impact ("blast radius").

   3. Design experiments to expose each vulnerability identified. 

   4. Estimate <strong>costs</strong>, to sequence experimentation by the best probable  payback.

   5. Install methods to gather and display metrics (RTO and RPO), so that measurements of time and resources can be taken during each experiment. This include use of <a href="#Telemetry">telemetry tools</a> so that attention is focused on problem-solving rather than data gathering when emergencies occur
   
   6. Inform the organization. Explain the metrics and calendar experiments.
   
   7. Run Chaos Experiments on your target systems to simulate real-world scenarios.
   
   8. Analyze results gathered during experiments to identify extent of vulnerabilities and actions from lessons learned to improve reliability.

   9. Decide on implementation based on a balance between likely impact and affordability of each proactive action.

The above is not a "once and done" event.
SOC2 and ISO27000 audits occur every year.



## References

[1] https://www.analyticsvidhya.com/blog/2022/01/a-basic-guide-to-kubernetes-in-production/

[2] https://learning.oreilly.com/library/view/consul-up-and/9781098106133/ch02.html#idm46161650103072

[3] https://learnk8s.io/production-best-practices

[4] https://techbeacon.com/devops/one-year-using-kubernetes-production-lessons-learned says "Just using HAProxy (without an ELB) could also work, but you would have to work around dynamic AWS IP addresses on the DNS level."

<a name="[5]">[5]</a> https://open.spotify.com/show/0fGAMsISbRkwOpeQBIEx0H?si=573eb3ede11546ec PagerDuty's "Page it to the Limit".

<a name="[6]">[6]</a> [6] https://www.weave.works/blog/the-definitive-guide-to-kubernetes-in-production

<a name="[7]">[7]</a> https://www.hashicorp.com/resources/adopting-hashicorp-vault 

https://learn.hashicorp.com/tutorials/vault/production-hardening

https://learn.hashicorp.com/tutorials/consul/production-checklist

https://www.theguardian.com/lifeandstyle/2022/jun/05/how-to-make-good-decisions
