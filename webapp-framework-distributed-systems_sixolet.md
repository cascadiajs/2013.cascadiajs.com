#Using a Web Application Framework to Build Back-End Distributed Systems
... Not as crazy as it sounds.

* Name : Naomi Seyfer
* Twitter : [@sixolet](http://twitter.com/sixolet)
* Github : [sixolet](http://github.com/sixolet)
* Website : [www.meteor.com](http://www.meteor.com)

##Abstract

Traditionally, we've used different technology families to build front-end web
applications and back-end distributed systems, even though they share many of
the same problems. That's made it harder for a single team to excel at writing
both of these kinds of code. And these days, for a web application to scale
well, its back end is going to be a distributed system.

I want to show you how the realtime technologies you use to build responsive
front-end apps also let you write back-end distributed systems.  It turns out
that DDP, the protocol Meteor uses to synchronize information between the client
and the server, is also useful for synchronizing information between servers.
Minimongo, an in-memory Javascript implementation of the MongoDB, is a valuable
tool in the server environment.  I'll share some useful distributed system
primitives we've built on top of DDP, Node, and MongoDB with Minimongo, like
leadership election and data synchronization.  I'll show you how to use them to
Do What You Mean when running lots of copies of your webapp server.

##Speaker Bio


Naomi has been working almost her whole adult life to make software development
easier and more accessible.  She's been a programming language designer and
implementor and a teacher of programming; she now works on the
[Meteor](http://www.meteor.com) web application framework and related
technologies to make it simpler to build and host applications.


![sixolet](https://raw.github.com/cascadiajs/2013.cascadiajs.com/master/images/sixolet.png)