# Data oriented programming

* Name      : Irakli Gozalishvili
* Twitter   : [@gozala][]
* Github    : [gozala][]
* Website   : [jeditoolkit.com][]

## Abstract

Software industry is adopting a lot of ideas from the
("mostly" pure) functional languages. However most of the
GUI applications & frameworks are still stuck with OO &
MVC. That usually implies: classes & objects that inherit
complexity, ever growing API surface and decent amount
of plumbing!

One thing that we tend to forget is that essence of all
software is **data**. Data that programs take in form of
**input** and transform to produce data they
**output**. Everything that is not part of data
transformation pipeline is an incidental complexity
that serves as a distraction form the essence of the
problem we are trying solve.

Luckily there are viable solutions (like [FRP][]) pioneered
by functional languages, that do a better job at managing
complexity by concentrating fully on the data & its
transformations, which in many cases can provide more
effective & simpler solutions.

It can not be a coincidence that lots of parallels can be
drawn with other big, but essentially same, ideas:
[Unix pipes][], [Block diagrams][], [FBP][] etc... They
have to be up to something that is worth giving another
thought!

## Speaker Bio

![gozala](https://raw.github.com/cascadiajs/2013.cascadiajs.com/master/images/gozala.png)

Irakli likes to think of himself as a "functional" guy who
introduces interesting ideas from other languages to a JS community.
He is kind of a dreamer, exercising his skills in making web
development more [interactive][interactivate] and [(fun)][wisp].
Well, his definition of fun involves many parenthesis & most of
them on the wrong side, because he is a [lisper][] in his heart!

[@gozala]:http://twitter.com/gozala/
[gozala]:https://github.com/Gozala/
[jeditoolkit.com]:http://jeditoolkit.com/

[FRP]:http://en.wikipedia.org/wiki/Functional_reactive_programming
[Block diagrams]:http://en.wikipedia.org/wiki/Block_diagram
[Unix pipes]:https://en.wikipedia.org/wiki/Pipeline_%28Unix%29
[FBP]:http://en.wikipedia.org/wiki/Flow-based_programming

[interactivate]:http://jeditoolkit.com/interactivate/
[wisp]:http://jeditoolkit.com/interactivate-wisp/
[lisper]:http://landoflisp.com/#guilds
