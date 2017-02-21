---
layout: post
title: Holochain dev Sprint and Hackathon
date: 2017-02-21 10:56:21 -0500
date_gmt: 2017-02-21 15:56:21 -0000
status: publish
published: true
author: Eric Harris-Braun
author_email: eric@harris-braun.com
author_url: http://eric.harris-braun.com/
categories: []
comments: []
tags:
- dev
---
We've been on a quite a dev sprint on Holochain this last month in preparation for a [Holochain Hackathon in March in San Francisco](http://ceptr.org/hackathons), where we are inviting folks to come and build Holochain apps! If you are interested in participating, please [fill out this application](https://docs.google.com/forms/d/e/1FAIpQLSfpI63MxUf0yxKHRlQr5k0TYG2woJvuwwBEzg3CYgZARqm7TQ/viewform?c=0&w=1).

We've made substantial progress, both in the state of the code, and, for once, the documentation!

![holochain architecture](http://ceptr.org/images/Holochain_Subsystems.png)

Of the three sub-systems in the image above, two are in substantially good working order: the Source Hash-Chain, and the Nucleus.  This week I'll be cranking out the Shared Storage (DHT) portion, using IPFS's [libp2p](https://github.com/libp2p/go-libp2p) as a network transport layer.

Rather than go into further dev details in this post, I'll just point you to the [holochain dev wiki](https://github.com/metacurrency/holochain/wiki) over on github.
