---
layout: project
slug: pcubed
title: "Protocol for <br /> Pluggable Protocols"
nav_title: Pluggable Protocols
image: http://ceptr.org/images/profile_semtree_with_structures.png
navigation_weight: 1
icon: fa-puzzle-piece
purpose: "Complete interoperability: No more silos and brittle APIs. Self-Describing protocols and a universal parsing system allows anything to talk to anything."
repos:
  "P-Cubed": https://github.com/metacurrency/pcubed
articles:
  "Introducing Semtrex": https://www.codeproject.com/Articles/894188/Introducing-Semtrex
---

<div id="toc" class="toc col-lg-4 col-md-4 col-sm-4" markdown="1">

<!-- TOC depthFrom:2 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Semantic Trees](#semantic-trees)
- [Semantic Alternation](#semantic-alternation)
- [Semtrex](#semtrex)
- [Match Triggers](#match-triggers)
- [Protocol Framework](#protocol-framework)
- [Protocol Composability](#protocol-composability)
- [Transformational Maps](#transformational-maps)
- [Optimized for Evolution](#optimized-for-evolution)

<!-- /TOC -->

</div>

<br />
<div class="alert alert-warning" role="alert" markdown="1">
**Stage of Development:** Our Protocol for Pluggable Protocols was built and prototyped in our [C implementation of the Ceptr codebase](http://github.com/zippy/ceptr). That codebase is being retired in favor of breaking Ceptr down into more understandable sub-projects (like this one) and is being [reimplemented in Go](http://github.com/metacurrency/pcubed). Which means, although this has been built once already, we're in the process of building it again.
</div>

# Overview

## Semantic Trees
The basic data structure for messages in self-describing protocols are semantic trees. These are tree structures where the shape of the tree matches the data hierarchy and each node contains a symbol identifier for the type of content at that node in addition to whatever values may be stored there.

XML, JSON, and other data-description formats are often *loosely* structured like this, and the stand-alone P3 system may interface with these different representation formats. However, in Ceptr, semantic trees are the base data structure for all memory in the virtual machine (data, processes, protocols, everything).

Also, unlike the typical XML/JSON approach where some text label is used as the description, we use semantic IDs which reference an explicit and complete semantic definition of data type, structure, and any special operators. This makes it clear when semantic terms are fully equivalent and when they're not. In representations which are merely labeled, what are the chances that different implementations of "Street Address" are going to have their data structured the exact same semantic format?

<div class="embed-responsive embed-responsive-4by3"><iframe width="560" height="315" src="https://www.youtube.com/embed/IGoWAHRNGw4" frameborder="0" allowfullscreen></iframe></div>

## Semantic Alternation
It seems in the "real world" we alternate between assembling some new structure of things, and assigning significance to components of that structure in that context. This means we assemble two numbers and call that one a latitude and the other a longitude. Or we assemble a bunch of bits into an integer and call that one 2^0 and the next 2^1 and so on.

Said differently, we alternate between structuring and naming elements or roles in the context of that structure.

<div class="embed-responsive embed-responsive-16by9">
<iframe id="iframe_container" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" width="550" height="400" src="https://prezi.com/embed/y-1ttw3mttkg/?bgcolor=ffffff&amp;lock_to_path=0&amp;autoplay=0&amp;autohide_ctrls=0&amp;landing_data=bHVZZmNaNDBIWnNjdEVENDRhZDFNZGNIUE43MHdLNWpsdFJLb2ZHanI0aXhDMkhVQkZMMHNVcDZmNFBDSk4vN0VBPT0&amp;landing_sign=tkPKPOlLSMBZH1GOKGanoAli48k1CYILZN8Lelnx1zA"></iframe></div>

## Semtrex
Semtrex is our SEMantic Tree Regular EXpression language. Having a self-describing protocol stack means we have to have a universal parsing system for any and every protocol. At first, this seemed an immense task, but when messages are structured as semantic trees, it becomes quite doable.

Semtrex is our universal parser which can match patterns on all protocols and data structures using a Regular Expression format to specify your match target. Semtrex can match not only against values (like normal regular expressions), but on semantic symbols, and structure of data.

As is frequently done with regular expressions, Semtrex generates a state maching / finite state automaton to process matches on inputs.

<a href="https://www.codeproject.com/Articles/894188/Introducing-Semtrex">Here's a rather detailed article illustrating Semtrex.</a>

## Match Triggers
Once you've used Semtrex to match on a signal or message, you can trigger an action. Typically, the action would take the match results and trigger an event, integrate any changes of state, or it might transform the input to a format expected by another protocol or system and pass it along.

In Ceptr we have Expectation statements in the format:

    Expect On <carrier> Match <semtrex-expr> Do <script> [With <parameters>]

Where ```carrier``` is a semantic carrier (which may be a port or connection in the stand-alone version). The ```semtrex-expr``` is a Semtrex expression which specifies whatever values, symbols or syntax you're trying to match. Finally, the match result, and any ```parameters``` are passed to the ```script``` as the action executed when there's a match. We don't know yet what scripting languages we'll implement in the stand-alone version of P3, but we'll probably make them pluggable and start with [zygomys](https://github.com/glycerine/zygomys) since it's the scripting language we started with for [Holochains](/projects/holochain).

## Protocol Framework
Normally "Protocol" refers to a human description of ways we're agreeing to communicate, and then there are different implementations of that description which have whatever peculiarities they may have. In Ceptr, a Protocol is live, executable, component, not an RFC paper.

**ENDPOINTS:** All Protocols are connected to Endpoints. Some system of providing an input or receiving an output. For example, HTTP is really a document requesting and rendering system. Any system which can serve up a document (a file system, a dynamic document generator, or whatever) could, in P3, be an endpoint for the server side of HTTP Requests. P3 Translates the HTTP request into the document retrieval request format, and embeds the resulting document into the HTTP Response. On the other end your browser may have been the endpoint which formulated and sent the HTTP request, and renders the resulting response.

**SLOTS:** Another core feature of all protocols is that they have Slots which can be filled. Obviously, one slot is often a "content" slot which is what allows protocols to carry other information. There are many other common slots, like From_Address or To_address. Just like you can plug lots of different words into the grammar of a sentence in English, protocols are that kind of template which provide context for interpreting whatever data is plugged into a particular slot.

In an abstract definition of a protocol there are always slots which need to be filled when that protocol is installed or instantiated for use.
 - CONNECTION: is an endpoint binding for a protocol (could be used at either end)
 - ROLE: specifies the RECEPTOR_ADDRESS of an agent (including another receptor as agent)
 - GOAL: specifies a PROCESS to be run
 - USAGE: specifies some semantic data to be used/passed in the signal


Beyond the syntactic matching capacities of Semtrex, Ceptr provides a framework for templating and slotting for plugging data into a protocol format or pulling data out of messages in a protocol.

## Protocol Composability
**CHAINING:** When configuring or defining a protocol, you can specify another protocol as the endpoint which allows you to daisy chain protocols together producing different transformations along the data flow path.

**NESTING:** Even more interesting, in terms of composability, is the ability to nest and embed sub-messages and sub-protocols. Ceptr's slot and template system enables you to plug a whole protocol into the content slot (and in some cases other slots) of a communication.

These two features also make it relatively easy to create new protocols by extending an existing protocol definition in a fairly minor way.

## Transformational Maps
The ability to define and apply directional transformation of the symbols defined in one context to the symbols defined in another context. Some native operations are:

 - **Direct mapping: A &rarr; B** -- Like when a numeric Zip Code becomes an alphanumeric Postal Code.
 - **Combined mapping: A + B &rarr; C** -- Like when First_name + Last_name becomes Full_name.
 - **Computed transformation: f(A) &rarr; B** -- Like when a Birth_Date is used to compute an Age. This can also include cases of combining fields and transforming them as in f(A,B,C) &rarr; D. it can also include uncombining like f(C) &rarr; A, B.
 - **Dropped terms: A &rarr; &empty;** Either no way to translate meaning, or place to put the data in the target context
 - **Merged source: A,B,C &rarr; A,B,X,Y,Z** Where X,Y & Z are a merged into the target data from another source (like system clock for a timestamp or whatever).

We expect this to be a useful and necessary aspect of translating between different protocols and semantic contexts, but we haven't built the map transformer yet.

## Optimized for Evolution
In the late 1980s, it was already clear that we were going to run out of IPv4 addresses (Internet Protocol version 4). Work began in earnest in 1992 on designing the next version of the Internet Protocol. There was brief experimentation with IPv5, then in 1996 IPv6 was released (which solves many known issues with IPv4). We’ve known about the need for change for almost 30 years, and published a new standard 20 years ago, but 90% of Internet traffic still runs on IPv4.

Even though network nodes on IPv4 and IPv6 cannot talk directly to each other, requiring gateways and infrastructure providers to route and bridge both protocols, it looks like they will operate alongside each other for the foreseeable future. Based on the current trajectory, it seems likely that it will have taken us 40 years to upgrade the Internet protocol.

Given the pace of change happening today, and how quickly our needs are evolving, we suggest that it is a big problem to take four decades to move to a new protocol even when people agree it is needed. Currently, the more important a protocol becomes, the harder it is to change it.

This problem exists not only for communication protocols, but also for operating systems, software, libraries, plugins, and modules which can create a rat’s nest of inconsistencies and compatibility issues. So in Ceptr, we built pluggable protocols, versioning, and deprecation functions right into the low-level design of the architecture.
