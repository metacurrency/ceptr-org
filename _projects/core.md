---
layout: project
slug: core
title: "Ceptr Core"
nav_title: Ceptr Core
navigation_weight: 6
icon: fa-gears
purpose: "To be the fabric which binds all the sub-projects into an integrated framework via Virtual Machine Hosts, Fractal Receptors, Parallel Tree Processing, a Ceptr Network and a Compository for managing shared code & data reuse."
home_page_description: "The fabric which binds all these capacities into an integrated framework. Plus: Virtual Machine Hosts, Fractal Receptors, Parallel Tree Processing, and more..."
repos:
  "Ceptr Archive": https://github.com/zippy/ceptr
dev_docs: http://zippy.github.io/ceptr/
---
<!-- TOC START min:2 max:4 link:true update:true -->
  - [Overview](#overview)
  - [Why Build Ceptr?](#why-build-ceptr)
  - [How Receptors Work](#how-receptors-work)
  - [Ceptr CORE Components](#ceptr-core-components)
    - [VM host](#vm-host)
    - [Receptors as Nano-Machines](#receptors-as-nano-machines)
    - [Receptors within Receptors within Receptors...](#receptors-within-receptors-within-receptors)
    - [Self-Reducing Trees](#self-reducing-trees)
      - [Hardware optimized for Parallel Processing of Trees](#hardware-optimized-for-parallel-processing-of-trees)
    - [CeptrNet](#ceptrnet)
      - [Two Protocol Systems](#two-protocol-systems)
      - [Routing](#routing)
      - [Triangulation for joining/registering](#triangulation-for-joiningregistering)
    - [Compository](#compository)

<!-- TOC END -->

<br /><div class="alert alert-warning" role="alert"><em><b>Stage of Development:</b> Many elements of the Ceptr Core were built and prototyped in our C implementation of Ceptr. [That codebase](http://github.com/zippy/ceptr) is being retired in favor of breaking Ceptr down into more understandable sub-projects, and will be rebuilt in Go starting in Q2 2017 after the completion of [Holochain](/projects/holochain) prototype. </em></div>

## Overview

Ceptr implements a [Grammatic Capacity](/whitepapers/grammatics) robust enough to be a "language" for expressing new forms of social organizations at scale.  Other projects in the smart-contracts space ([Ethereum](https://www.ethereum.org/), etc.) have similar goals, however we believe that because our approach builds from a core DNA of social coherence it will yield fundamentally different results.

The Ceptr-core sub-project weaves together the holochain distributed data engine and Pcubed semantic protocol engine in to a fabric that allows for the creation of the fractally composable computing units we call Receptors.  This fabric follows the framework of Agent/Carrier/Signal/Protocol as described out in our [Grammatics whitepaper](/whitepapers/grammatics).

## Why Build Ceptr?

This is the part where we’re supposed to quote Einstein about how problems can’t be solved by the mindset that created them and tell you about how Ceptr solves a bunch of previously unsolvable problems. We see what this makes possible as much bigger than the problems it solves, but both are important.

**Problems Solved:** Humankind has built a global electronic communications network which enables us to collaborate on scales never before possible. However, the gap between theory and practice in this case is immense.  Technical barriers which constrain access, make it difficult for applications to interface with each other, weak tools for large-scale collaboration and decision-making, and the power dynamics of who controls shared data and communications keep this large-scale collaboration far out of reach. APIs and Protocols compete with each other keeping our computing infrastructure fragmented and brittle.

What if we could elegantly transcend all of the technical barriers at once? After all, shouldn’t our technology actually help us work together? **Everything should just work together easily.**

**Audacious Possibilities:** The social hurdles are just as challenging: entrenched economic interests, upside-down incentives, legal jurisdictions, challenges with large-scale decision-making, setting priorities in the face of numerous challenges, and melding diverse viewpoints into a shared perspective, etc.

Humanity is poised on the edge of a quantum leap in evolution, not at the level of individuals, but at the level of our collective social organisms like corporations, institutions and governments. In order to make this leap, we need the same kind of architectures of intelligence that make it possible for trillions of cells to work together in an organism.

Large-scale collective intelligence requires communication to be virtually instantaneous (electronic), peered, decentralized, semantic and designed to evolve in response to rapidly changing needs. Effective collaboration on such a scale would obviate most of the power structures that underpin the social barriers to change and could make formerly intractable problems (such as climate change, species extinction, resource depletion, or poverty) quite readily solvable.

Ceptr is designed to provide the building blocks of the kind of expressive capacity which embodies nature’s architectures of intelligence and enables an explosion of new patterns of collective intelligence on every scale.

## How Receptors Work
Receptors are the “atoms” of the Ceptr computing architecture, and the basis for the name of the platform. A receptor is a lightweight virtual machine, which can run processes, manage its state, and most importantly RECEIVE (and send) signals. They embody a fundamental unity, and hold coherence:

 - for the version of their executable code
 - for the state of their data
 - for relationships within collections of data
 - for how they interface with other receptors (including other distributed instances of themselves)

A running receptor is always instantiated in the (address) space of another receptor. In other words, receptors can contain other receptors. This extends, in a fractal manner, with each receptor able to manage a particular realm of coherence as an integrated service inside other receptors.

You may be thinking: “Every receptor in a receptor? It has to bottom out somewhere. It can’t just be ‘[turtles all the way down](http://en.wikipedia.org/wiki/Turtles_all_the_way_down).’” This is made possible by a trick of constructing a [strange loop](http://en.wikipedia.org/wiki/I_Am_a_Strange_Loop) in how receptors interface with computers and networks akin to biological genotypes and phenotypes.  Every receptor runs by virtue of process threads allocated to it by a Virtual Machine Host.  These VMhosts are themselves a special kind of receptor which interfaces with the operating system of the host machine.


## Ceptr CORE Components
After breaking out many parts of the Ceptr architecture into [the other sub-projects](/#projects) to make some kind of stand-alone functionality that approximates Ceptr, you should be familiar with many of the features and functions of Ceptr. However, there are some parts which don't really break out into a stand-alone tool, or are used to hold it all together.

### VM host
The Virtual Machine Host (VMhost) is the program you install which runs all Ceptr Receptors inside it as lightweight virtual machines. The VMhost interfaces with the Operating System and various system devices. Edge receptors (with bindings to OS services provided by the VMhost) can make various OS services (like network sockets) available to Receptors.

The VMhost manages the memory, processes and threads, and diskspace that the Operating System provides. It provides these resources to the various running Receptors. It can awaken Receptors into running memory which have been serialized to disk, or put running receptors to sleep by serializing them to the disk.

The VMhost does a lot of the heavy lifting in terms of underlying infrastructure for the all the Receptors to keep the overhead of each Receptor as light as possible.

### Receptors as Nano-Machines
A Receptor is its own whole computational unity: a bit like a virtual machine, or a container, or unikernel. You can pack a Receptor full of many symbols, structures, processes, and protocols, or you can keep it really lightweight and it piggybacks on the base system symbols, structures, processes, and protocols built into the VMhost so they don't have to be redundantly stored.

The ability to fall through to the VMhost scaffolding, keeps receptors as lightweight as possible, while retaining the power and autonomy of a virtal machine.

### Receptors within Receptors within Receptors...
As mentioned in the intro above, each Receptor is instantiated into the address space of a parent Receptor. All signals and information flow traverse this hierarchy so that each Receptor can manage the coherence and integrity of its own space, including any child receptors. However, the VMhost actually hosts all these as peers, their communication is just constrained according to their hierarchy.

### Self-Reducing Trees
The fundamental data unit in Ceptr is not a 32 or 64 bit word; it's a semantic tree. Now this may sound weird, but it creates an important mental shift. Think of each receptor as a computer whose CPU operates by evaluating tree structures, not linear sequences of bits. The "program counter" doesn't move forward along a linear memory space, loading the next instruction into a register for evaluation but rather walks along a tree structured memory space recursively reducing branches down to their result.

Not surprisingly, Ceptr programs are just another type of semantic tree. This means that fundamentally the Ceptr programming environment is [homeoiconic](https://en.wikipedia.org/wiki/Homoiconicity).

In traditional computing, which is built on linear sequences of these "words" we're always serializing and "re-hydrating," we rebuild objects from serializations. We lex & parse our programs into syntax trees to compile or interpret them. In Ceptr we keep meaning and structure connected with the values at the very base level.

It's easy to think of XML (or HTML) as being a semantic tree, but it's actually serial ASCII character representation which we have to interpret to build a tree or a DOM. It's not surprising that we do this, because for the longest time, our primary tool for interacting with the computer has been the text editor, in one form or another. Interestingly Integrated Development Environments almost always try to figure out the tree structures of code on the fly, so as at to be able to provide meaningful hints in the form of syntax highlighting, auto-completion, etc.. (So for us a key step will be to create really good tool-chain and UI for building and manipulating tree.)

We use semantic trees not only to represent data, and code, but they also to hold the execution environment. Traditional computing patterns use a stack to hold function calls by building stack frames that hold a function's parameters a locally scoped variables. In Ceptr we use the idea of a "run tree" which is a self-eating tree that reduces itself to its result. This short video gives a sense of how this works:
<p><div class="embed-responsive embed-responsive-4by3">
    <iframe src="https://www.youtube.com/embed/aIEhf97BhlA"  allowfullscreen></iframe>
  </div><br /></p>

#### Hardware optimized for Parallel Processing of Trees
Just like a market emerged for GPU accelerators for mining and such, we see using similar devices to turbo charge Ceptr processing concurrent self-reducing trees.

Imagine flashing your WiFi router with some Ceptr firmware and pluging in a USB hub with slots for a couple GPU devices and a hard hard drive or two for storage. We'd like for that lightweight box to be able to handle a significant computing load for distributed edge computing apps.

While we're at it, we'd like for that router to support mesh networking protocols so you can break free of hardwire connections if/when someone pulls an "Internet Kill Switch."

### CeptrNet
We mentioned the strange loop phenomenon above, there’s an unusual logical inversion in the way the network communication in Ceptr is implemented. Each VMHost (that needs to communicate with any other VMHosts) must get a CeptrNet address. You could say that each VMHost instance *exists* in the address space of CeptrNet.

Yet CeptrNet is itself implemented as a receptor. All the code for managing routing, communications, filtering, address and key management, etc. are implemented in a CeptrNet receptor which is installed in any VMHost that wants to communicate via the network.

[Diagram of Network of Physical Machines, VMHosts, CeptrNet receptors goes here.]

#### Two Protocol Systems
There are two completely different types of communication within Ceptr: front-end protocols, and back-end protocols. Front-end protocols are all those things we think of as protocols for receptors to send messages to each other: like HTTP, SMTP, FTP, etc.  Back-end protocols are how different  instances of the same receptor talk to themselves -- for synchronization, verification, validation, mirroring, redundancy, etc.

**Front-end protocols** are customizable, programmable ways to send communications in various formats. Back-end protocols are built into Ceptr for managing its internal functions.

Normally, network protocols are all thought of as these front-end things… and indeed they are when Ceptr interacts with people or programs via Internet protocols (like serving web pages via HTTP, or sending email via SMTP). But remember, within Ceptr, we don’t have to speak differently structured protocols, receptors communicate via the self-describing Ceptr protocol. So every message is a Ceptr style message which just identifies the different protocol it’s using semantically.

But when a receptor mirrors or synchronizes with instances of itself, it uses special internal maintenance protocols “within” the receptor, even though the data synchronization is happening over the network. This is exactly what the CeptrNet receptor does to send messages.  It synchronizes, routes, and manages other instances of itself to have the message pop out of a CeptrNet receptor on the VMHost on the network to reach a local receptor there.

CeptrNet addresses are huge UUIDs. They’re in a big sparse address space with gaps in it. Addresses are based on agency (as in who created or manages the receptor) NOT based on the physical topology of the network. You could have different instances of a single receptor in a close address space with regard to agency, but they could physically scattered across the globe.

#### Routing
Efficient routing of non-topological addresses can be a tricky challenging problem and requires an overlay layer similar to those used in DHTs. This overlay tracks information about physical topology and routing of the network and paths to “sibling” nodes.  CeptrNet uses this “internal” peer management system to accomplish the delivery to “external” addresses.

There’s a protocol for inter-receptor communication on a single VMHost [link to message format?]. To communicate between receptors on different VMHosts there are a few additions to the local Ceptr protocol which require CeptrNet source and destination addresses and for messages to be signed (for authentication, validation, data-integrity purposes).

When a receptor sends a message to a remote receptor it actually sends the message to its local CeptrNet receptor to provide a destination address. The CeptrNet receptor handles the network communication.

#### Triangulation for joining/registering
CeptrNet addresses are not managed by a central authority or even delegated to Internet Service Providers, they are structured as a UUID so that unique addresses can be generated with no central authority.  However, you can’t exactly create a new address all by yourself either. It actually takes two friends to “triangulate” you onto the CeptrNet.

Here’s how it works. You, Carl, would like to create an identity/address that can use CeptrNet. You have your friend Alice generate a new UUID address for you via her CeptrNet receptor,  and your friend Bob,  register your address with its associated public signing key, authorized identity service, and key revocation process into his CeptrNet receptor.  This begins your ability to start to communicate via CeptrNet.

### Compository
Imagine if the Internet came with a built-in, fully-distributed github. There would be a neutral ground for sharing code and referencing the symbols, structures, protocols, and components in use. Essentially that's the Compository which is built into the Ceptr Network.

 - Hyper Reusability: Sharable Models and World Views
 - Ceptr Compository (more contextual naming, UUIDs and trusted triangulation), Semantic namespace resolution for shared protocols, enumerations, receptors, models and world-views.
 - Semantic Code lets us render a narrative about the intentions of the code. A Semantic Stack, lets us render a narrative of its running state (if paused for debugging, for example).
 - Authentication of trusted components. Authorization of authoritative sources or processes for performing commits and version updates. “Signing” new components into compository via code-review.
