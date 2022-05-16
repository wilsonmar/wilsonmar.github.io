---
layout: post
title: "Graph databases"
excerpt: "It's more relational than relational databases"
tags: [Database, Mac]
date: "2021-12-28"
file: "graph-databases"
image:
# feature: pic white robots woman 1900x500.jpg
  feature: https://cloud.githubusercontent.com/assets/300046/14622167/45abd918-0585-11e6-8537-a58e0b55e3ec.jpg
  credit: Cyberconstruct.be
  creditlink: http://cyberconstruct.be/2015/02/digital-job-crafting/
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

The contribution of this article is a maticulously sequenced presentation that curates concise yet deep insights from the many resources about this topic.

{% include whatever.html %}

## Graph databases: the latest thing

Graph type databases is the latest in the evolution of data storage mechanisms to handle complexity.

<a target="_blank" href="https://user-images.githubusercontent.com/300046/34469117-20b4bd9c-eed5-11e7-9967-f652cc2d67ca.jpg">
<img alt="neo4j-evolution-828x394-72052.jpg" src="https://user-images.githubusercontent.com/300046/34469117-20b4bd9c-eed5-11e7-9967-f652cc2d67ca.jpg"></a>

PROTIP: People using graph databases call themselves "Graphistas".

Graphs can provide insights not easily found using other technologies.

Graph databases provides an alternative way to to store data. Instead of static predefined schemas which require shutdown to change, graph databases can be configured dynamically while running.

Graphs are important to visualizing AI/Machine Learning algorithms:
<a target="_blank" href="https://user-images.githubusercontent.com/300046/69905392-ce884480-1380-11ea-9d0b-c145a2a6e51b.png"><img width="823" alt="neo4j-ai-graphs-823x589" src="https://user-images.githubusercontent.com/300046/69905392-ce884480-1380-11ea-9d0b-c145a2a6e51b.png"></a>

Directed acyclic (one-way) graphs (DAGs) are used in Git, scheduling algorithms, and form the heart of many neuro network (Tensor) models in many other modern applications. Its representation of dependencies (precedence relationships) enable its use in the Airflow task processing app.

## Simpler complex connections, naturally

It's difficult for SQL to answer questions that were not already expected ahead of time. 

SQL databases from Oracle, MySQL, etc. need to join physical tables together using foreign keys and link tables.<a target="_blank" href="https://www.youtube.com/watch?v=oRtVdXvtD3o&time=23m50s">*</a><br />
<img alt="neo4j-link-table-488x264.jpg" src="https://user-images.githubusercontent.com/300046/69884353-05d5f300-12a6-11ea-91ed-1e2dcc0e8b28.jpg">

   Writing SQL to represent a <strong>social graph</strong> containing 1,000 persons averaging 50 friends each can be difficult due to the need for joins and "de-normalized" physical structures. 
   
   ## Graph Faster

   It is time consuming for traditional relational databases to process complex indexed queries (even if it's all in cache). However, graph databases can process complex data structures efficiently because it uses pointers instead of table lookups (for "index free adjacency"). A  <a target="_blank" href="https://www.youtube.com/watch?v=oRtVdXvtD3o&time=1h1m31s">comparison VIDEO</a>:<br />
   <table border="1" cellpadding="4" cellspacing="0">
   <tr><th>&nbsp;</th><th># persons</th><th>query time</th></tr>
   <tr valign="top" align="right"><td>Relational database</td><td>1,000</td><td>200 ms</td></tr>
   <tr valign="top" align="right"><td>Neo4j</td><td>1,000</td><td>2 ms</td></tr>
   <tr valign="top" align="right"><td>"Supernodes" in Neo4j</td><td>1,000,000</td><td>2 ms</td></tr>
   </table> 

   ## More relational than relational databases

   Whereas SQL data is stored in separate tables joined together using complex queries, Graph databases are "white-board friendly" because it stores data the same way as illustrated by its data model. Graph database diagrams look like ER (Entity-Relation) diagrams for SQL databases. The example below uses data from <a target="_blank" href="https://grouplens.org/datasets/movielens/">Movielens database</a> containing 62,000 movies with 25 million ratings and one million tag applications applied by 162,000 users:

   <a target="_blank" href="https://user-images.githubusercontent.com/300046/34470717-c7b80a1a-ef05-11e7-9f9d-2fa35ee496e2.png">
   <img width="838" alt="neo4j-movie-graph-1676x702-144758" src="https://user-images.githubusercontent.com/300046/34470717-c7b80a1a-ef05-11e7-9f9d-2fa35ee496e2.png"></a>


   Graph databases manage nodes (data entities) in relationship to other nodes. 

   Instead of elaborate joins, labeled <strong>relationships</strong> between red <strong>nodes</strong> defining movie titles and green nodes defining actor names. Red and green differentiate <strong>entity types</strong>. Titles and actor names <strong>labels</strong> to nodes.  "ACTED_IN" and "DIRECTED" are <strong>attributes</strong> of relationships.

   > Nodes objects are also called "<strong>vertices</strong>" and 
   relationships are also called "<strong>edges</strong>".

   In Neural Network Computation Graphs:
   > vertices are <strong>neurons</strong> (simple building blocks) and
   edges are <strong>tensors</strong> (data items).

   Each vertex has an ID (identifier).
   
   Each edge has a <strong>weight</strong>. In a graph of edges representing segments of a road being built, the Shortest Path (Djisktra's) algorithm reveals the least-cost set of road segments. 

   Adjacency Lists makes sense for large, sparsely connected graphs.
   
   Adjacency Sets makes sense for small, densely connected graphs.

   To order all nodes that satisfies all precedence relationships, a <strong>topological sort</strong>, implemented using a simple iterative algorithm.

   Spanning Tree Algorithms find a path through all nodes.
   The minimum spanning tree is one that has the lowest sum of weights. 
   Prim's (greedy) algorithm works only for connected (weighted undirected) graphs.
   Krushal's algorithm works even for disconnected graphs.

### Traversing graphs indirectly

   The advantage of graph databases appears when working with complex <strong>indirect relationships</strong>. 

   Relationships and nodes can be associated with name/value pair <strong>properties</strong> used to narrow searches.

   <img alt="neo4j-co-example-1154x345" src="https://user-images.githubusercontent.com/300046/69874771-cf8a7a80-1289-11ea-9c7f-584f04e9534b.jpg">

   Third-party add-ons can add a GUID to each entity.

## Which graph database and language?

<a target="_blank" href="https://db-engines.com/en/ranking_trend/graph+dbms">This ranking by db-engines.com</a> lists Neo4j as the most popular graph database, with Microsoft Cosmos catching up quickly. Notice that Cosmos and others are called "Multi-model" (providing a Document store, Key-value store, wide-column store as well as graph database).

The <a target="_blank" href="https://www.wikiwand.com/en/Gremlin_(programming_language)">Gremlin language</a> traversal machine (GTM) is to graph computing as what the Java virtual machine (JVM) is to general purpose computing. Gremlin was developed (beginning in 2009) by Apache TinkerPop of the Apache Software Foundation. Thus, it is Apache-2 licensed.


### Cloud SaaS Graph database services

Instead of a local instance, if you're working as a team of developers, consider always-on availability, on-demand scalability, and support:

   * <a target="_blank" href="https://graphstory.com/">GraphStory.com</a> provides single-node Cloud Graph Neo4j databases from Azure, AWS, and GCP with their dashboard for $299/month (and up). $899/month and up with monitoring with HA multi-zone failover protection.

   * <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cosmos-db/spark-connector-graph">Microsoft's Cosmos graph database</a>
   running within a Azure HDInsight Spark cluster 2.0.
   <a target="_blank" href="https://www.youtube.com/watch?v=oRtVdXvtD3o" title="2 hours on Mar 25, 2019 by M David Allen">VIDEO</a>, <a target="_blank" href="https://www.microsoft.com/en-us/research/uploads/prod/2019/03/41970_Introduction_to_Neo4j_and_Graph_Databases.pdf">slides</a>

   * <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cosmos-db/graph-introduction">Apache TinkerPop Gremlin</a> queries on DataStax Enterprise Graph

   * <a target="_blank" href="https://aws.amazon.com/neptune/">Neptune</a> (named the ice planet in our solar system) is Amazon's graph database managed cloud service (<a target="_blank" href="https://docs.aws.amazon.com/neptune/latest/userguide/">documentation</a>). <a target="_blank" href="https://app.pluralsight.com/library/courses/aws-amazon-neptune-graph-database/table-of-contents">Pluralsight video course</a> by <a target="_blank" href="https://hoppertech.net/">Jeff Hoopper</a> covers use of (non-prod) CloudFormation to establish a cluster of <strong>$250/month</strong> db.r4.large (or larger) EC2 instances in several availability zones within a region. IAM is used, but is accessible only via a VPC from a Lambda service. The read-only Reader can access Up to 16 read replicas behind separate IP addresses. The modules used in the course are release 2018.3:

      - apache-tinkerpop-gremlin-console-3.3.2 for Gremlin queries
      - eclipse-rd4jf-2.3.2 for SPARQL queries <a href="#Triplestore">Triplestore</a>
      <br /><br />

      AWS Neptune can (from S3) use curl to POST bulk-load graph UTF-8 data in several formats:

      - CSV
      - N-Tuples
      - N-Quads
      - RDF/XML
      - Turtle to load SPARQL
      <br /><br />

   * <a target="_blank" href="https://graphstory.com/blog/2018/08/enterprise-neo4j-on-google-cloud-platform">GraphStory can stand up</a> Enterprise Neo4j <a target="_blank" href="https://neo4j.com/docs/operations-manual/current/clustering/introduction/">Causal Clusters</a> on Google Cloud Platform. Also on the <a target="_blank" href="https://neo4j.com/developer/neo4j-google-cloud-launcher/">GCP Marketplace</a>.  <a target="_blank" href="https://www.youtube.com/watch?v=QG1CgwIWLUs" title="[2:59] Mar 14, 2019 by David Allen">INTRO VIDEO</a>

   * <a target="_blank" href="https://neo4j.com/aura/">Neo4j's own Aura cloud offering</a> runs on GCP.


### Gremlin language

The <strong>Gremlin</strong> language is implemented by a wide variety of vendors, including Neo4j. Gremlin is popular largely because it is supported by the open-source Apache <a target="_blank" href="http://tinkerpop.apache.org/">Tinkerpop</a>/TinkerGraph (<a target="_blank" href="http://tinkerpop.apache.org/docs/3.2.4/reference/#traversal">docs</a> <a target="_blank" href="https://www.zdnet.com/article/graph-databases-advance-tigergraph-announces-32-million-series-b-funding-plus-cloud-based-platform/" title="September 25, 2019">TigerGraph analytics cloud</a>). <strong>Tinkerpop</strong> is one of two open-source graph databases that include @JanusGraph (<a target="_blank" href="http://janusgraph.org/">http://janusgraph.org</a>), open-sourced in 2017 under The Linux Foundation, with participants from Google, Hortonworks, IBM, Amazon, GRAKN.AI, <a target="_blank" href="https://www.experolabs.com/">Expero Labs</a>, etc. Its distributed graph database has multiple scalable storage backends:

   * Apache Cassandra®
   * Apache HBase®
   * Google Cloud Bigtable
   * Oracle BerkeleyDB
   <br /><br />

> "It's harder to get started with Gremlin than Neo4j's Cypher. Gremlin has a SQL-like syntax (SELECT, WHERE, etc.). But Gremlin helps you understand graphs better than Cypher. And it's available on free open-source software and most portable and available among vendors." -- <a target="_blank" href="https://linkedin.com/in/JohnPtacek">John Ptacek</a> [24:25] into <a target="_blank" title="6 Sep 2019 [53m]" href="https://app.pluralsight.com/library/courses/that-conference-2019-session-60/table-of-contents">"THAT Conference '19: Introduction to Graph Databases"</a>

## Resources

* <a target="_blank" href="https://app.pluralsight.com/library/courses/graph-algorithms-python/exercise-files">"Working with Graph Algorithms in Python"</a> video tutorial on Pluralsigh by Janani Ravi explains sample Python 3.5.1 code (not using Neo4J or Gremlin).

* See my <a target="_blank" href="https://wilsonmar.github.io/neo4j">Neo4j Cypher language tutorial</a>


## More about Python

This is one of a series about Python:

{% include python_links.html %}

