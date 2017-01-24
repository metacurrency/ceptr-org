---
layout: whitepaper
status: Pre-release Draft
nav_title: Grammatic Capacities
title:  Grammatic Capacities and the Evolution of Complex Adaptive Systems
navigation_weight: 1
slug: grammatics
project: core
googledoc: https://docs.google.com/document/d/12Jd7ZeUzT-k6h2Qxw9jmOhNVlkYD1RnO4t2_mp6g4kg
authors:
    "Eric Harris-Braun": eric.harris-braun.com
    "Arthur Brock": artbrock.com
excerpt: "We provide a framework for understanding the evolution of complex adaptive systems.  The fundamental insight comes from the observation that new complex adaptive systems, as well as fundamental changes within those systems always appear concomitant with the emergence of a special type of informational infrastructure.  We call such an infrastructure a Grammatic Capacity and propose a formalism to describe them abstractly, as well as offer a proof-of-concept new Grammatic Capacity for catalyzing change in the complex adaptive system we call human society. "
tags:
- Whitepaper
comments: []
---
# Introduction
This paper provides a framework for thinking that may lead to answers to the deep questions of how complex adaptive systems take large evolutionary steps and how they come into being in the first place.  The fundamental insight comes from the observation that new complex adaptive systems, as well as fundamental changes within those systems always appear concomitant with the emergence of a special type of informational infrastructure.  We call such infrastructure a Grammatic Capacity.  We propose a formalism to describe Grammatic Capacities abstractly, and offer a proof-of-concept new Grammatic Capacity for catalyzing change in the complex adaptive system we call human society.  We do this in 3 parts:

In part 1, we describe how significant changes to complex adaptive systems happen when new Grammatic Capacities emerge within those systems.  We provide a formalism using the notions of Carrier/Agent/Signal/Protocol to define what we mean by Grammatic Capacities, and we apply that formalism to various example cases, showing how the formalism accounts for observed properties and categories of Grammatic Capacities.  Finally we show how Grammatic Capacities emerge as layers or stacks that build-up from previous Grammatic Capacities.

In part 2, we take as premise that the large Complex Adaptive System known as human society requires fundamental change, and therefore, based on the arguments from part 1, that a new Grammatic Capacity could catalyze that change.  We describe the emergence of Computation as a candidate Grammatic Capacity as it provides deep new expressivity in the realm of embodied Process.  We argue, however, using the formalism and distinctions from part 1, how in its current form, Computation does not suffice.  Rather, we propose that the appropriate jump would come from a Grammatic Capacity with the ability to express Grammatic Capacities, i.e. a Protocol for Protocols.  Such a Capacity will of course include Computation as a part.  Finally we describe how the Carrier/Agent/Signal/Protocol formalism itself provides the necessary abstract expressive units if embedded in a grammatically composable matrix.

In part 3, we provide a technical overview of our proof-of-concept implementation of a new Grammatic Capacity as described in part 2.  We describe a system of fractally composable Agents, which implement coherent loci of Computation using the basic units of Semantic Trees which, as self-describing data units, can act as general carriers for generalized self-describing protocols.  We describe a set of real-world implementation constraints and our approach to their resolution, including such elements as network identity, trust, privacy vs. transparency, distributed data storage, routing algorithms, byzantine fault-tolerance/distributed consensus, and more.  Finally we offer a speculative path to building more layers on top of this Grammatic Capacity and discuss how that path could effect change.

# Part 1: A formalism for Grammatic Capacities

Consider the following sequences of change:

1. pre-linguistic proto-hominids-> tool-using, self-ornamenting, cave-drawing homo-sapien bands -> hunter/gather tribes (Paleolithic) -> settled agricultural multi-site "peoples" (Neolithic) -> states -> nations -> industrialized global society

2. proto-life auto-catalyzed lipid-membranes -> prokaryotes (archea/bacteria) -> single celled eukaryotes (paramecium, yeast, algae, etc) -> multi-celled eukaryotes (hydra) -> complex "organ-ized" multicellular life (plants & animals).

They both start with a mysterious jump in which a fundamental unit of agency comes into being, in one case the human being, in the other the cell.  Then they continue with the emergence of increasing levels of social complexity.  Let’s examine the story of these change sequences from two viewpoints: historical and functional.  From the historical view, the branches of academia have provided us a well documented, detailed and rich story, both on the human social side, and the biological side.  From the functional view, despite the richness of the ideas of evolution and natural-selection, we have a much less clear understanding of the generalized dynamics of change of such Complex Adaptive Systems (CAS) (NOTE:  We understand CAS as in John Holland in Boundaries and Signals, and we use the abbreviation in the same way he does understanding it as plural or singular in context.), especially when it comes to the large jumps when new CAS come into being.

In the case of the two examples above, we see immediately that human language and RNA/DNA respectively provide the basis for the initial large jump.  Secondary jumps also correlate with emergence of information systems.  In the case of biology, families of information molecules and receptor systems form the basis for the initial jump between prokaryotes and eukaryotes and their re-use in more complex signaling chains again in the jump to multi-celled organisms, and then yet again in building neurons which themselves become the next level information system for building complexity in animals (NOTE:  See A M Stoka Phylogeny and evolution of chemical communication: an endocrine approach (http://jme.endocrinology-journals.org/content/22/3/207.full.pdf)).  In the case of social evolution, the invention of counting systems in the form of clay tokens led to stable and long lasting neolithic agricultural social communities.  These later evolved into writing systems as those smaller scale societies evolved into larger-scale states (NOTE:  See Denise Schmandt-Besserat, various (including https://sites.utexas.edu/dsb/tokens/the-evolution-of-writing/ and chapter 1 of Writing: a Mosaic of New Perspectives edited by Elena L. Grigorenko, Elisa Mambrino, David D. Preiss)).  The printing press as an information technology served as the fundamental basis for the industrial revolution (NOTE:  See McLuhan, M. (1962). The gutenberg galaxy: the making of typographic man.University of Toronto Press. & Eisenstein, Elizabeth. (1980). The printing press as an agent of change. Cambridge University Press. for detailed descriptions of this process.) and subsequently the rise of the current globalized social order.  We see rapid transformation in this order because of the new information infrastructure of networked computing; more on this later.

We do not attempt here to make an exhaustive presentation of each of the information systems that accompany all the steps in the sequences of change we mention.  We intend rather to create a formal framework for understanding such information systems.  We see these emergent informational infrastructures as common elements that allow agents in complex adaptive systems to come into resonance such that they can share meaning and coordinate action in new ways. We call these informational infrastructures Grammatic Capacities (NOTE:  Throughout this paper we capitalize terms that we mean to use in a formal sense, i.e. according to the set of definitions provided.).  Grammatic Capacities always include both expressive and receptive aspects, in that the "grammatic" has to do with the source template from which both generation of signals and detection of signals occurs.  In what follows we will provide a set of bottom up definitions to create a more formal definition of Grammatic Capacities.

**The basic formalism: Carrier****, Agent, Signal, Protocol**

Call a medium or substrate along with some of its dimensions of variability a **Carrier**.  (Examples: clay and it’s ability to hold impressions when dry; paper and it’s ability to absorb materials in its fiber mesh; air and the amplitude and frequency of pressure waves in it; copper wire and variations of electric potential across it)

Call some unity that has the capacity to effect and detect changes on a Carrier an **Agent** (Examples: cell, organ, person, computer).

Call a particular form or shape of change made to a Carrier by an Agent a **Signal** (Examples: a particular wedge impression on a clay tablet; a pressure wave in air of a specific waveform; a particular pencil mark on a paper, 5 volts, specific level of glutamate in a synapse, [a specific ](https://en.wikipedia.org/wiki/Luteinizing_hormone#/media/File:Luteinizing_hormone_(LH)_during_menstrual_cycle.png)[Lutenizing Hormone blood level](https://en.wikipedia.org/wiki/Luteinizing_hormone#/media/File:Luteinizing_hormone_(LH)_during_menstrual_cycle.png), a particular tRNA strand coding for a protein in a ribosome).

Call a coherent set of rules, agreements and processes for arranging Signals on a Carrier a **Protocol.**

The dimensions of variability of a Carrier may become modified or affected by non-agents, or by an Agent, but not following a Protocol.  Call a particular form or shape of change made to a Carrier by a non-Agent, or by an Agent, but not according to a Protocol: **Noise**.

## Protocols in more depth

Agents generate and detect Signals on Carriers. They do so by creating arrangements of, or sequences on a Carrier according to templates. You can think of such templates as expected or predictable subsets of some of the ranges of variability of a Carrier.   Call any such template a **Pattern**.

Agents use these templates to create at least two types of Patterns:

Call a Pattern for creating a convergent/constrained group of variations on a Carrier a **Symbol** set (NOTE:  Information theory describes how message intelligibility depends on Agents ability to detect that a particular variation on Carrier belongs to a predetermined set of possible messages. ).  (Examples: cone/sphere/disk clay token shapes, phonemes, letters of an alphabet, 0 and 5v,  DNA’s GCTA nucleic acid sequences that code for amino acids).

Call a template for using Symbols to generate or detect a divergent or potentially large or infinite set of Signals a **Grammar**. [Here’s where we need to add in a definition of composability and talk about the nature of grammars are partial knowledge, i.e. slots.] (Examples: sequences of spoken phonemes or letters arranged left to right on a paper to make words, subject-predicate-object slots for words to make sentences.)

The dimensionality of the Carrier medium/substrate and the Agent’s constraints on affecting the medium determines the kinds of Grammars and Symbols they will use.  Because we live in a spatio-temporal world, which in a way provides the underlying carriers for all of existence, we often see spatial arrangement and temporal sequence used as basic forms of Patterning of Carriers by Protocols.

In the Carrier of compression waves in air, our vocal-cords shape the dimensions of frequency and amplitude.  Human languages mostly shape those two dimensions to create Signals, and then use the dimension of time to further Pattern those Signals.  Carriers like paper allow humans to directly use spatial variability for Patterning. We arrange letters spatially (left to right, or right to left, or up and down) to allow us to represent the same temporal sequence we use to pattern phonemes in air.  Ideographic writing systems don’t use spatial mapping the same way for words, but they do for sentences.  This example may seem a little complicated because though a given ideogram itself often gets composed out of ideogram parts superimposed on-top of each other, some words require the spatial assembly of ideograms next to each other for their expression. But this does serve to show how agents use the available dimensions of variability when composing signals (NOTE:  As a thought experiment, imagine if we had two mouths on separable stalks.  That might allow us to use phase differences between the sound waves from the two sources to create a different kind of patterning of the carrier in our expressivity.   ).

A chemical’s concentration level in water or air also provides a range of variability (dimensionality) for signaling. We can approach large swaths of the study of biology through the lens of figuring out the pathways of signals biological agents send by looking for increasing and decreasing concentrations of particular chemicals in one or another carrier, at both the micro and macro levels, i.e. from molecular release inside organelles, to pheromonal signals that cover miles.

Call the methods and means by which an Agent creates a Pattern, a **Process**.  We often make the mistake of focusing on Patterns but we actually get much further by understanding that Patterns get left behind by Processes.  Patterns show up as the "tracks in the snow."  We can’t see Processes themselves.  Mostly we see the results of Processes on Carriers.

Call a set of Processes that creates and detects Patterns of Symbols according to a Grammar, a **Protocol**.  Call the Signals a Protocol can produce its **Expressions**. Call the detecting of Expressions in a Protocol, **Recognition**.

## Carrier/Signal/Protocol stacks

The Expressions produced by a Protocol can become a new Carrier.  We have already seen examples of this.  Combinations of vocal-cord and mouth positions modify air to produce phonemes.  Combinations of phonemes produce word-parts.  Combinations of word-parts produce words.  Combinations of words produce phrases. Combinations of phrases produce sentences.  At each level separate Protocols apply.  At the level of phonemes, the Protocols provide processes for modifying the human speech apparatus.  At the word-part level, the Processes work completely differently and apply to how to order and connect the phonemes.  Similarly on up the chain.  The key pattern here comes from the use of two levels of Carrier/Signal/Protocol.  First a convergent layer that creates Symbols.  And second a divergent layer that uses those Symbols as a Carrier, to create Expressions via a Grammar.

We find an important distinction between a base Carrier, and constructed Carriers at higher levels.  Back to the example of spoken language.  Compression waves in air provide a base Carrier for phonemes,  They in turn create a Symbol set which when composed grammatically, become a Carrier themselves, this time for word-parts.  What we understand as logically different Carriers do appear as variations on the base Carrier.  We can observe them both directly in the wave-form, but to understand them requires separating out the base Carrier from the logical Carrier(s).  Similarly in biological organisms, we most certainly see variations in the base carrier of DNA that we actually can only understand at higher logical Carrier levels.  Thus we speak of genes for X or Y trait.

Writing uses a different base Carrier, usually a two dimensional surface capable of sustaining a contrast to encode a glyph (NOTE: One might think of hands and finger-spelling and (once again) sound and morse-code as different base carriers for writing which don’t use 2D glyphs).  Note that though the base Carriers for spoken and written language differ, they end up at higher levels (once we get to the word and sentences) as holding identical or at least very similar Carriers. It makes sense to think of these higher level Carriers as identical insofar as Agents use the same Protocols for their Expression and Recognition.  Insofar as they don’t, it makes sense to think of them as different Carriers and thus different Grammatic Capacities.  In this way we might meaningfully distinguish written and spoken as two different Grammatic Capacities.

Call a base Carrier for a stack of Carrier/Signal/Protocol layers a **Medium**. Call a Medium and a stack of Carrier/Signal/Protocol layers built on that Medium and having both Symbols and Grammars a **Grammatic Capacity**.  Note that we only speak of Grammatic Capacities as an attribute of Agents.  This follows directly from our definition of Agents as the source of meaningful Signals on Carriers (as opposed to Noise).

Call the use of the same high-level Protocols on different low-level Carriers a **Coding** and an Agent’s converting Signals between the high and low levels **Encoding** and **Decoding** respectively.  In this way we can understand the Signals of phonemes and spoken word-parts as one Coding of words and the Signals of glyphs on a page as different Codings of the same words.

The definition above doesn’t give us a clear way to identify where a Grammatic Capacity starts or stops.  A Medium is a base Carrier, but on close inspection one won’t find a clear way of determining which Carriers count as "base."  For example, why choose air or paper?  Why not words?  Or for that matter, why not matter?  But if matter, then what level, molecules, atoms, subatomics?  And how do we know what layer in the stacks of Carrier/Signal/Protocols to call the stopping point of a Grammatic Capacity?

We take the lack of a precise delineation of where one Grammatic Capacity stops and the next begins, as an integral part of them, and in large part due to the nature of Agency which includes perspective.  The deep power of Grammatic Capacities comes from their ability to produce large numbers of Expressions that build up into use for a new layer of Grammatic Capacities. 	The level of Agency you take on in looking at the layers will determine where you draw your start-stop boundaries.

## Agents in more depth

Earlier we defined Agent somewhat informally as a "unity that has the capacity to effect and detect changes in a Carrier."  Here we go deeper by looking at what creates the “unity,” namely a membrane, and how agents get built out of them.

Call a permeable barrier that separates two or more Carriers, yet allows some signals to pass, a **Membrane**.  Call an assemblage of Protocols embedded in a Membrane such that Signals on one side of the Membrane can effect change on the Carrier(s) on the other side of the Membrane an **Agent**.  The Processes of the Protocols embedded in the Membrane mediate Signal flow between the Carriers on either side of the Membrane.   In this way we can also see Agents as detectors and emitters of Signals on a Carrier.  Note that this holds true whichever side of the Membrane we look at.

Note that creating a barrier on a Carrier might enclose some existing Agents within that barrier.  This means that Agents may thus get constructed out of sub-agents.  Not surprisingly we call the Carrier(s) completely enclosed by the Membrane the Agent’s "inside" and the Carrier(s) on the other side, it’s “outside” or, formally, the Agent’s **Environment**.

[More here on: Agents as boundary crossers]

[More here on: Agents as black boxes]

Note that depending on the properties of the Carriers bounded by a Membrane, we can see how Agents come to "hold state."  If the changes caused on the Carrier have significant duration in time, those changes can serve as memory.

[More here on: Agents as using arrangements of the geometry of the carriers within them for sense-making and enhance Processing, leads to a definition of => **Scapes**]

[DNA as a grammatic capacity for creating Agents!]

## Evolution as emergent novelty through loose binding

[More here on: evolution as the direct result of grammatical combinatorics in the context of agents with loose binding.  ]

## Carrier convergence

Call a space where a number of Carriers converge a **Niche** (NOTE:  Reference to Holland.).  Such a convergence of Carriers leads to a realm with enhanced possibilities for Agent interaction. As such, a Niche provides a place for enhanced novelty creation and thus co-evolution of Agents as described above.

The gradients of convergence of Carriers around a Niche create boundaries.  Such boundaries do not act in the same manner as the permeable barriers of the Membranes that create Agents.

Call a collection of loosely bound Niches an **Ecosystem**.  [Perhaps this actually already gets us the definition of a CAS, but I suspect we need first to talk about some properties of ECs and then can define a CAS as an Ecosystem with some of those properties]

[More here on: the difference between boundaries and barriers]

## Properties of Grammatic Capacities

[Fundamental vs. Amplificative.  Power. Loose binding. Co-Evolution. Etc.]

Power: The degrees of composability and layering in an EC can give us a sense of what we might call the "power" of an Grammatic Capacity.  Take for example pictographic writing as opposed to alphabetic or ideographic writing.  Agents use writing for the fundamental purpose of sharing language utterances across the boundaries of space and time.  Once can certainly do this by creating a separate picture for each word.  That method has the clear problem of requiring writers to memorize a large set of images, one for each word.  Instead, if we use a composable abstraction, like the parts of ideograms, or letters representing phonemes, this makes it much easier for writers.

## Complex Adaptive Systems

[I think we finally get to a reasonable definition of CAS as set of GCs in an Ecosystems with certain properties, including Fundamentality and a certain degree of combinatorial Power]

## Examples

[Insert the big chart of GCs mapping things in the world to the defined terms above here]

## The Formalism

**Carrier**: a medium or substrate along with some range of variability

**Agent** (informal): a unity that has the capacity to effect changes in some of the dimensions of variability of a Carrier, (see more formal definition below).

**Signal:** a particular form or shape of change made to a Carrier by an Agent

**Protocol **(informal)**: **a coherent set of rules, agreements and processes for arranging Signals on a Carrier**.**

**Noise: **form or shape of change made to a Carrier by a non-Agent, or by an Agent, but not according to a Protocol.

**Pattern: **arrangements of, or sequences of Signals on a Carrier created by Agents according to templates. Alternatively an expected or predictable subset of some of the ranges of variability of a Carrier.

**Symbol**: an element from a Pattern that creates a convergent/constrained group of variations.  Mathematically you could call such a Pattern an "alphabet"

**Grammar**: a Pattern that uses Symbols to generate a divergent or potentially large or infinite set of Signals on a Carrier.

**Process**:  the methods and means by which an Agent creates patterns Patterns.

**Protocol **(formal):** **a set of Processes that create Patterns of Symbols according to a Grammar.

**Expression:** a Signal produced according to Protocol.

**Recognition:** a Signal detected as part of a Protocol.

**Grammatic Capacity**: a stack of at least two Carrier/Signal/Protocol layers with both Symbols and Grammars.

**Membrane: **permeable barrier that thereby separates two or more Carriers, yet allows some signals to pass through.

**Agent **(formal): an assemblage of Protocols embedded in a Membrane such that Signals on one side of the Membrane can affect change on the Carrier(s) on other side of the Membrane.

**Inside** (of an Agent): the Carrier(s) completely enclosed by an Agent’s Membrane.

**Environment** (of an Agent):  the Carriers on the other side of Agent’s Membrane from its Inside.

**Niche: **a space in an Environment where a number of Carriers converge.

**Ecosystem: **a collection of loosely bound Niches.

# Part 2: A Platform for Change (NOTE:  With all due respect to Stafford Beer (book of the same name))

We take it as a premise that the large Complex Adaptive System known as human society requires fundamental change (NOTE: At least for the purposes of this paper, we consider that such phenomenon as human induced climate change, economic inequality, perpetual war, social injustice, come as consequence of how we have organized, not as a fundamental principle. Thus "requires fundamental change" refers to the possibility of new forms of organization such as to, at the very least, diminish the prevalence of those undesirable phenomenon.  ).  The degree of change necessary to prevent (or mitigate) catastrophe seems so large that no tractable solutions seem readily at hand.  The patterns that make the current system stable run very deep and resist any effort toward change. In fact it often seems as if the current order has an immune system that proactively inhibits efforts toward change.

However, because we have seen how the emergence of new Grammatic Capacities leads to change, and how some Grammatic Capacities, Fundamental ones, lead to substantial change, and because we now have a basic understanding of how to assemble Grammatic Capacities it seems only logical to consider what new Fundamental Grammatic Capacity could serve as a catalyst for the necessary change.

[Describe Computation as the new kid on the block]

So in some formal sense, Computation might fit the bill as such a Fundamental EC.  However, Computation by itself doesn’t have the surface area to interface with the human social organisms that constitute society.  For that we need a few more layers.

[Describe the meta leap to an GC for GCs]

# Part 3: An overview of Ceptr

We have developed an implementation of a candidate Fundamental Grammatic Capacity for expressing Grammatic Capacities.  To do so requires, as one would expect, a number of Carrier/Signal/Protocol layers.

## Semantic Trees

Semantic Trees: formalizations of meaning, where meaning comes from process, i.e. "what it does"

<table>
  <tr>
    <td>Semantic Trees</td>
    <td>formalization of meaning (where meaning comes from process / what it does / how it used)  i.e. DNA for..</td>
  </tr>
  <tr>
    <td>Symbols & Structures</td>
    <td>instances</td>
  </tr>
  <tr>
    <td>Codetrees</td>
    <td>self-reducing runtrees</td>
  </tr>
  <tr>
    <td>Semtrex</td>
    <td>FSA matching engines</td>
  </tr>
  <tr>
    <td>Receptors</td>
    <td>a coherence context/container of all these parts</td>
  </tr>
  <tr>
    <td>Protocols</td>
    <td>conversations / interactions</td>
  </tr>
  <tr>
    <td>Scapes</td>
    <td>relational landscape/fabric (between/among instances)</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
</table>


Semantic alternation between Symbols and Structures.

Semtrex: Pattern Matching for Semantic Trees

Process: Interpretation of nodes as instructions for Tree reduction

Semantic Trees as universal Carriers.

Templates: Semantic References: Goal/Role/Usage (we need a generic word for these "Kind"?)

<table>
  <tr>
    <td></td>
    <td>Receptor</td>
    <td>Data (Symbol)</td>
    <td>Process</td>
    <td>Protocol</td>
  </tr>
  <tr>
    <td>Semantic Ref</td>
    <td>Role</td>
    <td>Usage</td>
    <td>Goal/Intent?</td>
    <td>Weal?</td>
  </tr>
  <tr>
    <td>resolves to</td>
    <td>RECEPTOR_ADDR</td>
    <td>SYMBOL</td>
    <td>PROCESS</td>
    <td>PROTOCOL</td>
  </tr>
</table>


Semantic Maps

## Receptors

[https://www.mindmeister.com/620249539](https://www.mindmeister.com/620249539)

Receptors as Agents and as Virtual Machines

Phenotype and Genotype of Receptors (Semantic Context vs. installed running receptor)

Receptor Membrane with Aspects that embed Expectations (inward and outward facing)

Signals

Listening, Expectations; Pattern/Action, with Conditions

Requests/Response

Say

## Compository

Seed/Pod container for receptor genotype.  The protocols for moving the Genotype to a Phenotype, for adding new Genotypes.

## The "System" (Virtual Machine Host)

Edge Receptors

System services (symbols, structures, processes, receptors, etc)

## Protocols

Protocols (inverted specification via processes, which can then auto-generate expectations and state change handlers)

Protocols as conversations, constructed out of Interactions with composability via  Roles, Goals & Usage Inclusions, etc.

## Data Engine (Accumulator)

Receptor Instances and their relationships

Scapes

## CeptrNet (Front-end network protocols)

Receptor Instances on different VMHosts

Address Spaces & Types

## Tools for Byzantine Fault Tolerance (Back-end sync)

Take away the need for distributed consensus as a front-end protocol/operation by pushing it into the back-end "magic" but not as a single unified notion, rather contextual according the degree of fault-tolerance needed.

## Distinction from Turing Machine

  Tape (linear sequence) | R/W Head | Processor | Instructions

  Trees (hierarchical grammar) | Semtrex/Send | Receptors |Self-Reducing-Runtrees | Protocols (inter-machine communications)
