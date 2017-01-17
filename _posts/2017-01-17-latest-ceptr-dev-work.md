---
layout: post
status: publish
published: true
title: Latest Ceptr Dev Work
author: Eric Harris-Braun
author_login: Eric Harris-Braun
author_email: eric@harris-braun.com
author_url: http://eric.harris-braun.com
date: '2017-01-17 03:29:38 -0400'
date_gmt: '2017-01-17 03:29:38 -0400'
categories: []
tags:
- dev
comments: []
---
There’s been quite a bit of movement in Ceptr development over the  last few weeks, so I wanted to just give brief overview of what’s going on.  The big news is that we’ve broken the Ceptr development effort into some smaller sub-projects that are each independently valuable .  Not only does this make the effort more manageable, but, we hope, will increase surface area for participation.

The code in the [current repo](https://github.com/zippy/ceptr) will get broken out into libraries that these sub-projects will make generally available.  The first will be a library that implements our semantic-trees and semtrex engine. The second, we’re calling P3 or Plugable Protocol for Protocol’s, which consists of a use of that engine to provide a meta-protocol for specifying protocols.

A third sub-project, which we’re calling holochain, provides the distributed data-store for Ceptr.  This part of the project has been on the [drawing board for quite a while](https://medium.com/metacurrency-project/beyond-blockchain-simple-scalable-cryptocurrencies-1eb7aebac6ae#.ohn1sgvqu), but in these last weeks I’ve been on a coding sprint to get out a working prototype, the progress of which you can [see here](https://github.com/metacurrency/holochain).

I’ve jumped to [golang](http://golang.org) for holochain development, and I’m pretty sure that when we break the current ceptr C code-base into it’s sub-parts that we’ll use go too.
