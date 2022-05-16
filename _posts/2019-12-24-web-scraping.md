---
layout: post
title: "Web Scraping"
excerpt: "How to use the Scrapy Python crawler framework to fetch HTML which Beautiful Soup parsers, on a Mac for Machine Learning visualizations"
tags: [python, coding]
date: "2019-12-24"
file: "web-scraping"
image:
# pic white python logo 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622164/4230c848-0585-11e6-957b-be11147346e6.jpg
  credit: 
  creditlink: 
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This is a step-by-step hands-on tutorial explaining how to scrape websites for information.

{% include whatever.html %}

PROTIP: If an API is not available, scrape (extract/mine) specific information by parsing HTML from websites using the <a target="_blank" href="http://docs.scrapy.org/en/latest/intro/overview.html">Scrapy</a> web scraping (Spider) framework. See <a target="_blank" href="https://www.inkoop.io/blog/web-scraping-using-python-and-scrapy/">blog</a>.

1. inside a virtual environment
1. Install by <tt>pip install Scrapy</tt> 

   <a name="ScrapyCommands"></a>

1. Verify by <tt>scrape</tt> with parameters. The response:

   <pre>Scrapy 1.8.0 - no active project
&nbsp;
Usage:
  scrapy &LT;command> [options] [args]
&nbsp;
Available commands:
  bench         Run quick benchmark test
  fetch         Fetch a URL using the Scrapy downloader
  genspider     Generate new spider using pre-defined templates
  runspider     Run a self-contained spider (without creating a project)
  settings      Get settings values
  shell         Interactive scraping console
  startproject  Create new project
  version       Print Scrapy version
  view          Open URL in browser, as seen by Scrapy
&nbsp;
  [ more ]      More commands available when run from project directory
&nbsp;
Use "scrapy &LT;command> -h" to see more info about a command
   </pre>

   Notice that there are <a href="#AddlCommands">more commands</a> when the command is run inside a Scrapy folder.

1. Manually verify that the websites provided by Scrapy framework developers still operate:

   <a target="_blank" href="https://quotes.toscrape.com">https://quotes.toscrape.com</a>
   
   <img width="776" alt="python-api-quotes" src="https://user-images.githubusercontent.com/300046/71451823-88818f00-273a-11ea-9e4f-22c7cd988cdd.png">

   <a target="_blank" href="https://books.toscrape.com">https://books.toscrape.com</a>
   
   <img width="1242" alt="python-api-books" src="https://user-images.githubusercontent.com/300046/71451821-76075580-273a-11ea-8ef3-0e09270a5f4a.png">

1. Download a sample project using Spyder, assembled from <a target="_blank" href="https://app.pluralsight.com/library/courses/crawling-web-python-scrapy/table-of-contents">a video tutorial from Pluralsight</a>:

   <pre>git clone https://github.com/wilsonmar/scrapy.git
   cd scrapy
   ls</pre>
 
   The repo contains several projects (books-export, quoting).

   <a target="_blank" href="https://docs.python.org/3/tutorial/modules.html#compiled-python-files">PROTIP</a>: The <tt>__pycache__</tt> (cache) are created by the Python3 compiler to make subsequent executions a little faster in production code. In that folder, a <tt>.pyc</tt> file contains bytecode associated with each <tt>import</tt> statement in the code. They are specified in <tt>.gitignore</tt> for the repo so they don't get stored in GitHub.

   PROTIP: On a Mac, hide all such folders with this command:
   
   <pre>find . -name '__pycache__' -exec chflags hidden {} \;</pre>

   On Windows:

   <pre>dir * /s/b | findstr __pycache__ | attrib +h +s +r</pre>

1. See what commands when in an active project folder:

   <pre><strong>cd books-export
   scrapy
   </strong></pre>

   <a name="AddlCommands"></a>

   Additional commands are:

   <pre>   check         Check spider contracts
  crawl         Run a spider
  edit          Edit spider
  list          List available spiders
  parse         Parse URL (using its spider) and print the results
   </pre>

1. List what crawlers Scrapy recognizes:

   <pre><strong>scrapy list
   </strong></pre>

1. Still in folder <tt>books-export</tt>, run the crawl script defined in the lower folder <tt>spiders</tt>:

   <pre><strong>scrapy crawl BookCrawler
   </strong></pre>

   The output from the command are console messages ending with something like this:


   <pre>2019-12-25 14:22:53 [scrapy.extensions.feedexport] INFO: Stored json feed (1807 items) in: books.json
2019-12-25 14:22:53 [scrapy.statscollectors] INFO: Dumping Scrapy stats:
{'downloader/request_bytes': 47252,
 'downloader/request_count': 145,
 'downloader/request_method_count/GET': 145,
 'downloader/response_bytes': 786302,
 'downloader/response_count': 145,
 'downloader/response_status_count/200': 144,
 'downloader/response_status_count/404': 1,
 'dupefilter/filtered': 7372,
 'elapsed_time_seconds': 23.466027,
 'finish_reason': 'finished',
 'finish_time': datetime.datetime(2019, 12, 25, 21, 22, 53, 201722),
 'item_dropped_count': 453,
 'item_dropped_reasons_count/DropItem': 453,
 'item_scraped_count': 1807,
 'log_count/DEBUG': 1953,
 'log_count/INFO': 11,
 'log_count/WARNING': 453,
 'memusage/max': 52436992,
 'memusage/startup': 52436992,
 'request_depth_max': 51,
 'response_received_count': 145,
 'robotstxt/request_count': 1,
 'robotstxt/response_count': 1,
 'robotstxt/response_status_count/404': 1,
 'scheduler/dequeued': 144,
 'scheduler/dequeued/memory': 144,
 'scheduler/enqueued': 144,
 'scheduler/enqueued/memory': 144,
 'start_time': datetime.datetime(2019, 12, 25, 21, 22, 29, 735695)}
2019-12-25 14:22:53 [scrapy.core.engine] INFO: Spider closed (finished)</pre>

1. Switch to a text editor to see <strong>books.json</strong>.

   This contains each book's title, price, imageurl, bookurl.

1. View the file BookCrawler.py file in the spiders folder.

   Functions (from the bottom up) are: parsepage, extractData, writeTxt.

   These are the result of edits after a template was generated.

   ### Scrape Quotes with exports

1. Run:

   <pre><strong>cd quoting
   scrapy crawl QuoteCrawler
   </strong></pre>

   <pre>2019-12-25 04:09:38 [scrapy.statscollectors] INFO: Dumping Scrapy stats:
{'downloader/request_bytes': 34936,
 'downloader/request_count': 122,
 'downloader/request_method_count/GET': 122,
 'downloader/response_bytes': 176221,
 'downloader/response_count': 122,
 'downloader/response_status_count/200': 121,
 'downloader/response_status_count/404': 1,
 'dupefilter/filtered': 1897,
 'elapsed_time_seconds': 6.066887,
 'finish_reason': 'finished',
 'finish_time': datetime.datetime(2019, 12, 25, 11, 9, 38, 225122),
 'log_count/DEBUG': 123,
 'log_count/INFO': 10,
 'memusage/max': 52887552,
 'memusage/startup': 52887552,
 'request_depth_max': 4,
 'response_received_count': 122,
 'robotstxt/request_count': 1,
 'robotstxt/response_count': 1,
 'robotstxt/response_status_count/404': 1,
 'scheduler/dequeued': 121,
 'scheduler/dequeued/memory': 121,
 'scheduler/enqueued': 121,
 'scheduler/enqueued/memory': 121,
 'start_time': datetime.datetime(2019, 12, 25, 11, 9, 32, 158235)}
2019-12-25 04:09:38 [scrapy.core.engine] INFO: Spider closed (finished)
   </pre>

1. Switch to a text editor to view the file created: "quotes.toscrape.txt".


   ### Generate scrape

   Running the above avoids using these commands to generate the project:

   <pre><strong>scrapy startproject quotes
   cd quotes
   scrapy genspider QuoteSpider quotes.toscrape.com
   </strong></pre>

   The response:

   <pre> Created spider 'QuoteSpider' using template 'basic' in module:
  quotes.spiders.QuoteSpider</pre>

   ... and then edit the generated code.

<hr />

### Scrapy Python coding

Now let's examine the Python code.

* Scrapy uses the <a target="_blank" href="https://twistedmatrix.com/trac/">twisted Python networking engine</a> to visit multiple urls Asynchronously (processing each request in a non-blocking way, without waiting for one request to finish before sending another request).

* Scrapy can set and rotate proxy, User Agent, and other HTTP headers dynamically.

* Scrapy automatically handles cookies passed between browser and server.

* Scrapy's Spider extract a pipeline of "items" (attributes of a website) to process, such as pushing data to a Neo4j or mysql database.

* <a target="_blank" href="https://scrapy.readthedocs.io/en/latest/topics/selectors.html">Scrapy electors</a> uses <a target="_blank" href="https://lxml.de/parsing.html">lxml</a>, which is faster than the Python <a target="_blank" href="https://www.crummy.com/software/BeautifulSoup">Beautiful Soup (BS4) library</a> to <strong>parse</strong> data from inside HTML and XML markup scraped from websites. 

* Scrapy can export data in various formats (CSV, JSON, jsonlines, XML).


## References

https://www.digitalocean.com/community/tutorials/how-to-crawl-a-web-page-with-scrapy-and-python-3

<a target="_blank" href="https://automatetheboringstuff.com/">"Automate the Boring Stuff"</a> (free at <a target="_blank" href="https://inventwithpython.com/">https://inventwithpython.com</a>) was among the most popular of all tech books. Its author Al Sweigart (@AlSweigart), in 
<a target="_blank" href="https://www.youtube.com/watch?v=dZLyfbSQPXI" title="Sep 17, 2016 at PyBay2016">VIDEO: "Automating Your Browser and Desktop Apps"</a> [<a target="_blank" href="https://speakerdeck.com/pybay/2016-al-sweigart-automating-your-browser-and-desktop-apps">deck</a>]
shows Selenium for web browsers. He also shows his <a target="_blank" href="https://www.youtube.com/watch?v=dZLyfbSQPXI&time=11m36s" title="Sep 17, 2016 at PyBay2016">VIDEO:</a> <a target="_blank" href="https://pyautogui.readthedocs.org">pyautogui</a> (pip install pyautogui) <a target="_blank" href="https://github.com/asweigart/pyautogui">open-sourced in GitHub</a> automates MS Paint and Calc on Windows, and Flash apps (non-browser apps). Moving the mouse to the top left corner (0,0) raises the FailSafeException to stop the script running. That's since there is no hotkey recognition yet.

## More about Python

This is one of a series about Python:

{% include python_links.html %}
