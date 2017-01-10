---
layout: whitepaper
status: publish
published: true
title: Holochains
author: Arthur Brock // artbrock.com
author_login: artbrock
author_email: artbrock@geekgene.com
author_url: Eric Harris-Braun // eric.harris-braun.com
excerpt: "We describe a holographic data storage architecture which combines the data integrity assurance of Hash-Chains with the efficiency of Distributed Hash Tables while eliminating consensus bottlenecks typical of Blockchain and typical approaches to distributed computing."
date: '2016-12-05 04:58:14 -0400'
date_gmt: '2016-12-05 04:58:14 -0400'
categories:
- Whitepaper
tags:
- Whitepaper
- Holochain
- Data Engine
comments: []
---

<!-- TOC START min:1 max:3 link:true update:true -->
- [Holochains: Holographic data storage for distributed computing](#holochains-holographic-data-storage-for-distributed-computing)
  - [ABSTRACT](#abstract)
  - [Introduction (Background Situation/Problem and brief mention of Solution)](#introduction-background-situationproblem-and-brief-mention-of-solution)
  - [Solution: Clearly define scope/model/approach/parameters/limitations](#solution-clearly-define-scopemodelapproachparameterslimitations)
  - [Small Shift in Assumptions Yield Massive Effect](#small-shift-in-assumptions-yield-massive-effect)
  - [Audit Points and Rollbacks](#audit-points-and-rollbacks)
  - [Composing with Holochains](#composing-with-holochains)
  - [Scaling of Social Agreement](#scaling-of-social-agreement)
  - [Countersigned Chains](#countersigned-chains)
    - [Agreements at Human Scale](#agreements-at-human-scale)
  - [Extending Further](#extending-further)
  - [Conclusions](#conclusions)
  - [Footnotes / References](#footnotes--references)
  - [Additional resources](#additional-resources)
  - [Appendices](#appendices)
- [Previous Draft](#previous-draft)
  - [Holochains: A resilient data layer for distributed social computing.](#holochains-a-resilient-data-layer-for-distributed-social-computing)
  - [Absolute frame](#absolute-frame)
  - [Universal Sequence](#universal-sequence)
  - [Validation](#validation)
  - [Initial Applications](#initial-applications)
    - [Distributed PKI](#distributed-pki)
- [Satoshi format -- Not doing it this way](#satoshi-format----not-doing-it-this-way)
  - [1. Introduction](#1-introduction)
  - [2. Transactions/Interactions](#2-transactionsinteractions)
    - [2.5 Mutual Credit Crytpocurrencies](#25-mutual-credit-crytpocurrencies)
  - [3. Independent Countersigned Chains](#3-independent-countersigned-chains)
  - [4. DHT for Publication and Randomized Validation](#4-dht-for-publication-and-randomized-validation)
  - [5. Network](#5-network)
  - [6. Incentives](#6-incentives)
  - [7. Minimal System Requirements](#7-minimal-system-requirements)
  - [8. Privacy](#8-privacy)
  - [9. Calculations](#9-calculations)
  - [10. Conclusions](#10-conclusions)
  - [References](#references)

<!-- TOC END -->



# Holochains: Holographic data storage for distributed computing

## ABSTRACT


## Introduction (Background Situation/Problem and brief mention of Solution)
Innovation in components needed for more widespread and effective decentralized computing and coordination. Yet there are fundamental processing bottlenecks in the global consensus needed  for blockchain ledgers, Proof of Work is not scalable and is wasteful of electricity and computing resources. Proof of Stake embodies the same Pareto Effects that skew wealth imbalances in national currencies concentrating power and wealth over time.

Distributed computing capacities have certainly expanded with virtualizion in cloud services and other clusters of computers. Yet generalized, large-scale distributed computing still seems to be out reach. Although Ethereum has made solid headway in reaching some scale, there is much farther to go for ...

DHT "backed" by many parallel signed chains for data provenance.
Signed chains provide non-repudiable versioning and accountability for local vantage point
Sharding into neighborhoods. Unpredictability of hash provides honest/uncoordinated defense with extremely high probability (much higher than 51%)

Benefit of solving this problem
Pain points it would alleviate.

## Solution: Clearly define scope/model/approach/parameters/limitations

Detail each part of the solution. Step by Step... take them all the way through
Include visuals/diagrams throughout.

## Small Shift in Assumptions Yield Massive Effect
Impossibility proof of distributed computing with one errant process[footnote] to proof of probability 1.[footnote] Impossibility and Triviality. Many proofs of certain things being impossible[footnote], but with a slight change of model become almost trivial.

Normal Assumptions of (distributed) computing. Data positivism/objectivity. Absolute frame/ether.
Logical Atomism

Fallacy of absolute perspective on any data anyway

Consistency Model - Local -> Expanding --> Possible Eventual (sometimes requiring reconciliation)

Composability of Concurrency Systems - STM (Software Transactional Memory)
Byzantine Whiteboard - Distributed Shared Memory / Distributed Globally Addressable Space
Commit / Saturation confirmation
Modified BFT? Threats to consistency. Message corruption. Counterfeiting. Time failures.

Saturation failure in a DHT neighborhood

## Audit Points and Rollbacks
Lowering processing overhead
Enabling versioning and forking
Restoring compliance with validation rules

## Composing with Holochains
Referencing Identity in another chain,
Distributed PKI in another.
Smart contracts on another.

Why different chains instead of one universal chain? Because it is easy to refer to information across chains, just like we link to other web content today.  However, universal social agreement is virtually impossible. Computational integrity of the holochain approach relies on agreement about not just something is calculated (we all know how to add and subtract numbers on an account balance), but how strenuously we need to enforce validation and verification constraints for data integrity and resilience.

The more strenuous the constraints, the more "expensive" the computing and bandwidth is for each node. Thinking that there is ONE optimal configuration to balance the data integrity needs with the data integrity costs is simply naive.

Now add the complexity of the additional layer of the ability to evolve the social agreements. Technologically speaking, Holochains can support versioning of their data schema, validation rules, DHT resiliency, and neighborhood structures. Socially and politically, navigating changing agreements can be much more complex. How many people protest every time Facebook makes a change to the UI.

For holochains that are doing distributed hosting of blog posts, or of weather data reported from tiny rooftop weather stations, validation may just be confirmation of the sender's signature and the presence of the post on their chain. A system managing land titles or digital stock certificates, should have much stronger verification constraints which may require validating signatures of counterparties, maybe auditing the chains of multiple parties back to genesis, and having DHT nodes publish verifiable program execution receipts.[footnote]

Still other holochains may want to publish mixtures of public/private data where the validation process performs a merkle proof[footnote] on the bit of public data that is published to the DHT to confirm it is signed into a chain, yet not have to expose the entire contents of the posts on the chain.

Bitcoin blockchain is not just 100% visible, but every full node needs to have the full chain and validate every transaction, and a holochain could operate at this level of verification constraint. However, for most cases randomized validation by sharding the network with hashing algorithms are adequate and reduce the costs of node maintenance by many orders of magnitude. Not to mention eliminating the need for either Proof of Work or Proof of stake

## Scaling of Social Agreement
Social agreement is much more effectively managed on reasonably scales, and most of our agreements actually operate on reasonable scale. If you keep a holochain focused on the main agreements and interactions within a specific social/group context, these agreements can be modeled and play nice with each other. As soon as you try to put all agreements into one pool, you'll start to find out that people don't agree about as much as you think.

There is certainly a pattern of trying to build one universal platform to meet all needs, but if we step back for a moment, from any desire to build "one ring to rule them all," maybe everyone doesn't need to be in the same system for everything. Especially, when it involves holding each other's information, verifying each other are following agreements, and hopefully and ability to update those agreements as needed.

Do we actually need an interplanetary file system or a global computer if we can reliably link across subsystems? Social agreement happens on human scale and builds upward from the common ground that has been established. Our shared computational systems follow that pattern too.

The social problem is actually bigger than the technical problem

Membranes, Agreements and Social Spaces ^^

## Countersigned Chains
Most data we push around, comes from a particular person or data source, But if we seek to build better social coherence, we also need to cover cases of data which represents an interaction / transaction / mutual agreement. Luckily, this is still rather easy.

### Agreements at Human Scale
Whether it's between counterparties to a contract, or a financial transaction, or a handful of nodes I would like to be synchronizing my data on (e.g. laptop, phone, desktop, cloud server, and plug computer). We can extend...

One obvious option is to have different chains, and have me accountable for all of them, and share information with myself freely between them. However, if the rules of some group don't allow me multiple accounts/nodes, then for that holochain I have to have ONE definitive source chain.

Synchronizing a source chain between devices
Queue of transactions "in process", monitors and wait conditions... Worst case we can use semaphores and mutual exclusions.  Treat these nodes as sharing DHT with no hash masking to smaller neighborhoods, Each node gets all content.



## Extending Further
Extension of Holochains with Merkle proofs, Rholang & zk-SNARKs

Protection from re-entrant code by marking chain point as source of execution data

<!--  -->

## Conclusions
Summarize objectives demonstrated herein

Review the problem statement(s) and that we solved them

Highlight value of solution and its natural extensions.

Holographic: cutting of a hologram. Storage of English language.

Strong statement of conclusion and what the solution enables you to go build.

## Footnotes / References
Blockchain bottlenecks
Proof of work not scalable
Pareto Effect and Proof of Stake
Ethereum's limitations in scale
FLP Impossibility
Probabily 1
Hundred impossibility proofs


## Additional resources

## Appendices

.
.
.
.
.



# Previous Draft

<hr />

## Holochains: A resilient data layer for distributed social computing.

Many are excited about Blockchain as an architecture for decentralized social computing applications, but the starting assumptions built into its design carry forward fundamental inefficiencies and limitations. In this paper we describe a holographic data storage architecture which combines the data integrity assurance of Hash-Chains with the efficiency of Distributed Hash Tables while eliminating consensus bottlenecks typical of Blockchain and typical approaches to distributed computing.

Many of the core challenges of distributed computing follow from root assumptions about the veracity of data existing independent from the source or origin of that data. In other words, we want the data to be "true" from a an absolute perspective, and then we want all the nodes in a distributed computing network to operate from the same truths.

(Give a concrete example)

## Absolute frame
It seems the real world doesn't work that way, why should the computing world. General Relativity published 100 years ago. We understand that the sequence and perception of events are relative to the vantage point of the viewer.

## Universal Sequence
A universal sequence of events for a global  is somewhere between impossible and extremely difficult to implement, but recording a sequence of events from a particular vantage point is rather trivial. Blockchain addresses this sequencing by the having people do busy work which takes a fairly predictable amount of time to produce. But if you don't untether information from it's source, your don't need a universal sequence of events, you just need universal access to data which can be tracked back to non-repudiable, verifiable sources.

the Alternative, data strongly correlated to its source/originating vantage point. signed cryptographic data origination, on individualized chains, published to a DHT, with shared validation rules.

Let's check this...
If you want to retrieve a chunk of data from this DHT, what assurance do you have of the accuracy and veracity of the data.

First, if you have the hash/key... that is virtually impossible to substitute other valid looking data for the data you intended to retrieve. This is true of all reasonably good hashing algorithms and DHTs, not particular to Holochains.

Second, if you use m of n techniques for puts and gets on the DHT, you can guard against malicious or erroneous behavior of individuals. You are also protected from malicious behavior of groups which are a subset of the network by the randomization of which nodes host each data element via hashes as addresses. To reliably skew behavior or data, most of the network would need to be compromised, depending on the size of your neighborhoods and m.

Third, that the node(s) serving you the data has validated the origin of the data on a strong crytpographic data source (hash-chain or Merkle Tree), and validated the signature(s) on that data, and depending on the validation rules, they may have validated the whole chain/tree which precedes the data.

Fourth, for even higher levels of assurance, you could validate the retrieved data against the original signed cryptographic structures yourself, and trace back all the preceding entries in the hash-chain or merkle tree.

## Validation
The role of validation rules.... forking of reality.

## Initial Applications
### Distributed PKI

Distributed PKI & Identity Services makes verifying signatures and sources that much better. So that's the first big thing we're building on Holochains.





# Satoshi format -- Not doing it this way

## 1. Introduction
a few paragraphs framing the context/state of current tech

## 2. Transactions/Interactions
define how blockchain transactions currently work, diagram of how blockchain data is structured, identify problem(s) (forces need for consensus on what should otherwise be a simple/local transaction/interactions between two parties). Foundation of ontology is tokens.

### 2.5 Mutual Credit Crytpocurrencies
If the social computing application you'd like to run is, for example, a completely distributed cryptocurrency without global consensus, this is easy to accomplish by setting it up

## 3. Independent Countersigned Chains
Solution for challenge of universal time, isn't a timestamp server which burns tons of electricity doing busy work which gets thrown away, but is the trivial problem of sequencing events from a relativist vantage point instead of an absolute sequence / global ledger.

Counter audit each others chains...

Diagram of distinct countersigned chains.

## 4. DHT for Publication and Randomized Validation
After validating each others chains and both parties generating signatures for the transaction, each party adds it (with sigs) to the head of their chain. Then each party also "puts" it to the DHT.

The DHT we're proposing has some noteworthy characteristics, a couple of those are new. When setting up the DHT, some parameters must be set regarding redundancy/availability requirements, then a nearness algorithm (probably with XOR) determines which nodes are nearest and need to store the transaction. When those nodes receive the put request, they must validate the transaction per the shared validation rules (auditing both parties chains, ensuring valid states for the transaction).

The unpredictable nature of hashing and nearness by XOR against DHT node addresses, makes it virtually impossible to control
Collusion would mean violation of validation rules, basically leading to irreconcilable forking in the same way it does on blockchain currencies.

## 5. Network
Steps to follow to run the network are as follows:
1. aaa
2. aaa
3. aaa

## 6. Incentives
You don't need to incentivize people to host their own chains, because they want to be able to be an authority on their own state within the system. This would be like thinking you need to give people an incentive to carry their own cash, ID, or house keys.

Since the system is fully distributed, the DHT shards content across all users. There is some redundancy to meet minimum resilience requirements, but the larger the participant ecosystem, the smaller a piece of it you need to host. To give a sense of what this means, if you ran Wikipedia on Holochains, each Wikipedia user would need to host 3 to 5 pages to have 1,000 copies of each page.

## 7. Minimal System Requirements
Sharding means not holding too much storage, requiring much bandwidth or processing... It makes it feasible to run a full node on mobile phone. Try that with blockchain!

## 8. Privacy
Since Holochains are agent-centric instead of token-centric, each agent (or account) maintains its own continuity of history in its own chain. This makes the history of that account visible to whomever you share it with. This doesn't mean the human associated with that account is published. Also, it is possible to encrypt all but the most basic elements of a transaction (parties, amount, chain links) Different implementation of Holochains can implement different patterns of privacy, secrecy, and identity.

## 9. Calculations
Honest nodes won't publish dishonest transactions in the DHT, nor be party to a transaction with another agent whose chain contains any invalid state in it's history (bad signatures, breaches of credit limits, etc.). If you collude with someone to countersign an invalid transaction

## 10. Conclusions

## References
