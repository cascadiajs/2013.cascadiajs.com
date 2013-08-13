#Programming a Node Cluster Like It's One Really Big Computer

* Name      : Neuman Vong
* Twitter   : [@neuman][]
* Github    : [luciferous][]
* Website   : [lcfrs.org][]

##Abstract

Distributed programming is a lot easier if the abstraction makes the cluster
look just like a really big computer.

I'll talk a little bit about some concepts from Cloud Haskell (and Erlang and
Akka), and how they might look ported over to Node. The main idea is to be able
to spawn many `Process`es which are automatically distributed across the
cluster. `Process`es communicate via message passing, inspired by Erlang's
"actor model".

One point of focus is serialization and transmission of function closures. For
example, given a function `add`

```javascript
var add = function(x) {
  return function(y) {
    return x + y + 1
  }
}
```

We should be able to partially apply it and transmit it elsewhere to have its
second argument applied, then have the result returned back to us.

```javascript
spawnRemote(add(1), function(err, result) {
  if (err) throw err
  console.log("Result computed remotely: ", result)
})
```

Serialization of a function closure is possible by serializing its environment
(i.e. the bindings of its free variables) and a representation of its code.

##Speaker Bio

![neuman](https://raw.github.com/cascadiajs/2013.cascadiajs.com/master/images/neuman.jpg)

Sr Software Engineer at Twitter, formerly at Twilio, board member at HIFY.
Ideas man, Haskeller, a cynic with a bleeding heart.

[@neuman]:https://twitter.com/neuman
[luciferous]:https://github.com/luciferous
[lcfrs.org]:http://lcfrs.org

