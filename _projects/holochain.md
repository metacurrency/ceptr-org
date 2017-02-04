---
layout: project
slug: holochain
title: "Holochains for <br />Distributed Storage"
nav_title: Holochains
navigation_weight: 2
icon: fa-link
purpose: "Go beyond Blockchain bottlenecks and global consensus ledgers
          for scalability which ensures data integrity and distributed sharing."
dev_docs: https://github.com/metacurrency/holochain/tree/master/docs
repos:
  "Holochain": https://github.com/metacurrency/holochain
articles:
  "Scalable Cryptocurrencies": https://medium.com/metacurrency-project/beyond-blockchain-simple-scalable-cryptocurrencies-1eb7aebac6ae#.javpl89rt
---
<!-- TOC START min:1 max:4 link:true update:true -->
  - [Overview](#overview)
  - [Architecture](#architecture)
    - [Functional Domains](#functional-domains)
      - [Group DNA / Holochain configuration](#group-dna--holochain-configuration)
      - [Individuals Authoring Content](#individuals-authoring-content)
      - [Application API](#application-api)
    - [Two Distinct Sub-Systems](#two-distinct-sub-systems)
      - [1. Authoring on your Local Chain](#1-authoring-on-your-local-chain)
      - [2. Running a DHT Node](#2-running-a-dht-node)

<!-- TOC END -->

## Overview
<em>**Stage of Development:** Active development for proof-of-concept stage.</em>

**Holographic storage for distributed applications.** A holochain is a monotonic distributed hash table (DHT) where every node enforces validation rules on data before publishing that data against the signed chains where the data originated.

In other words, a holochain functions very much **like a blockchain without bottlenecks** when it comes to enforcing validation rules, but is designed to  be fully distributed with each node only needing to hold a small portion of the data instead of everything needing a full copy of a global ledger. This makes it feasible to run blockchain-like applications on devices as lightweight as mobile phones

## Architecture
### Functional Domains

Holochains, by design, should be used in the context of a group operating by a shared set of agreements. Generally speaking, you don't need a holochain if you are just managing your own data.

These agreements are encoded in the validation rules which are checked before authoring to one's local chain, and are also checked by every DHT node asked to publish the new data.

In essence these ensure holochain participants operate according the same rules. Just like in blockchains, if you collude to break validation rules, you essentially have forked the chain. If you commit things to your chain, or try to publish things which don't comply with the validation rules, the rest of the network/DHT rejects it.

#### Group DNA / Holochain configuration
At this stage, a developer needs to set up the technical configuration of the collective agreements enforced by a holochain. This includes such things as: the holochain name, UUID, address & name spaces, data schemas, validation rules for chain entries and data propagation on the DHT,

#### Individuals Authoring Content
As an individual, you can join a holochain by installing its holochain configuration and configuring your ID, keys, chain, and DHT node in accord with the DNA specs.

#### Application API
Holochains function like a database. They don't have much end-user interface, and are primarily used by an application or program to store data. Unless you're a developer building one of these applications, you're not likely interact directly with a holochains. Hopefully, you install an application that does all that for you and the holochain stays nice and invisible enabling the application to store its information in a decentralized manner.

### Two Distinct Sub-Systems
There are two modes to participate in a holochain: as a **chain author**, and as a **DHT node**. We expect most installations will be doing both things and acting as full peers in a P2P data system. However, each could be run in a separate
container, communicating only by network interface.

#### 1. Authoring on your Local Chain
Your chain is your signed, sequential record of the data you create to share on the holochain. Depending on the holochain's validation rules, this data may also be immutable and non-repudiable. Your local chain/data-store follows this pattern:

1. Validates your new data
2. Stores the data in a new chain entry
3. Signs it to your chain
4. Indexes the content
5. Shares it to the DHT
6. Responds to validation requests from DHT nodes

#### 2. Running a DHT Node
For serving data shared across the network. When your node receives a request from another node to publish DHT data, it will first validate the signatures, chain links, and any other application specific data integrity in the entity's source chain who is publishing the data.
