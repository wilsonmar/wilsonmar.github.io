---
layout: post
date: "2025-07-03"
lastchange: "v008 + from bomonike :2023-09-23-python-cuda.md"
url: https://wilsonmar.github.io/python-cuda
file: "python-cuda"
title: "Python with NVIDIA CUDA"
excerpt: "Supercharge Python with parallel programming using CUDA on NVIDIA GPUs"
tags: [Python,Colab,CUDA]
image:
# feature: sf-ohana-1900x500-178173.jpg
  feature: https://res.cloudinary.com/dcajqrroq/image/upload/v1695381272/alexa-devices-1900x500_bcc1m4.png
  credit: Amazon Alexa
  creditlink: https://developer.amazon.com/en-US/alexa/alexa-skills-kit
comments: true
created: "2023-09-23"
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

This article describes how to run Python using CUDA (Compute Unified Device Architecture) tools running on NVIDIA GPU acclerators. 

## Why use CUDA?

Data scientists and machine learning engineers use Python for its ease of use and large ecosystem of libraries. 

But Python is known to be <strong>slow</strong> compared with compiled C/C++, Rust, and Go languages.

However, Python can be speeded up by being <strong>compiled to C</strong> and use parallel programming techniques.

The leading set of tools for parallel programming is NVIDIA's proprietary CUDA (Compute Unified Device Architecture) tools that run only on NVIDIA GPUs (Graphics Processing Units).

There are others, such as libraries to acces Google TPUs and Microsoft's FPGAs (Field-Programmable Gate Arrays).

They are all ASICs (Application-Specific Integrated Circuits) specifically designed to run parallel tasks.


## NVIDIA GPU hardware

NVIDIA GPUs are installed on most Intel x86 Windows gaming PCs to accelerate matrix operations by graphics display.

Older models of macs had Intel x86 architecture chips, which could access a NVIDIA GPU accelerator devices (Jetson AGX Orin) plugged into the motherboard or USB port.
   * NVIDIA Jetson AGX Orin Developer Kit: https://amzn.to/3U06UIn
   * NVIDIA Jetson Orin Nano Developer Kit: https://amzn.to/3vORvAi

Over the years, many developers bought Apple Macbooks to do their programming work becuase one is needed for SwiftUI development. Apple's M series chips are based on ARM architecture, not x86.

This means that today, since Apple incorporated GPU accelerators into their M series chips that power their Macs, 
NVIDIA GPUs aren't available on modern Macs.

So, options to run Python using NVIDIA GPU include:

Local machines with a NVIDIA GPU (SSH into a remote server):
   * <a href="#using-windows">Use a local Windows machine</a>
   * <a href="#using-linux">Use a local Linux machine</a>

Servers in the cloud with NVIDIA GPUs:
   * <a href="#google-colab">Google Colab</a>, which has CUDA built-into its Python environment
   * Google Cloud AI Platform
   * AWS ___ server types running EC2 container instances
   * Azure AI Compute
   * Paperspace
   * Lambda Labs

Use Apple's Metal Performance Shaders: PyTorch has Metal backend support for Apple Silicon
TensorFlow also supports Metal acceleration

<hr />

<a name="sample-code"></a>

## Sample Python code using CUDA

To compare how long it takes to process the same matrix operations across the different run (hardware) environments,
I use the Python program at:
https://github.com/wilsonmar/python-sample/blob/main/python-cuda-1.py

```
import cupy as cp
&nbsp;
# Create arrays on GPU:
x = cp.array([1, 2, 3, 4, 5])
y = cp.array([6, 7, 8, 9, 10])
&nbsp;
# Perform operations on GPU:
result = x + y
print(result)  # Output: [7 9 11 13 15]
```

"Kernals" are GPU functions launched by the CPU host and executed on the GPU device.

A "device function" is a GPU function executed on the GPU device which can only be called from a kernel or another device function. 

<tt>import cupy as cp</tt> is a <strong>wrapper</strong> to NVIDIA's CUDA <strong>Numba</strong> library written in C.

Kernels written in Numba appear to have direct access to NumPy arrays transferred between the CPU and GPU.

I would like to add CUDA to Python code in the Cartesian app.

https://github.com/noahgift/cloud-data-analysis-at-scale/blob/master/GPU_Programming.ipynb

<hr />

<a name="using-windows"></a>

### Using Windows Machine

1. Install the CUDA Toolkit from NVIDIA's developer website
1. Install CuPy or PyCUDA using pip:
   ```
   bashpip install cupy-cuda11x  # or appropriate CUDA version
   ```
   or
   ```
   pip install pycuda
   ```

<a name="using-linux"></a>

### Using Linux Machine

TODO:

<a name="p2j"></a>

### .py vs .ipynb Jupyter

There are two ways to use Google Colab:

A. Run .ipynb files (Jupyter Notebooks stored in JSON format), the default approach.

B. Run .py file

.ipynb files commands beginning with an exclaimation point (!) are run in the shell:
```
!pip install numba
```

mandel.py to mandel.ipynb:

1. Split the code logically into separate cells (functions, classes, main execution) by adding before each cell a <tt># %%</tt> comment.

1. Convert a .py file to .ipynb, use the p2j library:
```
pip install p2j
# Convert file:
p2j mandel.py
```





<a name="google-colab"></a>

### Using Google Colab

1. To identify where CUDA .so files are installed:
   ```
   !find / -iname 'libdevice'
   !find / -iname 'libnvvvm.so'
   ```
   Result:
   ```
   /usr/local/cuda-10.0/nvvm/libdevice
   /usr/local/cuda-10.0/nvvm/lib64/libnvvm.so
   ```

1. To install an external Python library, instead of <tt>import</tt>, use:
   ```
   %matplotlib inline
   from matplotlib import pyplot as plt
   ```

1. Install data types handling by other (internal) Python libraries:
   ```
   import math
   import numpy as np
   from numba import jit, njit, vectorize, uda, uint32, f8, uint8
   from pylab imshow, show
   ```

1. Install the Python library to measure time precisely:
   ```
   from timeit import default_timer as timer
   ```

<a target="_blank" href="https://www.youtube.com/watch?v=C_WrbBmiTf4&pp=ygULY3VkYSBweXRob24%3D">VIDEO</a>:
"CUDA Programming in Python"  Jan 15, 2024 by JetsonHacks

PROTIP: In Notebook settings, enable GPU runtime.

<hr />

<a target="_blank" href="https://developer.nvidia.com/cuda-downloads">CUDA Downloads</a>.
<hr />

04:16 Using Python Numba
05:40 Building Mandlebrots with and without GPU and Numba
07:49 CUDA Vectorize Functions
08:27 Copy Data to GPU Memory
Learning Objectives
Learn about the End of Moore's Law and ASICs
Learn to compare the performance of GPUs and TPUs, and JIT compilers
Build your own vectorized functions with Numba and CUDA to speed up your code with GPUs


<hr />

## References

[1] BOOK <a target="_blank" href="https://learning.oreilly.com/library/view/-/9781788993913/?_gl=1*d4tmts*_ga*NjE0MDg1NDgyLjE3NDg5NjgxMDc.*_ga_092EL089CH*czE3NTE1OTcxMTckbzMkZzEkdDE3NTE1OTcxNTckajIwJGwwJGgw">on OReilly</a> from Packt: "Hands-On GPU Programming with Python and CUDA" November 2018 by Dr. Brian Tuomanen 

   Build real-world applications with Python 2.7, CUDA 9, and CUDA 10. We suggest the use of Python 2.7 over Python 3.x, since Python 2.7 has stable support across all the libraries we use in this book. Key Features Expand your background in GPU programming - PyCUDA, scikit-cuda, and Nsight Effectively use CUDA libraries such as cuBLAS, cuFFT, and cuSolver Apply GPU programming to modern data science applications Book Description Hands-On GPU Programming with Python and CUDA hits the ground running: you'll start by learning how to apply Amdahl's Law, use a code profiler to identify bottlenecks in your Python code, and set up an appropriate GPU programming environment.

[2] 9m VIDEO: <a target="_blank" href="https://learning.oreilly.com/videos/-/08062022VIDEOPAIML/">"Speed Up Python Dramatically with CUDA GPU"</a> August 2022 by Alfredo Deza and Noah Gift
   
   Learn to use a CUDA GPU to speed up code in Python dramatically. CUDA POWERED! This video will show you how to use CUDA GPUs with Python. Topics Covered Include: 00:00 Introduction 00:16 End of Moore's Law 01:15 What is a TPU and ASIC 02:25 How a GPU works 03:05 Enabling GPU in Colab Notebook 04:16 Using Python Numba 05:40 Building Mandlebrots with and without GPU and Numba 07:49 CUDA Vectorize Functions 08:27 Copy Data to GPU Memory Learning Objectives Learn about the End of Moore's Law and ASICs Learn to compare the performance of GPUs and TPUs, and JIT compilers Build your own vectorized functions with Numba and CUDA to speed up your code with GPUs Additional Popular Resources Pytest Master Class AWS Solutions Architect Professional Course Github Actions and GitOps in One Hour Video Course Jenkins CI/CD and Github in One Hour Video Course AWS Certified Cloud Practitioner Video Course Advanced Testing with Pytest Video Course AWS Solutions Architect Certification In ONE HOUR Python for DevOps Master Class 2022: CI/CD, Github Actions, Containers, and Microservices MLOPs Foundations: Chapter 2 Walkthrough of Practical MLOps Learn Docker containers in One Hour Video Course Introduction to MLOps Walkthrough AZ-900 (Azure Fundamentals) Quick reference guide 52 Weeks of AWS Episode 8: Infrastructure as Code with CDK and AWS Lambda Learn GCP Cloud Functions in One Hour Video Course Python Devops in TWO HOURS!


[3] https://www.everand.com/book/756897361/CUDA-Programming-with-Python-From-Basics-to-Expert-Proficiency">"CUDA Programming with Python: From Basics to Expert Proficiency"</a> <a href="https://www.amazon.com/CUDA-Programming-Python-Basics-Proficiency/dp/196489946X/ref=sr_1_1">$29.99</a>from HiTeX Press Aug 4, 2024 by William Smith

   This 2,057-page book is an authoritative guide that bridges the gap between Python programming and high-performance GPU computing using CUDA. Tailored for both beginners and intermediate programmers, this comprehensive book elucidates the core concepts of CUDA, from setting up the development environment to advanced optimization techniques. Readers are introduced to the principles of parallel processing and the distinctions between GPU and CPU computing, establishing a solid foundation for further exploration. The book meticulously covers essential topics such as the CUDA architecture and memory model, basic and advanced CUDA programming concepts, and leveraging Python with Numba for GPU acceleration. Practical sections on debugging, profiling, and optimizing CUDA applications ensure that readers can identify and rectify performance bottlenecks. Enriched with real-world examples and best practices, it provides a methodical approach to mastering CUDA programming, ultimately enabling readers to develop efficient and high-performing parallel applications.


[4] <a target="_blank" href="https://www.amazon.com/CUDA-Programming-Python-Basics-Proficiency/dp/196489946X/ref=sr_1_1">$33.97</a> "Advanced CUDA Programming: High Performance Computing with GPUs (GPU Expert Engineering: Mastering Design, Programming, and Optimization)" from BurstBooks.biz published February 10, 2025 by <a target="_blank" href="https://www.linkedin.com/in/gareththomasnz/">Gareth Morgan Thomas</a> at <a target="_blank" href="https://github.com/gareththomasnz">GitHub</a> and <a target="_blank" href="Track-N-Test.com">Track-N-Test.com</a>.

    This 400-page book "goes beyond syntax. for anyone working close to the metal. This is not CUDA 101. This is total performance mastery."
    is "the ultimate guide to unlocking the full power of modern GPU computing. Whether you're developing AI models, optimizing scientific simulations, or pushing real-time applications to their limits, this book delivers the advanced techniques and expert insights you need to achieve peak CUDA performance.

    GPU programming is no longer optional—it's a necessity in today's world of deep learning, AI acceleration, and high-performance computing. But simply writing CUDA kernels isn’t enough. To truly optimize GPU applications, you need a deep understanding of GPU architecture, memory hierarchies, execution models, and performance tuning strategies. This book takes you beyond the fundamentals and into the world of advanced CUDA programming, where efficiency, scalability, and raw computational power define success.

    What You’ll Learn:
    * Deep GPU Architecture Insights – Explore the Ampere and Hopper architectures, including streaming multiprocessors, warp scheduling, and memory controller design.
    * Memory Optimization Techniques – Implement coalesced memory access, shared memory tuning, cache optimizations, and unified memory strategies for peak performance.
    * Asynchronous Execution & CUDA Streams – Master multi-stream processing, event-based synchronization, and pinned memory usage to maximize parallelism.
    * High-Performance Kernel Development – Learn thread block optimization, warp-level programming, and dynamic parallelism for efficient kernel execution.
    * AI & Deep Learning Acceleration – Optimize GEMM, convolution operations, mixed precision training, and inference using tensor cores.
    * Multi-GPU & Distributed Computing – Scale workloads across GPUs with P2P communication, NVLink, workload distribution, and MPI integration.
    * Real-Time Processing & Low-Latency Optimization – Develop real-time applications with deterministic execution, deadline scheduling, and pipeline optimizations.
    * Debugging & Profiling Mastery – Use Nsight Compute, CUDA-GDB, memory checking tools, and roofline analysis to fine-tune CUDA applications.
    
    Why This Book?
    This isn’t just another CUDA guide—it’s a masterclass in performance optimization. Packed with real-world case studies, hands-on techniques, and cutting-edge strategies, it delivers everything you need to develop fast, scalable, and production-ready GPU applications.

