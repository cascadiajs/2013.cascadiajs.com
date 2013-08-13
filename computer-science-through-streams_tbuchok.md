#Computer Science through Streams

* Name      : Tom Buchok
* Twitter   : [@tbuchok][]
* Github    : [tbuchok][]
* Website   : [buchok.com][]

##Abstract

Readable, writable, piping, transform, duplex ... even just *talking* about Streams is confusing. However, Streams -- with their absurd modularity, evented nature and powerful efficiency -- might be Node.js's most compelling feature.

But **how** do they work? What's **really** happening when we say `a.pipe(b)`?

At their core, Streams play hand-in-hand with various layers on our systems. Understanding Stream fundamentals often requires looking at general computer problems rather than just JavaScript.

This talk takes a low-level look at how Streams work and provides some insight into why they're so great and what can make them so complicated. Finally, we'll look at Streams in userland via important modules like [through](https://npmjs.org/package/through), [level](https://npmjs.org/package/level) and more. 

##Speaker Bio

![tbuchok](https://raw.github.com/cascadiajs/2013.cascadiajs.com/master/images/tbuchok.png)

A programmer living in New York City, Tom has a background in advertising tech where JavaScript is implemented in all the ways we love/complain about. His first breakthrough using Node was figuring out how to handle backpressure while parsing-and-stuffing large geographic datasets into Redis.

Spending summer 2013 as a [Hacker Schooler](http://hackerschool.com), most of his time was guided by wondering, *How does [thing] in Node work?*, and then taking deep dives into answering those questions.

He enjoys sharing both those experimental experiences and what he's learned from running Node in production professionally.

Inexplicably, one of Tom's favorite possessions is his Canadian passport. This proposal was written in Winnipeg, MB while visiting family. :)

[@tbuchok]:http://twitter.com/tbuchok
[tbuchok]:http://github.com/tbuchok
[buchok.com]:http://buchok.com

