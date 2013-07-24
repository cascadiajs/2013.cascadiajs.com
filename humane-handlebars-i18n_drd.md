# Human Handlebars Internationalization

* Name      : Eric O'Connell
* Twitter   : [@compassing][]
* Github    : [drd][]

##Abstract

Internationalization is not only a technical problem, but a human problem. In order to effectively internationalize a project, the right words and sentences must be extracted from the source documents with enough context for translators to produce the correct native-language strings. HTML template files present numerous challenges in this process: they are largely free-structured documents with at least two comptuer languages embedded, and the phrases and sentences therein can be split into pieces by markup.

In this talk I will demonstrate a system which extracts strings from Handlebars templates in a way that uses the HTML document structure to its advantage, outputs a Gettext PO file, and then reconstitutes translated documents at compile time. In this manner, one can deliver translated Handlebars templates without any additional processing on the client side, which is particularly useful for resource-constrained mobile environments. Currently, the system is implemented in Python, using the babel library to produce the PO files with a custom HTML/Handlebars-aware string extractor.

I will also discuss technical hurdles which must be first overcome before the system can be 100% Javascript, as well as some of the restrictions in allowable syntax which must be adopted by the template authors. I will also walk through the implementation of this system at Idealist.org, and show the major flows and points of integration we use.

##Speaker Bio

![drd](https://raw.github.com/cascadiajs/2013.cascadiajs.com/master/images/drd.png)

Hi. I'm Eric O'Connell. I live in Portland Oregon. I like the web, and I've been making websites since 1998. I love to program in JavaScript, but also Python, Ruby, C, Objective-C, and Haskell. I'm interested in making the web a better place for people by building web applications that solve important problems with humane interfaces. I work at [Idealist.org][] where we get to do all that on a daily basis.

[@compassing]:http://twitter.com/compassing
[drd]:http://github.com/drd
[Idealist.org]:http://www.idealist.org

