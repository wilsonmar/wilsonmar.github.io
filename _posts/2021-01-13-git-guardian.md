---
layout: post
title: "Git Guardian"
excerpt: "Full-featured free secret scanning for open source and small teams on GitHub and GitLab"
tags: [security,scanners]
date: "2021-01-13"
file: "git-guardian"
image:
# cyber-security-hero-1900x500-22924.jpb/.png 
  feature: https://user-images.githubusercontent.com/300046/103753295-19cf4680-4fc8-11eb-9c7a-d23d3c5c2d79.jpg
  credit: Paul Jerimy
  creditlink: https://pauljerimy.com/security-certification-roadmap
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This is a hands-on introduction to Git Guardian ("GG"), a utility to detect (monitor) API keys and other credentials and secrets exposed in source code on public SaaS or private (internal/on-prem) GitHub. 

{% include whatever.html %}

GG's documentation is published at<br /><a target="_blank" href="https://docs.gitguardian.com/internal-repositories-monitoring/home">https://docs.gitguardian.com/internal-repositories-monitoring/home</a>

PROTIP: Know the <strong>Glossary</strong> of technical terms before you dive into other docs, at:<br /><a target="_blank" href="https://docs.gitguardian.com/internal-repositories-monitoring/glossary">https://docs.gitguardian.com/internal-repositories-monitoring/glossary</a>

"Why" and FAQ questions are answered in a blog article that's also called "Learning Center" at<br />
<a target="_blank" href="https://www.gitguardian.com/secrets-detection">https://www.gitguardian.com/secrets-detection</a>.

All GG's source is kept under Github account<br />
<a target="_blank" href="https://github.com/GitGuardian">https://github.com/GitGuardian</a>.

PROTIP: Specific advice is provided on GG's<br />
<a target="_blank" href="https://github.com/GitGuardian/APISecurityBestPractices">
https://github.com/GitGuardian/APISecurityBestPractices</a> repository, which is in a zip file you get via email after you sign up to get their <a target="_blank" href="https://www.gitguardian.com/secrets-detection-whitepaper">whitepaper "Implementing Automated Secrets Detection for Application Security" at<br /><a target="_blank" href="https://www.gitguardian.com/secrets-detection-whitepaper">https://www.gitguardian.com/secrets-detection-whitepaper</a>

   * <a target="_blank" href="https://github.com/GitGuardian/APISecurityBestPractices/blob/master/Leak%20Mitigation%20Checklist.md">GG's Leak Mitigation Checklist and Good development practices page</a> is useful if you just leaked sensitive information in public source code. It lists what to do for each of the most common services: Alibaba, Algolia, AWS, DigitalOcean, Google, GitHub, GitLab, Heroku, HubSpot, Mailgun, SendGrid, Slack, Twilio, Twitter

   * <a target="_blank" href="https://github.com/GitGuardian/APISecurityBestPractices/blob/master/Good%20development%20practices.md">GG's Good development practices page</a> (leak prevention practices)


## Social

sales@gitguardian.com

At time of writing:

   * https://twitter.com/gitguardian?lang=en lists 814 followers

   * https://www.linkedin.com/company/gitguardian/ lists 36 employees:

People:

   * CEO <a target="_blank" href="https://www.linkedin.com/in/jeremy-thomas-gitguardian/">Jérémy Thomas</a> (<a target="_blank" href="https://github.com/oo-de-lally">oo-de-lally</a>) is based in Paris and San Francisco

   * Eric Fourier is co-founder.

   * https://twitter.com/PonicodeDev at #GitHubUniverse 2020.

   * <a target="_blank" href="https://www.linkedin.com/in/advocatemack/">Mackenzie Jackson</a> (@advocatemack), GG's Dev Advocate, wrote blog articles which are repeated in the website:
   1. <a target="_blank" href="https://blog.gitguardian.com/secret-sprawl/">https://blog.gitguardian.com/secret-sprawl</a><br />
   24 Jul 2020

In my blog article here, I wrote down the steps I took on my attempt at installing and making use of the GG web GUI and tools.

## Sign up and get API Key from your GG Dashboard

1. Use a browser to be at <a target="_blank" href="https://www.gitguardian.com/">https://www.gitguardian.com</a>

1. Click the blue "SIGN UP FOR FREE / Internal Monitoring".

1. Click "GitHub". ???

1. If you have a repository on GitHub account, specify it.

   <a name="Dashboard"></a>

1. Signing up adds a browser cookie to your account's dashboard at URL <a target="_blank" href="https://dashboard.gitguardian.com/">https://dashboard.gitguardian.com</a>

   Logic in the JavaScript would redirect your browser to your own account's dashboard.


   <a name="GetAPIKey"></a>

   ## Get API key

1. Click the <a target="_blank" href="https://dashboard.gitguardian.com/api">"API" icon</a> on the left menu of your GG Dashboard.
1. Scroll down to the bottom of the page for section title "Generate new API key".
1. In the Name field, type your name, such as "John Doe GUI test 1".
1. Click "Crate new API key" for an API key such as (for example):

   <pre>3BCBC45eb29EA7d6dEb4F7829Bd3e25cdefd43bac74eE0BEC83b7dC4705bE7c559aD0c8</pre>

   PROTIP: You don't need to save that key if you're only using the GUI page shown in the next section.

   Alternately, if you want to run a scan anywhere else than the GUI you're on, <a href="#SaveAPI">follow instructions below</a>, then return here.


   ## Other Integrations

1. Click the <a target="_blank" href="https://dashboard.gitguardian.com/integrations">"INTEGRATIONS" icon</a> on the left menu of your GG Dashboard.

   By default, you're installed to use GitHub.com SaaS.


   <a name="ScanSampleGUI"></a>

   ## Scan sample code on GUI Dashboard

   Get a taste of the response output by using the Dashboard to run a scan of GG's sample Python and JavaScript programming code containing AWS and MongoDb secrets.

1. Click the "+" at the top of your Chrome browser window to open another browser window to the GG'-provided sample Python program files containing AWS and MongoDb secrets at:

   <a target="_blank" href="https://github.com/GitGuardian/sample_secrets/blob/main/bucket_s3.py">https://github.com/GitGuardian/sample_secrets/blob/main/bucket_s3.py</a>

1. Click "Raw", click on any line of the file. Press control+A to select all. Press control+C to copy what has been selected.

1. Switch back to the GG Dashboard.
1. Click the <a target="_blank" href="https://dashboard.gitguardian.com/api">"API" icon</a> on the left menu of your Dashboard.
1. Click within the blue box under title "Submit your text content" and press control+V to paste.
1. Click the blue "Scan".

1. Click the blue icon to the right of the "API response" field to copy GG's response (in JSON format).


   ### Review bucket_s3.py scan result

1. In an editor, create empty file <tt>bucket_s3.py.json</tt> and paste the result file in it...

   Notice the AWS Client Id and Client Secret in this line:

   <pre>database = aws_lib.connect("AKIAF6BAFJKR45SAWSZ5", "hjshnk5ex5u34565AWS654/JKGjhz545d89sjkja")
   </pre>

   Also notice the database username ("testuser") and password ("hub24aoeu") in this line:

   <pre>MONGO_URI = "mongodb+srv://testuser:hub24aoeu@gg-is-awesome-gg273.mongodb.net/test?retryWrites=true&w=majority"
   </pre>

   PROTIP: Pasting would remove line breaks:

   <pre>{"policy_break_count":2,"policies":["Secrets detection","File extensions","Filenames"],"policy_breaks":[{"type":"MongoDB URI","policy":"Secrets detection","matches":[{"type":"connection_uri","match":"mongodb+srv://testuser:hub24aoeu@gg-is-awesome-gg273.mongodb.net/test?retryWrites=true&w=majority","index_start":336,"index_end":432,"line_start":17,"line_end":17},{"type":"scheme","match":"mongodb+srv","index_start":336,"index_end":346,"line_start":17,"line_end":17},{"type":"username","match":"testuser","index_start":350,"index_end":357,"line_start":17,"line_end":17},{"type":"password","match":"hub24aoeu","index_start":359,"index_end":367,"line_start":17,"line_end":17},{"type":"host","match":"gg-is-awesome-gg273.mongodb.net","index_start":369,"index_end":399,"line_start":17,"line_end":17},{"type":"database","match":"test","index_start":401,"index_end":404,"line_start":17,"line_end":17},{"type":"query","match":"retryWrites=true&w=majority","index_start":406,"index_end":432,"line_start":17,"line_end":17}]},{"type":"AWS Keys","policy":"Secrets detection","matches":[{"type":"client_id","match":"AKIAF6BAFJKR45SAWSZ5","index_start":147,"index_end":166,"line_start":10,"line_end":10},{"type":"client_secret","match":"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","index_start":171,"index_end":210,"line_start":10,"line_end":10}]}]}
   </pre>

   CAUTION: Responses contains secrets you don't want others to see (which is why we scanned GG's sample code).
   So please don't format to human-readable (indented) JSON using public web pages such as <strike>jsonformatter.curiousconcept.com</strike>.


   ### Review bucket_s3.py scan result

1. Repeat the above procedure, except use the contents at 

   <a target="_blank" href="https://github.com/GitGuardian/sample_secrets/blob/main/postgres_model.js">https://github.com/GitGuardian/sample_secrets/blob/main/postgres_model.js</a>

   Notice the secret in this line:

   <pre>var pg_pass="sup3rstr0ngpass1ForGG";</pre>

   There is also an in-line secret in this line:

   <pre>var mongo_uri = "mongodb+srv://testuser:hub24aoeu@gg-is-awesome-gg273.mongodb.net/test?retryWrites=true&w=majority";
   </pre>

   The result:

   <pre>{"policy_break_count":2,"policies":["Secrets detection","File extensions","Filenames"],"policy_breaks":[{"type":"MongoDB URI","policy":"Secrets detection","matches":[{"type":"connection_uri","match":"mongodb+srv://testuser:hub24aoeu@gg-is-awesome-gg273.mongodb.net/test?retryWrites=true&w=majority","index_start":136,"index_end":232,"line_start":6,"line_end":6},{"type":"scheme","match":"mongodb+srv","index_start":136,"index_end":146,"line_start":6,"line_end":6},{"type":"username","match":"testuser","index_start":150,"index_end":157,"line_start":6,"line_end":6},{"type":"password","match":"hub24aoeu","index_start":159,"index_end":167,"line_start":6,"line_end":6},{"type":"host","match":"gg-is-awesome-gg273.mongodb.net","index_start":169,"index_end":199,"line_start":6,"line_end":6},{"type":"database","match":"test","index_start":201,"index_end":204,"line_start":6,"line_end":6},{"type":"query","match":"retryWrites=true&w=majority","index_start":206,"index_end":232,"line_start":6,"line_end":6}]},{"type":"Generic Database Assignment","policy":"Secrets detection","matches":[{"type":"host","match":"gitguardians.com","index_start":31,"index_end":46,"line_start":2,"line_end":2},{"type":"port","match":"9082","index_start":48,"index_end":51,"line_start":2,"line_end":2},{"type":"username","match":"root","index_start":74,"index_end":77,"line_start":3,"line_end":3},{"type":"password","match":"sup3rstr0ngpass1ForGG","index_start":94,"index_end":114,"line_start":4,"line_end":4}]}]}</pre>


   ### Incidents

1. Click the "INCIDENTS" icon at the left menu on your GG Dashboard.

   Note that text scanned in the GUI doesn't count as incidents of secrets found.


   ## Scan my own (vulnerable) repos

1. Click the <a target="_blank" href="https://dashboard.gitguardian.com/perimeter">"PERIMETER" icon</a> at the left menu on your GG Dashboard.

1. Click "ADD SOURCES" if you want to specify more repositories to scan.

   I specify to repos which were created to contain vulnerabilities, including secrets:

   WebGoat

   DVWA

   See my website at <a target="_blank" href="https://wilsonmar.github.io/webgoat/">https://wilsonmar.github.io/webgoat</a>

1. PROTIP: Start a stopwatch to time how long it takes.
1. Click the blue "Launch scan" button.
1. Watch and click your stopwatch when "100%" appears next to "REAL TIME MONITORING".

   ![git-guardian-protection-415x310](https://user-images.githubusercontent.com/300046/104537259-e0559700-55d6-11eb-94e9-9cd0a6dbc0d5.png)

   NOTE: Sources are removed from the list after scanning.

1. Below the "HEALTH" drop-down, click the arrow next to the list.
1. Check or uncheck the type of health determined for each source to be displayed.

   ![git-guardian-health-status-213x261](https://user-images.githubusercontent.com/300046/104546750-20724500-55ea-11eb-98bc-445494136c39.png)

   NOTE: Icons under "PROTECTION" identify whether each source is being monitored.

1. Mouse over or click the time icon to see a pop-up of the date/time of last scan.


   ### Open email "uncovered secrets"

1. In your email client, open the email from "support@gitguardian.com" with subject 

   <pre>The scan of __ repositories uncovered secrets</pre>

1. Click a repo listed under "repository is affected:" to open the repo on your default browser.

   QUESTION: "17 secrets"???



   ## Try Business Collaboration Pricing

1. View the comparison of plans at <a target="_blank" href="https://www.gitguardian.com/pricing">https://www.gitguardian.com/pricing</a>. 

   PROTIP: GG scanning is free on SaaS for open source and up to 25 developer teams. 

   "STANDARD" "Business" accounts are <strong>$434 per month per developer</strong>, or $1667/month for 100 developers after a 30-day trial.

1. View the comparison of plans at <a target="_blank" href="https://dashboard.gitguardian.com/settings/workspace/general">SETTINGS > General</a>. 

   PROTIP: The free plan has a limit of 1,000 (1K) calls per month.<br />
   The "BUSINESS" plan has a limit of 10,000 (10K) calls per month.

   Notice the difference between FREE and "BUSINESS" GG accounts is the<br />
   "<strong>Private</strong> collaboration repositories".

   "Collaborative" repos have "Teams" on the organization's menu:

   ![github-teams-566x55](https://user-images.githubusercontent.com/300046/104537170-aa181780-55d6-11eb-88fa-830b00c3d519.png)

   Within a Team is this menu with Members and Repositories associated with that Team:

   ![github-team-repo-menu0907x63](https://user-images.githubusercontent.com/300046/104538969-06c90180-55da-11eb-967d-51488443c296.png)

1. Start your business trial at <a target="_blank" href="https://dashboard.gitguardian.com/settings/workspace/general">SETTINGS > General</a> by clicking the blue "Start 30-day trial" button.

   PROTIP: Git-guardian does not ask for your credit card up-front.

   <a name="BusinessPlan"></a>

   A <strong>Business plan</strong> enables you to more run options:

   * <a href="#InvokeFromCLI">Invoke locally using CLI</a>

   * <a href="#LocalPreCommit">Use local Git Hooks to run on Pre-commit</a>

   * <a href="#ConfigureOnprem">Scan repos in on-prem GitHub Enterprise instance</a>

   * <a href="#GitHubActions">Install and run on Github Actions</a>

   * https://github.com/GitGuardian/gg-shield#circle-ci


   <a name="InvokeFromCLI"></a>

   ## Invoke from CLI scan of github.com repos


   ### Edit $HOME/.env file

1. Highlight and copy these two lines into your Clipboard.

   <pre>GITGUARDIAN_API_KEY=__________FILL ME__________
   GITGUARDIAN_API_URL=https://api.gitguardian.com/
   </pre>

   The API_URL stays the same.

1. In the editor, also open file <strong>.env</strong> in your laptop's Home folder.
   
   If the file doesn't already exist, create a new file with that name.

1. In the .env file, position your cursor at the end of the file and paste from Clipboard.

1. Save the file.

   NOTE: https://github.com/GitGuardian/gg-shield#installation mentions addition variables:

   <pre>GITGUARDIAN_DONT_LOAD_ENV: If set to any value environment variables won't be loaded from a file.
GUARDIAN_DOTENV_PATH: If set to a path, `ggshield` will attempt to load the environment from the sp
   </pre>


   <a name="SaveAPI"></a>

   ## Save API to invoke from CLI scan of github.com repos

1. Follow the steps <a href="#GetAPIKey">described in the section above</a>.

1. With your editor open on file <tt>.env</tt>, highlight "__________FILL ME__________" and replace it with your invisible Clipboard.

   QUESTION: GG_API_KEY="123456789..." ???

   Alternately, if you are running on GitHub Actions, navigate to your project settings and paste the GITGUARDIAN_API_KEY secret there.

1. Save the file.


   ### Run

1. Open a Terminal window.

1. You can run my script that does all the following:

   <pre>sh ???.sh</pre>


   ### Install and update using pip

1. Install Python 3.6 and newer

1. In Terminal, navigate to the folder obtained from GitHub.

1. Check if pipenv

   <pre>pipenv update</pre>

   If that is valid, install gg-shield using pipenv

   <pre>pipenv install ggshield</pre>

   Alternately, 

   <pre>pip install ggshield</pre>

1. Check if using virtualenv:

   <pre>pyenv shell</pre>


   ### The API

   The APIs called are defined at <a target="_blank" href="https://api.gitguardian.com/docs">https://api.gitguardian.com/docs</a> which provides an on-line API specification and Authentication description.

   QUESTION: Swagger?



   <a name="LocalPreCommit"></a>

   ## Use local Git Hooks to run on Pre-commit

   Now that ggshield is installed:

1. Verify

   <pre>ggshield -v
   </pre>

1. Install git pre-commit hooks in local (not global) mode:

   <pre>ggshield install -m local
   </pre>

1. Run the last build in CI, with defaults:

   <pre>ggshield scan ci
   </pre>





   ## Run GitHub Actions

   To invoke on a server from the GitHub Actions Marketplace at <a target="_blank" href="https://github.com/marketplace/actions/gitguardian-shield-action">https://github.com/marketplace/actions/gitguardian-shield-action</a>


1. In Terminal, create/navigate to a folder holding repositories created/cloned.


   ### Manual run steps

1. In Terminal, create/navigate to a folder holding repositories created/cloned.

1. Obtain GG's repo:

   <pre>git clone https://github.com/GitGuardian/py-gitguardian.git && cd py-gitguardian
   </pre>

   https://github.com/GitGuardian/py-gitguardian/blob/master/examples/content_scan.py

   https://github.com/GitGuardian/py-gitguardian/blob/master/examples/directory_scan.py




## Invoke scanning of public repo

[1] For running on a public Github.com repo, GG has a secrets scanning API library (written in Python 3.5+) at<br />
<a target="_blank" href="https://github.com/GitGuardian/py-gitguardian">https://github.com/GitGuardian/py-gitguardian</a>

The README says GG scans for "200 types of secrets".


<a name="GitHubActions"></a>

## Install and run on Github Actions

Source code for the GG scanning engine CLI code is at<br />
<a target="_blank" href="https://github.com/GitGuardian/gg-shield">https://github.com/GitGuardian/gg-shield</a>

It is invoked either locally on your laptop or invoked from 
GitHub Actions Marketplace at <a target="_blank" href="https://github.com/marketplace/actions/gitguardian-shield-action">https://github.com/marketplace/actions/gitguardian-shield-action</a>

1. Create an API key on the API Section of your <a href="#Dashboard">GG dashboard</a>.

   ### Configure your .gitguardian.yml

   To configure your <tt>.gitguardian.yml</tt> file:

1. View the contents based on the contents of the file at <a target="_blank" href="https://github.com/GitGuardian/gg-shield/blob/main/.gitguardian.example.yml">https://github.com/GitGuardian/gg-shield/blob/main/.gitguardian.example.yml</a>

1. Click "Raw", click on any part of the file, press control+A, 

1. Add line(s) under <tt>paths-ignore</tt> to specify wild cards (*) 


GG is run using GitHub Actions invoking<br />
<a target="_blank" href="https://github.com/GitGuardian/gg-shield-action">https://github.com/GitGuardian/gg-shield-action</a>



<a name="ConfigureOnprem"></a>

## Run within on-prem GitHub Enterprise instance
 
   GitGuardian Private Repository Monitoring is a Kubernetes application. You can install the software on an existing cluster or use our installer that has an embedded, production-ready Kubernetes distribution packaged with it.
   See https://docs.gitguardian.com/internal-repositories-monitoring/self_hosting/replicated_installation
   
1. Setup Single Sign On (or SSO) allows you to manage your workspace authentication and membership via a third-party identity provider.

1. Install GG app on your GitHub Enterprise on-prem. server.

   GitGuardian integrates with GitHub Enterprise instance through a GitHub app that we need you to create.
   GG enables you to do so programmatically via GitHub manifest. 
   This will ensure that your GitHub App is created with all the appropriate rights. 

1. Provide GG with your GitHub Enterprise url.
   

   ### Create a service account email and GitHub service account

   WARNING: The GitHub app will be owned by the GitHub user who created it. We therefore recommend that you subsequently transfer ownership of the GitHub app to a bot user or a GitHub organization.

   Once created, you will be prompted to install the GitHub app on the GitHub organization of your choice. The installation flow even allows you to individually select repositories that you would like to give GitGuardian access to!



## QUESTION: Adding custom scanning rules



## QUESTION: Enterprise-wide Trend analysis

