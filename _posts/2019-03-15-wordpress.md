---
layout: post
date: "2023-11-15"
file: "wordpress"
title: "WordPress"
excerpt: "A vibrant ecosystem for quickly building and maintaining dynamic feature-rich websites"
tags: [devops, front-end, evaluation]
Categories: Devops
# wordpress-1900x500.jpg 
image:
  feature: https://user-images.githubusercontent.com/300046/60097512-c7de0d00-9710-11e9-9618-66fbfb1f682b.jpg
  credit: WPForms
  creditlink: https://wpforms.com/the-simplest-way-to-sell-digital-products-on-your-wordpress-site
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

The interest in WordPress here is making use of recent (working) scripts and instructions created by various people in the community to easily install and maintain WordPress. <a href="#ManyWaysToHost">See below</a>.

{% include whatever.html %}

<!--
My code for this is at <a target="_blank" href="https://github.com/wilsonmar/DevSecOps/tree/master/wordpress">https://github.com/wilsonmar/DevSecOps/tree/master/wordpress</a>
-->

## WordPress has popular features

<a target="_blank" href="https://w3techs.com/technologies/overview/content_management/all/"><img align="right" alt="wordpress-marketshare-361x324-11925.jpg" width="261" src="https://user-images.githubusercontent.com/300046/60096682-cd3a5800-970e-11e9-9447-c986c1d3fc00.jpg">One report</a> states that "As of June 2019, WordPress is used by 60.8% of all the websites whose content management system is known. This is 27.5% of the top 10 million websites." That makes it (by far) the world's most popular <strong>blogging and content management</strong> software platform (among websites which use one). 

One reason for its popularity is that WordPress is <strong>free and open source</strong> software, as are all its components, which consist of a Linux operating system, Apache web server, MySQL database, and PHP language. 

   * Instead of MySQL, some use MariaDB Galera Server 10.0
   * PHP7 requires WordPress 4.4 or higher and compatible plugins

Its low cost of entry has resulted in WordPress being developed by a world-wide community who have contributed over 45,000 themes, plugins, and widgets that enable an unlimited combination of features. Advances in internet technologies are quickly made available in plugins. 

Users can easily create and edit static webpages and blog posts using its intuitive editor. Without even thinking about details like browser compatibility or responsiveness, content creators are free to create and format text, images, and layout on every page and post. 

In summary:

   *    Rich text and HTML editing
   *    User roles and permissions
   *    Hundreds of themes, many optimized for mobile users
   * <a target="_blank" href="https://wordpress.org/showcase/">wordpress.org/showcase</a> lists thousands of add-ons for ecommerce, SEO, email, spam filtering, analytics and more
   *    Multi-user and multi-blogging capabilities
   *    Multilingual support
   *    SEO optimized
   *    Plugin architecture and template engine
   <br /><br />

Wordpress was first released on May 27, 2003 by Matt Mullenwick in San Francisco, California, USA. See <a target="_blank" href="https://en.wikipedia.org/wiki/WordPress">Wikipedia</a>.

Matt's company, Automattic, makes money from providing hosting to enterprises such as the New York Times, CNN, etc. 

Code created for them are eventually folded into the open-source repository.


<a name="Issues"></a>

## Issues with WordPress

As with anything, WordPress has detractors and competition. 

The popularity of WordPress makes it a tempting target for hackers. That means diligence is needed keep up with <a target="_blank" href="https://gist.github.com/ethicka/6465183df70300589b00">hardening efforts</a> needed to <a target="_blank" href="https://www.digitalocean.com/community/tutorials/how-to-protect-wordpress-from-xml-rpc-attacks-on-ubuntu-14-04">protect against attacks</a> that hackers develop.

WordPress is comparatively <strong>slow</strong> because the HTML presented in response to each request is assembled by programs written in the PHP language, which is interpreted (rather than compiled like Java, C, or Go). That's great for personalizing every interaction with visitors. But <a target="_blank" href="https://www.wpbeginner.com/wp-tutorials/how-wordpress-plugins-affect-your-sites-load-time/">addition of plug-ins can slow WordPress down</a>.

Wordpress sites also run in several processes running all the time:

   * a SQL database back-end
   * a <strong>Management server</strong> containing WordPress programs responding to requests
   <br /><br />

By contrast, <a target="_blank" href="https://wilsonmar.github.io/static-websites/">static websites</a> are HTML files which are served without interpretation by the web server. JavaScript downloaded on client browsers perform the customization.

This architecture of WordPress can result in developers and users experiencing a "white screen of death" or generic "500 internal server error". This can be the result of neglecting to replace the default .htaccess file with one for running WordPress. 

<a name="ManyWaysToHost"></a>

## Many ways to host WordPress

The many options for hosting a WordPress website:

### On WordPress.com:

   * <a href="#WordPressOnline">WordPress.com online</a> provides a GUI

### Easy local start on your laptop:

For developers to exercise more control:

   * MAMP on your laptop requires configuration
   * MAMP on your laptop running within Virtualbox 

   * <a href="#DockerCompose">Run Docker Compose</a>
   * <a href="#DockerLocal">Run docker on a laptop</a>

   * <a href="#Bitnami">Bitnami AWS EC2 AMI</a> on AWS

Docker image managed by Kubernetes in AWS, Azure, Google, <a href="#Alibaba">Alibaba</a>, and other cloud takes considerable work.

### Hosted:

   * VPS (Virtual Private Server) hosts offer tools (e.g. Fantastico) to automatically install WordPress.

### In the AWS cloud:

   * <a target="_blank" href="https://lightsail.aws.amazon.com/ls/docs/en/articles/getting-started-with-amazon-lightsail">AWS Lightsail</a> to <a target="_blank" href="https://aws.amazon.com/getting-started/tutorials/launch-a-wordpress-website/">Launch a WordPress Website in Amazon</a>

   * <a target="_blank" href="https://aws.amazon.com/getting-started/tutorials/launch-an-app/?trk=gs_card">AWS Elastic Beanstalk</a>
   * AWS AMI images of EC2 instances using AWS ECS (Elastic Container Service) using a Load Balancer and RDS replicas 
   * <a target="_blank" href="https://bitnami.com/stack/wordpress/helm">Helm charts</a> using Amazon EKS (Elastic Kubernetes Service)
   * AWS AMI images of EC2 instances using AWS Fargate, which takes care of scaling
   <br /><br />

### In the Azure cloud

<a href="#Azure">on Azure cloud</a>

<hr />

## wp-cli - a way to keep up

Automation is important not just during installation, but also troubleshooting, maintenance, and update.

Automation such as <a target="_blank" href="https://blog.noah.hearle.com/wordpress-server-wide-plugin-update/">Noah Hearle's plugin updater</a> provide an easier way for WordPress administrators to keep up with the rapid pace of update, especially while WordPress migrates to use of React.

<a target="_blank" href="https://wp-cli.org/">wp-cli.org</a> (by <a target="_blank" href="https://www.alainschlesser.com/">Alain Schlesser</a>) provides a command-line interface to manage WordPress plugins, etc. It's installed on a Mac with <a target="_blank" href="https://make.wordpress.org/cli/handbook/installing/#installing-via-homebrew">brew install wp-cli</a>.


<a name="WordPressOnline"></a>

## WordPress.com online

You can obtain your own website completely online at <a target="_blank" href="https://www.wordpress.com">wordpress.com</a>, for <a target="_blank" href="https://wordpress.com/start/ecommerce-onboarding/plans-ecommerce">$25 per month or $45 per month</a> with an e-commerce shopping cart (like Amazon.com).

Examples of websites hosted on wordpress.com:

   * <a target="_blank" href="https://carlosharmon87.wordpress.com/2018/05/11/top-51-world-continuous-testing-leaders-and-software-testing-blogs-to-follow-in-2018/">carlosharmon87.wordpress.com</a>
   <br /><br />

PROTIP: Even if you don't want a WordPress website, <a target="_blank" href="https://wordpress.com/register">register for an account</a> and provide your profile picture. Many other websites obtain your profile picture (gravatar) based on your email.


<a name="DockerLocal"></a>

## Scripts to install Docker image on a laptop

Several have written bash/shell scripts to install WordPress locally:

That is used by <a target="_blank" href="https://blog.noah.hearle.com/wordpress-installer/">Noah Hearle's bash script to install WordPress and <strong>add several security measures</strong>. Available since Aug 2015.

   1. Install and update WordPress in your own language to web root or a sub directory
   2. Handles file and directory permissions
   3. Removes licence.txt and readme.html
   4. Checks for a working database connection
   5. Adds a random database prefix
   6. Generates random username and password for administrators
   7. Set the maximum upload and post limits
   8. Creates the .htaccess to allow for URL rewriting, adds browser caching and some basic security measures
   9. Uninstall functionality
   10. Besides the setup part, this will install WordPress without requiring WP-Cli
   <br /><br />

<a target="_blank" href="https://kaiten.support/how-to-automate-wordpress-and-wp-config-php-creation/">
PHP script generates a wp-config.php file</a>

<a target="_blank" href="https://deliciousbrains.com/automating-local-wordpress-site-setup-scripts/">
Written for OS contains bash scripts</a>

<a target="_blank" href="https://gist.github.com/ethicka/c1b71e258a88b8523b7f21f164656b88">
William Donahoe = ethicka</a>

<a target="_blank" href="https://gist.github.com/bgallagh3r/2853221">
 Wordpress: Bash Install Script</a> -- Downloads latest WP version, updates wp-config with user supplied DB name, username and password, creates and CHMOD's uploads dir, copies all the files into the root dir you run the script from, then deletes itself!

<a target="_blank" href="https://github.com/cconversion/wp-installer">
wp-installer</a> - Run the 'wp-prov' script first to check your installation envirnment is running with the right settings (automagically writes PHP.ini and other settings, installs default configs for WordPress to get up and running).
    Run 'wp-install' to build a new site in way less than 5mins... I average ~2-3min with this script, with all hosts configured and everything uninstallable easily.


<a target="_blank" href="https://www.wpkube.com/automate-wordpress-installs-setup/">
WP Quick Install</a>



<a name="DockerCompose"></a>

## Docker Compose 

TODO: This is under construction (I'm working on it).

In 2019. Using a Docker image managed by Kubernetes is the most modern approach.

If you have <a target="_blank" href="https://bitnami.com/stack/wordpress">
Docker installed on your Mac</a>, install WordPress run by triple-clicking this URL and paste it in your Terminal:

   <tt><strong>sh -c "$(curl -fsSL https://raw.githubusercontent.com/wilsonmar/DevSecOps/master/wordpress/wp-docker.sh)"</strong></tt>

The command makes use of the official but still public <a target="_blank" href="https://hub.docker.com/_/wordpress/">wordpress Docker image in DockerHub</a>.

## Bitnami AMI

In Amazon AWS EC2 Marketplace, there is an AMI image called <a target="_blank" href="https://aws.amazon.com/marketplace/pp/B00NN8Y43U">"WordPress Certified by BitNami on Ubuntu 16.04"</a>
which costs <strong>$0.021/hour</strong> to use. See <a target="_blank" href="https://docs.bitnami.com/aws/how-to/get-started-wordpress-aws-marketplace-beginner/">Bitnami's docs</a>.

Bitnami certifies its images to be secure, up-to-date, and packaged using industry best practices. The company monitors all components and libraries for vulnerabilities, outdated components, and application updates. 

* View Bitnami's marketing page:

   <a target="_blank" href="https://bitnami.com/stack/wordpress">
   https://bitnami.com/stack/wordpress</a>


## KUSANAGI for AWS

The KUSANAGI framework is an open source and free <strong>"ultrafast"</strong> WordPress virtual machine</strong> that it's developer, Prime Strategy, claims speeds of 3 milliseconds at 1,000 requests per second, which is 10-15x that of standard machines without the page caching that it provides. That's important for SEO page ranking.

KUSANAGI for AWS is provided <a target="_blank" href="https://en.kusanagi.tokyo/cloud/kusanagi-for-aws/">AMI</a> or as a <a target="_blank" href="https://www.prime-strategy.co.jp/en/introduction-of-kusanagi/">business AMI</a> supported by its developer: Prime Strategy -- a cloud integrator and managed services provider which began in Tokyo, Japan, but has expanded to a presence in New York, Singapore, and Jakarta. Prime Strategy Co.'s marketing page: <a target="_blank" href="https://en.kusanagi.tokyo/about/">https://en.kusanagi.tokyo/about</a>

・HHVM 3.11

The caching that it uses means aystem requirements of at least an AWS  instance type of <strong>t.2medium</strong> (minimum 4GB memory). The AMI costs <a target="_blank" href="https://aws.amazon.com/marketplace/pp/B017690GMY?ref=cns_srchrow">$0.046/hour</a>.
There are also charges for EC2 instance usage.

https://docs.bitnami.com/aws-templates/singletier-vs-multitier/


https://kinsta.com/blog/add-google-analytics-to-wordpress/

https://www.monsterinsights.com/how-to-add-google-analytics-to-wordpress-without-a-plugin/
MonsterInsights plugin


<hr />

<a name="AWSHA"></a>

### AWS EC2 High Availability with Auto-Scaling

Running WordPress in the cloud provides options for High-Availability, logging (CloudWatch), backups, CDN (CloudFront), auto-renewing SSL certificates, etc:

<a target="_blank" href="https://user-images.githubusercontent.com/300046/50410712-bef39980-07c8-11e9-9138-bc22d4183589.png"><img alt="1,920px × 1,080px" width="1920" src="https://user-images.githubusercontent.com/300046/50410712-bef39980-07c8-11e9-9138-bc22d4183589.png"></a>
<a target="_blank" title="published Jan 3, 2012" href="https://www.slideshare.net/harishganesan/scaling-wordpress-in-aws-amazon-ec2">Image credit</a>: by <a target="_blank" title="harish11g.aws@gmail.com" href="http://harish11g.blogspot.com">Harish Ganesan</a> (<a target="_blank" href="https://www.linkedin.com/in/harishganesan/">*</a>) 

1. Create an AWS root account 
2. Define permissions to create, update, and delete:

   * Amazon Route 53 DNS
   * S3
   * EC2 instances
   * RDS (Relational Data Store) with read replicas
   * CloudWatch monitoring logging

   * ELB (Elastic Load Balancer)
   * CloudFront CDN
   <br /><br />


   ### Route 53 DNS

   Elastic Load balancer (EBS) distribute load among several EC2 instances.
   in 2-3 separate AZs inside a region
   Start with EC2 m1.Large instances 
   Combine AWS on-demand and Reserved instances to get more savings

   ### The DB Layer RDS 
   RDS MySQL supports only Innodb engine
   A RDS Master and Standby provide HA
   RDS Read Replicas provide read performance
   Use HyperDB plugin to use multiple endpoints like RDS master and RDS read replicas 
   DB security groups allow DB access only to WP EC2 instances
   Periodic dumps, snapshots, point-in-time recovery

   Design the Storage Pool layer with HA (ver critical)
   Minimum 2 EC2 Large instances for Storage Pool Layer for HA and better IO
   No more than 5 RDS Read Replicas are recommened

   Keep Read replicas and RDS Master same EC2 size for better performance

   APC or Xcache plugin for PHP opscode caching

   CDN for static assets, templates, themes, images
   W3TotalCache+CloudFront or 
   BatCache + Memchaed for Page caching

   Distributed File Storage Pool configured between WordPress Management and Content instances
   which share the common storage pool for files and plugins

   Deployment of files and plugins thru the WP management node


   <a name="CloudWatch"></a>

   Amazon CloudWatch monitors CPU and Network utilization of setup

   Amazon CloudWatch alarms config. with Amazon SNS for email/SMS alerts to SysAdmins.

   <a name="Backups"></a>
   
   ### Backups

   Custom ops scripts periodically backup files from Storage pool to S3 
   Configure S3 to remove old backups automatically
   RDS MySQL configured to take periodic data dumps and DB snapshots
   RDS layer can be recovered point in time from the backups

   Install WP Security plugins

   Log files generated have to be rotated.

Once the instance is running, enter the public DNS provided by Amazon into your browser. You will then see the WordPress application. 

You can go to '/wp-admin/' from your browser to access the application administration panel. The default server administrator is 'user'. Please check our documentation at https://docs.bitnami.com/aws/faq/#how-to-find-application-credentials to learn how to get your password. You may change this username and password within the application settings. You can also access your instance via SSH using the username 'bitnami' and your Amazon private key. For additional setup instructions and frequently asked questions please go to https://docs.bitnami.com/aws/apps/wordpress/


<hr />

<a name="Azure"></a>

## WordPress on Azure cloud



<hr />

<a name="Alibaba"></a>

## WordPress on Alibaba Cloud

Just for comparison, Alibaba's WordPress cloud servers cost <strong>$4.6/Month</strong>.

CAUTION: Restrictions on foreign trade imposed by China's government include the need for a China partner to host sites in China.

<a target="_blank" href="https://www.alibabacloud.com/partners/wordpress?&msctype=email&mscareaid=sg&mscsiteid=intl&mscmsgid=4690219010900218104&&spm=a2c4l.12481553.enc.9&#floor1">
Deploy WordPress on Alibaba Cloud Servers in 5 minutes</a>.

1. Provide Username
1. ECS Purchase Wizard, to select the billing and ECS configuration from cloud regions to instance type families.
1. Select an ecs.t5-lc1m1.small instance from instance type families as the WordPress instance.
<br /><br />

<a target="_blank" href="https://www.alibabacloud.com/blog/deploy-web-apps-with-high-availability-fault-tolerance-and-load-balancing-on-alibaba-cloud_277149">Deploy Web Apps with High Availability, Fault Tolerance, and Load Balancing on Alibaba Cloud</a> November 29, 2017

<a target="_blank" href="https://www.alibabacloud.com/blog/setting-up-a-server-cluster-for-enterprise-web-apps-%281%29_584040">
Setting Up a Server Cluster for Enterprise Web Apps</a> April 23, 2018



## Duplicator plugin

https://www.wpkube.com/move-backup-website-wordpress-duplicator-plugin/

https://training.ithemes.com/webinar/hardcoding-the-wordpress-setup-process/

<pre>
#!/bin/bash
cd public_html/
echo "Comparing both htaccess files..." 
wget http://aws-default-files.com/cleanhtaccess/cleanwphtaccess 
if diff .htaccess cleanwphtaccess >/dev/null ; 
then 
echo "THIS FILE IS SAFE AND NOT CORRUPTED" 
else 
echo "THIS FILE SEEMS TO BE CORRUPTED. RENAMING IT NOW!" && mv .htaccess .htaccess.corrupted 
fi 
mv cleanwphtaccess .htaccess
</pre>

## Salesforce Embedded Chat

https://help.salesforce.com/articleView?id=snapins_chat_overview.htm&type=5

https://help.salesforce.com/articleView?id=bots_service_intro.htm&type=5

After configuring it with their AWS account credentials, users can generate audio feeds for their content through the Amazon Polly service (https://aws.amazon.com/polly/).


## Resources

   * https://make.wordpress.org/cli/handbook/installing/#installing-via-docker

   * https://codex.wordpress.org/Installing_WordPress

   * <a target="_blank" href="https://designextreme.com/">https://designextreme.com</a>

