---
layout: post
title: "Serverless architecture"
excerpt: "Invisible ubiquitious server clouds across the land"
tags: [node, serverless]
image:
# feature: pic orange wm_mcnaughton_sunset_runner_1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622121/097d7550-0585-11e6-9543-27d45c2487c2.jpg
  credit: William McNaughton
  creditlink:
comments: true
---
<i>{{ page.excerpt }}</i>
<hr />

{% include _toc.html %}

This is a description the ecosystem around the Serverless computing concept and the Serverless Framework.

This is a follow-up to <a target="_blank" href="https://wilsonmar.github.io/aws-lambda-serverless/">my notes on creating a new Amazon Lambda serverless app running in the Amazon cloud</a>.


<hr />

The sentiment about servers is reflected in the wi-fi password
attendees of #ServelessConf type in:<br />
![serverless hateservers-452x183-70kb](https://cloud.githubusercontent.com/assets/300046/18171991/196045ae-7021-11e6-9848-ce272fa8366d.jpg)


## Serverless = FaaS

"Serverless" refer to an architectural style called
<strong>FaaS</strong> (Function as a Service) where programming 
code are independently deployed and run on a cloud system rather than on-premises servers.
The developer simply uploads the source code, 
then leave it to pros at the cloud provider to take care of 
security, monitoring, disk space management, log management, 
scaling, redundancy, backup, crash reporting, etc..

Zero system administration by the developer.

It's a fast route to get apps in production.

PROTIP: It's still up to developers to do testing and 
performance measuring and tuning.
Use of multi-tenancy makes for response-time variation.
So do sythentic transactions outside the cloud vendor to monitor user experience,
and to keep your app in cache to avoid process start-up after sleeping.

Mike Roberts at <a target="_blank" href="http://martinfowler.com/articles/serverless.html">
   http://martinfowler.com/articles/serverless.html</a>
wrote
   "Depending on the circumstances, such systems can significantly reduce operational cost and complexity at a cost of <strong>vendor dependencies</strong> and (at the moment) immaturity of supporting services."


### Database idle costs money! #

   "You never pay for idle" Austen says 
   in an interview with by CloudAcademy <a target="_blank" href="https://www.youtube.com/watch?v=pvmx0IVfBLc">
   Introduction to the Serverless Paradigm</a> [23:50]

   PROTIP: But this is not true within AWS if you use DynamoDB, which Amazon touts as the default database.
   While Lambda does not incur charges while idle,
   DynamoDB instances do incur charges for data stored even though no data is read or written to it.

   PROTIP: On AWS use SimpleDB instead of DynamoDB for true no-cost idle.


## FaaS Providers

There is plenty of competition (to keep prices low).

PROTIP: The future of FaaS vendors isn't the front-end but the back-end services
that include API Gateways and 
Artificial Intelligence features such as image recognition,
text sentiment analysis, natural language process (NLP), 
and Machine Learning.

* <a href="#AWS">AWS (Amazon Web Services) Lambda</a>
* <a href="#Azure">Microsoft Azure Functions</a>
* <a href="#Google">Google Functions</a>
* <a href="#IBM">IBM Bluemix OpenWhisk</a>
* <a href="#IronIO">Iron.io for on-premises</a>. Ironically, Iron originated the term "serverless" in 2012.

## Frameworks

<a name="AWS"></a>

### AWS Lambda

The AWS Serverless Application Model (SAM) at
<a target="_blank" href="https://github.com/awslabs/serverless-application-model">
https://github.com/awslabs/serverless-application-model</a>
was announced Nov 2016
to define the SAM format
to build <strong>Cloud Formation templates</strong> that access Amazon API Gateway APIs, AWS Lambda functions, and Amazon DynamoDB tables needed by serverless applications. 

Two AWS evangelists created <a target="_blank" href="https://github.com/aws-samples/aws-developer-workshop/blob/master/INSTRUCTIONS.md">pre-built templates</a> 
with manual instructions, which they walked though in <a target="_blank" href="https://www.twitch.tv/events/PgC70I4pQoy14TP-RNS6Dw">30 minutes on Twitch.tv</a>:

1. [Get an AWS IAM User](/aws-iam/) with AWSCodeStarFullAccess.
2. Login the AWS Console to select region N. Virginia.
3. In <strong>AWS CodeStar</strong>. Start a project. Node.js. create role.
4. Choose a project template: 
   * Under Application Category select <strong>Web Application</strong>.
   * Under Programming Languages select <strong>Node.js</strong>.
   * Pick "Node.JS Web Application AWS Lambda (running serverless)".


<a name="Azure"></a>

### Azure Functions

Marketing information is at
<a href="https://azure.microsoft.com/services/functions/" target="_blank">
https://azure.microsoft.com/services/functions</a>

1. Create an Azure Storage account.
0. Search for "Function App" in the Azure Marketplace.
0. Click Create.
0. Provide an app name that's globally unique among all others public.

   .azurewebsites.net

0. Create or use a <strong>Resource Group</strong> to manage your similar functions as a group.
0. Select a Location closest to you.

   PROTIP: Include the location as a suffix in your app name.

0. Selection of Memory Allocation can be adjusted once you figure out how much after running
   a few times.
0. Create.
0. Click Refresh or the "bell" icon to see messages related.

0. After deployment, click the Resource Group, then the app name.
0. Click "Webhood + API" and JavaScript language (or C#).
0. Copy the Function URL and paste it in a browser.
0. Click Logs to see the history tracking.
0. Add a Parameter.


<a name="IBM"></a>

### IBM Bluemix OpenWhisk

<a target="_blank" href="https://developer.ibm.com/openwhisk/">
https://developer.ibm.com/openwhisk</a>

The advantage of IBM's hybrid-cloud approach is that one can use 
IBM's proprietary Bluemix UI
and then use command-line with OpenWhisk (which is open sourced).

![ibm-openwhisk-arch-720x168](https://cloud.githubusercontent.com/assets/300046/25739620/aa1efd38-3150-11e7-8f7f-9438274e48e4.png)


<a name="Google"></a>

### Google Cloud Functions #

<a target="_blank" href="https://cloud.google.com/functions/">
https://cloud.google.com/functions</a>

@googlecloud

Google Firebase


<a name="IronIO"></a>

### Iron.io and other on-premises

<a target="_blank" href="https://iron.io/">Iron.io</a>
has their Gesalt Framework


## Usage in the wild

<a target="_blank" href="https://compellingScienceFiction.com/">
Compelling Science Fiction.com</a>
uses Simple Email to read emails and sends it to S3.
Lambda emails notifications. Stories are saved in DynamoDB.
Python pulls data.

<a target="_blank" href="https://eruchibas,com/pywren.html">
Eric Jonas</a>
does hyperperameter sweeps, Monte Carlo simulations.
Spark requires dedicated servers and is not very elastic.
map of map reduce.

<a target="_blank" href="https://tothestars.io/blog/2016/11/12/serverless-mapreduce">
His Simultaneous "Big Lambda" talk</a>


<a name="Concerns"></a>

## Concerns

PROTIP: The other side of freedom from server hassles is that developers also give away <strong>control</strong>.

Having one's data in another company's cloud requires trust in that company's
ability to keep data secure, redundant, and pricing fair.

PROTIP: Going with a particular vendor's API means that you need to keep up
with changes in APIs that can occur frequently,
even though they may not apply to your own operation.

There is the danger of vendor lock-in.

But frameworks have emerged to allieviate that:


## Serverless Coding Frameworks

* Apex, from Terraform, a more feature-rich server product.
* ClaudiaJS
* Sparta for AWS Lambda, as a Golang app, is baked into deliverable binary
(unlike Node).

   * https://gospart.io
   * https://github.com/mweagle/Sparta

* Gordon is written in Python

* Zappa is written in Python for Flask apps

* The Serverless Framework

<a name="Apex"></a>

### Apex

http://apex.run/


https://apex.sh/

"Apex" <strong>manages</strong> AWS Lambda functions.

See https://github.com/apex/apex/blob/master/docs/infra.md

from Terraform, the same company 

"Apex" from Terraform, the same company 

a more feature-rich server product.

Currently the following variables are exposed to Terraform:

    aws_region the AWS region name such as "us-west-2"
    apex_environment the environment name such as "prod" or "stage"
    apex_function_role the Lambda role ARN
    apex_function_arns A map of all lambda functions
    apex_function_names A map of all the names of the lambda functions


<a name="ServerlessFramework"></a>

### Serverless the company

The name "serverless" has been co-opted by enprepreneur Austen Collins
<a target="_blank" href="https://twitter.com/austencollins">
@austencollins</a>
who built the
<a target="_blank" href="https://serverless.com/">
Serverless company</a>
around its open-source
<a target="_blank" href="https://github.com/serverless/serverless-framework">
Serverless Framework on GitHub</a>, a combination of 
command-line utilities and conventions.


His initial Serverless presentation at AWS:Invent 2015
   <amp-youtube data-videoid="D_U6luQ6I90" layout="responsive" width="480" height="270"></amp-youtube>

Social media:

   * <a target="_blank" href="https://github.com/serverless/serverless">
   serverless-framework at https://github.com/serverless/serverless</a>
   * <a target="_blank" href="http://docs.serverless.com/v0.5.0/docs">
   Docs on serverless</a>
   * <a target="_blank" href="https://github.com/serverless/serverless/milestones/">
   Roadmap at https://github.com/serverless/serverless/milestones</a> 
   includes runs in Microsoft Azure and IBM.
   * <a target="_blank" href="https://www.serverless.com/">
   serverless.com</a> is the company's home page.
   * <a target="_blank" href="https://gitter.im/serverless/serverless">
   gitter.im/serverless/serverless</a> for instant chatting
   * <a target="_blank" href="http://serverlessconf.io/">serverlessconf.io</a> conferences
   * <a target="_blank" href="https://twitter.com/search?q=goserverless&src=typd">
    @GoServerless</a> Twitter account
   * <a target="_blank" href="https://www.youtube.com/channel/UCFYG383lawh9Hrs_DEKTtdg">
   YouTube channel</a>
   * <a target="_blank" href="http://github.us11.list-manage1.com/subscribe?u=b4fad36768cab222f88338995&id=5f8407dded">
   Mailchimp Mailing List</a>
   * <a target="_blank" href="http://www.meetup.com/serverless/">
   Meetups on meetup.com</a> and at
   <a target="_blank" href="https://www.ServerlessMeetups.com/">
   ServerlessMeetups.com</a>

   * When <a target="_blank" href="https://news.ycombinator.com/item?id=10005415">
   Hacker News</a> announced it in 2015 when the product was first called JAWS.

The company hosts on August 17 in San Francisco an Emit Conference
for "event-driven architectures".


#### Install Serverless framework  #

0. [Install Node.js](/node-osx-install/)
   as a pre-requisite since the framework is written in Node.js.

0. Install the serverless-framework

   <pre><strong>
   npm install -g serverless
   </strong></pre>

0. Verify version:

   <pre><strong>
   serverless -v
   </strong></pre>

   NOTE: Serverless was in Beta version 0.5.6 as of June 2016,
   with v1.0 announced 24 June 2016.


   <a id="UpdateFramework"></a>

   #### Update Serverless #

   PROTIP: I subscribed to get notifications of changes, 
   and I can see a lot of refactoring is happening
   very quickly, so I suggest that you update frequently.

   <pre><strong>
   npm update -g serverless
   </strong></pre>

   Nothing returns if you're up-to-date.

   <a id="LookAround"></a>

   #### Look around #

0. Get summary of commands using the abbreviated command:

   <tt><strong>
   sls
   </strong></tt>

   the response:

   <pre>
Commands
* Serverless documentation: http://docs.serverless.com
* You can run commands with "serverless" or the shortcut "sls"
* Pass "--help" after any <command> for contextual help
&nbsp;
config ........................ Configure Serverless
config credentials ............ Configures a new provider profile for the Serverless Framework
create ........................ Create new Serverless service
install ....................... Install a Serverless service from GitHub
package ....................... Packages a Serverless service
package function .............. undefined
deploy ........................ Deploy a Serverless service
deploy function ............... Deploy a single function from the service
deploy list ................... List deployed version of your Serverless Service
invoke ........................ Invoke a deployed function
invoke local .................. Invoke function locally
info .......................... Display information about the service
logs .......................... Output the logs of a deployed function
metrics ....................... Show metrics for a specific function
remove ........................ Remove Serverless service and all resources
rollback ...................... Rollback the Serverless service to a specific deployment
slstats ....................... Enable or disable stats
&nbsp;
Plugins
AwsConfigCredentials, Config, Create, Deploy, Info, Install, Invoke, Logs, Metrics, Package, Remove, Rollback, SlStats
   </pre>

   Look how far they've come since the first versions:

   <pre>
 _______                             __
|   _   .-----.----.--.--.-----.----|  .-----.-----.-----.
|   |___|  -__|   _|  |  |  -__|   _|  |  -__|__ --|__ --|
|____   |_____|__|  \___/|_____|__| |__|_____|_____|_____|
|   |   |             The Serverless Application Framework
|       |                           serverless.com, v0.5.6
`-------'
&nbsp;
Commands
* Serverless documentation: http://docs.serverless.com
* You can run commands with "serverless" or the shortcut "sls"
* Pass "--help" after any &LT;context> &LT;action> for contextual help
* Add "--debug" to any command for extra useful logs
&nbsp;
project ........ create, init, install, remove
function ....... create, deploy, logs, remove, rollback, run
endpoint ....... deploy, remove
event .......... deploy, remove
dash ........... deploy, summary
stage .......... create, remove
region ......... create, remove
resources ...... deploy, diff, remove
plugin ......... create
variables ...... list, set, unset
   </pre>


0. Verify:

   <pre><strong>
   command -v serverless
   </strong></pre>

   The response:

   <pre>
   /usr/local/bin/serverless
   /Users/mac/.npm-packages/bin/serverless
   </pre>

0. Navigate to framework folders and files:

   <pre><strong>
   cd ~/.npm-packages/lib/node_modules/serverless
   ls -al
   </strong></pre>

   ### In the serverless folder

0. View the README.md file using a Markdown reader:

   <pre><strong>
   atom README.md
   </strong></pre>

   Instead of the Atom text editor (from GitHub),
   alt-click on the file to select <strong>Markdown Preview</strong>.

   The file contains a list of projects,
   plugins, and consultants who provide services.


   #### Files

README.md, CONTRIBUTING.md, LICENSE.txt are standard GitHub files.

.eslintrc.js contains rules for how lint programs identify issues with code formatting.

.jsbeautifyrc contains settings for JavaScript code beautify program.

.jscsrc

.npmignore defines files and folders for NPM to ignore.

.travis.yml is used by the Travis task runner.

Dockerfile defines how to load the program in Docker.

docker-compose.yml


#### Folders

.idea contains settings for use by the IDEA IDE.

.github

bin

coverage

lib

node_modules

scripts

tests

#### New #

0. Create a serverless.yml file containing the infrastructure:

   <pre><strong>sls create -t aws-node.js
   </strong></pre>

0. Define API Gateway

   <pre>functions:
   hello:
      handler: handler.hello
      events:
         - http:
             path: hello
             mention: get
   </pre>

<a name="Libraries"></a>

## Libraries #

React Serverless app running in Azure?

<a target="_blank" href="https://github.com/99xt/serverless-dependency-install">
   https://github.com/99xt/serverless-dependency-install</a>
   Serverless plugin to manage dependencies
   
<a target="_blank" href="https://github.com/99xt/serverless-boilerplate">
    with architectural best practices</a>
    using NPM, Angular, Gulp.

<a target="_blank" href="https://github.com/99xt/serverless-dynamodb-local">
   https://github.com/99xt/serverless-dynamodb-local</a>


### Handlers #

   * Handlers compress or transform objects while being uploaded to Amazon S3.


<a name="Libraries"></a>

## Libraries #



<a name="Projects"></a>

## Sample Projects #

0. Create a folder to hold serverless projects.
   For example:

   <tt><strong>
   ~/gits/sls
   </strong></tt>

0. Create a blank project.

    <tt><strong>
    serverless create project
    </strong></tt>

   Alternately:

   Pick a sample project to implement:

   * https://zanon.io/posts/building-serverless-websites-on-aws-tutorial

   * [serverless/serverless-graphql](https://github.com/serverless/serverless-graphql) - Official Serverless boilerplate to kick start your project

   * [serverless/serverless-starter](https://github.com/serverless/serverless-starter) - A simple boilerplate for new projects with a few architectural options

   * [serverless/serverless-graphql-blog](https://github.com/serverless/serverless-graphql-blog) - A blog boilerplate that leverages GraphQL in front of DynamoDB to offer a minimal REST API featuring only 1 endpoint

   * [laardee/serverless-authentication-boilerplate](https://github.com/laardee/serverless-authentication-boilerplate) - A generic authentication boilerplate for Serverless framework

   * [sc5/sc5-serverless-boilerplate](https://github.com/SC5/sc5-serverless-boilerplate) - A boilerplate for test driven development of REST endpoints

   * [microapps/MoonMail] (https://github.com/microapps/MoonMail) - Build your own email marketing infrastructure using Lambda + SES from http://microapps.com/


   For example, load a sample project from above:

   <tt><strong>
   serverless project install serverless-graphql
   </strong></tt>

   The response:

   <pre>
   _______                             __
|   _   .-----.----.--.--.-----.----|  .-----.-----.-----.
|   |___|  -__|   _|  |  |  -__|   _|  |  -__|__ --|__ --|
|____   |_____|__|  \___/|_____|__| |__|_____|_____|_____|
|   |   |             The Serverless Application Framework
|       |                           serverless.com, v0.5.6
`-------'
&nbsp;
Serverless: Installing Serverless Project "serverless-graphql"...  
Serverless: Downloading project and installing dependencies...  
Serverless: Initializing Serverless Project...  
Serverless: Enter a new stage name for this project:  (dev)
   </pre>

0. Press Enter to accept the default

0. Keyboard up and down to select:

   <pre>
Serverless: For the "dev" stage, do you want to use an existing Amazon Web Services profile or create a new one?
  > Existing Profile
    Create A New Profile
Serverless: Select a profile for your project:
    default
  > GitHubPublisher1
    me_dev
    serverless-graphql_dev
Serverless: Creating stage "dev"...  
Serverless: Select a new region for your stage:
    us-east-1
  > us-west-2
    eu-west-1
    eu-central-1
    ap-northeast-1
Serverless: Creating region "us-west-2" in stage "dev"...  
Serverless: Deploying resources to stage "dev" in region "us-west-2" via Cloudformation (~3 minutes)...
   </pre>

<a name="Stuck"></a>

> If you see these error messages, let me know because I'm stuck!!!!

{% highlight text %}
   /Users/mac/.npm-packages/lib/node_modules/serverless/node_modules/bluebird/js/release/async.js:61
        fn = function () { throw arg; };
                           ^

ServerlessError: ServerlessError: The security token included in the request is invalid.
  at new ServerlessError (/Users/mac/.npm-packages/lib/node_modules/serverless/lib/Error.js:17:11)
  at ResourcesDeploy.<anonymous> (/Users/mac/.npm-packages/lib/node_modules/serverless/lib/actions/ResourcesDeploy.js:241:25)
  at ResourcesDeploy.tryCatcher (/Users/mac/.npm-packages/lib/node_modules/serverless/node_modules/bluebird/js/release/util.js:16:23)
  at Promise._settlePromiseFromHandler (/Users/mac/.npm-packages/lib/node_modules/serverless/node_modules/bluebird/js/release/promise.js:502:31)
  at Promise._settlePromise (/Users/mac/.npm-packages/lib/node_modules/serverless/node_modules/bluebird/js/release/promise.js:559:18)
  at Promise._settlePromise0 (/Users/mac/.npm-packages/lib/node_modules/serverless/node_modules/bluebird/js/release/promise.js:604:10)
  at Promise._settlePromises (/Users/mac/.npm-packages/lib/node_modules/serverless/node_modules/bluebird/js/release/promise.js:679:18)
  at Async._drainQueue (/Users/mac/.npm-packages/lib/node_modules/serverless/node_modules/bluebird/js/release/async.js:138:16)
  at Async._drainQueues (/Users/mac/.npm-packages/lib/node_modules/serverless/node_modules/bluebird/js/release/async.js:148:10)
  at Immediate.Async.drainQueues [as _onImmediate] (/Users/mac/.npm-packages/lib/node_modules/serverless/node_modules/bluebird/js/release/async.js:17:14)
  at tryOnImmediate (timers.js:543:15)
  at processImmediate [as _immediateCallback] (timers.js:523:5)
{% endhighlight %}



<a name="FrameworkStructure"></a>

## Structure of Folders and Files #

PROTIP: The serverless framework save developers' time by standardizing the structure of folders and files.

   <pre>
s-project.json       // Project file (JSON or YAML)
s-resources-cf.json  // CloudFormation template
s-templates.json     // Config templates and variables
admin.env            // AWS Profiles (gitignored)
_meta                // Metadata (gitignored)
function1            // A custom function
  |__event.json
  |__handler.js
  |__s-function.json
   </pre>

This set of project file is what developers work with.

The serverless framework programming which read and process project files
is written in Node JavaScript.

The <strong>s-project.json</strong> lists plugins:

   <pre>
{
  "name": "notes",
  "custom": {},
  "plugins": [
    "serverless-client-s3"
  ]
}
   </pre>

A key differentiator with the Serverless Framework is that infrastructure specs are defined as code in one project.
<strong>s-resources-cf.json</strong> is a AWS CloudFormation template
specifying security (IAM) roles, SNS email topics, DynamoDB tables, Queues, ARNs.

Components are deployed per stage (dev, prod, etc.),
allowing developers to easily deploy separate prod, test and dev environments.

Within the folder for each function is a <strong>s-function.json</strong>
file containing metadata such as <a href="#Plugins">plugins</a> installed with the project.

When the framework is created for a project, a <strong>.gitignore</strong> file is created with other files
to specify private and temporary work files that should not be publicly uploaded to GitHub.

Project metadata in file
<strong>_meta</strong> outputs and user variables used in function configurations.
But due to the sensitive nature of these variables, the file needs to be gitignore'd by default.
A workaround is to use the
Serverless Meta Sync plugin
which stores project metadata in S3.

<strong>admin.env</strong>


## Serverless Command-line #

Lambda functions can be defined from a command-line using the Serverless framework.

AWS May 2016 Webinar Series - Deep Dive on Serverless Web Applications
   <amp-youtube data-videoid="fXZzVzptkeo" layout="responsive" width="480" height="270"></amp-youtube>

http://abalone0204.github.io/2016/05/22/serverless-simple-crud/


## Keeping Secrets #

BLAH: AWS Lambda doesn't allow setting and reference to operating system <strong>environment variables</strong>.

Lambda functions have a
<strong>deploy.env</strong> file in combination with the
<strong>`--configFile`</strong> flag to set values which will be
prepended to your compiled Lambda function as
<strong>process.env</strong> environment variables before it gets uploaded to S3.

Secrets such as DB connection string or encryption key
are secure values that should not be checked into version control (specified in a .gitignore file).


<a name="LocalTesting"></a>

## Local Runs for testing #

For a "test-first" approach to achieve code maturity,
doing test runs locally before committing to a team branch is important.

Let's examine the choices to emulate AWS Lambda locally:

* <a target="_blank" href="https://www.npmjs.com/package/local-node-lambda">
   local-node-lambda</a>

* <a target="_blank" href="https://github.com/ashiina/lambda-local">
   ashiina/lambda-local</a>

0. Install the "Command line tool for <strong>locally running</strong>
   and remotely deploying your node.js applications to Amazon Lambda."
   from <a target="_blank" href="https://github.com/motdotla/node-lambda">
   github.com/motdotla/node-lambda</a>

   <tt><strong>
   npm install -g <a target="_blank" href="https://www.npmjs.com/package/node-lambda">
   node-lambda</a>
   </strong></tt>

0. Describe tests in a JSON file.



<a name="Plugins"></a>

## Plugins #

The heart of Serverless are its Plugins.
Several plugins come with the Framework.

PROTIP: Plugins need to be installed for each project that uses each.

0. List plugins installed.

   <tt><strong>
   ls _meta/
   </strong></tt>

0. Navigate your active directory to the root of your project.
0. Plugins are downloaded from GitHub by npm:

* [serverless/serverless-meta-sync](https://github.com/serverless/serverless-meta-sync) - Securely sync your the variables in your project's `_meta/variables` across your team.

     <tt><strong>
     npm install serverless-offline --save
     </strong></tt>

* [dherault/serverless-offline](https://github.com/dherault/serverless-offline) - Emulate AWS Lambda and Api Gateway locally to speed up your development cycles.

* [kennu/serverless-plugin-hookscripts](https://github.com/kennu/serverless-plugin-hookscripts) - Easily create shell script hooks that are run whenever Serverless actions are executed.

* [joostfarla/serverless-cors-plugin](https://github.com/joostfarla/serverless-cors-plugin) - Adds support for CORS (Cross-origin resource sharing).

* [Nopik/serverless-serve](https://github.com/Nopik/serverless-serve) - Simulate API Gateway locally, so all function calls can be run via localhost.

* [asprouse/serverless-webpack-plugin](https://github.com/asprouse/serverless-webpack-plugin) - Use Webpack to optimize your Serverless Node.js Functions.

    <pre>
    npm install serverless-webpack-plugin webpack --save-dev
    </pre>

* [serverless/serverless-client-s3](https://github.com/serverless/serverless-client-s3) - Deploy and config a web client for your Serverless project to S3.

* [martinlindenberg/serverless-plugin-alerting](https://github.com/martinlindenberg/serverless-plugin-alerting) -
   This Plugin adds Cloudwatch Alarms with SNS notifications for your Lambda functions.

* [serverless/serverless-optimizer-plugin](https://github.com/serverless/serverless-optimizer-plugin) -
   Optimizes your code for performance in Lambda. Supports coffeeify, babelify and other transforms

* [tmilewski/serverless-resources-validation-plugin](https://github.com/tmilewski/serverless-resources-validation-plugin) -
   Adds support for validating your CloudFormation template.

* [Nopik/serverless-lambda-prune-plugin](https://github.com/Nopik/serverless-lambda-prune-plugin) -
   Delete old versions of AWS lambdas from your account so that you don't exceed the code storage limit.

* [daffinity/serverless-base-path-plugin](https://github.com/daffinity/serverless-base-path-plugin) -
   Sets a base path for all API Gateway endpoints in a Component.

* [arabold/serverless-test-plugin](https://github.com/arabold/serverless-test-plugin) - A Simple Integration Test Framework for Serverless.

* [martinlindenberg/serverless-plugin-sns](https://github.com/martinlindenberg/serverless-plugin-sns) - This plugin easily subscribes your lambda functions to SNS notifications.

* [joostfarla/serverless-jshint-plugin](https://github.com/joostfarla/serverless-jshint-plugin) - Detect errors and potential problems in your Lambda functions.

* [nishantjain91/serverless-eslint-plugin](https://github.com/nishantjain91/serverless-eslint-plugin) - Detect errors and potential problems in your Lambda functions using eslint.

* [SC5/serverless-mocha-plugin](https://github.com/SC5/serverless-mocha-plugin) - Enable test driven development by creating test cases when creating new functions

* [HyperBrain/serverless-package-plugin](https://github.com/HyperBrain/serverless-package-plugin) - Package your lambdas without deploying to AWS.

* [arabold/serverless-sentry-plugin](https://github.com/arabold/serverless-sentry-plugin) - Automatically send errors and exceptions to [Sentry](https://getsentry.com).

* [arabold/serverless-autoprune-plugin](https://github.com/arabold/serverless-autoprune-plugin) - Delete old AWS Lambda versions.


 Functions of the same component can use the lib folder to share common code.

<a id="IAM"></a>

## Get Permissions #

aws-lambda-node-js-programming


* http://stackoverflow.com/questions/37779324/how-to-troubleshoot-serverless-iam-permissions


## Resources #

<a name="PhillipMuens"></a>
Phillip Muens (@pmmuens, github.com/pmuens) from Germany

   * Has an informative blog at
   <a target="_blank" href="http://justserverless.com/blog/">
   JustServerless.com</a>

   * <a target="_blank" href="https://github.com/pmuens/serverless-book">
   https://github.com/pmuens/serverless-book</a>
   * <a target="_blank" href="http://justserverless.com/blog/your-first-serverless-application/">
   http://justserverless.com/blog/your-first-serverless-application/</a>

   * <a target="_blank" href="https://github.com/JustServerless/awesome-serverless">Awesome list</a>

   * <a target="_blank" href="http://justserverless.com/blog/nanoservices-microservices-monolith-serverless-architectures-by-example/">
    Nanoservices</a>

   * <a target="_blank" href="https://gumroad.com/l/learn-serverless-book">
   $28.13 Learn Serverless ebook</a> (5.7 MB in 5 PDFs),
   <a target="_blank" href="http://learnserverless.club/">learnserverless.club</a>,
   with the sample app at
   <a target="_blank" href="https://github.com/JustServerless/notes">
   github.com/JustServerless/notes</a>.

   * Deprecated since Oct 2016 is <a target="_blank" href="https://github.com/JustServerless/learnserverless-book/issues/">
   https://github.com/JustServerless/learnserverless-book/issues</a>

Matthew Fuller

   * <a target="_blank" href="https://www.amazon.com/AWS-Lambda-Guide-Serverless-Microservices-ebook/dp/B016JOMAEE/">
   AWS Lambda: A Guide to Serverless Microservices</a> Amazon Kindle book published 2016-01-11):
   $3.99

Jake Knowles

   * AWS Lambda: Serverless Microservices Guide with Simple Instructions

John McKim  @johncmckim  blogs on Medium:

   * <a target="_blank" href="https://medium.com/@johncmckim/serverless-framework-the-good-parts-9d84e5a02467#.yxruhhlna">
   Serverless Framework: The Good Parts</a>

CNCF

   * <a target="_blank" href="https://github.com/cncf/wg-serverless/blob/master/whitepaper/cncf_serverless_whitepaper_v1.0.pdf">white paper PDF</a> in 
   https://github.com/cncf/wg-serverless


## More on Clouds #

This is one of a series on Cloud computing

{% include cloud_links.html %}
