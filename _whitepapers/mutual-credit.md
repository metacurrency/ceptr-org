---
layout: whitepaper
status: Final
nav_title: Mutual Credit Cryptocurrencies
navigation_weight: 2
title: "Mutual Credit Cryptocurrencies: Beyond Blockchain Bottlenecks"
slug: mutual-credit
project: holochain
googledoc: https://docs.google.com/document/d/19mdR6Syv5Ch2A6yf_6vZFcpDz0WWCyiYliKXa-k8rkI/edit?usp=sharing
excerpt: "We identify and clarify the core elements of cryptocurrency and describe a new approach to designing such currencies distinct from blockchains -- an approach rooted in biomimicry. We explore efficiencies for decentralized data and decision-making and distinguish consensus of distributed process, rather than data in ledgers, at the core. We then illustrate an implementation of a cryptocurrency using these principles and a use case which brings a centuries old practice into the digital era. We address the central vulnerability to this model working at scale, showing how the solution can be built with existing technologies. Finally, we also confront social challenges involved in governance of crypto systems."
authors:
    "Arthur Brock": artbrock.com
    "Eric Harris-Braun": eric.harris-braun.com
tags:
- White Paper
- Holochain
- Cryptocurrency
- Hawala
- Blockchain
- Mutual Credit
- Use Case
comments: []
---


>  *Note: First published [as an article here.](https://medium.com/metacurrency-project/beyond-blockchain-simple-scalable-cryptocurrencies-1eb7aebac6ae#.i8iepm3c3) Also note, after original publication we have [built the technology](http://holochain.com).*


### **What is a Cryptocurrency?**

As of this writing, most people think of cryptocurrencies as things that run on blockchains like bitcoin, ethereum, dogecoin, and all the alt-coins and ledger systems. This paper outlines a completely different strategy for implementing cryptocurrencies with fully distributed chains. Before presenting the approach, we need to step back and validate some basic assumptions, because this very notion seems impossible to many steeped in the assumptions built into blockchain.

Rather than trying to make one global, anonymous, digital cash, we are interested in building a rich ecosystem of interoperable currencies. We view non-monetary value-metrics and reputation systems as additional types of currencies that should easily interoperate with monetary ones, and be able to run on the same architecture. Our different assumptions and design requirements have led us down a different path toward implementation.

First, lets establish clarity about the fundamentals of cryptocurrencies of all types. What are the core elements of a modern cryptocurrency?

1. **Digital**: This one may be obvious, but it’s worth saying. It’s electronic, not paper or coins. Holdings are electronic and only exist and operate by virtue of a community’s agreement about how to interpret digital bits according to shared rules about operation and accounting of the currency.

2. "**Trustless**:" You don’t need to trust a 3rd party central authority (a bank, government, business, or club) for the currency to work. The currency operates independent of the goodwill, integrity, practices, or decisions of any particular (non-representative / unaccountable) group or individual.

3. **Decentralized**: The primary way to ensure the currency is not controlled by a small group for their own benefit, is to make the currency itself function in a decentralized manner so that it is *literally* held and managed by many, most, or all of its participants. Specifically, access, issuance, transaction accounting, rules & policies, should be collectively visible, known, and held.

4. **Cryptographic**: Since a decentralized information architecture also means many "fingers in the pie," the currency should leverage cryptographic data structures (hash-chains, Merkle trees, etc) to ensure [Intrinsic Data Integrity](http://www.artbrock.com/blog/footprints-flow). These cryptographic structures leverage hashes to establish immutability making it safe for a wide variety of people to host the data without being able to alter it.

5. **Identity**: Since the currency only exists as bits, there must be a way to associate these bits with some kind of account, wallet, owner, or agent who can use them. Some kind of identity and authorization infrastructure is required (even if it permits anonymous use). This is typically implemented using cryptographic public/private key pairs. Note that use of signing and/or encryption is second distinct use of cryptography from the cryptographic hashes to ensure data integrity in #4.

Other elements that many take for granted in blockchains, we claim aren’t core but subject to developer decisions in design and implementation, so they can vary between implementations. Thus we acknowledge that our assumptions stray from the norm in these ways:

* A currency does not have to be stored in a synchronized global ledger, if you can meet the above criteria another way.

* A currency does not have to be money. It may be a reputation currency, or any data used for applications, measurements, feedback, sensors, identity, or naming, etc.

* Its units do not have to be cryptographic tokens or coins.

* It does not have to protect the anonymity of users, although it may.

Items on this second list are decisions you make based on the use case for your currency — they are not inherent requirements for all cryptocurrencies. For example, if you think currency is only money, and that money must be artificially scarce to have value, then certainly you might choose to issue and track a limited supply of cryptographic tokens or coins. And you might mete them out for performing work, managing ledger consensus, or other computationally intense tasks. Then you must tackle the problem of always tracking which coins exist, and which have been spent. That is one approach — the one blockchain takes.

You might design for anonymity if you think of cryptocurrency as a tool to escape government intrusion. However, identity and accountability for actions may be necessary ingredients if you think of it as a tool for building or sharing resources inside peer groups or communities, or if you want to establish and manage membership in new kinds of commons.

### **Alternate Approach: Parallel Chains with Intrinsic Data Integrity**

Managing consensus about a shared reality is a central challenge at the heart of all distributed computing solutions. The bitcoin blockchain made a big step forward in practical [Byzantine Fault Tolerance](https://en.wikipedia.org/wiki/Byzantine_fault_tolerance), by creating blocks of many transactions (with a 10 minute delay and randomized selection to append the block), instead of getting consensus about the sequence of thousands of transactions in a hash chain, it gives you 10 minutes to collect transactions, and then your peers just validate (signatures and unspent tokens) on the whole block. Currently the bitcoin blockchain has [grown to over 100GB](https://blockchain.info/charts/blocks-size) and can only process [7 transactions per second](https://en.bitcoin.it/wiki/Scalability).

If we want to democratize money by having cryptocurrencies become a significant and viable means of transacting on a daily basis, we believe we need fundamentally more scalable approaches that don’t require expensive, dedicated hardware to be a full peer. Bitcoin mining has [tended toward becoming more centralized](http://www.nasdaq.com/article/problems-associated-with-bitcoin-mining-centralization-may-be-overstated-cm684801) and because of [economies of scale of mining](https://www.alt-m.org/2014/11/18/bitcoin-will-bite-the-dust/), fewer pools committing more of the blocks.  Proof of Stake approaches being adopted by Ethereum and other chains also fail to address this Pareto Effect by granting more influence to those who already have more holdings.

However, if we only enforce consensus where consensus is actually what’s needed, the nature of the problem changes drastically. We need consensus about whether a domain name has been registered, who owns it and where it points to. We should not need system wide consensus for two people to do a transaction in a cryptocurrency. We do understand why consensus is currently required in the blockchain, but to us this indicates that the problem has been framed incorrectly.

To see some other ways we could frame these kinds of problems, let’s look at how nature gets the job done in massively scalable systems which require coordination and consistency. Here are some of the core principles:

1. Replicate the same processes across all nodes.

2. Empower every node with full agency (the ability to execute processes to transform itself).

3. Hold this transformed state locally and reliably.

4. Establish protocols for interaction (which trigger the shared processes that in turn produce expected transformations).

This is not a definitive list, but it provides a high-level starting point. In a future white paper we’ll go into implementation details.  Here we provide a high-level illustration, and work through an example of a minimal implementation for a cryptocurrency, which is simpler and lighter weight than a blockchain approach.

Let’s look at how highly scalable systems in the real world incorporate these principles of complexity and coordination without global ledgers of blockchain-like patterns.

* **Humans**: Each speaker of a language carries the processes to understand sentences they hear, and generate sentences they need. When we use those rules properly, we are speakers of that language. We don’t have to be conscious of the rules. We don’t have to know all the same words (because we can use the rules to have unknown ones explained). We don’t need the same experiences. And we certainly don’t carry some kind of global ledger of everything that’s ever been said, or require consensus about what has been said. A global ledger approach would make it impossible to learn or speak a language, introducing ridiculous latency, bottlenecks, and stultification. Can you imagine not being able to say something until the language committee (miners) reaches consensus that it is a valid sentence for you to speak? Language IS a communication protocol we learn by emulating the processes of usage. For example, words don’t mean what a dictionary or any kind of shared ledger says; they mean how they’re used. Dictionaries try to catch up when the usage (processes) have become widespread (e.g. saying "sick" to mean “awesome”).

* **Cells**: Cells each carry a copy of their instruction set (DNA). Stem cells use these instructions to differentiate into more specific cell types in response to their context and setting. Differentiated cells express different subsets of genes in the DNA — similar to a computer loading programs from disk into active memory. The expressed genes govern the behavior of the cell — provide the "program" the nucleus runs. It’s even called nuclear reprogramming. Again, there is certainly no global ledger with consensus about the state of trillions of cells. Yet, from a single zygote’s copy of DNA, our cells coordinate in a highly decentralized manner, on scales of trillions, and without the latency or bottlenecks of central control.

* **Atoms**: We speak of atoms as if they’re objects made of sub-objects, made of yet smaller objects. Even though they provide us the experience of solidity and substance, they are far from solid and substantial. Instead, they are mostly empty space — fields of emptiness that embody complex processes. These processes transform the state of the atom (or its subparts/fields) through interactions with other atoms, fields, light, or energy. We don’t know how those processes are coded into the fabric of an atom, but they are so consistent and reliable that they form the basis of all of our physical reality — the "Laws of Physics." Here also, it would be ridiculous for an atom not to be able to bond with another atom without first consulting a global electron ledger to see if it’s being double-spent. Imagine the bandwidth and processing power it would take to run a global ledger tracking the state of every atomic particle in the whole universe.

### **Applying these organizing principles to cryptocurrency**

#### **Replicate the same processes across all nodes:**

Imagine something along the lines of a [Java Virtual Machine](https://www.youtube.com/watch?v=G1ubVOl9IBw) connected to a distributed version of [Github](https://www.youtube.com/watch?v=wJ_-JfletKY). Every time this JVM runs a program it confirms the hash of the code it is about to execute with the hash signed into the code repository by its developers. Similarly, when you create a distributed application or cryptocurrency, you use this method of implementing and distributing the code.

This allows each node that intends to be honest to be sure that they’re running the same processes as everyone else. So when two parties want to do a transaction, and each can have confidence their own code, and the results that your code produces. Then you treat it as authoritative and commit it to your local cryptographically self-validating data store.

It turns out when you focus on distributing process first you end up with even more greatly distributed data. This is because each participant holds only their own data. In contrast, blockchains store everybody’s transactions in a single database that every node verifies and copies. The underlying foundation of distributed process enables deeper distribution of data and parallel architectures. Ethereum and smart contracts, are doing this the other way around — layering processes on top of a global ledger.

By distributing process at the foundation, and leveraging Intrinsic Data Integrity, our approach results in massive improvements in throughput (from parallel simultaneous independent processing), speed, latency, efficiency, and cost of hardware. There is no need to wait 10 minutes to see if your transaction gets committed. This architecture can facilitate huge volumes of even extremely "low value" transactions permitting creative uses for coordinating shared activities that wouldn’t merit the cost or energy of implementing on a blockchain. You also don’t need to incent people to hold their own record — they already want it.

#### **Empower every node with full agency:**

Allowing each node to treat itself as a full authority to process transactions (or perform interactions via shared protocols) is exactly how you empower each node with full agency. Each node runs its copy of the signed program/processes on its own virtual machine, taking the transaction request combined with the transaction chains of the parties to the transaction. Each node can confirm their counterparty’s integrity by replaying their transactions to produce their current state, while confirming signatures and integrity of the chain (at rates of 4k to 40k/sec depending on the signing algorithm used).

If both nodes are in an appropriate state which allows the current transaction, then they countersign the transaction and append to their respective chains. When you encounter a corrupted or dishonest node (as evidenced by a breach of integrity of their chain — passing through an invalid state, broken signatures, or broken links), your node can reject the transaction you were starting to process. Countersigning allows consensus at the appropriate scale of the decision (two people transacting in this case) to lock data into a tamper-proof state so it can be stored in as many parallel chains as you need.

#### **Hold this transformed state locally:**

When your node appends a mutually validated and signed transaction to its chain, it has updated its local state and is able to represent the integrity of its data locally. As long as each transaction (link in the chain) has valid linkages and countersignatures, we can know that it hasn’t been tampered with.

Consider the following hypothetical interaction between two atoms:

![image alt text](image_0.png)

This is intended to illustrate what a bad idea it would be to run the universe with a global electron ledger. Two atoms should be able to "sort it out" without needing agreement from every other atom in the universe. It probably triggers a response in you like, “Duh, it either has the electron or it doesn’t.” And that’s exactly the point! If you can reliably embody the state of the node in the node itself using Intrinsic Data Integrity, then all nodes can interact in parallel, independent of other interactions to maximize scalability and simultaneous processing. Either the node has the credits or it doesn’t. We don’t have to refer to a global ledger to find out, the state of the node is in the countersigned, tamper-proof chain.

#### **Establish protocols for interaction:**

Any transaction is just a special kind of communication according to a specific grammar or protocol. For example, "Transfer X units of Currency Y from Account A to Account B for This Described Purpose." Just like any meaningful communication, a protocol needs to be established to make sure that a transaction carries all the information needed for each node to run the processes and produce a new signed and chained state. This could be debits or credits to an account which modify the balance, or recording courses and grades to a transcript which modify a Grade Point Average, or ratings and feedback contributing to a reputation score, and so on.

### **Currency Design Principle: Mutual Credit**

The means to design better, more equitable currencies has come a long way in the past 500 years. So, it is probably a good idea to integrate best practices from community currencies instead of just basing the design on patterns of money issuance inherited from medieval goldsmiths.

Most people think that money is just money, but there are literally [hundreds of decisions you can make in designing a currency](http://artbrock.com/currencymap/) to target particular needs, niches, communities or patterns of flow. Some seemingly small decisions end up having large effects when iterated over centuries and billions of transactions. But, for the moment, let’s just stick to one core design principle regarding **_how units in a currency are issued_**.

Blockchain cryptocurrencies are fiat currencies. They create tokens or coins from nothing. Bitcoin does this through mining, allowing the miner who completes a complex processing task first, to commit the next block of transactions to the chain along with a transaction that creates a bunch of new coins. These coins are just "spoken into being" (the meaning of “fiat” in Latin) by the node committing the new block. Thus begins the challenging task of tracking all the coins that exist to ensure there is no counterfeiting or double-spending. You wouldn’t need to manage consensus about whether a cryptocoin is spent, if your system created accounts which have normal balances based on summing their transactions. Sounds simple, right?

There’s a name for this completely peer-to-peer approach to issuing managing a currency supply: **mutual credit**. In a mutual credit system, units of currency are issued when a participant extends credit to another user in a standard spending transaction. Picture a new mutual credit currency with all accounts having a zero balance. The first transaction could look like this: Alice pays Bob 20 credits for a haircut. Alice’s account now has -20, and Bob’s has +20.

Notice the net number units in the system remains zero, just like the balance sheet in standard accounting must always balance to zero. That accounting practice places no limits on the amount of cash or assets a business can have; it simply means they are offset by an equal amount of liabilities or equity. Every negative balance in a mutual credit system is offset by positive balances so there is always a systemwide ZERO balance. You could think of the total number of units in circulation at any time as the sum of all the negative balances (or, if you prefer, the sum of positive balances since they are the same number).

But wait — Alice spent credits she didn’t have! True. That’s exactly how issuance in mutual credit works. Managing the currency supply in a mutual credit system is about managing credit limits — how far people can spend into a negative balance. Different systems set different rules about this, ranging from everyone having the same limit (e.g. 100 credits), to having NO limits and leaving the choice up to each person as to whether they want to extend more credit to someone deep in debt. It really depends on the community, the relationships, and the use case.

One elegant approach to managing mutual credit limits is to set them based on actual demand. You can calculate credit limits to be an equivalent of what you can pay back in 3 months (or another arbitrary period) based on the transaction history of each account (with a couple of anti-gaming modifications). This allows the currency supply to expand and contract based on the actual usage patterns of the community which demonstrate the market demand for the value people are providing.

This raises concerns about manufacturing fake accounts to game credit limits ([Sybil Attacks](https://en.wikipedia.org/wiki/Sybil_attack%20)). However, it is easy to implement different classes of accounts. Easy to create, anonymous accounts may get zero credit limit, only able to spend credits which they have received in prior transactions. To qualify for an account with a credit limit, one may need to validate their identity, pay an application fee, or jump through whatever hoops the community decides are appropriate for the community to extend credit (e.g. be a member of the church, live in the neighborhood, have placed a security deposit, confirmed a credit card on file which can be charged for fraud, for example).

What if I alter my code to give myself an unlimited credit limit, then spend as much as I want? As soon as you pass the credit limit encoded in the shared agreements, the next person you transact with will discover you’re in an invalid state and refuse the transaction. But what if they don’t want to refuse a transaction just because I’ve entered an invalid state? If two people collude to commit an illegal transaction by both hacking their code to allow a normally invalid state, the same pattern still holds. The next person they try to transact with using untampered code will detect the problem and decline to transact. If you get everybody to collude with a new agreement, that is comparable to a new software version or soft-fork of a blockchain.

Most modern community currency systems have been implemented as mutual credit, but we don’t know of anyone who has built a tokenless crypto-mutual-credit-currency yet, so let’s outline an approach to creating a basic one with minimal supporting infrastructure.

### **Minimum Viable Mutual Credit Cryptocurrency**

Instead of sending a check or wiring money through a bank or Western Union, hundreds of millions people transfer money through the hawala system. Hawala is a network of merchants and businessmen, which has been operating since the middle ages, performing money transfers on an honor system and typically settling balances through merchandise instead of transferring money. It works like this: a laborer building a skyscraper in Dubai wants to send some of his earnings home to his family in Egypt. He goes into a store in Dubai, gives the owner, who is a hawaladar, 1,200 UAE Dirham in cash, and provides a passphrase for collecting the cash. The hawaladar calls a hawaladar he knows in Egypt and arranges for an equivalent sum in Egyptian Pounds to be picked up using that password. The laborer calls his wife and tells her the password and at which store to collect the money. Each hawaladar makes a record on their own books of the debt, which is eventually settled by applying it as a discount to merchandise going from Dubai to Egypt.

Let’s look at building a minimum viable cryptocurrency with the hawala network as our use case. We’ll focus on the processing and data integrity of the transactions, not on user interface, because if the data is stable, and locally accessible, any kind or reporting and widgets could be made available via phone app, web interface, or whatever.

We’re making a few design decisions in the spirit of keeping this example simplified. To minimize key management infrastructure, each hawaladar’s public key is their address or identity on the network. To join the network you get a copy of the software from another hawaladar, generate your public and private keys, and complete your personal profile (name, location, contact info, etc.). You call, fax, or email at least 10 hawaladars who know you, and give them your IP address and ask them to vouch for you. (Yes, IP addresses are inconvenient but in a minimal example we want to show you don’t even need a domain name under the control of any group or individual.)

Once 10 other hawaladars have vouched for you, you can start doing other transactions because the protocol encoded in every node will reject a transaction chain that doesn’t start with at least 10 vouches. Having this requirement accomplishes a few things. It makes manufacturing fake accounts impractical (Sybil Attacks) and it begins building your peer routing table (which stores public keys, last-known IP addresses, names, locations, and contact info for other hawaladars that you interact with) while seeding your information with those other peers so you can be found by the rest of the network.

As described in the Mutual Credit section, at the time of transaction each party audits the counterparty’s transaction chain. This is when they confirm the initial 10 vouches and also validate that their counterparty’s balance(s) are in good standing — that they make good on their debts and are not too far indebted to want to transact with.

Hawala transactions often cross national boundaries and currencies. We don’t specify here a "best" way to approach conversion and accounting of many national currencies. One could store balances using a currency-neutral value-reference like the Terra Trade Reference Currency (TerraTRC) or Rogers International Commodities Index (RICI). For simplicity, we’ll stick with the current frequent practice of just recording the exchange rate of the national currencies at the time of transaction.

Our hawala crypto-clearinghouse protocol has two categories of transactions: some used for accounting and others for routing. Accounting transactions change balances. Routing transactions maintain network integrity by recording information about hawaladar. These two categories of transactions could be stored in a single chain, but it probably optimizes accounting operations and routing operations to store them in two separate chains for each node. Let’s look at each in turn.

**Accounting Transactions** create signed data that changes account balances and contains these fields:

* Transaction type (Promise, Settlement, Transfer)

* Peer ID (public key) of sending hawaladar,

* Peer ID (public key) of recipient hawaladar,

* Sender currency,

* Recipient currency,

* Currency exchange rate (always structured as sender to recipient currency rate)

* Transaction amount (in sender currency. User Interface can render recipient amount using the exchange rate),

* Remittance passphrase (encrypted with receiver’s public key),

* Timestamp

* ID (hash) of sender’s previous transaction,

* ID (hash) of receiver’s prior transaction.

The final hash of all of the above fields is used as a unique transaction ID and is what each of party signs with their private keys. Signing indicates a party has agreed to the terms of the transaction. Only transactions signed by both parties are considered valid. Nodes can verify signatures by confirming that decryption of the signature using the public key yields a result which matches the transaction ID.

**Promise: **This is the normal way a hawaladar initiates a transaction. But now instead of calling the hawaladar on the recipient’s end after accepting a sender’s cash, they initiate a cryptocurrency transaction which notifies the receiving end of a transaction pending their approval and signature. This is used to show balances of outstanding promises owed between pairs of hawaladars. HA promises 1,200 to HB, so has a balance of 1,200 with HB. More promises to that hawaldar increase the balance, settlements between them decrease that balance. Promises to and settlements with other hawaladars have no effect on the balance between HA and HB. The receiving hawaladar can reject the transaction or accept by providing the hash of his previous transaction and signing it.

**Settlement:** When a hawaladar who has an outstanding promise to another applies a discount to the purchase and shipment of merchandise to them, this transaction accounts for the settlement of that amount against the prior promise. This reduces the balance owed to the receiving hawaladar. The receiving hawaladar could wait to sign the transaction upon receipt of the merchandise.

**Transfer:** The last accounting transaction is a transfer of crypto-credits. Instead of a pairwise balance between parties, there is just one overall balance of credits in each account. As described for mutual credit, each account starts at zero, and can go into whatever level of debt the hawaladar are willing to extend to each other. In this example, there are no preset credit limits. Transfers would be used for immediate settlement via crypto-credits in cases where two hawaladar don’t have enough relationship to trust a promise for future payment, or they don’t have relevant merchandise or distribution lines to be able to settle a promise. This is basically the normal transaction for spending cryptocurrency that all other coins do, but it is listed last here because the actual transfer of funds to settle a promise is less common than the transfer of merchandise in the hawala system.

**Routing Transactions** sign data that changes the peers list and contain these fields:

* Transaction Type (Vouch, Update, Denounce)

* Public key of profile sender (peer ID)

* Sender’s current IP address

* Hawaladar profile fields (Given name, Family name, Nick name?, Business name, Address (street, city, province, country, etc.), Geocoded location (latlong for mapping), Phone, Email, Website URL?, Merchandise — categories)

* Reference Data

* Timestamp

* ID (hash) of sender’s previous transaction,

* ID (hash) of receiver’s prior transaction.

As with accounting transactions, the hash of the above fields is used as the transaction’s unique key and the basis for the cryptographic signature of both counterparties. A transaction in a chain is only valid with both signatures attached, and those signatures decrypt to the transaction ID. In this case, the presence of the recipient’s signature simply means the peer profile information was accepted.

Remember, instead of making changes to account balances, routing transactions change a node’s local list of peers for finding each other and processing.

**Vouch: **The vouch transaction puts a profile entry on the transaction chain, adding it to the local list of peer profiles. When you audit counterparty transaction chains, you can also collect more contacts for your peers list.

**Update: **Similar to a vouch, but used to publish updates to peer profiles (IP address, contact info, etc.) without communicating that you are vouching for the person whose chain you are publishing the update to.

**Denounce:** If your app encounters a situation where you have a signed transaction in your chain but it is missing from the transaction chain of the counterparty, it warns you of the fraudulent behavior, stops the current transaction and generates a denounce transaction. Denounce publishes the fraud by putting the transaction ID in the Reference Data field. Then when you send it to another hawaladar, their app finds the referenced transaction in your chain and confirms the signatures, then checks the counterparty’s chain and if it is missing from that chain, they can sign a denunciation into their own chain. Once denounced, a hawaladar gets added to a node’s routing blacklist and no more transactions will route to them. (Note: The vulnerability that makes the missing transaction possible is addressed in the next section.)

We picked the hawala network as a use case for implementation of a simple distributed cryptocurrency for a few important reasons:

* The hawala system operates across national boundaries, currencies, and jurisdictions.

* It is a distributed network of mutual trust, people who would not likely trust a central authority like a government, bank, or company to control their records.

* In the hawala system, everyone already keeps and trusts their own separate records.

* Hawaladars are not anonymous. In fact their identity is crucial, since direct relationship is at the heart each transaction.

* They already extend credit to each other, so their thinking is readily compatible with mutual credit issuance.

* To illustrate how multiple types of currencies and different types of balances could be calculated and maintained.

* To illustrate how non-monetary transactions (updates to the peers list instead of updates to account balances) can be usefully integrated in transaction chains

* To keep the implementation simple because hawaladars have long-term relationships, so we don’t have to make the system absolutely invulnerable to short-term cheats which leave long-term evidence and get you blacklisted from the network.

### **More Scalable Security: Notaries + DHT**

Since some communities don’t have much social accountability, relationship, or clear personal identity and reputation, the minimal implementation above may not quite be enough. It has a vulnerability which is why we added a "denounce" transaction above to blacklist cheaters. It would be possible for someone to hack the code on their node to “forget” their most recent transaction (drop the head of their chain), and go back to their previous version of the chain before that transaction. Then they could append a new transaction, drop it, and append again.

For example, suppose my chain shows I have a balance of 1,200 credits, I could do a transaction spending 800 of them, then use my hacked code to go back to the prior valid state (1,200), and spend 900 with someone else, and keep doing that. This is the distributed accounting analog to "double-spending" on a blockchain. However, each time I do this, I leave a copy of the transaction signed by me in the counterparty’s chain which my chain pretends I never did. So I’m leaving signed evidence of my fraudulent behavior all over the place. In a small community where I care about my relationships this is very unlikely to happen in the first place, and if it does, it would get caught quickly and have serious social consequences. In a large community, or one with looser social ties, it could take a while to be detected making it more likely for people to try it. So, next we’ll illustrate a nice way to remove this vulnerability.

After both parties have signed the agreed upon transaction, each party submits the transaction to separate notaries. Notaries are a special class of participant who validate transactions (auditing each chain, ensuring nobody passes through an invalid state), and then they sign an outer envelope which includes the signatures of the two parties. Notaries agree to run high-availability servers which collectively manage a Distributed Hash Table (DHT) servicing requests for transaction information. As their incentive for providing this infrastructure, notaries get a small transaction fee.

This DHT can also be used to manage public key infrastructure so that people can have persistent addresses distinct from their public key. This can allow keys to be revoked and updated without compromising ownership of a transaction history. Not only do notaries add transactions to the DHT, but they update each party’s PKI record with the hash for new head of their chain. Both countersign an outer envelope to their respective chains after an adequate threshold of peers showing this updated hash (M of N saturation of peers in the neighborhood of the hash of the PKI record). The nodes cannot complete their next transaction (append to their own chain) until their last transaction is notarized. This prevents removing the most recent link in the chain because your counterparty will reject your transaction if the head hash doesn’t match the one found upon lookup of your public-key.

This approach introduces a few more steps and delays to the transaction process, but because it operates on independent parallel chains, it is still orders of magnitude more efficient and decentralized than reaching consensus on entries in a global ledger. Any transaction should still be able to be completed within seconds, even on smartphone hardware. Meanwhile millions of simultaneous transactions could be getting processed by other parties and notaries with no bottlenecks.

One could design other solutions to prevent nodes from dropping the head of their transaction chain, but this approach of having notaries serve out a DHT solves a number of common objections to completely distributed accounting. Having access to reliable lookups in a DHT provides a similar big picture view that you get from a global ledger. For example, you may want a way to look up transactions even when the parties to that transaction are offline, or to be able to see the net system balance at a particular moment in time, or identify patterns of activity in the larger system without having to collect data from everyone individually.

### **Conclusions**

By leveraging Intrinsic Data Integrity to run numerous parallel tamper-proof chains you can enable nodes to do various P2P transactions which don’t actually require group consensus. It is not only possible, but far more scalable to build cryptocurrencies without a global ledger consensus approach or cryptographic tokens. This paper has provided a framework to build a tokenless cryptocurrency, and showed how mutual credit is an appropriate currency issuance method for operating such a cryptocurrency on completely peered chains. Basic PKI with a DHT addresses the obvious vulnerabilities.

We have named this type of architecture holochain to distinguish it from blockchain. A prototype implementation is available at https://github.com/metacurrency/holochain
