---
layout: post
title: "Cloud Formation"
excerpt: "to animate Templates in StackSets of Stacks in AWS"
tags: [Docker, devops, ci, setup]
date: "2019-07-11"
file: "cloud-formation"
image:
# pic silver robot white skin handshake 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/14622149/306629f0-0585-11e6-961a-dc8f60dadbf6.jpg
  credit:
  creditlink:
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

The object of this tutorial is to succinctly present 
<strong>step-by-step</strong> instructions to use Cloud Formation to automate work within AWS 
(instead of AWS GUI Console).

* <a href="#Iac">IaC (Infrastructure as Code)</a>
* <a href="#AWSSignup">AWS Account and region</a>

* Templates

* IAM
* Security Groups
* <a href="#HelperSccripts">Helper Scripts</a> in Python
* Drift and Nested Stacks

* Resource Attibutes - e.g., Deletion Policy
* Intrinsic Functions - Built-in functions (Fn::Base64, Ref, Sub, etc.)
* Intrinsic Conditional Functions (And, Equals, Id, Not, Or)
* Pseudo Parameters - Predefined parameters (

<hr />


<a name="AWSSignup"></a>

### AWS Account and region

1. Log into a AWS account (LinuxAcademy)
1. Select region <strong>N. Virginia</strong> (`us-east-1`).

   ### Create a Key Pair

1. In the AWS Management Console dashboard.
1. Find Services: "EC2" ("Virtual servers in the cloud").
1. Click <strong>Key Pairs</strong> in the left sidebar under "NETWORK & SECURITY".
1. Click "Create Key Pair" (blue button).
1. Name the key pair "helperdemo". Click Create for a pop-up dialog containing the key text.

   ### Define IAM role

   CloudFormation needs permissions to do each of the services defined in its templates.

<a name="GUI"></a>

## Cloud Formation Console

1. Use this URL to get in

   <a target="_blank" href="https://console.aws.amazon.com/cloudformation/home">
   https://console.aws.amazon.com/cloudformation/home</a>

   Notice Amazon automatically adds your default region.

   <a target="_blank" href="https://console.aws.amazon.com/cloudformation/home?region=us-east-1">
   https://console.aws.amazon.com/cloudformation/home?region=us-east-1</a>

   ### Menu
   
   On the left menu are the major organizing "objects":

   <strong>Stacks</strong> are a collection of resources managed by the AWS service, which is aware of <strong>events</strong>.

   CloudFormation handles Stack creation and update as well as error detection and rollback.

   <strong>StackSets</strong> are a collection of stacks.

   <strong>Change Sets</strong> 

   <strong>Designer</strong> is a graphic tool for creating, viewing, and modifying AWS CloudFormation templates. <a target="_blank" href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/working-with-templates-cfn-designer.html">Docs</a>

   <a target="_blank" href="https://console.aws.amazon.com/cloudformation/designer">https://console.aws.amazon.com/cloudformation/designer</a> 
   
   <a target="_blank" href="http://microservices.today/cloudformation/CloudFormation/">
   <img alt="cloudformation-designer-658x468.png" width="658" src="https://user-images.githubusercontent.com/300046/63369508-5c45a400-c33d-11e9-80fa-9bb9842d109d.png"></a>

   1. Canvas Pane: Displays template resources as diagram.
   2. Resource types pane: Lists all of the template resources that you can add to your template.
   3. JSON Editor: Here you specify the details of your template, such as resource properties or template parameters
   4. Errors Pane: Errors pane displays validation errors.
   5. Full screen and Split screen buttons: Buttons to select different views of Designer.
   6. Fit to window button: to resize the canvas pane to fit your template’s diagram.
   7. Toolbar: Provides quick access to commands for common actions, such as opening and closing/saving templates.

   <strong>Exports</strong>

2. Click on Stacks in the menu.

3. Click "CREATE STACK".

   If you select "Use a sample template" from AWS (LAMP, Ruby on Rails, WorkPress) for single and multi-AZ configurations.

   If you select "Create template in Designer", you can drag and drop the ever-expanding list of resources from the left menu.

   Template files are stored in AWS S3. So PROTIP: create a bucket hierarchy ahead.

   PROTIP: Define Tags.

   Stack policy

   Rollback configuration (CloudWath alarm ARN)

   Notification options
   
   Stack creation options

<a name="Iac"></a>

## IaC (Infrastructure as Code)

VIDEO: <a target="_blank" href="https://ecsddopgdev.wpengine.com/devops-playground-london-aws-cloudformation/">#19</a> <a target="_blank" href="https://www.youtube.com/watch?v=Gv0yJgJQs7U">DevOpsPlayground Hands On with AWS CloudFormation</a> Apr 16, 2018 [1:05:26] by <a target="_blank" href="https://www.linkedin.com/in/suniltailor/">Sunil Tailor</a> of <a target="_blank" href="https://devopsplayground.co.uk/">https://devopsplayground.co.uk/</a> references <a target="_blank" href="https://github.com/DevOpsPlayground/Hands-on-with-AWS-Cloudformation">https://github.com/DevOpsPlayground/Hands-on-with-AWS-Cloudformation</a>

* Lab-001 - Create a CloudFormation Stack to Provision a S3 bucket Resource
   Goal 2: with Change Set
* Lab-002 - Updating Stacks with Security Groups
* Lab-003 - Provisioning Resources with cnf-init and Userdata
<br /><br />

<a target="_blank" href="https://wilsonmar.github.io/terraform">Terraform</a> from Hashicorp
is multi-vendor.



<a name="Templates"></a>

## Templates

### Sections of a Template

* <a target="_blank" href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resources-section-structure.html">Resources</a>

![cf-template-sections-483x49](https://user-images.githubusercontent.com/300046/63377124-979b9f00-c34c-11e9-9fb5-8fac263954a6.jpg)

* Description
* <a target="_blank" href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/parameters-section-structure.html">Parameters</a> [<a href="#ParametersSample">In sample</a>]
* <a target="_blank" href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/mappings-section-structure.html">Mappings</a> [<a href="#MappingssSample">In sample</a>]
* <a target="_blank" href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html">Metadata (Properties)</a> [<a href="#MetadataSample">In sample</a>]
* <a target="_blank" href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/conditions-section-structure.html">Conditions</a> [<a href="#ConditionsSample">In sample???</a>]
* Transform ???
* <a target="_blank" href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/outputs-section-structure.html">Outputs</a> [<a href="#OutputsSample">In sample</a>]

Below is a rather full (production-worthy?) sample template <a target="_blank" href="https://github.com/natonic/DevOpsPro/blob/master/lamp-stack-1478287817_1530269327%20(3).json">from here</a> 

<pre>
{
  "AWSTemplateFormatVersion" : "2010-09-09",
&nbsp;
  "Description" : "Create a LAMP stack using a single EC2 instance and a local MySQL database for storage. This template demonstrates using the AWS CloudFormation bootstrap scripts to install the packages and files necessary to deploy the Apache web server, PHP and MySQL at instance launch time.",
<a name="ParametersSample"></a>
  "Parameters" : {
    "KeyName": {
      "Description" : "Name of an EC2 KeyPair to enable SSH access to the instance",
      "Type": "AWS::EC2::KeyPair::KeyName",
      "ConstraintDescription" : "must be the name of an existing EC2 KeyPair."
    },
    "DBName": {
      "Default": "DatabaseNameExample",
      "Description" : "MySQL database name",
      "Type": "String",
      "MinLength": "1",
      "MaxLength": "64",
      "AllowedPattern" : "[a-zA-Z][a-zA-Z0-9]*",
      "ConstraintDescription" : "must begin with a letter and contain only alphanumeric characters."
    },
    "DBUser": {
      "NoEcho": "true",
      "Description" : "Username for MySQL database access",
      "Type": "String",
      "MinLength": "1",
      "MaxLength": "16",
      "AllowedPattern" : "[a-zA-Z][a-zA-Z0-9]*",
      "ConstraintDescription" : "must begin with a letter and contain only alphanumeric characters."
    },
    "DBPassword": {
      "NoEcho": "true",
      "Description" : "Password for MySQL database access",
      "Type": "String",
      "MinLength": "1",
      "MaxLength": "41",
      "AllowedPattern" : "[a-zA-Z0-9]*",
      "ConstraintDescription" : "must contain only alphanumeric characters."
    },
    "DBRootPassword": {
      "NoEcho": "true",
      "Description" : "Root password for MySQL",
      "Type": "String",
      "MinLength": "1",
      "MaxLength": "41",
      "AllowedPattern" : "[a-zA-Z0-9]*",
      "ConstraintDescription" : "must contain only alphanumeric characters."
    },
    "InstanceType" : {
      "Description" : "WebServer EC2 instance type",
      "Type" : "String",
      "Default" : "t2.micro",
      "AllowedValues" : ["t2.nano", "t2.micro", "t2.small", "t2.medium"],
      "ConstraintDescription" : "must be a valid EC2 instance type."
    },
    "SSHLocation" : {
      "Description" : "The IP address range that can be used to SSH to the EC2 instances",
      "Type": "String",
      "MinLength": "9",
      "MaxLength": "18",
      "Default": "0.0.0.0/0",
      "AllowedPattern": "(\\d{1,3})\\.(\\d{1,3})\\.(\\d{1,3})\\.(\\d{1,3})/(\\d{1,2})",
      "ConstraintDescription": "must be a valid IP CIDR range of the form x.x.x.x/x."
    } 
  },
<a name="MappingsSample"></a>
  "Mappings" : {
    "AWSInstanceType2Arch" : {
      "t2.nano"     : { "Arch" : "HVM64"  },
      "t2.micro"    : { "Arch" : "HVM64"  },
      "t2.small"    : { "Arch" : "HVM64"  },
      "t2.medium"   : { "Arch" : "HVM64"  }
    },
    "AWSRegionArch2AMI" : {
      "us-east-1"        : {"PV64" : "ami-2a69aa47", "HVM64" : "ami-6869aa05", "HVMG2" : "ami-2e5e9c43"},
      "us-west-2"        : {"PV64" : "ami-7f77b31f", "HVM64" : "ami-7172b611", "HVMG2" : "ami-83b770e3"}
    },
    "SubnetConfig" : {
      "VPC"     : { "CIDR" : "10.0.0.0/16" },
      "Public"  : { "CIDR" : "10.0.0.0/24" }
    }
  },
<a name="ResourcesSample"></a>
  "Resources" : {
&nbsp;
    "WebServerInstance": {  
      "Type": "AWS::EC2::Instance",
      "Metadata" : {
        "AWS::CloudFormation::Init" : {
          "configSets" : {
            "InstallAndRun" : [ "Install", "Configure" ]
          },

          "Install" : {
            "packages" : {
              "yum" : {
                "mysql"        : [],
                "mysql-server" : [],
                "mysql-libs"   : [],
                "httpd"        : [],
                "php"          : [],
                "php-mysql"    : [],
                "git"          : []
              }
            },
&nbsp;
            "files" : {
              "/var/www/html/index.php" : {
                "content" : { "Fn::Join" : [ "", [
                  "<html>\n",
                  "  <head>\n",
                  "    <title>AWS CloudFormation PHP Sample</title>\n",
                  "    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=ISO-8859-1\">\n",
                  "  </head>\n",
                  "  <body>\n",
                  "    &LT;h1>Welcome to the AWS CloudFormation PHP Sample&LT;/h1>\n",
                  "    &LT;p/>\n",
                  "    &LT;?php\n",
                  "      // Print out the current data and time\n",
                  "      print \"The Current Date and Time is: &LT;br/>\";\n",
                  "      print date(\"g:i A l, F j Y.\");\n",
                  "    ?>\n",
                  "    &LT;p/>\n",
                  "    &LT;?php\n",
                  "      $Database   = \"localhost\";\n",
                  "      $DBUser     = \"", {"Ref" : "DBUser"}, "\";\n",
                  "      $DBPassword = \"", {"Ref" : "DBPassword"}, "\";\n",
                  "      print \"Database = \" . $Database . \"<br />\";\n",
                  "      $dbconnection = mysql_connect($Database, $DBUser, $DBPassword)\n",
                  "                      or die(\"Could not connect: \" . mysql_error());\n",
                  "      print (\"Connected to $Database successfully\");\n",
                  "      mysql_close($dbconnection);\n",
                  "    ?>\n",
                  "  </body>\n",
                  "</html>\n"
                ]]},
                "mode"  : "000600",
                "owner" : "apache",
                "group" : "apache"
              },
              "/tmp/setup.mysql" : {
                "content" : { "Fn::Join" : ["", [
                  "CREATE DATABASE ", { "Ref" : "DBName" }, ";\n",
                  "GRANT ALL ON ", { "Ref" : "DBName" }, ".* TO '", { "Ref" : "DBUser" }, "'@localhost IDENTIFIED BY '", { "Ref" : "DBPassword" }, "';\n"
                  ]]},
                "mode"  : "000400",
                "owner" : "root",
                "group" : "root"
              },
              "/etc/cfn/cfn-hup.conf" : {
                "content" : { "Fn::Join" : ["", [
                  "[main]\n",
                  "stack=", { "Ref" : "AWS::StackId" }, "\n",
                  "region=", { "Ref" : "AWS::Region" }, "\n",
                  "interval=6", "\n",
                ]]},
                "mode"    : "000400",
                "owner"   : "root",
                "group"   : "root"
              },
              "/etc/cfn/hooks.d/cfn-auto-reloader.conf" : {
                "content": { "Fn::Join" : ["", [
                  "[cfn-auto-reloader-hook]\n",
                  "triggers=post.update\n",
                  "path=Resources.WebServerInstance.Metadata.AWS::CloudFormation::Init\n",
                  "action=/opt/aws/bin/cfn-init -v ",
                  "         --stack ", { "Ref" : "AWS::StackName" },
                  "         --resource WebServerInstance ",
                  "         --configsets InstallAndRun ",
                  "         --region ", { "Ref" : "AWS::Region" }, "\n",
                  "runas=root\n"
                ]]}
              }
            },
            "services" : {
              "sysvinit" : {  
                "mysqld"  : { "enabled" : "true", "ensureRunning" : "true" },
                "httpd"   : { "enabled" : "true", "ensureRunning" : "true" },
                "cfn-hup" : { "enabled" : "true", "ensureRunning" : "true",
                "files" : ["/etc/cfn/cfn-hup.conf", "/etc/cfn/hooks.d/cfn-auto-reloader.conf"]}
              }
            }
          },
           "Configure" : {
            "commands" : {
              "01_set_mysql_root_password" : {
                "command" : { "Fn::Join" : ["", ["mysqladmin -u root password '", { "Ref" : "DBRootPassword" }, "'"]]},
                "test" : { "Fn::Join" : ["", ["$(mysql ", { "Ref" : "DBName" }, " -u root --password='", { "Ref" : "DBRootPassword" }, "' >/dev/null 2>&1 </dev/null); (( $? != 0 ))"]]}
              },
              "02_create_database" : {
                "command" : { "Fn::Join" : ["", ["mysql -u root --password='", { "Ref" : "DBRootPassword" }, "' < /tmp/setup.mysql"]]},
                "test" : { "Fn::Join" : ["", ["$(mysql ", { "Ref" : "DBName" }, " -u root --password='", { "Ref" : "DBRootPassword" }, "' >/dev/null 2>&1 </dev/null); (( $? != 0 ))"]]}
              }
            }
          }
        }
      },
<a name="MetadataSample"></a>
       "Properties": {
        "ImageId" : { "Fn::FindInMap" : [ "AWSRegionArch2AMI", { "Ref" : "AWS::Region" },
                          { "Fn::FindInMap" : [ "AWSInstanceType2Arch", { "Ref" : "InstanceType" }, "Arch" ] } ] },
        "InstanceType"   : { "Ref" : "InstanceType" },
        "KeyName"        : { "Ref" : "KeyName" },
        "NetworkInterfaces" : [{
          "GroupSet"                 : [{ "Ref" : "EC2SecurityGroup" }],
           "PrivateIpAddress"    : "10.0.0.100",
           "AssociatePublicIpAddress" : "true",
          "DeviceIndex"              : "0",
          "DeleteOnTermination"      : "true",
          "SubnetId"                 : { "Ref" : "PublicSubnet" }
        }],
        "UserData"       : { "Fn::Base64" : { "Fn::Join" : ["", [
             "#!/bin/bash -xe\n",
             "yum update -y aws-cfn-bootstrap\n",

             "# Install the files and packages from the metadata\n",
             "/opt/aws/bin/cfn-init -v ",
             "         --stack ", { "Ref" : "AWS::StackName" },
             "         --resource WebServerInstance ",
             "         --configsets InstallAndRun ",
             "         --region ", { "Ref" : "AWS::Region" }, "\n",

             "# Signal the status from cfn-init\n",
             "/opt/aws/bin/cfn-signal -e $? ",
             "         --stack ", { "Ref" : "AWS::StackName" },
             "         --resource WebServerInstance ",
             "         --region ", { "Ref" : "AWS::Region" }, "\n"
        ]]}},        
      },
      "CreationPolicy" : {
        "ResourceSignal" : {
          "Timeout" : "PT5M"
        }
      }
    },
&nbsp;
    "VPC" : {
      "Type" : "AWS::EC2::VPC",
      "Properties" : {
        "EnableDnsSupport" : "true",
        "EnableDnsHostnames" : "true",
        "CidrBlock" : { "Fn::FindInMap" : [ "SubnetConfig", "VPC", "CIDR" ]},
        "Tags" : [
          { "Key" : "Application", "Value" : { "Ref" : "AWS::StackName" } },
          { "Key" : "Network", "Value" : "Public" }
        ]
      }
    },
&nbsp;
    "PublicSubnet" : {
      "Type" : "AWS::EC2::Subnet",
      "Properties" : {
        "VpcId" : { "Ref" : "VPC" },
         "AvailabilityZone": { "Fn::Select": [ "0", { "Fn::GetAZs": "" } ] },
        "CidrBlock" : { "Fn::FindInMap" : [ "SubnetConfig", "Public", "CIDR" ]},
        "Tags" : [
          { "Key" : "Application", "Value" : { "Ref" : "AWS::StackName" } },
          { "Key" : "Network", "Value" : "Public" }
        ]
      }
    },
&nbsp;
    "InternetGateway" : {
      "Type" : "AWS::EC2::InternetGateway",
      "Properties" : {
        "Tags" : [
          { "Key" : "Application", "Value" : { "Ref" : "AWS::StackName" } },
          { "Key" : "Network", "Value" : "Public" }
        ]
      }
    },
&nbsp;
    "GatewayToInternet" : {
       "Type" : "AWS::EC2::VPCGatewayAttachment",
       "Properties" : {
         "VpcId" : { "Ref" : "VPC" },
         "InternetGatewayId" : { "Ref" : "InternetGateway" }
       }
    },
&nbsp;
    "PublicRouteTable" : {
      "Type" : "AWS::EC2::RouteTable",
      "Properties" : {
        "VpcId" : { "Ref" : "VPC" },
        "Tags" : [
          { "Key" : "Application", "Value" : { "Ref" : "AWS::StackName" } },
          { "Key" : "Network", "Value" : "Public" }
        ]
      }
    },
&nbsp;
    "PublicRoute" : {
      "Type" : "AWS::EC2::Route",
      "DependsOn" : "GatewayToInternet",
      "Properties" : {
        "RouteTableId" : { "Ref" : "PublicRouteTable" },
        "DestinationCidrBlock" : "0.0.0.0/0",
        "GatewayId" : { "Ref" : "InternetGateway" }
      }
    },
&nbsp;
    "PublicSubnetRouteTableAssociation" : {
      "Type" : "AWS::EC2::SubnetRouteTableAssociation",
      "Properties" : {
        "SubnetId" : { "Ref" : "PublicSubnet" },
        "RouteTableId" : { "Ref" : "PublicRouteTable" }
      }
    },
&nbsp;
    "PublicNetworkAcl" : {
      "Type" : "AWS::EC2::NetworkAcl",
      "Properties" : {
        "VpcId" : { "Ref" : "VPC" },
        "Tags" : [
          { "Key" : "Application", "Value" : { "Ref" : "AWS::StackName" } },
          { "Key" : "Network", "Value" : "Public" }
        ]
      }
    },
&nbsp;
    "InboundHTTPPublicNetworkAclEntry" : {
      "Type" : "AWS::EC2::NetworkAclEntry",
      "Properties" : {
        "NetworkAclId" : { "Ref" : "PublicNetworkAcl" },
        "RuleNumber" : "100",
        "Protocol" : "6",
        "RuleAction" : "allow",
        "Egress" : "false",
        "CidrBlock" : "0.0.0.0/0",
        "PortRange" : { "From" : "80", "To" : "80" }
      }
    },
&nbsp;
    "InboundHTTPSPublicNetworkAclEntry" : {
      "Type" : "AWS::EC2::NetworkAclEntry",
      "Properties" : {
        "NetworkAclId" : { "Ref" : "PublicNetworkAcl" },
        "RuleNumber" : "101",
        "Protocol" : "6",
        "RuleAction" : "allow",
        "Egress" : "false",
        "CidrBlock" : "0.0.0.0/0",
        "PortRange" : { "From" : "443", "To" : "443" }
      }
    },
&nbsp;
    "InboundSSHPublicNetworkAclEntry" : {
      "Type" : "AWS::EC2::NetworkAclEntry",
      "Properties" : {
        "NetworkAclId" : { "Ref" : "PublicNetworkAcl" },
        "RuleNumber" : "102",
        "Protocol" : "6",
        "RuleAction" : "allow",
        "Egress" : "false",
        "CidrBlock" : "0.0.0.0/0",
        "PortRange" : { "From" : "22", "To" : "22" }
      }
    },
&nbsp;
    "InboundEmphemeralPublicNetworkAclEntry" : {
      "Type" : "AWS::EC2::NetworkAclEntry",
      "Properties" : {
        "NetworkAclId" : { "Ref" : "PublicNetworkAcl" },
        "RuleNumber" : "103",
        "Protocol" : "6",
        "RuleAction" : "allow",
        "Egress" : "false",
        "CidrBlock" : "0.0.0.0/0",
        "PortRange" : { "From" : "1024", "To" : "65535" }
      }
    },
&nbsp;
    "OutboundPublicNetworkAclEntry" : {
      "Type" : "AWS::EC2::NetworkAclEntry",
      "Properties" : {
        "NetworkAclId" : { "Ref" : "PublicNetworkAcl" },
        "RuleNumber" : "100",
        "Protocol" : "6",
        "RuleAction" : "allow",
        "Egress" : "true",
        "CidrBlock" : "0.0.0.0/0",
        "PortRange" : { "From" : "0", "To" : "65535" }
      }
    },
&nbsp;
    "PublicSubnetNetworkAclAssociation" : {
      "Type" : "AWS::EC2::SubnetNetworkAclAssociation",
      "Properties" : {
        "SubnetId" : { "Ref" : "PublicSubnet" },
        "NetworkAclId" : { "Ref" : "PublicNetworkAcl" }
      }
    },
&nbsp;
    "EC2SecurityGroup" : {
      "Type" : "AWS::EC2::SecurityGroup",
      "Properties" : {
        "GroupDescription" : "Enable access to the EC2 host",
        "VpcId" : { "Ref" : "VPC" },
        "SecurityGroupIngress" : [
          { "IpProtocol" : "tcp", "FromPort" : "22",  "ToPort" : "22",  "CidrIp" : "0.0.0.0/0" },
          { "IpProtocol" : "tcp", "FromPort" : "80",  "ToPort" : "80",  "CidrIp" : "0.0.0.0/0" },
          { "IpProtocol" : "tcp", "FromPort" : "443",  "ToPort" : "443",  "CidrIp" : "0.0.0.0/0" },
          { "IpProtocol" : "icmp", "FromPort" : "-1",  "ToPort" : "-1",  "CidrIp" : "0.0.0.0/0" }
        ]
      }
    },
   "SGBaseIngress": {
      "Type": "AWS::EC2::SecurityGroupIngress",
      "Properties": {
        "GroupId": { "Ref": "EC2SecurityGroup" },
        "IpProtocol": "tcp",
        "FromPort": "80",
        "ToPort": "80",
        "SourceSecurityGroupId": { "Ref": "EC2SecurityGroup" }
      }
    }          
  },
[<a name="OutputsSample"></a>
  "Outputs" : {
    "WebsiteURL" : {
      "Description" : "URL for newly created LAMP stack",
      "Value" : { "Fn::Join" : ["", ["http://", { "Fn::GetAtt" : [ "WebServerInstance", "PublicDnsName" ]}]] }
    }
  }
}
</pre>


## Jason vs. Yaml

ECMA-404 JSON standard and YAML version 1.1, excluding aliases, hash merges, and (binary, omap, pairs, sets, and timestam) tags

<a target="_blank" href="https://www.json2yaml.com/">https://www.json2yaml.com</a>
ONLINE TOOL

https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/working-with-templates-cfn-designer-json-editor.html?icmpid=docs_cfn_console_designer
Components view

<a name="Stacks"></a>

## Stacks

<a target="_blank" href="http://stacker.readthedocs.io/en/stable/">
stacker</a> is a tool and library used to create & update multiple CloudFormation stacks. It was originally written at Remind and released to the open source community.


1. Install AWS CLI under <tt>~/.aw</tt>
   </pre>

   <a target="_blank" href="http://docs.aws.amazon.com/cli/latest/userguide/installing.html">
   http://docs.aws.amazon.com/cli/latest/userguide/installing.html</a>
   
   `--upgrade` option tells pip to upgrade any requirements that are already installed. 
   
   `--user` option tells pip to install the program to a subdirectory of your user directory to avoid modifying libraries used by your operating system.


<a name="Templates"></a>

## Templates

$template = "cpv-1-1.yaml"
aws cloudformation validate-template --template-body "file://cpv-1-1.yaml" \
http://docs.aws.amazon.com/cli/latest/reference/cloudformation/validate-template.html


<a name="HelperSccripts"></a>

## Helper Scripts in Python

AWS CloudFormation provides Python helper scripts to install software and start services on an Amazon EC2 instance that you create as part of your stack. They reside (by default) in folder <tt>/opt/aws/bin/</tt>

* <strong>cfn-init</strong> retrieves and interprets resource metadata, install packages, create files, and start services.

* <strong>cfn-signal</strong> signals a CreationPolicy or WaitCondition, so you can synchronize other resources in the stack when the prerequisite resource or application is ready.

* <strong>cfn-get-metadata</strong> retrieves metadata for a resource or path to a specific key.

* <strong>cfn-hup</strong> checks for updates to metadata and execute custom hooks when changes are detected.

<a target="_blank" href="https://beta.linuxacademy.com/#/hands-on-labs/details/f4191102-c311-40ee-bf3c-b10137498dd4">this hands-on lab</a>
uses CloudFormation helper scripts <a target="_blank" href="https://github.com/natonic/DevOpsPro/blob/master/lamp-stack-1478287817_1530269327%20(3).json">from here</a> 
to manage the provisioning of LAMP stack within EC2 instances in Auto Scaling Groups. 


<hr />


   ### Design a CloudFormation Stack

   <img align="right" width="162" alt="aws-codecommit-left-menu-162x287-4244.jpg" src="https://user-images.githubusercontent.com/300046/55665473-89b20b00-57fd-11e9-91af-0992e61886d8.jpg"></a>

1. Click "Services" at the top menu to Find Services: "CloudFormation" ("Create and Manage Services with Templates").
1. Select "Designer" on the left (previously "Design Template" button).

   https://console.aws.amazon.com/cloudformation/designer/home?region=us-east-1

1. Switch to copy the <a target="_blank" href="https://github.com/natonic/DevOpsPro/blob/master/lamp-stack-1478287817_1530269327%20(3).json">CloudFormation helper script (445 lines)</a> <a target="_blank" href="https://raw.githubusercontent.com/natonic/DevOpsPro/master/lamp-stack-1478287817_1530269327%20(3).json">from below</a>.
1. In "new.template", select to overwrite all existing (including "AWSTemplateFormatVersion" required on all templates) and paste from Clipboard.
1. Next, navigate to the CloudFormation service in the AWS Management Console.
1. Click the checkbox icon to validate.

   ![aws-cloudformation-icons-470x124-6520](https://user-images.githubusercontent.com/300046/55665363-2c1cbf00-57fb-11e9-9121-7692a963cb89.jpg)

   Error messages, if any, appear on the lower-right corner.

1. Click the cloud icon with the up arrow to "Create stack".
1. Specify the Stack Name "HelperDemo".
1. Generate a password such as "KCsLsVmJoofkgVXdkHgFs3Jhokv" for DBPassword.

   PROTIP: DBPassword must contain only alphanumeric characters. (No special characters)

1. For DBUser "helperdemo".
1. Click on empty KeyName to select "helperdemo" created earlier.
1. Leave all of the default settings on the Select Template page, and click Next.
1. On the Specify Details page, name the stack "HelperDemo".
1. Enter the password from MySQL for DBPassword and DBRootPassword.
1. For KeyName, select helperdemo from the dropdown.
1. Click Next, then click Next again on the Options page.
1. Scroll down to "Create Stack".

   ### List of stacks

1. Refresh the page, and select the HelperDemo stack from the list.
1. Scroll through the Events tab at the bottom of the screen to monitor the stack creation process.
1. Click the Events tab, and change it to Outputs.
1. Right-click the URL next to WebsiteURL, and open the link in a new tab.




## Resources

https://aws.amazon.com/cloudformation/faqs/

https://www.udemy.com/join/login-popup/?next=/aws-cloudformation-master-class/learn/v4/overview

<a target="_blank" href="https://www.udemy.com/aws-cloudformation-master-class/#overview">
AWS CloudFormation Master Class on Udemy</a>
by Stephane Maarek
[March 2019 Update]: Added Drift and Nested Stacks

## More on DevOps #

This is one of a series on DevOps:

{% include devops_links.html %}