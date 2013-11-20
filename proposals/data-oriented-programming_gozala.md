# Data oriented programming

* Name      : Irakli Gozalishvili
* Twitter   : [@gozala][]
* Github    : [gozala][]
* Website   : [jeditoolkit.com][]

## Abstract

The essence of all applications lies in **data**. Programs take
data in form of **input** and apply transformations to produce
data that they **output**. Naturally all programs should be
about data transformation pipelines & everything else has to be
considered an incidental complexity disconnecting us from the
actual problem we are trying to solve. However most of the web
applications and frameworks are stuck with [OO][], reinventing
[MVC][] where **data** is scattered across class hierarchies
that inherit complexity from each other, producing an ever
growing API surface.

Luckily, JS also has a functional side to it and that paradigm
has a lot to offer in the same problem space. This enables us
to draw our inspiration from alternatives like [FRP][], that
do a better job at managing complexity by focusing on data & its
transformations. It can not be a coincidence that
[Unix pipes][], [Block diagrams][], [FBP][] also share the same
core idea, and are still useful decades later. With that I'd
like to invite you to a journey, to discover the harmony of
simple data transformations in the event  driven nature of the
web platform.

## Speaker Bio

![gozala](https://raw.github.com/cascadiajs/2013.cascadiajs.com/master/images/gozala.png)

Irakli likes to think of himself as a "functional" guy who
introduces interesting ideas from other languages to a JS
community. He is kind of a dreamer, exercising his skills in
making web development more [interactive][interactivate] and
[(fun)][wisp]. Well, his definition of fun involves many
parenthesis and most of them on the wrong side, because he is
a [lisper][] in his heart!

[@gozala]:http://twitter.com/gozala/
[gozala]:https://github.com/Gozala/
[jeditoolkit.com]:http://jeditoolkit.com/

[FRP]:http://en.wikipedia.org/wiki/Functional_reactive_programming
[Block diagrams]:http://en.wikipedia.org/wiki/Block_diagram
[Unix pipes]:https://en.wikipedia.org/wiki/Pipeline_%28Unix%29
[FBP]:http://en.wikipedia.org/wiki/Flow-based_programming
[OO]:http://en.wikipedia.org/wiki/Object-oriented_programming
[MVC]:http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller

[interactivate]:http://jeditoolkit.com/interactivate/
[wisp]:http://jeditoolkit.com/interactivate-wisp/
[lisper]:http://landoflisp.com/#guilds
