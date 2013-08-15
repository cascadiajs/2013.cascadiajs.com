#Drag and Drop Inside and Out: How does the drag and drop API work from both
sides of the implementation, and why it is worth the effort.

* Name      : Daniel Patrick Johnson
* Twitter   : [@teknotus][]
* Github    : [teknotus][]
* g+        : [g+][]

##Abstract

The html5 drag and drop standard makes it possible to drag data between
applications, and web pages. This is a huge win for desktop use, but the lack
of support in mobile browsers, and lack of understanding has slowed adoption.
It turns out that adding support for the API to browsers is not that hard.
I wrote an 
[html5 shim](https://github.com/teknotus/html5-drag-drop-shim) that supports
both mouse, and touch interaction in under 2 weeks. There has been quite a bit
of criticism for the specification, but in the process of writing a shim many
reasons for design decisions became clearer. 

This presentation will cover both what a web application needs to do to use
the API, and how this can be implemented behind the curtains.

Note the shim works now, but should be more full featured, and documented soon.

##Speaker Bio

![teknotus](https://raw.github.com/cascadiajs/2013.cascadiajs.com/master/images/teknotus.png)

Daniel Patrick Johnson has been exploring technology since early childhood and
attends more users groups than anyone else in Portland Oregon. His breadth of
knowledge spans from soldering circuits together, bare metal microcontroller
programming, patches to the linux kernel, GUI C++, web programming, system
administration, tech support, electronic gizmo sales, and bicycle repair.
He wants to know all of the things. 

[@teknotus]:http://twitter.com/teknotus
[teknotus]:http://github.com/teknotus
[g+]:http://profiles.google.com/teknotus
