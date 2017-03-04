---
layout: project
slug: neural
title: "Neural Internetworking"
nav_title: Neural Internetworking
navigation_weight: 5
icon: fa-share-alt
purpose: "By supporting sticky requests which send data whenever conditions are matched, we enable neural-like behavior across all applications."
---
<!-- TOC START min:1 max:3 link:true update:true -->
  - [Overview](#overview)
    - [Two types of Scapes](#two-types-of-scapes)
  - [Listeners](#listeners)
  - [Distributed Indexing and Search](#distributed-indexing-and-search)

<!-- TOC END -->

<br /><div class="alert alert-danger" role="alert"><em><b>Stage of Development:</b> Specs & design. Awaiting launch of Sovereign Accountable Commons before beginning active development..</em></div>

## Overview
The generalized ability to plant persistent listeners for specific state changes in other's applications, enables the weaving of synaptic like connections across a whole network. These patterns are exactly the kinds of synaptic patterns of learning neural networks.

In the case of Ceptr, humans may be doing the learning and consciously trying out new connections. Or machines and algorithms could be tuning connections and patterns. Either way, this feature combined with the fundamental interoperability of self-describing protocols makes for exciting prospects of true Synthetic Intelligence -- not Artificial Intelligence separate from people, but scaling collective intelligence with humans integrated in the heart of it in healthy distributed ways.

**Pull vs Push:**For example (assuming P3 enabled nodes) if your arthritis acts up with barometric pressure drops, you can have a pretty simple app which checks a nearby weather station for direction of prevailing winds, then finds a weather station a couple hours away in that direction. It can plant a listener for drops of 2.5 millibars of pressure in a span of 2 hours. You can receive advance warning of low-pressure zone headed your way and take an aspirin before the pain hits. You don't have to watch the weather, you'll get a message automatically.

That's a fairly simple example, but imagine being able to plant listeners for all kinds of data changes: stock prices, doors opening, or closing, volumes of traffic flows on roads, who knows? The beauty of listeners comes from the loose coupling they enable.

## Scapes
Instances of symbol data are stored as semantic trees in Receptors. This ends up being very similar to objects stored in an object database. So to manage queries, lookups, and other data operations on these atomic data units, Ceptr uses Scapes.

The word "scape" (as in landscape, dreamscape, moonscape, seascape, cityscape) means to shape or condition. Scapes organize data by defining the relational geometry between the elements.

**Relational Geometry:** Do data elements have a natural order (like numerical, alphabetical, chronological)? Are values continuous or stepped? Is there multi-dimensionality (like x,y or latitude,longitude)? What functions are used for comparison or measuring proximity (like XOR on hash addresses in a network to determine nearness)?

### Two types of Scapes
1) **Indexed on Internal Property:** It's easy to think of this kind of scape as database indexes. You might have a collection of people who have registered for a conference. Each one is in their own instance of the semantic tree providing the structure for data for attendees. You might want to look up instances by last name, or payment status, without having to crawl through each one.

Defining a scape which orders attendees by last name basically creates an index of last names (or "Lastname, Firstname"), where entries point to the root node of their attendee record for easy retrieval. This part is pretty straightforward. The cool stuff comes with the topological scape algebra that can be performed on scape geometries when their properly defined.

These types of scapes don't need to synchronize new entries across instances of a receptor because each receptor can build an index of its own data. So only the data needs to sync. Scapes update asynchronously after data changes (not as an atomic transaction).

2) **Asserted  External Relationship:** You can think of this kind of scape as more like Resource Description Framework (RDF) elements. These are not just an index where an entry connects a node to its parent node, but rather where an assertion is made about two data structures and that assertion is not stored in either of them.

For example, both of our social media user profiles contain our first name, but the fact that we are friends, is an assertion about a relationship between those two profiles, that doesn't properly belong in either one of them.

Assertion scapes support unidirectional or multi-directional assertions (I say you are my friend is unidirectional. We both acknowledge friend status is bi-directional.).

## Listeners
In the same way you can request data that matches a particular query, you can plant a standing request for changes to data that match a particular condition (specified in [Semtrex](/projects/pcubed))

Nodes can refuse to plant a listener, or throttle listeners to particular levels of processing or bandwidth. They can revoke listeners at any time. The ability to have an application on your side receive data when particular changes happen elsewhere on the network without needing to send a constant stream of requests will create fascinating new kinds of interwoven data dependencies.

This allows people and their devices to be connected in ways which completely mimic the neuronal structures and patterns of the brain and body.

## Distributed Indexing and Search
Listeners on a scape on a single node is pretty neat, and its not too complex once the structures exist to enable it. However, indexing distributed data and making it easily searchable and queriable is an issue on another scale.  Tackling this problem is integral to moving from "searching" to distributed sense-making.  We don't have complete answers yet to how we will do this, however we are exploring distributed variants of Map/Reduce functions which may work well when built on top of Holochains.
