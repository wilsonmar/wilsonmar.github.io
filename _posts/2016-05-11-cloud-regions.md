---
layout: post
title: "Cloud Regions"
excerpt: "Who is where"
tags: [cloud, regions]
date: "2016-05-11"
file: "cloud-regions"
image:
# pic-black-bkg-white-cloud_1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/15269257/8104a824-19b6-11e6-9c42-014bf608009a.jpg
  credit: Theme bin
  creditlink: http://www.themebin.com/hd-wallpapers/wandering-clouds-hd-wallpaper/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

<a href="https://wilsonmar.github.io/cloud-regions/">
This tutorial</a>, unlike other tutorials which focus on specific vendors,
is a multi-vendor comparison of regions.

   * <a href="#AWSRegions">AWS regions</a>
   * <a href="#AzureRegions">Azure</a>
   * Google Cloud Compute (TODO)
   * <a href="#Rackspace">Rackspace</a> (TODO)
   * [Digital Ocean](/digital-ocean/)
   * IBM (todo)
   * etc.

TODO: Provide an interactive comparison.

{% include _intro.html %}

## Definitions #

Each region is a separate geographic area.

<hr />

<a name="AWSRegions"></a>

## Amazon regions #

0. Open the Amazon EC2 console at <br />
   <a target="_blank" href="https://console.aws.amazon.com/ec2/">
   https://console.aws.amazon.com/ec2</a>

   Sign-in if you haven't done so.

   <a name="EC2_URL"></a>

0. Select your default region: from the navigation bar, view the options in the region selector.

   | Code | Name |
   | ---- | ---- |
   | us-east-1 | US East (N. Virginia) |
   | us-west-1 | US West (N. California) |
   | us-west-2 | US West (Oregon) |
   | eu-west-1 | EU (Ireland) |
   | eu-central-1 | EU (Frankfurt) |
   | ap-northeast-1 | Asia Pacific (Tokyo) |
   | ap-northeast-2 | Asia Pacific (Seoul) |
   | ap-southeast-1 Asia Pacific (Singapore) |
   | ap-southeast-2 | Asia Pacific (Sydney) |
   | sa-east-1 | South America (São Paulo) |

   Names in parentheses is what is displayed at the upper-right on various AWS consoles.

   NOTE: In addition to the above, Amazon's has a AWS GovCloud (US) and China (Beijing)
   which cannot be specified this way.

0. Availability Zones under each region are listed on the <strong>Status</strong> by
   service under each <strong>continent</strong> at
   <a target="_blank" href="http://status.aws.amazon.com/">
   status.aws.amazon.com</a>

   Each region within Amazon contains multiple, isolated <strong>Availability Zones</strong>.

   Additional end-point locations via AWS CloudFormation CDN service.

   CAUTION: The number and mapping of Availability Zones per region may vary between AWS accounts.

   NOTE: Amazon charges for network traffic between availability zones.


   ### Set Default Region and URL for CLI #

0. Open your MacOS profile using a text editor (substitute atom with subl, vim, etc.):

   PROTIP: Set an environment variable to your default regional endpoint (for example, https://ec2.us-west-1.amazonaws.com):

   <pre><strong>
   atom ~/.bash_profile
   </strong></pre>

0. Add to the bottom of the file based on <a href="#EC2_URL">your selection in the step above</a>:

   <tt><strong>
   export AWS_DEFAULT_REGION=us-west-2<br />
   export EC2_URL=https://us-west-2.console.aws.amazon.com/ec2/v2/home?region=us-west-2
   </strong></tt>

   Notice the region is specified twice in EC2_URL.

   WARNING: Do not include in EC2_URL the # and what follows, such as "#Instances:sort=instanceId".

0. Save the file and run the file to load it into memory:

   <pre><strong>
   source ~/.bash_profile
   </strong></pre>

   ### List regions using CLI #

0. In a Terminal window, view the very latest
   <a target="_blank" href="http://docs.aws.amazon.com/AWSEC2/latest/CommandLineReference/ApiReference-cmd-DescribeRegions.html">
   list of AWS regions</a>:

    <pre><strong>
    aws ec2 describe-regions
    aws ec2 describe-availability-zones --region us-west-2
    </strong></pre>

    For examples of AWS CLI commands such as the above, see:<br />
    <a target="_blank" href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html">
    Amazon's User Guide on Regions and availability zones</a>.

0. If you get an error message like this:

   <pre>
   -bash: aws: command not found
   </pre>

   then <a target="_blank" href="http://docs.aws.amazon.com/cli/latest/userguide/installing.html">
   install Python 2.7, pip, and the AWS CLI</a>.

0. If you get an error message such as this:

   <pre>
   An error occurred (UnauthorizedOperation) when calling the DescribeRegions operation: You are not authorized to perform this operation.
   </pre>

   then <a target="_blank" href="http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-set-up.html">
   use the AWS configure command to obtain</a>:

   * AWS Access Key ID
   * AWS Secret Access Key
   * Default region name (such as "us-west-2")

   PROTIP: Create Named Profiles in file `~/.aws/credentials` and `~/.aws/config` (containing region)
   because you will likely use multiple AWS accounts.

   Then, go to IAM to <a target="_blank" href="http://docs.aws.amazon.com/AWSEC2/latest/APIReference/ec2-api-permissions.html">
   define permissions for each user to access EC2</a>.

<hr />

<a name="AzureRegions"></a>

## Microsoft Azure cloud regions #

Not all <a target="_blank" href="https://azure.microsoft.com/en-us/regions/#services">
services are available</a> in all regions.

<a target="_blank" href="https://azure.microsoft.com/en-us/regions/">
Regions</a> with locations, rearranged by continent:

<table>
<tr>
   <th align="left" width="40%"> Region </th>
   <th align="left" width="20%"> Location </th>
   <th align="left" width="20%"> API </th>
   </tr>

<tr><td> Canada Central </td><td> Toronto
	</td><td> - </td></tr>
<tr><td> Canada East </td><td> Quebec City
	</td><td> - </td></tr>

<tr><td> West US </td><td> California
	</td><td> Y </td></tr>
<tr><td> Central US </td><td> Iowa
	</td><td> Y </td></tr>
<tr><td> East US </td><td> Virginia
	</td><td> Y </td></tr>
<tr><td> East US 2 </td><td> Virginia
	</td><td> Y </td></tr>
<tr><td> North Central US </td><td> Illinois
	</td><td> Y </td></tr>
<tr><td> South Central US </td><td> Texas
	</td><td> Y </td></tr>
<tr><td> Brazil South </td><td> Sao Paolo
	</td><td> Y </td></tr>

<tr><td> North Europe </td><td> Ireland
	</td><td> Y </td></tr>
<tr><td> West Europe </td><td> Netherlands
	</td><td> Y </td></tr>
<tr><td> Germany Central </td><td> Frankfurt
	</td><td> - </td></tr>
<tr><td> Germany Northeast </td><td> Magdeburg
	</td><td> - </td></tr>

<tr><td> Japan East </td><td> Tokyo, Saitama
	</td><td> Y </td></tr>
<tr><td> Japan West </td><td> Osaka
	</td><td> Y </td></tr>
<tr><td> Southeast Asia </td><td> Singapore
	</td><td> Y </td></tr>
<tr><td> East Asia </td><td> Hong Kong
	</td><td> Y </td></tr>

<tr><td> Australia East </td><td> New South Wales
	</td><td> - </td></tr>
<tr><td> Australia Southeast </td><td> Victoria
	</td><td> - </td></tr>

<tr><td> Central India </td><td> Pune
	</td><td> - </td></tr>
<tr><td> South India </td><td> Chennai
	</td><td> - </td></tr>
<tr><td> West India </td><td> Mumbai
	</td><td> - </td></tr>

<tr><td> China North </td><td> Beijing
	</td><td> - </td></tr>
<tr><td> China East </td><td> Shanghai
	</td><td> - </td></tr>
</table>

Two regions for the US Government are in Virginia.
http://bit.ly/msgovt

See https://www.microsoft.com/en-us/server-cloud/cloud-os/global-datacenters.aspx


<a name="Rackspace"></a>

## Rackspace #

Rackspace began operations soon after the announcement of AWS.
The company provides value-added on AWS as well as
on its own servers East of its Austin, Texas headquarters.


AppScale (@appscalecloud)
gives you the freedom to run App Engine applications 
on any public, private, or hybrid cloud.


## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}
