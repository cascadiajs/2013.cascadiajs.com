#A High Performance Rendering Pipeline for Backbone

* Name      : Ryan Dy
* Twitter   : [@rdy](https://twitter.com/rdy)
* Github    : [rdy](http://github.com/rdy)
* Website   : [pivotallabs.com](http://pivotallabs.com)

##Abstract

Backbone views offer a simple render and event binding interface that works well on small applications. Scaling this up to handle many views and thousands of models creates challenges for browser performance. Re-rendering views when things change is a good place to start, however the browser gets bogged down updating the page when many cascading changes occur. At this point there is a need to create a rendering pipeline.

This technique is similar to the way that video game engines pipeline work for GPUs. The pipeline is an extra step where rendering work is reorganized and streamlined in preparation for drawing. In the same way, browsers can render more efficiently when you take the time to reorganize the rendering work.

This talk discusses the pipeline we built to achieve high performance without having to change how Backbone views render. I will discuss our strategies for de-duping events that cause unnecessary renders, creating a proxy view to handle updates, and prioritizing the list of render functions based on user intent and visibility.

##Speaker Bio

![rdy](https://raw.github.com/rdy/2013.cascadiajs.com/master/images/rdy.png)

Ryan Dy lives in San Francisco and works for [Pivotal Labs](http://pivotallabs.com) as a web developer. He is a recovering game programmer and currently works on [Pivotal Tracker](http://pivotaltracker.com/). 

[@rdy]:http://twitter.com/rdy
[rdy]:http://github.com/rdy
[pivotallabs.com]:http://pivotallabs.com