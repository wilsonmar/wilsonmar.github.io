---
layout: post
title: "Streamlit"
excerpt: "Create data visualizations declaratively for ML and Data Science on a Mac, powered by Python"
tags: [python, coding]
date: "2019-12-27"
file: "streamlit"
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

Streamlit (open sourced at <a target="_blank" href="https://github.com/streamlit/streamlit">https://github.com/streamlit/streamlit</a>) is by <a target="_blank" href="https://www.domoritz.de/">Dominik Moritz</a>, who is a visualization god (UW PhD, CMU) at Apple, Microsoft, etc. and developed a grammar of visualizations (Draco).

Streamlit's marketing page at <a target="_blank" href="https://streamlit.io/">streamlit.io</a> describes itself as "the first app framework specifically for Machine Learning and Data Science teams."

1. In a Terminal, install Streamlit:

   <pre><strong>pip install --upgrade streamlit
   streamlit version</strong></pip>

   <pre>Streamlit, version 0.52.2</pre>

   ### Run it live

1. Create a containing folder and cd to it.

1. See a visualization of Uber driver pickup points at each hour of the day pop-up on your default browser with one command:

   <pre><strong>streamlit run https://raw.githubusercontent.com/streamlit/demo-uber-nyc-pickups/master/app.py</strong></pre>

   The viz at 7am shows red spikes at airports and Upper West Side.

   See https://github.com/streamlit/demo-uber-nyc-pickups  

1. Add the OpenCV image recognition library:

   <pre><strong>pip install --upgrade opencv-python</strong></pip>

1. See how self-driving cars recognize street signs and other objects (after several minutes loading):

   <pre><strong>streamlit run https://raw.githubusercontent.com/streamlit/demo-self-driving/master/app.py</strong></pre>

   ![streamlit-uber](https://user-images.githubusercontent.com/300046/71513495-caecbe00-2857-11ea-8d78-d32c46ad3f9e.png)

   The app uses <a target="_blank" href="https://pjreddie.com/darknet/yolo/">YOLO (You Only Look Once) real-time object detection</a> which recognizes dozens of objects at a time in videos. The app downloads files yolov3.cfg and yolov3.weights.

1. Run Streamlit visualizations of your own within <strong>Docker</strong> locally. Start with a "hello world" by running my <strong>streamlit-docker.sh</strong> Shell file at:

   <a target="_blank" href="https://github.com/wilsonmar/DevSecOps/tree/master/Streamlit">https://github.com/wilsonmar/DevSecOps/tree/master/Streamlit</a>

   The script runs Dockerfiles to display "hello-world" as described in <a target="_blank" href="https://medium.com/swlh/part-1-will-streamlit-kill-off-flask-5ecd75f879c8">this blog</a> and its repo.

   The script installs what it needs (Streamlit, Docker, etc.).

1. View JMeter results, by NaveenKumar Namachivayam:

   https://qainsights.com/apache-jmeter-with-streamlit-for-machine-learning/


   ### Build your own app

1. See the various specifications in Streamlit's declarative language:

   https://www.youtube.com/watch?v=_9WiB2PDO7k  Oct 19, 2019

1. View <a target="_blank" href="https://www.youtube.com/watch?v=B2iAodr0fOo&list=PLJ_HlVgpyge1sgKChZblE8AjWd4THHV_K">YouTube tutorials</a> by Adrien Treuille, CEO of Streamlit and Jesse E.Agbe at JCharisTech & J-Secur1ty (<a target="_blank" href="https://github.com/Jcharis/Streamlit_DataScience_Apps/">GitHub</a>)

1. Join the discussion community at 

   <a target="_blank" href="https://discuss.streamlit.io/">https://discuss.streamlit.io</a>

1. More about Streamlit:

   *<a target="_blank" href="http://awesome-streamlit.org/">http://awesome-streamlit.org</a>

   * https://towardsdatascience.com/streamlit-101-an-in-depth-introduction-fc8aad9492f2

   * https://medium.com/@ansjin/how-to-create-and-deploy-data-exploration-web-app-easily-using-python-a03c4b8a1f3e

## More about Python

This is one of a series about Python:

{% include python_links.html %}
