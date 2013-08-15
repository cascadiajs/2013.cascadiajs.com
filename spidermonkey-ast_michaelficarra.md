# SpiderMonkey Parser API: A Standard For Structured JS Representations

* Name      : Michael Ficarra
* Twitter   : [@jspedant](https://twitter.com/jspedant)
* Github    : [michaelficarra](https://github.com/michaelficarra)

## Abstract

The representation of JavaScript programs that Mozilla exposed with their
[SpiderMonkey reflection API](https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API)
isn't perfect; in fact, it has a good number of flaws. But a rich ecosystem of
tools has formed around this particular structured representation of JavaScript
programs, most notably the popular esprima parser. The reusability and
composability of these tools has made this format the standard for all modern
projects that transform, generate, or otherwise work with JavaScript programs.
We will explore this burgeoning format, evaluate its design with the benefit of
hindsight, and showcase some of the more useful and prominent projects that
have adopted it. This will include code generators, scope analysers, browser
bundlers, metacircular interpreters, and more!

## Speaker Bio

![michaelficarra](https://raw.github.com/cascadiajs/2013.cascadiajs.com/master/images/michaelficarra.png)

Michael is best known for his significant contributions to the
[CoffeeScript programming language](http://coffeescript.org/), its
[original compiler](https://github.com/jashkenas/coffee-script), and his
[KickStarter-funded rewrite](https://github.com/michaelficarra/CoffeeScriptRedux).
He can be described as having a passion for defining transformations of all
sorts, so he naturally enjoys working with compilers and functional programming
languages. As one of Github's most active users, he is an influential member
of the online OSS and ECMAScript communities. He is currently working at
Groupon in Chicago, IL, USA on their application security team.
