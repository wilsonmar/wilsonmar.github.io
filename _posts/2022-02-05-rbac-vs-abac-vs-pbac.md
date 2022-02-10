---
layout: post
title: "RBAC vs ABAC vs PBAC (Access Control)"
excerpt: "Role, Attribute, and Policy  Based Access Control simplify IAM at scale using the most fine-trained way access in AWS, Azure, Kubernetes, and other systems"
tags: [aws, security, management]
date: "2022-02-05"
file: "rbac-vs-abac-vs-pbac"
image:
# python-samples-1900x500.jpg
  feature: https://user-images.githubusercontent.com/300046/145717691-60b8c765-e0a3-4d63-bf7f-0cb89492c0ee.png
  credit: An Athlete Wrestling with a Python (1877) by Sir Frederic Leighton (1830-1896) at the Tate, London
  creditlink: https://www.wikiwand.com/en/An_Athlete_Wrestling_with_a_Python
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

RBAC, ABAC, and PBAC are NOT service offerings from any one cloud vendor, but <strong>design approaches</strong> to Access Control. So there are differences in how to operate under each approach in AWS vs Azure vs Kubernetes, etc.

If you're working in a large enterprise, you need a way to meet GRC (Governance, Risk management, and Compliance) requirements in a way that is also more secure and scalable.

As an organization increases in size, it becomes increasingly difficult for overseers of IT management accounts who <strong>operate away from the day-to-day</strong> technical teams and business managers. When "out of the loop", administrators need to "rubber stamp" key authorization requests. The larger the organization, the greater distance between those in leadership roles and those in IT. And business leaders become more dependent on the IT department.

PROTIP: One innovative approach is to enable business leaders to participate in security configurations by providing them an <strong>easy way to specify rules about access</strong>. That's called <a name="PBAC">PBAC (Policy-Based Access Control)</a> -- the result of a progression from RBAC and ABAC.


## "Role Explosion" in "Traditional" RBAC

Enterprise IAM managers and architects who manage thousands of roles controlling access to hundreds of users.

Do they face "role explosion" toil?

<a target="_blank" href="https://www.youtube.com/watch?v=673ARahq2wI&t=15m23s" title="Okta and AWS: Making it Easier to use Workforce Identity in the AWS Cloud Apr 9, 2021">VIDEO</a>: 
Traditional RBAC is problematic at scale when each team has similar (but different) resources such that <strong>Role Assertions</strong> and <strong>Policy Sets</strong> are established for each team which are near identical except for resource identifiers.

<a target="_blank" href="https://www.comparitech.com/net-admin/rbac-vs-abac/">There are</a> four levels of role-based access control that can be implemented:

   * Flat RBAC – All users and permissions are assigned roles. A user must take on a role to obtain the permissions needed. As a consequence, a user can be assigned multiple roles to have multiple permissions. Roles can be assigned to multiple users.

   * Hierarchical RBAC – Adds a hierarchy to the role structure that sets out relationships between roles. Higher seniority roles acquire the permissions of junior roles.

   * Constrained RBAC – Adds a separation of duties so that multiple users must complete a single task to ensure that no malicious changes can be made to your system.

   * Symmetric RBAC – Permissions associated with each role are reviewed periodically. An administrator can pull permissions from one user and then reassign them to another individual.


## Less Toil with ABAC?

ABAC grants access is based on matching attributes (tags) associated with each user.

The transiton from RBAC to ABAC is the rare case where administration after scaling and improving security is less work than before. It's actually less toil to <a href="#OnboardUsers">onboard users and groups to ABAC</a> 
or <a target="_blank" href="https://blog.plainid.com/the-advantage-of-pbac-over-the-traditional-abac">PBAC (Policy-Based Access Control)</a>

It takes a bit of work to transition <a href="#RBAC">away from RBAC (Role-Based Access Control)</a>.
So if you're starting out small on AWS, using ABAC from or PBAC the beginning would be a wise move.

With ABAC, only <strong>one set</strong> of Role Assertions and Policies is defined to control several similar teams. Each resource is tagged (red or blue in the diagram) to designate ownership and access by a team (rather than updating Policies). 

The ABAC approach saves time and increases security at the same time because permissions for each user is a on-going dynamic situation, so automated <strong>Context Rule Triggers</strong> would reduce manual toil (and mistakes) <a target="_blank" href="https://www.youtube.com/watch?v=673ARahq2wI&t=18m48s" title="Okta and AWS: Making it Easier to use Workforce Identity in the AWS Cloud Apr 9, 2021">throughout the lifecycle of joiners, movers, and leavers</a>:<br /><img width="1304" alt="abac-lifecycle-2808x920" src="https://user-images.githubusercontent.com/300046/152660140-fab949ca-da78-499e-827d-dcf1c68669d5.png">

<a target="_blank" href="https://www.youtube.com/watch?v=cgTa7YnGfHA&t=1m19s" title="from US NIST (National Institute of Standards and Technology) National Cybersecurity Center of Excellence">VIDEO</a>:
With ABAC, Polices apply across all projects, including projects which don't yet exist. For example, they can create an Attribute-based Policy where access is granted only when values of the attributes for both subject and object have an identitcal match. This single Project ensures that only the users assigned to the Project can get access to files of that project. Another policy can be established so only auditors get access to sensistive financial data.
<a target="_blank" href="https://user-images.githubusercontent.com/300046/152665796-2b93751b-6f48-4d64-9203-d054ee42ae94.png"><img width="1631" alt="abac-projects-3262x1836" src="https://user-images.githubusercontent.com/300046/152665796-2b93751b-6f48-4d64-9203-d054ee42ae94.png"></a>


## Concerns about ABAC & XACML

A. The dynamic nature of ABAC makes it more difficult for security and regulatory compliance auditing. While auditors of RBAC can just look at privileges each user has been assigned, ABAC you’re rarely able to look up users and see what they have permission to access, as you’d have to check each object against the access policy.

B. Although ABAC works with AWS Secrets Manager and S3, at time of writing, <strong>ABAC does not work with all AWS services</strong>.

B. Although ABAC controls bucket objects and folders, it cannot control individual buckets.

C. Decisions about a user’s access under ABAC is defined using <a target="_blank" href="https://blog.plainid.com/beginners-guide-to-xacml">XACML</a> (Extensible Access Control Markup Language) which uses Boolean logic following an IF, THEN format. XACML is a complex, dated language which requires expert skills. This can make ABAC development a error-prone and time-consuming process. 

   XACML is outdated today in that it was first approved in 2003, with version 3.0 in use since 2013.
   XACML was created  to be a standard language for businesses’ -- 
   XACML was designed to control <strong>networking</strong> Authorization <strong>across-the-board</strong> rather than for policies applicable to each specific points of access (email, Internet, etc.). 

D. XACML was defined by OASIS (owned by technical companies) for coding by development teams rather than business owners or compliance teams.

<a name="PBAC"></a>

## PBAC

The concent of PBAC (from <a target="_blank" href="https://www.plainid.com/">PlainID.com</a>) is to use a more "human friendly" or "business friendly" language to code policies which provide more visibility into the relationship between identities and resources.

<a target="_blank" href="https://csrc.nist.gov/CSRC/media/Events/Privilege-Management-Workshop/documents/PvM-Model-Survey-Aug26-2009.pdf">"A Survey of Access Control Models" from US NIST (PDF)</a> concluded:

> “PBAC is an emerging model that seeks to help enterprises address the need to implement concrete access controls based on abstract policy and governance requirements.”

 
This is because PBAC is an <strong>automatic process</strong> (requiring much less manual toil than RBAC).


## Azure ABAC vs RBAC 

   * <a target="_blank" href="https://www.youtube.com/watch?v=4v7ffXxOnwU" title="Nov 6, 2020">
   AZ-900 Episode 28 | Azure Role-based Access Control (RBAC)</a>

In Azure, a Role is a collection of Actions that the assigned identity will be able to perform.
A Role answers the question "What can be done?"

PROTIP: Azure allows only up to 2,000 Role assignments per account.

https://www.youtube.com/watch?v=xUUxxtgcRzw" title="Jun 18, 2021">
Manage access to Azure resources at scale using Attribute Based Access Control (ABAC)</a>
by Azure Power Lunch


<a target="_blank" href="https://www.youtube.com/watch?v=1OBi93apLdo" title="Sep 26, 2019">
Azure RBAC : The deep dark secrets of role based access control</a>
by KnowOps

<a target="_blank" href="https://www.youtube.com/watch?v=qFoHDTxkQII">
Azure Role-Based Access Control Deep Dive</a>

<a target="_blank" href="https://www.youtube.com/watch?v=Lng6Xz1gBGs">
The dangers of role-based access control (RBAC)</a>
Infosec


## And Okta Identity Source too

Okta is very common within enterprises. The Applications Okta manages span many vendors (AWS, Azure, Office365, Google Workspace (Gmail), Box, Atlassian, Zoom, Slack, Workday, etc.). 
<a target="_blank" href="https://www.youtube.com/watch?v=673ARahq2wI&t=9m13s" title="Okta and AWS: Making it Easier to use Workforce Identity in the AWS Cloud Apr 9, 2021">VIDEO</a>: Provisioning settings of a Base URL, API Token, Import Groups. 

The Okta GUI accessed by users lists a "chicklet" for each application??? managed by Okta.

Click on the AWS app chicklet to open AWS SSO.

In AWS SSO, select a <strong>Permission Set</strong>, which opens an AWS Management Console GUI.

Assignment of People and Groups. Within AWS SSO, users are manually Enabled/Disabled.

<a target="_blank" href="https://www.youtube.com/watch?v=4v9P-UQKIMw&t=11m40s" title="ABAC with AWS SSO and Okta Universal Directory by Yuri Duchovny (AWS Solutions Architect) Nov 25, 2020">
VIDEO</a> (by <a target="_blank" href="https://www.linkedin.com/in/yuri-duchovny-3206604/">Yuri Duchovny</a>): Okta is an "External Identity Source", where users and groups are administered for AWS SSO to reference when authenticating access.

<a target="_blank" href="https://www.youtube.com/watch?v=XW5amgAuRIo&t=11m40s" title="Feb 25, 2020">
How to Use Azure Active Directory (AD) with AWS SSO</a> and 
<a target="_blank" href="https://www.youtube.com/watch?v=3CJsAVVz49o" title="May 28, 2020">
Using AWS SSO with Okta, Active Directory, and AWS SSO Identities<a> - <a target="_blank" href="https://aws.amazon.com/events/online-tech-talks/">AWS Online Tech Talks</a>

<a target="_blank" href="https://www.youtube.com/watch?v=Iq_hDc385t4">VIDEO:
AWS re:Inforce 2019: Scale Permissions Management in AWS w/ Attribute-Based Access Control (SDD350)</a>

<a target="_blank" href="https://www.youtube.com/watch?v=673ARahq2wI">VIDEO:
Okta and AWS: Making it Easier to use Workforce Identity in the AWS Cloud</a>
by Okta

<a target="_blank" href="https://www.youtube.com/watch?v=4v9P-UQKIMw&t=12m54s" title="ABAC with AWS SSO and Okta Universal Directory by Yuri Duchovny (AWS Solutions Architect) Nov 25, 2020">
VIDEO</a>: Okta IdP SAML Response file (in XML format), Okta Admin GUI.


<a target="_blank" href="https://www.youtube.com/watch?v=673ARahq2wI&t=17m49s" title="Okta and AWS: Making it Easier to use Workforce Identity in the AWS Cloud Apr 9, 2021">VIDEO</a>: 
Okta sends SAML Authentication assertions using SCIM sync protocol to make ABAC asserts to AWS SSO.
<a target="_blank" href="https://user-images.githubusercontent.com/300046/152659518-e81b3321-3971-4963-bf31-a08e2ed499da.png"><img width="1110" alt="abac-okta-2220x1130" src="https://user-images.githubusercontent.com/300046/152659518-e81b3321-3971-4963-bf31-a08e2ed499da.png"></a>

<a target="_blank" href="https://www.youtube.com/watch?v=673ARahq2wI&t=21m30s" title="Okta and AWS: Making it Easier to use Workforce Identity in the AWS Cloud Apr 9, 2021">VIDEO</a>: <a target="_blank" href="https://www.youtube.com/watch?v=dT_2HilqIfY&t=1m39s" title="Okta Workflows and AWS Single Sign On Apr 7, 2021">DEMO</a>: 
The <a target="_blank" href="https://www.okta.com/blog/2021/04/okta-amazon-web-services-aws-automate-aws-sso-with-okta-workflows/" title="April 2, 2021">"Okta Workflows Connector for AWS SSO"</a> (with Pre-built Okta Workflows like <a href="#" title="If This Then That">IFTTT<a>) uses a drag-and-drop GUI to design actions within Okta which call AWS APIs to automatically manipulate Entitlements (Accounts and Permission Set):
<a target="_blank" href="https://user-images.githubusercontent.com/300046/152665382-c7ddb252-0cd8-4edd-9177-780c90f529c0.png"><img width="1031" alt="okta-Workflows Connector for AWS SSO=2062x1398" src="https://user-images.githubusercontent.com/300046/152665382-c7ddb252-0cd8-4edd-9177-780c90f529c0.png"></a>

<a target="_blank" href="https://www.youtube.com/watch?v=iM5_1UtKwEI">
Integrating Okta with AWS SSO in AWS Control Tower</a>



<a name="DesignTags"></a>

## Attribute (Tag) Design

The "Attribute" in ABAC refers to adding <strong>Tags</strong> which the system references when determining authorization based on <strong>condition</strong> statements in a <a target="_blank" href="https://www.youtube.com/watch?v=4v9P-UQKIMw&t=9m58s">Permissions Policy file in JSON format</a>.

A particular user obtains permissions (such as in Production) when an administrator adds a Tag to the user's account. 

??? The AWS Role (such as AWSDeveloper, Tester, Operator, etc.).

In the GUI

In CloudFormation ...

In Terraform ...


<a name="GroupsDesign"></a>

## Groups Design

<a target="_blank" href="https://www.youtube.com/watch?v=4v9P-UQKIMw" title="Nov 25, 2020">VIDEO</a>:
Administrators use <strong>AWS Single Sign-on</strong> GUI to 
assign to each User/Group name its Permission Sets (Okta Group).

Sample groups segregate by traditional human organization boundaries such as:
   * AWSDevelopers
   * AWSNetworkAdmins
   * AWSSecurityAudit
   * AWSSupport
   <br /><br />

PROTIP: In advanced organizations, an individual may wear several hats (Developer, SRE, Tester, etc.).

[8:04] "Updated by" SCIM (System Cross-domain Identity Management) Provisioning.


<a name="OnboardUsers"></a>

## Onboarding Users in AWS

https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_attribute-based-access-control.html
AWS BLOG: What is ABAC for AWS?



https://www.youtube.com/watch?v=Iq_hDc385t4
https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html
AWS BLOG: IAM JSON policy elements: Condition

https://www.youtube.com/watch?v=DidR5ALzR2E



https://www.youtube.com/watch?v=wdsp7BNmJRc


https://www.youtube.com/watch?v=FX1nx_R31Tg

https://www.youtube.com/watch?v=gskKUIa0_6A

https://www.youtube.com/watch?v=qLDY2W2Na0g

https://www.youtube.com/watch?v=Iq_hDc385t4

https://www.youtube.com/watch?v=TnCPJUV9RnA

## In Azure

https://www.youtube.com/watch?v=aO6j68USsfY
Azure

## In Cloudera

https://www.youtube.com/watch?v=ndsjBT5slXc


## In Web3

https://www.youtube.com/watch?v=m2ksemtAB10
Attribute-Based Access Control in Hyperledger Fabric a Blockchain Platform Access control decisions can be made by chaincode ...


<hr />

## References

<a target="_blank" href="https://www.youtube.com/watch?v=BBu5WCNR_eI">
1-Minute IAM Lesson</a>
by Cloud Bart

https://www.strongdm.com/blog/rbac-vs-abac
by Maile McCarthy
January 5, 2022


