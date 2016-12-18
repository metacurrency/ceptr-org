---
layout: whitepaper
status: publish
published: true
title: "Holochains: Holographic data storage for distributed applications"
link: Holochains
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

<hr />

**Original stuff I drafted before restructuring like Satoshi doc.**

<hr />

# Holochains: A resilient data layer for distributed social computing.

Many are excited about Blockchain as an architecture for decentralized social computing applications, but the starting assumptions built into its design carry forward fundamental inefficiencies and limitations. In this paper we describe a holographic data storage architecture which combines the data integrity assurance of Hash-Chains with the efficiency of Distributed Hash Tables while eliminating consensus bottlenecks typical of Blockchain and typical approaches to distributed computing.

Many of the core challenges of distributed computing follow from root assumptions about the veracity of data existing independent from the source or origin of that data. In other words, we want the data to be "true" from a an absolute perspective, and then we want all the nodes in a distributed computing network to operate from the same truths.

(Give a concrete example)

**Absolute frame** It seems the real world doesn't work that way, why should the computing world. General Relativity published 100 years ago. We understand that the sequence and perception of events are relative to the vantage point of the viewer.

A universal sequence of events for a global  is somewhere between impossible and extremely difficult to implement, but recording a sequence of events from a particular vantage point is rather trivial. Blockchain addresses this sequencing by the having people do busy work which takes a fairly predictable amount of time to produce. But if you don't untether information from it's source, your don't need a universal sequence of events, you just need universal access to data which can be tracked back to non-repudiable, verifiable sources.

the Alternative, data strongly correlated to its source/originating vantage point. signed cryptographic data origination, on individualized chains, published to a DHT, with shared validation rules.

Let's check this...
If you want to retrieve a chunk of data from this DHT, what assurance do you have of the accuracy and veracity of the data.

First, if you have the hash/key... that is virtually impossible to substitute other valid looking data for the data you intended to retrieve. This is true of all reasonably good hashing algorithms and DHTs, not particular to Holochains.

Second, if you use m of n techniques for puts and gets on the DHT, you can guard against malicious or erroneous behavior of individuals. You are also protected from malicious behavior of groups which are a subset of the network by the randomization of which nodes host each data element via hashes as addresses. To reliably skew behavior or data, most of the network would need to be compromised, depending on the size of your neighborhoods and m.

Third, that the node(s) serving you the data has validated the origin of the data on a strong crytpographic data source (hash-chain or Merkle Tree), and validated the signature(s) on that data, and depending on the validation rules, they may have validated the whole chain/tree which precedes the data.

Fourth, for even higher levels of assurance, you could validate the retrieved data against the original signed cryptographic structures yourself, and trace back all the preceding entries in the hash-chain or merkle tree.


The role of validation rules.... forking of reality.


Distributed PKI & Identity Services makes verifying signatures and sources that much better. So that's the first big thing we're building on Holochains.
