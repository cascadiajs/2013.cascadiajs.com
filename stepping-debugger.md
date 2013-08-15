# A User-land JavaScript Stepping Debugger

* Name      : James Long
* Twitter   : [@jlongster](http://twitter.com/jlongster)
* Github    : [jlongster](http://github.com/jlongster)
* Website   : [jlongster.com](http://jlongster.com)
* Job       : Mozilla, Apps Engineering

## Abstract

Programming today can still feel like a black box, even with all the
new developer tools for debugging code. I think this is because we
don't have the ability to truly customize the debugging experience for
our application. What if we could have a user-land JavaScript debugger
that you could shape to your needs?

It turns out that you can build a real stepping debugger by abusing
`yield` from ES6 generators. By instrumenting every expression with
`yield`, we gain control of the stack and execution while allowing the
native JavaScript VM to still execute everything else. This special
code is run inside our own VM in user-land, and allows you to pause
and step through code.

An example of the instrumented code is
[https://github.com/jlongster/steps/blob/gh-pages/test_.js](here), and
you can step through the code
[http://jlongster.github.io/steps/](here). If we flesh this out, I
think it could be a powerful tool.

## Speaker Bio

![jlongster](https://raw.github.com/cascadiajs/2013.cascadiajs.com/master/images/jlongster.png)

I work for Mozilla and help developers write web apps. In my heart I'm
an idealist but I've learned to mix practicality with idealism when
approaching software problems. I have a heavy functional programming
background with Scheme, and used to write DirectX games in high-school
in C++. In fact, I wrote a text-based RPG on my TI-82 calculator
during math class in 7th grade. It didn't take off like I thought it
would.
