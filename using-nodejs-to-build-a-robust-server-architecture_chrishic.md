#Using Node.js to Build a Robust Server Architecture

* Name      : Chris Hickman
* Twitter   : [@chrishic][]
* Github    : [chrishic][]

##Abstract

Over the last 15+ years, I've focused on server-side development, and I've built many complicated backend systems using "mature" languages and technologies such as C/C++, C# and Java. But with my current project, all that was thrown out when we made the decision to base our implementation on Javascript and Node.js.

Now just over one year into the project, this talk will share our experience to date with how we've architected and implemented a large, highly scalable system in Node.js. During this talk, I'll cover:
* Our initial learning curve with Javascript and Node.js (which was *steep* due to how different these are from traditional languages and technologies)
* Key architecture & design decisions, such as: 
 * Making each component a service
 * Message queuing for dealing with lengthy/asynchronous tasks
 * Creating a pluggable architecture that allows us to "fail fast" on technology choices
* "Must have" server development techniques, such as robust error handling, unified logging, defensive programming and profiling/monitoring.

##Speaker Bio

![chrishic](https://raw.github.com/cascadiajs/2013.cascadiajs.com/master/images/chrishic.png)

Chris is an entrepreneur and technologist. He has founded two software companies, one with $24M in VC, the other bootstrapped with an SBA loan. Now at startup #3 [Nuiku][], he is helping to create a "virtual assistant" that allows users to easily interact with backend systems using natural language.

When not writing code on his beloved MacBook Pro, Chris enjoys spending time with his family, cycling and endlessly throwing a tennis ball to his black Labrador, Gus.

[@chrishic]:http://twitter.com/chrishic
[chrishic]:http://github.com/chrishic
[Nuiku]:http://www.nuiku.com/
