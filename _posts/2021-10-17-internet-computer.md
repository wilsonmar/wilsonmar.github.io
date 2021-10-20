---
layout: post 
title: "Internet Computer"
excerpt: "A distributed ecosystem for hosting containers (apps) without AWS, Google, Facebook."
tags: [shop]
date: "2021-10-17"
file: "dapps"
image:
# dapps-collab-1900x500.png 
  feature: https://user-images.githubusercontent.com/300046/132136810-696b151f-9cbb-4f2c-93fb-7061754d9591.png
  credit: Flock
  creditlink: https://blog.flock.com/3-things-ceos-must-do-for-effective-collaboration
comments: true
---
<i>{{ page.excerpt }}</i>
{% include l18n.html %}
{% include _toc.html %}

## Internet Computer via DFINITY's dfx to ic0.app

The "Internet Computer" (public cyberspace) extends the internet with compute to host "humanity's logic and data".
It is the third major blockchain innovation:
   1. Bitcoin cryptocurrency ("digital gold")
   2. Etherium smart contracts, which made programmable to power "DiFi" (Distributed Finance) 
   3. Infinite blockchain with seamless capacity of special nodes run by independent data centers
   <br /><br />

<a target="_blank" href="https://forum.dfinity.org">forum.dfinity.org</a>

<a target="_blank" href="https://www.youtube.com/watch?v=J8tXcy3dW0o">VIDEO:
Its competitor is Polkadot</a>

DFINITY progressed from Copper 2019 to Bronze 2020 to Tungsten to Sodium to 
<a target="_blank" href="https://www.youtube.com/watch?v=oxEr8UzGeBo&list=RDCMUCOyguKlTxoDK3HRzmGbLyAg&index=8">VIDEO</a>:
"Mercury Genesis" launched May 10, 2021. That's when ICP token began trading on Coinbase with 469,213,710 tokens for $105 million.
Initial rounds went to Andressen Horowitz

## Social

https://www.reddit.com/r/dfinity/


## Hands-on

1. Install DFX

   <pre><strong>sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"
   </strong></pre>

   Response:

   <pre>info: Executing dfx install script, commit: 866752d66cfe26c92fe075028fff6c7c52a2aeb1
warn: Not forcing TLS v1.2, this is potentially less secure
info: Version found: 0.8.1
info: Creating uninstall script in ~/.cache/dfinity
info: uninstall path=/Users/wilsonmar/.cache/dfinity/uninstall.sh
info: Checking for latest release...
warn: Not forcing TLS v1.2, this is potentially less secure
Will install in: /usr/local/bin
info: Installed /usr/local/bin/dfx
   </pre>

   <a target="_blank" href="https://www.youtube.com/watch?v=YWHTNr8RZHg&list=PLuhDt1vhGcrf4DgKZecU3ar_RA1cB0vUT&index=18">VIDEO</a>:
   Dominic Williams, in 2016 founded the <a target="_blank" href="https://www.DFINITY.org/">DFINITY.org</a> foundation (headquarted in Switzerland)
   (<a target="_blank" href="https://twitter.com/dfinity">@dfinity</a>)

   The foundation's code at <a target="_blank" href="https://github.com/deckgo/deckdeckgo/">https://github.com/deckgo/deckdeckgo</a>
   is Apache 2.0 licensed, with some components NOT open source, under their "Internet Computer Community Source License".
   See https://medium.com/geekculture/bye-bye-amazon-google-hello-web-3-0-b01bfe8f8783
   
1. Verify:

   <pre><strong>dfx --version</strong></pre>

   At time of writing, it was:
   
   <pre>dfx 0.8.1</pre>

1. The sample def.json file at the root Gatsby static site sample

   https://github.com/wilsonmar/dapp-samples/tree/main
   cd dapp-samples

   It contains a minimal index.html

1. Deploy to the Internet Computer ledger (instead of to web servers) to generate a canister id (the equivalent of an IP address on TCP/IP):

   <pre><strong>dfx deploy --network=ic
   </strong></pre>

   This adds a "dfx" folder in the current project folder and a<br />
   <tt>canister_ids.json</tt> folder and displays a canister id (GUID), such as "w2tya-5qaaa-aaaab-abasa-cai".

   The "Internet Computer" hosts <strong>"canisters"</strong> (smart contracts in the Internet Computer blockchain) 
   are a bundle of <strong>Web Assembly bytecode</strong> created by Rust or <a target="_blank" href="https://github.com/dfinity/motoko">Motoko</a> language.
   <a target="_blank" href="https://www.youtube.com/watch?v=xCuZFwAHS1Y&list=RDCMUCOyguKlTxoDK3HRzmGbLyAg&index=13">VIDEO</a>

1. Visit your site by constructing its URL from your canister id:

   <pre>https://w2tya-5qaaa-aaaab-abasa-cai.<strong>ic0.app</strong></pre>

   <strong>Canisters</strong> serve internet content (HTML pages, videos, etc.) directly to end-users (internet browsers)
   instead of CDN, firewalls, VPNs, load balancers, databases, etc. now used by central "Big Tech" systems such as Google, Facebook, Instagram, Twitter, etc..

   Canisters run inside hypervisors (4K memory pages).

   Motoko supports IC canisters as <strong>"actors"</strong> (objects that encapsulate their state and communicate through atomic async messages) -- no waiting for reply.

   DFINITY is working on a mobile operating sytem called "Endorphin".

   Instead of TCP/IP ports, there are <strong>functions</strong> such as <tt>getProfile(userId: String)</tt> which calls other computers directly.

   A variable declared as "stable" is persisted across software upgrades.

   ### Network

   It's a peer-to-peer (P2P) network.

   Each canister runs as part of a <strong>subnet</strong>, which replicates nodes who use a concensus protocol to process messages in the order agreed.

   The subnet types:
      * NNS (Network Nervous System) the ICP has an in-protocol open governance system
      * Data (BigMap)
      * System
      * Fiduciary
      <br /><br />


   Standardized Node hardware run within independent Data Centers.

   <a target="_blank" href="https://www.youtube.com/watch?v=zHl-oVPoX88&list=RDCMUCOyguKlTxoDK3HRzmGbLyAg&index=12">VIDEO</a>:
   "Token economics" ICPT

   <a target="_blank" href="https://www.youtube.com/watch?v=vVLRRYh3JYo&list=RDCMUCOyguKlTxoDK3HRzmGbLyAg&index=23">VIDEO</a>:
   The Internet Computer is created by the <strong>ICP (Internet Computer Protocol)</strong> on top of the Internet Protocol widely used today.
   * Block Making: Propose blocks to extend the block chain
   * Notarization: Ensure valid blocks are published (because some block proposals may be invalid)
   * Random Beacon: Agree on randomness
   * Finalization: Know when a block is agreed upon
   <br /><br />

Dealings are <strong>homomorphic</strong>: public keys and secret key shares from different dealings can be combined into a single public key and corresponding shares.

### Wallet (Money)

Unlike Etherium and others, IC does not charge a fee ("gas") for processing transactions.

Those who create an app must buy ICPT (ICP tokens) and convert them to "cycles".
Each SDR buys 1 trillion cycles.
SDR being a basket of fiat currencies defined by the IMF, so it's a type of "stablecoin" like Tether, Paxos, Gemini, etc.

![dapp-ic-token-1588x846](https://user-images.githubusercontent.com/300046/137711022-7b5fcbe7-ad75-46b3-8c20-02d0f1ecebbe.png)

<a target="_blank" href="https://www.youtube.com/watch?v=TtVo3krjARI">Integrate with Bitcoin</a>

1. <a target="_blank" href="https://www.youtube.com/watch?v=DxCfQOLb_3s&list=RDCMUCOyguKlTxoDK3HRzmGbLyAg&index=8">VIDEO</a>:

   <pre><strong>dfx ledger --network ic0 balance</strong></pre>

1. Wallet

   <pre><strong>dfx wallet --network ic1 balance</strong></pre>

### LinkedUp social network identity

<a target="_blank" href="https://www.youtube.com/watch?v=J0nCco7lNfQ&list=RDCMUCOyguKlTxoDK3HRzmGbLyAg&start_radio=1&rv=J0nCco7lNfQ">VIDEO</a>:
https://www.reddit.com/r/dfinity/comments/etdx8j/introducing_linkedup/
as a "self-soverign" identity. https://www.youtube.com/watch?v=m4xiRlJdhh8

Follow https://github.com/dfinity/linkedup to install the front-end canister to interact with LinkedUp.

https://smartcontracts.org/

<a target="_blank" href="https://www.youtube.com/watch?v=YGrFj3pav_A">CONCERNS</a>
is "that DFINITY seeks to replace Big Tech with themselves".


### Internet Identity on Safari

https://sdk.dfinity.org/docs/ic-identity-guide/what-is-ic-identity.html

<a target="_blank" href="https://www.youtube.com/watch?v=oxEr8UzGeBo&list=PLuhDt1vhGcrf4DgKZecU3ar_RA1cB0vUT&index=11">VIDEO</a>:

To securely access dapps on the Internet Computer and use Internet Identity for authentication, create an <strong>Identity Anchor</strong>,
then add devices to it. 

A different pseudonym is created for each dapp that you access by creating new Identity Anchors.

Windows Hello authentication is supported in Chrome, Edge, and Firefox.

On iOS, authentication works across Safari browsers with registered WebAuthn keys.

However, on OS X, All currently supported authentication methods follow the WebAuthn standard. The following restrictions apply, however:
On OS X, authentication using Safari is coupled to your browser profile. If you want to authenticate to a dapp in a different browser, or if you use multiple Safari browser profiles, you have to add the combination of your authentication method and the new browser as a new device. 

<a target="_blank" href="https://www.youtube.com/watch?v=oxEr8UzGeBo&list=RDCMUCOyguKlTxoDK3HRzmGbLyAg&index=8">VIDEO: Devices use Ubikey</a>
No passwords.

CAUTION: If indeed DFINITY is to take over the internet, then each person would only have a single identity, which means possible total exclusion.
In that scenario, the current situation of competing tech giants is actually more diverse.

### Database

https://medium.com/geekculture/internet-computer-web-app-decentralized-database-architecture-8647d1a437b8


### Chat

