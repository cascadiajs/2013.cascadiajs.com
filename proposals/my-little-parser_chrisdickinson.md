#My Little Parser: Tooling is Magic

* Name      : Chris Dickinson
* Twitter   : [@isntitvacant][]
* Github    : [chrisdickinson][]
* Website   : [neversaw.us][]

##Abstract

Code is abstraction. When we code, we punch keys to write tokens to 
form expressions to build great towering syntactical forests. When 
we code, we weave a flow of data from outset to outcome. 
When we code, we alter the course of electrons, inadvertantly 
hastening the heat death of the universe by just that little bit.

We edit code at that one level of abstraction -- keypresses, text --
and we treat with code -- searching, replacing, grep'ing -- at that level. 
What problems can we free ourselves from by interacting with our code 
at the AST level?

One of JavaScript's many sterling qualities is its relatively simple, unambiguous
syntax. Another is its community's familiarity with querying and manipulating
complex, nested tree structures. With AST-aware tools, we can free ourselves 
from the opportunity cost of switching our module loader, frontend
framework, or test framework. What other new tools can we create?

In this talk, I will touch on:

* The basics of ASTs and streaming parsers.
* CSS as a general purpose AST selector language.
* Building unix-style small, composable command line tools
  (and node.js modules) to search and edit JavaScript ASTs.
* Using AST transformation to switch module loaders, test
  frameworks, and APIs.
* Using CSS-the-AST-selector to search for unsafe operations
  in existing codebases, intelligently grep for code, and build
  simple, flexible linters for common programmer errors.

##Speaker Bio

![chrisdickinson](https://raw.github.com/cascadiajs/2013.cascadiajs.com/master/images/chrisdickinson.png)

I'm a JavaScript developer at Urban Airship in sunny Portland, OR. 
The occasionally odd physics in [voxel.js][] are [my fault][]. I'm also 
to blame for at least [one reimplementation of inflate][] in JavaScript, 
to further the evil goal [of getting git to run in pure js][].

[@isntitvacant]:http://twitter.com/isntitvacant
[chrisdickinson]:http://github.com/chrisdickinson
[neversaw.us]:http://neversaw.us
[voxel.js]:http://voxeljs.com
[my fault]:https://github.com/chrisdickinson/voxel-physical
[one reimplementation of inflate]:https://github.com/chrisdickinson/inflate
[of getting git to run in pure js]:https://speakerdeck.com/chrisdickinson/js-git
