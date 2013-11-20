#Editing Large Legacy Codebases with an Abstract Syntax Tree

* Name      : David Alan Hjelle
* Twitter   : [@dahjelle][]
* Github    : [dahjelle][]
* Website   : [thehjellejar.com][]

##Abstract

I recently had to make changes across 100+ legacy Javascript files that could not be made via regexp search-and-replace [1]. To make this faster(?) and less typo-prone, I used Node.js and [Rocambole](https://github.com/millermedeiros/rocambole/) to extract an abstract syntax tree (AST), edit it (and the associated token stream), and output the result. In this talk, I'll discuss what an AST is, my particular code transformation, how to edit code with a tool like Rocambole, and even implement a micro-Javascript interpreter.

While I don't do anything particularly novel or unique with the AST, I found the technique useful and enlightening — and, if you've never looked at an AST before, I think you will, too.

[1] For instance, I had to change code from (you'll see why it had to get changed…)

```javascript
var a = "index.php?new=" + b.c;
eval( "my_iframe.location = '" + a + "'" );
```

to

```javascript
io.frameGET( "index.php", {
    "new": b.c
}, document.getElementById( "my_iframe" ) );
```

##Speaker Bio

![dahjelle](https://raw.github.com/cascadiajs/2013.cascadiajs.com/master/images/dahjelle.png)

I've been developing professionally for the web for four years, but have programmed in my spare time for many more. I currently work at [Icon Systems, Inc.](http://iconcmo.com), where I am lead developer on IconCMO: software to track membership, contributions, and accounting for churches and other non-profits. I love creating tools that enrich and help the lives of everyday people.


[@dahjelle]:http://twitter.com/dahjelle
[dahjelle]:http://github.com/dahjelle
[thehjellejar.com]:http://thehjellejar.com

