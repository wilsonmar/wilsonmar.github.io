---
layout: post
title: "Image processing using AWS Lamba actors"
excerpt: "Run one after another, independently"
tags: [AWS, EC2, lambda, cloud]
date: "2016-06-16"
file: "image-processing-using-aws-lambda"
image:
# pic friends white shirts 1900x500
  feature: https://cloud.githubusercontent.com/assets/300046/16040708/8f5b3cc6-31ee-11e6-9043-15d6ba1326c7.jpg
  credit: Genius Quotes
  creditlink: http://geniusquotes.org/best-friends-forever-quotes-images-and-friends-wallpapers/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}


Here is a design to process files containing pictures
using AWS Lambda functions calling various 3rd party APIs.

This roadmap is designed for an agile "minimul viable product"
approach.

The advantage of doing this on AWS S3
rather than Gulp.js is that it is publicly accessible to many
more people than only those who can setup a Gulp server.

https://medium.freecodecamp.org/how-to-post-process-user-images-programmatically-with-rails-amazon-s3-including-testing-c72645536b54

## Roadmap #

   The first three steps are described in qwikLabs:

0. Setup Lambda function to invoke upon S3 bucket file upload
0. Manually drop a file into an S3 bucket (or Amazon Drive)
0. Trigger invokes Lambda function
0. <a href="#Add2Dynamo">Add to list in DynamoDB</a>

0. Apply initial image recognition task (extent image has nudity, etc.)
0. <a href="#UpdateDynamo">Update DynamoDB</a> with results and timings

   If acceptable, continue:

0. <a href="#CustomCollect">Obtain images from alternate source</a>

0. <a href="#DynamoTriggers">DynamoDB change triggers additional processing</a>
0. <a href="#Watermark">Detect and add invisible watermark</a>
0. <a href="#ImageSizes">Generate thumbnails and other size images</a>
0. <a href="#Compress">Compress image file</a> (using TinyPng API)
0. <a href="#CloudFront">Store image in AWS CloudFront</a>
0. Generate HTML with img sizes in amp-img format for return

   More image processing:

0. <a href="#FacialRecognition">Facial recognition (does the image contain one or more faces?)</a>
0. <a href="#ExtractGeotags">Extract geotags from photos</a>

   Automate input:

0. Generate <a href="#PresignedS3">pre-signed S3 URLs</a>
0. Desktop website to accept drops of files to store in S3
0. Mobile app to accept upload of files to store in S3

   Add capacity management features:

0. Automate saving of multiple files into S3 by another (test) program
0. Update setup DNS across two Availability Zones
0. Setup replication of DynamoDB across availability zones

   Add auto-discovery features:

0. Scan through HTML to extract local images to convert
0. Replace image file URL in HTML
0. Commit change into GitHub

   Add management features:

0. Filter log group/stream to generate metric
0. Display metrics from DynamoDB on Tableau
0. Setup alarms on CloudWatch of metrics
0. Email once a day with metrics summary (cron)

   Add archival features:

0. <a href="#DynamoTriggers">DynamoDB change triggers additional processing</a>
0. <a href="#Archive">Archive file to AWS Glacier</a>
0. Update DynamoDB about archival and file deletion
0. Remove file from S3

   Process files in other clouds:

0. Process image files in Amazon Cloud Drive (https://www.amazon.com/clouddrive/)
0. Process image files in Dropbox
0. Process image files in Microsoft Azure
0. Process image files in Google Drive

   Additional notification features:

0. SNS to IFTTT to invoke IoT https://github.com/danilop/SNS2IFTTT
0. Zapier notification


> Let's work on these together! Contact me.

<hr />


<a name="PreSignedS3"></a>

## Pre-signed S3 URLs #

<a target="_blank" href="http://docs.aws.amazon.com/AmazonS3/latest/dev/PresignedUrlUploadObject.html">
This Amazon doc</a> notes that
normally, S3 buckets are considered private.
Permissions need to be assigned to those who want to upload.

<a target="_blank" href="http://docs.aws.amazon.com/AmazonS3/latest/dev/PresignedUrlUploadObject.html">
This Amazon doc</a> notes that
<strong>S3 URLs can be pre-signed with permissions to upload files by providing:

   * security credentials,
   * a bucket name object key,
   * the HTTP PUT method (uploading objects), and
   * an expiration date and time

BTW: Visual Studio users can manually obtain a pre-signed object URL without writing any code by using the
<a target="_blank" href="http://docs.aws.amazon.com/AWSToolkitVS/latest/UserGuide/using-s3.html">
Visual Studio AWS Explorer</a>.

   NOTE: Amazon allows pre-signed S3 URLs to be valid for only 10 minutes.

Code for pre-signing are provided in .NET, Ruby, and
<a target="_blank" href="http://docs.aws.amazon.com/AmazonS3/latest/dev/PresignedUrlUploadObjectJavaSDK.html">
Java</a>.
TODO:
<a target="_blank" href="http://docs.aws.amazon.com/lambda/latest/dg/API_GetFunction.html">
write a CreateFunction function</a> to pre-sign.
The AmazonS3.generatePresignedUrl method of the AmazonS3 class within the AWS SDK for Java.
GeneratePresignedUrlRequest class.

TODO: Embed the pre-signed S3 URL in the HTML for presentation in a webpage where visitors can drag and drop files.

But the website should ask for (and validate) email addresses.


<a name="Add2Dynamo"></a>

## Add List in Dynamo #



<a name="CustomCollect"></a>

## Custom image collection #

<a target="https://community.lithium.com/t5/Developer-Documentation/bd-p/dev-doc-portal?section=commv2&v2.main=liqlexamples#media">
From Lithium</a>

* Fetching the latest photos posted to the community
* Fetching the latest photos posted to a node
* Fetching photos with most kudos
* Fetching top photo contributors
* Fetching photos uploaded to a thread
* Fetching photos posted by a user

<a name="Watermark"></a>

## Add Watermark #

A digital watermark is embedded in the picture file some code used to prove copyright.
The code is usually cryptographically signed.

<a target="_blank" href="https://www.neutrinoapi.com/api/image-watermark/">
Neutrinoapi</a> offers an on-line API to add a visible watermark (using Alpha blending).
It converts various image formats automatically (GIF, ICO, JPEG, PNG, TIFF).

A repeatable automated batch process (AP) is needed just to iterate when some programs don't work.
The watermarkng feature of <a target="_blank" href="https://github.com/syvaidya/openstego/">
OpenStego</a> (a Java program) is still in beta and
<a target="_blank" href="https://www.raymond.cc/blog/signmyimage-protects-your-image-with-invisible-signature/">
one person</a>a> found
that watermarked file sizes to be much smaller than the original and there is a noticeable quality loss. 


Several organizations provide <strong>manual</strong> GUI to add invisible watermarks,
one file at a time.

   * http://www.adptools.com/en/signmyimage-description.html
   
   * http://www.phibit.com/icemark/ $50

   * https://www.digimarc.com/products/guardian/images/photoshop-plug-in
   Digimarc Guardian 
   in Adobe Photoshop

   * http://louisem.com/1912/free-watermark-software-watermark-online

<a name="NudityCheck"></a>

## Image Processing: Nudity Check #

https://algorithmia.com/algorithms/sfw/NudityDetection
Algorithmia.com

Swagger for service:

NOTE: Does not work in black and white though.

Training cases:

1) nude: True, confidence: 0.93
<br /> https://s3.amazonaws.com/www.isitnude.com/assets/images/sample/obama.jpg

2) nude: false, confidence: 0.95
<br /> http://www.isitnude.com.s3-website-us-east-1.amazonaws.com/assets/images/sample/young-man-by-the-sea.jpg


<a name="CloudFront"></a>

## Store image in AWS CloudFront #

An example of a resource in CloudFront is

   http://d36cz9buwru1tt.cloudfront.net/AWS_Disaster_Recovery.pdf


<a name="UpdateDynamo"></a>

## Update Dynamo #

DynamoDB is a NoSQL database containing key-value pairs.

 Store in DynamoDB:

   * Picture URL
   * GUID to associate with other data

   * Date/Time of entry

   For each picture:

   * Size of picture before compression
   * Size of picture after compression
   * Width of picture
   * Height of picture
   * Method of scaling

   * ContainsNudity: true/false
   * ContainsNudityConfidence: 0 to 100%.

Other information on all AWS activity logs:

   * instance-id,
   * region,
   * availability-zone
   * environment (staging, production, etc),

Having logs outside each server makes it unnecessary to SSH into individual servers
and enables trends across servers and other attributes to be analyzed.

<a target="_blank" href="https://wblinks.com/notes/aws-tips-i-wish-id-known-before-i-started/">
This blogger says</a>:

> "If you have to SSH into your servers, then your automation has failed.
 This is both the most frightening and yet most useful thing I've learned."

* <a target="_blank" href="https://news.ycombinator.com/item?id=7173361">
Discussion on this on Hacker News</a>.


<a name="DynamoTriggers"></a>

## Dynamo Triggers of actors #

The workflow design concern here is with so many steps,
we want to avoid a "master" program hanging around
waiting for steps to complete just to hand-off to another function.

How about we have each Lambda function kill itself after
invoking a new function to run independently,
possibly defined in another programming language.

This would also enable fine-grained management of individual functions.

See:
http://stackoverflow.com/questions/31714788/can-an-aws-lambda-function-call-another
suggested chaining function calls via SNS topics
https://mobile.awsblog.com/post/Tx1VE917Z8J4UDY/Invoking-AWS-Lambda-functions-via-Amazon-SNS

https://java.awsblog.com/post/Tx2J2LPKTTVU93H/Invoking-AWS-Lambda-Functions-from-Java

Documentation: <br />
http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.Lambda.html

Guided walkthrough: <br />
https://aws.amazon.com/blogs/aws/dynamodb-update-triggers-streams-lambda-cross-region-replication-app/

CAUTION: There is a concurrent Lambda invocation limit of 100 at a time per account.

API Gateway has a maximum limit of 1000 RPS (requests per second),
but can be adjusted by request.

http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.Lambda.html

### Alternative chaining via SNS #

An alternative is via subscription to SNS topics.

* Lambda publishes message to a SNS Topic</a>
* Other Lambdas subscribe to this topic so as soon as messages arrive in the topic, second Lambda gets executed with the message as it's input parameter.

0. <a href="#SNSChaining">Lambda publishes message to a SNS Topic</a>
0. Other Lambdas subscribe to this topic so as soon as messages arrive in the topic, second Lambda gets executed with the message as it's input parameter.


<a name="ImageSizes"></a>

### Resize images to various sizes #

Pictures need to be re-sized for (pixels):

   * 150x? fixed width, height is scaled as needed
   * 50x50 scale image best into box
   * ?x150 fixed height, width is scaled as needed

   * 108x108 PNG (with transparency) or JPG for display in the Alexa App. 
   * 512x512 PNG (with transparency) or JPG for display in the Alexa App on larger screens.

   * 2560x1440 for YouTube Channel Art




ImageMagick is used.

   PROTIP: Do image compression AFTER resize?

<a name="Compress"></a>

## Compression service #

https://tinypng.com/developers


<a name="ExtractGeotags"></a>

## Extract geotags from photos #

There are several tools to read the metadata
devices embed in photo files.

From JPEG images Phil Harvey's EXIF command extracts:

   <pre>
   North or South Latit|N                                                         
   Latitude            |42.00, 39.00, 24.67                                       
   East or West Longitu|E                                                         
   Longitude           |23.00, 21.00, 28.45                                       
   Altitude reference  |0x00                                                      
   Altitude            |625.50
   &nbsp;
   Manufacturer        |Nokia                                                     
   Model               |E71                                                       
   Orientation         |top - left                                                
   x-Resolution        |300.00                                                    
   y-Resolution        |300.00                                                    
   Resolution Unit     |Inch                                                      
   YCbCr Positioning   |centered                                                  
   Compression         |JPEG compression                                          
   x-Resolution        |72.00                                                     
   y-Resolution        |72.00                                                     
   Resolution Unit     |Inch                                                      
   FNumber             |f/3.2                                                     
   Exif Version        |Exif Version 2.2                                          
   Date and Time (origi|2011:01:24 12:15:01                                       
   Date and Time (digit|2011:01:24 12:15:01                                       
   ComponentsConfigurat|Y Cb Cr -                                                 
   Aperture            |3.20 EV (f/3.0)                                           
   Light Source        |0                                                         
   Flash               |Flash did not fire, auto mode.                            
   Focal Length        |4.9 mm                                                    
   FlashPixVersion     |FlashPix Version 1.0                                      
   Color Space         |sRGB                                                      
   PixelXDimension     |2048                                                      
   PixelYDimension     |1536                                                      
   Custom Rendered     |Normal process                                            
   Exposure Mode       |Auto exposure                                             
   White Balance       |Auto white balance                                        
   Digital Zoom Ratio  |1.00                                                      
   Scene Capture Type  |Standard                                                  
   GPS tag version     |0x02, 0x02, 0x00, 0x00                                    
   </pre>

For videos there is exiftool at http://www.sno.phy.queensu.ca/~phil/exiftool/
Perl library.

There is also https://github.com/DIA-NZ/Metadata-Extraction-Tool
the National Library of New Zealand wrote in Java and XML since 2003
at http://meta-extractor.sourceforge.net/

On-line from a browser are:

   * http://readexifdata.com/

   * <a target="_blank" href="http://regex.info/exif.cgi">
   http://regex.info/exif.cgi</a> displays the day for a file URL specified.
   See http://regex.info/blog/other-writings/online-exif-image-data-viewer

BTW, http://www.dpreview.com/forums/1005
has photos.


### Geo names from coordinates #

Obtain from
<a target="_blank" href="http://wiki.openstreetmap.org/wiki/Nominatim#Reverse_Geocoding">
Nominatim OpenStreetMap Web Service</a>

https://exposingtheinvisible.org/resources/obtaining-evidence/image-digging
provides a Ruby script to process a list of image files.

Next, display the tag in a Google Map



<a name="FacialRecognition"></a>

## Facial recognition #

Does the image contain one or more faces?

https://github.com/danilop/docker-opencv






<a name="Archival"></a>

## Archival to AWS Glacier #

<a target="_blank" href="http://aws.amazon.com/glacier/">
Amazon Glacier</a> provides extremely low-cost storage for data archiving and backup. Objects (or archives, as they are known in Amazon Glacier) are optimized for infrequent access, for which retrieval times of several hours are adequate.


## Resources #

https://speakerdeck.com/michaelwittig/the-life-of-a-serverless-microservice-on-aws
Michael Wittig (@hellomichibye, mwittig@tecracer.de):

   * https://cloudonaut.io/serverless-image-resizing-at-any-scale/

   * https://github.com/michaelwittig/devopscon16-auth-service
   * https://github.com/michaelwittig/devopscon16-profile-service
   * https://github.com/michaelwittig/devopscon16-location-service

   * CodePileline/CodeCommit available in us-east-1 only (as of June 2016).

(save 39% using code ctwdevopstw) manning.com/wittig/
