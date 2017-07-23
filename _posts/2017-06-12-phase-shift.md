---
layout: 	post
title:    Organizational Phase Shift
date:     2017-06-12 17:11:02 -0400
date_gmt: 2017-06-12 21:11:02 -0000
image: 		http://ceptr.org/images/chrysalis-butterfly.jpg
status: 	publish
published: 	true
author: 	Arthur Brock
author_login: 	artbrock
author_email: 	artbrock@geekgene.com
author_url: 	http://artbrock.com
categories: 	[post]
comments: []
tags:
- Funding
- Ceptr
---

You've probably seen a lot more activity around the MetaCurrency Project in recent months: a new Ceptr web site, Ceptr broken down into clearer sub-projects, blockchain alternatives, lots of code releases, Hackathons, virtual potlucks, online presentations, etc. I guess we ought to make it clearer what's going on.

For a long time we've operated as one of those fringy open source projects like some mad scientists experimenting in their garage. But now we must navigate the transition from a tech hobby project to a scalable business, in part, because we've been approached by funders.

Our focus is initially on Holochain, a scalable blockchain alternative which is part of the larger Ceptr social OS. Watch for updates on the [Ceptr blog](http://ceptr.org/blog).

![Transformation](/images/chrysalis_butterfly.jpg){:class="img-responsive"}

## Why now?

For one thing, **timing.**

There's a window of opportunity that simply wasn't here a year ago. Far more people are ready to understand what we're building. Blockchain has become quite the rage, so people are trying to solve all sorts of centralization problems with it. Global consensus on local independent actions as (as in the architecture of blockchain) will never scale.

If we don't provide a better alternative before people sour on blockchain limitations, people may not be willing to listen to how our architecture is different if blockchain becomes perceived as a dead-end for large scale data.

The other reason is **money**. Once others started realizing they need the tools we're building for the things they want to build, they started approaching us to see if funding would get it for them faster. In response, we came up with a great structure for accepting investment, so they have extraordinary opportunities for big upsides, while we preserve the integrity of our commitment to open source resources for all humans.

We just got our initial funds in the door in last weeks. So you'll see us ramping up our business ecosystem, running new internship/residency programs, and launching more server infrastructure, and implementing ways of tracking the value that people contribute to the project ecosystem.

Active team members doubled in the last few months (from 6 to 12), and we expect it to double again this summer, and likely again in the fall.

## On Deck in Tech
As our core code provides a more stable foundation for the next layers of features, you can expect to see a lot more happening, much more quickly. Here's what we expect to complete this summer:
 - **Alpha release of Holochain** after our current security milestone.
 - **Holochain App Generator** which walks you through the process of building a distributed app on holochain and generates most of the schemas, code, and files for you.
 - **Large-Scale Multi-Node Test Rig** - container automation and testing for scalability of your application.
 - **Core Holochain Services** - This summer we're building a series of holochain apps to expose critical core services distributed to other apps, so you don't have to build these things yourself.
    - **Holochain Package Manager** - a compact runtime distribution of holochain which comes with the one app which lets you install whatever other apps people want to publish on this distributed package management system.
    - **DPKI** (Distributed Public Key Infrastructure) - sophisticated services for key management, revocation, and identity validation where you can control and own your own data.
    - **HC Index** - pluggable index services to make it easier to find things scattered across an application's DHT space.
    - **Pluggable Governance** - a variety of options for integrating decision-making for evolving the code of holochain apps
    - **HC Cache** - smart caching services to enable your application to automatically have CDN-like (content delivery network) performance.

## Acknowledgements
We've gotten to this transition point because a bunch of people have been putting in good work.

**Funding:** A shout-out to Ferananda Ibarra and Jeff Clearwater, of [Village Lab](http://www.villagelab.net/), who have been developing the Wealth Stewardship Circle model for generating and stewarding collective wealth which transcends the investor/philanthropist box to weave healthier dynamics. Much of our funding has been been attracted through their work.

**Dev:** Our software development on holochain has been steadily increasing. [DayZee](https://github.com/christopherreay) has been improving our docker containers especially for multi-node testing of our P2P gossip protocols. [Timotree3](https://github.com/timotree3) has been cleaning up loose ends in a bunch of areas, from docker container optimization, and cross-platform scripting, to tightening up security of stray exposed variables and functions. [Neonphog](https://github.com/neonphog) is building our holochain app scaffolding system and app wizard to make it fast and easy to produce the basics of a holochain app instantly. [Lucksus](https://github.com/luckus) has come over from Germany to dive deep with [Zippy](https://github.com/zippy) on holochain core, internal message flows, and our security implementation.  

**Biz:** Currently our fastest area of growth has been in the domain of growing our business infrastructure. Mary Camacho has started bringing some much needed leadership to augment Arthur in this domain. Matthew Schutte has invested significant work into creating a work and live space for our [summer residency program](http://ceptr.org/participate/residencies). Jarod Holtz has essentially taken on full-time administration and support functions for Arthur, Mary, Matthew, Ferananda which amplifies everyone's results. Also, a secret team with more new leadership has assembled to explore options related to doing an ICO for our next major phase of development.
