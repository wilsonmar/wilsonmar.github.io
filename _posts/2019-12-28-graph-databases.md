---
layout: post
date: "2023-05-31"
file: "graph-databases"
title: "Graph databases"
excerpt: "It's more relational than relational databases"
tags: [Database, Mac]
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

Below is a (probably controversial) table comparing the different types of stores and their strengths and weaknesses.

<table border="1" cellpadding="4" cellspacing="0">
<tr><th>Types:</th><th>Key-value</th><th>Column</th><th>Document</th><th>Relational</th><th>Graph</th></tr>
<tr valign="top" align="center"><td>Complexity</td><td>none</td><td>low</td><td>low</td><td>moderate</td><td>high</td></tr>
<tr valign="top" align="center"><td>Performance</td><td>high</td><td>high</td><td>high</td><td>high</td><td>variable</td></tr>
<tr valign="top" align="center"><td>Scalability</td><td>high</td><td>high</td><td>high / variable</td><td>high</td><td>variable</td></tr>
<tr valign="top" align="center"><td>Flexibility</td><td>high</td><td>moderate</td><td>high</td><td>high</td><td>high</td></tr>
</table>

<a target="_blank" href="https://cloud.google.com/spanner/">Google Cloud Spanner</a> 
is a cloud-based relational database that's a horizontally scalable, globally immediate consistent.
Released in 2017.

References:
   * <a target="_blank" href="https://en.wikipedia.org/wiki/Graph_database">Wikipedia: Graph_database</a>
   * https://itnext.io/getting-started-with-graph-databases-azure-cosmosdb-with-gremlin-api-and-python-80e57cbd1c5e
   * https://www.c-sharpcorner.com/article/what-is-a-graph-database/
   * <a target="_blank" href="https://www.youtube.com/watch?v=QG1CgwIWLUs">VIDEO: Neo4j on GKE via GCP Marketplace</a> at https://bit.ly/2u6ryt3

## Faster and Better?

It is time consuming for traditional relational databases to process complex indexed queries (even if it's all in cache). However, graph databases can process complex data structures efficiently because it uses pointers instead of table lookups (for "index free adjacency"). A <a target="_blank" href="https://www.youtube.com/watch?v=oRtVdXvtD3o&time=1h1m31s">comparison VIDEO</a>:

   <table border="1" cellpadding="4" cellspacing="0">
   <tr><th>&nbsp;</th><th># persons</th><th>query time</th></tr>
   <tr valign="top" align="right"><td>Relational database</td><td>1,000</td><td>200 ms</td></tr>
   <tr valign="top" align="right"><td>Neo4j</td><td>1,000</td><td>2 ms</td></tr>
   <tr valign="top" align="right"><td>"Supernodes" in Neo4j</td><td>1,000,000</td><td>2 ms</td></tr>
   </table> 


## Where graph databases are needed

Graphs can provide insights not easily found using other technologies.

Graph databases provides an alternative way to to store data. Instead of static predefined schemas which require shutdown to change, graph databases can be configured dynamically while running.

Where graphs are important to visualizing AI/Machine Learning algorithms:

<a target="_blank" href="https://user-images.githubusercontent.com/300046/69905392-ce884480-1380-11ea-9d0b-c145a2a6e51b.png"><img width="823" alt="neo4j-ai-graphs-823x589" src="https://user-images.githubusercontent.com/300046/69905392-ce884480-1380-11ea-9d0b-c145a2a6e51b.png"></a>

Directed acyclic (one-way) graphs (DAGs) are used in Git, scheduling algorithms, and form the heart of many neuro network (Tensor) models in many other modern applications. Its representation of dependencies (precedence relationships) enable its use in the Airflow task processing app.

   * https://www.techtarget.com/searchcio/tip/Expect-graph-database-use-cases-for-the-enterprise-to-take-off


## Simpler complex connections, naturally

It's difficult for SQL to answer questions that were not already expected ahead of time. 

SQL databases from Oracle, MySQL, etc. need to join physical tables together using foreign keys and link tables.<a target="_blank" href="https://www.youtube.com/watch?v=oRtVdXvtD3o&time=23m50s">*</a><br />
<img alt="neo4j-link-table-488x264.jpg" src="https://user-images.githubusercontent.com/300046/69884353-05d5f300-12a6-11ea-91ed-1e2dcc0e8b28.jpg">

   Writing SQL to represent a <strong>social graph</strong> containing 1,000 persons averaging 50 friends each can be difficult due to the need for joins and "de-normalized" physical structures.

## More relational than relational databases?

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

<a target="_blank" href="https://db-engines.com/en/ranking_trend/graph+dbms">This ranking by db-engines.com</a> lists Neo4j as the most popular graph database, with Microsoft Azure Cosmos catching up quickly. 

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1680596363/graph-databases-23-04-04_epnjy6.jpg"><img alt="graph-databases-2106x1074-23-04-04.jpg" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1680596363/graph-databases-23-04-04_epnjy6.jpg"></a>

https://db-engines.com/en/system/GraphDB%3BMicrosoft+Azure+Cosmos+DB%3BNeo4j

Notice that Cosmos and others are called "Multi-model" (providing a Document store, Key-value store, wide-column store as well as graph database).

<hr />

## Gremlin language

The <a target="_blank" href="https://www.wikiwand.com/en/Gremlin_(programming_language)">Gremlin language</a> traversal machine (GTM) is to graph computing as what the Java virtual machine (JVM) is to general purpose computing. The Gremlin language is implemented by a wide variety of vendors, including Neo4j. Gremlin is popular largely because it is supported (beginning in 2009) by the open-source Apache <a target="_blank" href="http://tinkerpop.apache.org/">Tinkerpop</a>/TinkerGraph (<a target="_blank" href="http://tinkerpop.apache.org/docs/3.2.4/reference/#traversal">docs</a> 


> "It's harder to get started with Gremlin than Neo4j's Cypher. Gremlin has a SQL-like syntax (SELECT, WHERE, etc.). But Gremlin helps you understand graphs better than Cypher. And it's available on free open-source software and most portable and available among vendors." -- <a target="_blank" href="https://linkedin.com/in/JohnPtacek">John Ptacek</a> [24:25] into <a target="_blank" title="6 Sep 2019 [53m]" href="https://app.pluralsight.com/library/courses/that-conference-2019-session-60/table-of-contents">"THAT Conference '19: Introduction to Graph Databases"</a>

References:
   * https://www.codeproject.com/Articles/1066378/Introduction-to-Graph-Databases-using-Neo-J-and-it
   <br /><br />


## TigerGraph

<a target="_blank" href="https://www.zdnet.com/article/graph-databases-advance-tigergraph-announces-32-million-series-b-funding-plus-cloud-based-platform/" title="September 25, 2019">TigerGraph analytics cloud</a> calls itself "the most scalable graph database-as-a-service for your connected data analytics". It is Apache-2 licensed. It's purpose-built for loading terabytes of data in hours and, in real-time, analyzing 10+ hops deep in to relationships.

   * https://www.tigergraph.com/google-cloud/
   * https://docs.tigergraph.com/tigergraph-server/current/getting-started/cloud-images/gcp
   <br /><br />

## JanusGraph on GKE with Cloud Bigtable

<a target="_blank" href="http://janusgraph.org/">http://janusgraph.org</a> was open-sourced in 2017 under The Linux Foundation, with participants from Google, Hortonworks, IBM, Amazon, GRAKN.AI, <a target="_blank" href="https://www.experolabs.com/">Expero Labs</a>, etc. 
Named customers include Ebay and Target.

The Janusgraph distributed graph database has multiple scalable storage backends:

   * Apache Cassandra®
   * Apache HBase®
   * Google Cloud Bigtable
   * Oracle BerkeleyDB
   <br /><br />

https://db-engines.com/en/system/Google+Cloud+Datastore%3BGraphDB%3BNeo4j
Google Cloud Datastore

JanusGraph uses a pluggable indexing backend to provide full-text indexing for vertex and edge properties.

Janusgraph runs within GKE with ElasticSearch as the indexing backend running in Pods in a StatefulSet.

Bigtable as the underlying backend storage layer.

For fast and deep graph traversals among relationships, JanusGraph stores data as an <strong>adjacency list</strong>.

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1685527712/graphdb-janus-struc-720x161_isbv2y.webp"><img alt="graphdb-janus-struc-720x161.webp" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1685527712/graphdb-janus-struc-720x161_isbv2y.webp"></a>

The above diagram[1] shows the logical storage structure for a small graph fragment with two vertex rows. Two example rows represent two vertices. The first vertex is labeled with a single vertex property and is related to two other vertices by two separate edges. The second vertex holds columns containing two properties and one edge.

Each row represents a vertex, any adjacent vertices (edges), and property metadata about the vertices and edges. A <strong>row key</strong> is the unique identifier for each vertex. Each relationship between the vertex and another vertex and any properties that further define the relationship are stored as an edge or edge-property column. Both the column qualifier and column value store data that defines the edge, in accordance with Bigtable best practices. Each vertex property is stored as a separate column, again using both the column qualifier and the column value to define the property.

<a target="_blank" href="https://db-engines.com/en/system/Google+Cloud+Spanner%3BGraphDB%3BNeo4j">db-engine's popularity ranking</> says
GraphDB is schema-free and OWL/RDFS-schema support; RDF shapes

References:
   * [1] https://connectsaurabhmishra.medium.com/how-google-cloud-deals-with-graph-databases-19790cd1d43e
   * https://connectsaurabhmishra.medium.com/neo4j-aura-graph-database-extension-on-google-cloud-1b2c7f11fbd2
   * https://cloud.google.com/architecture/running-janusgraph-with-bigtable

Neo4j Aura:
   * https://console.cloud.google.com/marketplace/product/endpoints/prod.n4gcp.neo4j.io?project=glass-bridge-285601
   * https://connectsaurabhmishra.medium.com/neo4j-aura-graph-database-extension-on-google-cloud-1b2c7f11fbd2

### Cloud SaaS Graph database services

References:
   * https://www.g2.com/categories/graph-databases
   * https://www.g2.com/categories/graph-databases#grid
   <br /><br />  

Instead of a local instance, if you're working as a team of developers, consider always-on availability, on-demand scalability, and support:

   * <a target="_blank" href="https://neo4j.com/aura/">Neo4j's own Aura cloud offering</a> runs on GCP.

   * <a target="_blank" href="https://graphstory.com/">GraphStory.com</a> provides single-node Cloud Graph Neo4j databases from Azure, AWS, and GCP with their dashboard for $299/month (and up). $899/month and up with monitoring with HA multi-zone failover protection. <a target="_blank" href="https://graphstory.com/blog/2018/08/enterprise-neo4j-on-google-cloud-platform">GraphStory can stand up</a> Enterprise Neo4j <a target="_blank" href="https://neo4j.com/docs/operations-manual/current/clustering/introduction/">Causal Clusters</a> on Google Cloud Platform. Also on the <a target="_blank" href="https://neo4j.com/developer/neo4j-google-cloud-launcher/">GCP Marketplace</a>.  <a target="_blank" href="https://www.youtube.com/watch?v=QG1CgwIWLUs" title="[2:59] Mar 14, 2019 by David Allen">INTRO VIDEO</a>

   * <a href="#Cosmos">Microsoft's Cosmos graph database</a> processes Gremlin queries.
   * <a target="_blank" href="https://neo4j.com/partners/microsoft-azure/">Neo4j VMs on MS Azure Marketplace</a> in <a target="_blank" href="https://neo4j.com/partners/microsoft/">partnership</a> <a target="_blank" href="https://www.youtube.com/watch?v=NOgvz-fv9VI">VIDEO: Graph DataConnect</a>

   * <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cosmos-db/graph-introduction">Apache TinkerPop Gremlin</a> queries on DataStax Enterprise Graph

   * <a target="_blank" href="https://aws.amazon.com/neptune/">AWS Neptune</a> (named the ice planet in our solar system) is Amazon's graph database managed cloud service (<a target="_blank" href="https://docs.aws.amazon.com/neptune/latest/userguide/">documentation</a>). <a target="_blank" href="https://app.pluralsight.com/library/courses/aws-amazon-neptune-graph-database/table-of-contents">Pluralsight video course</a> by <a target="_blank" href="https://hoppertech.net/">Jeff Hoopper</a> covers use of (non-prod) CloudFormation to establish a cluster of <strong>$250/month</strong> db.r4.large (or larger) EC2 instances in several availability zones within a region. IAM is used, but is accessible only via a VPC from a Lambda service. The read-only Reader can access Up to 16 read replicas behind separate IP addresses. The modules used in the course are release 2018.3:

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

   * <strong>AnzoGraph DB</strong> from Cambridge Semantics - a Massively Parallel Processing (MPP) native graph database built for data harmonization and analytics. Horizontally scalable graph database built for online analytics and data harmonization. Take on data harmonization and linked data challenges. It uses SPARQL*/OWL for semantic graphs but also supports Labeled Property Graphs (LPGs). <a target="_blank" href="https://www.youtube.com/watch?v=YDI-Xb0VDrE">VIDEO</a>

   * <strong>ArangoDB</strong> earned high performance scores from Gartner. Natively store data for graph, document and search needs. Utilize feature-rich access with one query language. Map data natively to the database and access it with the best patterns for the job – traversals, joins, search, ranking, geospatial, aggregations – you name it. Polyglot persistence without the costs. Easily design, scale and adapt your architectures to changing needs and with much less effort. Combine the flexibility of JSON with semantic search and graph technology for next generation feature extraction even for large datasets.


## Microsoft Cosmos

<a target="_blank" href="https://docs.microsoft.com/en-us/azure/cosmos-db/spark-connector-graph">Microsoft's Cosmos graph database</a> running within a Azure HDInsight Spark cluster 2.0. <a target="_blank" href="https://www.youtube.com/watch?v=oRtVdXvtD3o" title="2 hours on Mar 25, 2019 by M David Allen">VIDEO</a>, <a target="_blank" href="https://www.microsoft.com/en-us/research/uploads/prod/2019/03/41970_Introduction_to_Neo4j_and_Graph_Databases.pdf">slides</a>

* https://learn.microsoft.com/en-us/azure/cosmos-db/gremlin/introduction
* https://learn.microsoft.com/en-us/azure/cosmos-db/gremlin/support
* https://learn.microsoft.com/en-us/azure/cosmos-db/gremlin/modeling
* https://learn.microsoft.com/en-us/azure/cosmos-db/gremlin/partitioning
  
* https://www.tomsawyer.com/graph-database-browser/azure
* https://towardsdatascience.com/getting-started-with-graph-databases-in-azure-cosmos-db-cbfbf708cda5
<br /><br />

### Microsoft Graph 365

<a target="_blank" href="https://learn.microsoft.com/en-us/graph/overview">
Microsoft "Graph" product</a>
stores user metadata from its 365 product (documents, emails, etc).

It has an API.

   * https://azure.microsoft.com/en-us/products/graph-data-connect
   * https://github.com/microsoftgraph/dataconnect-solutions
   * https://blog.pragmaticworks.com/what-is-microsoft-graph
   * https://www.infoworld.com/article/3231658/making-sense-of-microsofts-graph-database-strategy.html
   * https://blog.victoriaholt.co.uk/2018/06/microsoft-graph-useful-tool.html
   * https://laurakokkarinen.com/the-ultimate-beginners-guide-to-microsoft-graph/
   * https://blog.ciaops.com/2019/04/17/using-interactive-powershell-to-access-the-microsoft-graph/
   * https://www.red-gate.com/simple-talk/development/dotnet-development/getting-started-with-microsoft-graph-api/
   * https://www.epcgroup.net/microsoft-graph-data-connect-pricing-and-features-guide/
   * https://blog.codewithdan.com/getting-started-calling-the-microsoft-graph-api/


### Microsoft SQL Server

SQL Server offers graph database capabilities to model many-to-many relationships. The graph relationships are integrated into Transact-SQL and receive the benefits of using SQL Server as the foundational database management system.

Transact-SQL Graph extensions are fully integrated in Microsoft's SQL Server engine. Use the same storage engine, metadata, query processor, etc. to store and query graph data. Query across graph and relational data in a single query. Combining graph capabilities with other SQL Server technologies like columnstore, HA, R services, etc. SQL graph database also supports all the security and compliance features available with SQL Server. 

All graph operations supported on relational tables are supported on node or edge table. 
A node table is collection of similar type of nodes.

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1680598246/graph-db-mssql-arch-421x452_zttvqy.png"><img alt="graph-db-mssql-arch-421x452.png" width="421" height="452" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1680598246/graph-db-mssql-arch-421x452_zttvqy.png"></a>

Transact-SQL Graph extensions allow users to create node or edge tables. <a target="_blank" href="https://learn.microsoft.com/en-us/sql/relational-databases/graphs/sql-graph-overview?view=sql-server-ver16">Here is an example</a>:

<pre>CREATE TABLE Person (ID INTEGER PRIMARY KEY, Name VARCHAR(100), Age INT) AS NODE;
CREATE TABLE friends (StartDate date) AS EDGE;
</pre>

A graph is a collection of node and edge tables.  
One graph per database.
Node or edge tables can be created under any schema in the database, but they all belong to one logical graph. 

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1680598366/graph-db-sample-person-cities-restaurants-435x351_rphkxx.png"><img alt="graph-db-sample-person-cities-restaurants-435x351.png" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1680598366/graph-db-sample-person-cities-restaurants-435x351_rphkxx.png"></a>

A more complex <a target="_blank" href="https://bvisual.net/2018/02/09/using-visio-and-powerbi-with-graphdatabase-in-sqlserver/">diagram using Visio and PowerBI</a>:

<a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1680603132/graph-db-diagram-609x460_t9zmwe.jpg"><img alt="graph-db-diagram-609x460.jpg" width="609" height="460" src="https://res.cloudinary.com/dcajqrroq/image/upload/v1680603132/graph-db-diagram-609x460_t9zmwe.jpg"></a>


### MATCH clause

The new MATCH clause supports <strong>pattern matching and multi-hop navigation</strong> through the graph. It uses ASCII-art style syntax for pattern matching:

<pre>-- Find friends of John
SELECT Person2.Name 
FROM Person Person1, Friends, Person Person2
WHERE MATCH(Person1-(Friends)->Person2)
AND Person1.Name = 'John';
</pre>

The Person node table holds all the Person nodes belonging to a graph. 
An edge table is a collection of similar type of edges. 
A Friends edge table holds all the edges that connect a Person to another Person. 

Since nodes and edges are stored in tables, most of the operations supported on regular tables are supported on node or edge tables.

Both nodes and edges can have properties associated to them.

### Sample code

<a target="_blank" href="https://learn.microsoft.com/en-us/sql/relational-databases/graphs/sql-graph-sample?view=sql-server-ver16">Sample code</a>

https://www.sqlshack.com/introduction-sql-server-2017-graph-database/

QUESTION: Sample template code for a web app built using C# .NET referencing graph SQL?

   * https://guyinacube.com/2020/10/08/visualize-graph-data-in-power-bi/


### SHORTEST_PATH

The <a target="_blank" href="https://learn.microsoft.com/en-us/sql/relational-databases/graphs/sql-graph-shortest-path?view=sql-server-ver16">SHORTEST_PATH</a> function finds the shortest path between any 2 nodes in a graph or starting from a given node to all the other nodes in the graph. It can also be used to find a transitive closure or for arbitrary length traversals in the graph.

### Edge constraints

To enforce data integrity and specific semantics on the edge tables in SQL Server graph database, use <a target="_blank" href="https://res.cloudinary.com/dcajqrroq/image/upload/v1680598366/graph-db-sample-person-cities-restaurants-435x351_rphkxx.png">edge constraints</a> to <strong>edge tables</a> so that when a new edge is added, the Database Engine enforces that the nodes which the edge is trying to connect, exist in the proper node tables. It is also ensured that a node cannot be dropped, if it is still referenced by an edge. Example:

<pre>CONSTRAINT EC_BOUGHT CONNECTION (Customer TO Product, Customer TO Product)
</pre>

   * <tt>EC_BOUGHT</tt> is the constraint_name.
   * Within parenteses are clauses that define the edge constraint.
   <br />

* https://bvisual.net/2018/02/09/using-visio-and-powerbi-with-graphdatabase-in-sqlserver/


<hr />

## Jobs

https://www.linkedin.com/jobs/microsoft-graph-science-jobs/

## Resources

* <a target="_blank" href="https://app.pluralsight.com/library/courses/graph-algorithms-python/exercise-files">"Working with Graph Algorithms in Python"</a> video tutorial on Pluralsight by Janani Ravi explains sample Python 3.5.1 code (not using Neo4J or Gremlin).

* See my <a target="_blank" href="https://wilsonmar.github.io/neo4j">Neo4j Cypher language tutorial</a>

* QUESTION: Sample code for a web app using Neo4j and Python? <a target="_blank" href="https://stackoverflow.com/questions/49610086/sample-code-for-a-web-app-using-neo4j-and-python">Stack Overflow</a>

* <a target="_blank" href="https://www.youtube.com/watch?v=YB723cp9jgM&list=PL9Hl4pk2FsvVmKhfc1Lqo2n2qsX_Si4WY&pp=iAQB">VIDEO</a> Neo4j CTO Jim Webber