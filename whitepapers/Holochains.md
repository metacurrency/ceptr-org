# Holochains: A resilient data layer for distributed social computing.

Many are excited about blockchain as an architecture for decentralized social computing applications, but the starting assumptions built into its design carry forward fundamental inefficiencies and limitations. In this paper we propose an alternative approach which combines the data integrity assurances of Hash-Chains or Merkle Trees with the distribution efficiency of Distributed Hash Tables while also eliminating the consensus bottlenecks typical of blockchain and other distributed approaches to computing.

Many of the core challenges of distributed computing follow from root assumptions about the veracity of data existing independent from the source or origin of that data. In other words, we want the data to be "true" from a an absolute perspective, and then we want all the nodes in a distributed computing network to operate from the same truths.

Give an Example

Absolute frame.... It seems the real world doesn't work that way, why should the computing world. General Relativity published 100 years ago. We understand that the sequence and perception of events are relative to the vantage point of the viewer.

A universal sequence of events or transactions is difficult (maybe impossible), but recording a sequence of events from a particular vantage point is rather trivial. Blockchain addresses this sequencing by the having people do busy work which takes a fairly predictable amount of time to produce. But if you don't untether information from it's source, your don't need a universal sequence of events, you just need universal access to data which can be tracked back to non-repudiable, verifiable sources.

the Alternative, data strongly correlated to its source/originating vantage point. signed cryptographic data origination, on individualized chains, published to a DHT, with shared validation rules.

Let's check this...
If you want to retrieve a chunk of data from this DHT, what assurance do you have of the accuracy and veracity of the data.

First, if you have the hash/key... that is virtually impossible to substitute other valid looking data for the data you intended to retrieve. This is true of all reasonably good hashing algorithms and DHTs, not particular to Holochains.

Second, if you use m of n techniques for puts and gets on the DHT, you can guard against malicious or erroneous behavior of individuals. You are also protected from malicious behavior of groups which are a subset of the network by the randomization of which nodes host each data element via hashes as addresses. To reliably skew behavior or data, most of the network would need to be compromised, depending on the size of your neighborhoods and m.

Third, that the node(s) serving you the data has validated the origin of the data on a strong crytpographic data source (hash-chain or Merkle Tree), and validated the signature(s) on that data, and depending on the validation rules, they may have validated the whole chain/tree which precedes the data.

Fourth, for even higher levels of assurance, you could validate the retrieved data against the original signed cryptographic structures yourself, and trace back all the preceding entries in the hash-chain or merkle tree.


The role of validation rules.... forking of reality.


Distributed PKI & Identity Services makes verifying signatures and sources that much better. So that's the first big thing we're building on Holochains.
