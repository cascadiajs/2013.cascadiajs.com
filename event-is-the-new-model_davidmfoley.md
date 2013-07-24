#Event is the new Model

* Name      : Dave Foley
* Twitter   : [@davidmfoley][]
* Github    : [davidmfoley][]
* Website   : [Substantial][]

##Abstract

Most of us are accustomed to modeling our application domains by their state at any given point in time. When audit logs, reporting views, data migrations and real-time updates are required, our tendency is to bolt them on to this relational point-in-time model, which can be difficult and costly.

Building on the [Event Sourcing][] pattern, we can instead treat each application as an append-only stream of immutable events. In this style of application, the state of the model at any point in time can be derived by replaying all of the events up to that point in time. This also allows for multiple point-in-time representations ("Models") to exist simultaneously in different places.

The Node.js ecosystem provides a particularly interesting platform for this style of application development. With a shared language between a browser-based client and a node-based server, we can even use the same model logic in both places. I'll walk through experiences and lessons learned over the course of the development of an event-sourced real-time browser application using node, socket.io, spine, and related technologies. 

Topics include:

- Using socket.io as an event bus
- How events are filtered, routed, distributed and stored
- The different needs of UI components and services
- Sharing code between client and server
- Client-side dependency management
- Organization of client-side application modules
- Pragmatic unit, integration, and acceptance testing
- Evolving infrastructure alongside an application

I will approach these topics in a retrospective fashion, to share both successes and failures, in the hopes that they might provide some useful learnings.

Also, the code examples will be demonstrated in coffeescript. Get over it.

##Speaker Bio

![davidmfoley](images/davidmfoley.png)

I am CTO of [Substantial][], a 60-person digital product studio based in Seattle and San Francisco.

[@davidmfoley]:http://twitter.com/davidmfoley
[davidmfoley]:http://github.com/davidmfoley
[Event Sourcing]:http://martinfowler.com/eaaDev/EventSourcing.html
[Substantial]:http://substantial.com
