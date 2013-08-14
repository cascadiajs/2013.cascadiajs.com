#Vert.x: Pushing JSON Around

* Name      : Lance Ball
* Twitter   : [@lanceball]
* Github    : [lance]
* Website   : [lanceball.com]

##Abstract

[Vert.x] is an asynchronous, event-driven application platform similar in
style to Node.js, except it runs on the JVM. It supports several JVM languages,
including Javascript, and uses a multi-[reactor] event loop to handle a very
high number of concurrent connections. Clustering is built-in and remarkably
easy to use, and the Vert.x event bus makes passing messages between components
or applications simple. With JSON as the native message format, and a SockJS
client that speaks directly to the bus, pushing event-based messages to the
browser has never been easier.

In this talk I will introduce the Vert.x platform. I will discuss the pros and
cons of Vert.x compared to other platforms like Node.js, and we'll look at some
sample code. I'll finish up by wowing you with some semi-live code that pushes JSON
messages from a server cluster to the mobile browser in just a few lines of 
Javascript - and maybe even a dash of Clojure just to keep it interesting.

##Speaker Bio

![lance](images/lance.png)

Lance works for Red Hat and is a member of [Project Odd]. He is a core
contributor to [DynJS], a new Javascript runtime for the JVM, and [lang-js],
the Javascript language module, for Vert.x.

[@lanceball]:http://twitter.com/lanceball
[lance]:http://github.com/lance
[lanceball.com]:http://lanceball.com
[Vert.x]:http://vertx.io/
[reactor]:http://en.wikipedia.org/wiki/Reactor_pattern
[Project Odd]:http://projectodd.org/
[DynJS]:http://dynjs.org
[lang-js]:http://github.com/vert-x/mod-lang-js
