---
layout: project
slug: holochain
repos:
- https://github.com/metacurrency/holochain
dev_docs: https://github.com/metacurrency/holochain/tree/master/docs
whitepaper: /whitepaper/holochain
---
Holographic storage for distributed applications. A holochain is a monotonic distributed hash table (DHT) where every node enforces validation rules on data before publishing that data against the signed chains where the data originated.

In other words, a holochain functions very much like a blockchain without bottlenecks when it comes to enforcing validation rules, but is designed to be fully distributed with each node only needing to hold a small portion of the data instead of everything needing a full copy of a global ledger. This makes it feasible to run blockchain-like applications on devices as lightweight as mobile phones.
