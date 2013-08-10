# Automate Your Responsive Images

* Name      : Shawn Jansepar
* Twitter   : [@shawnjan8](http://twitter.com/shawnjan8)
* Github    : [jansepar](http://github.com/jansepar)
* Website   : [www.jansepar.com](http://www.jansepar.com)

##Abstract

Responsive images represent one of the biggest sources of frustration among
the web development community — and with good reason too; the average page
size has grown from 1MB to a staggering 1.5MB in the last year alone.
Much of that page weight could be reduced if images were conditionally optimized
based on device widths, pixel density and modern image formats (such as WebP).
The question is, what is the best workflow for optimizing our images?

The `<picture>` element is currently the frontrunner for replacing the `<img>`
element because it allows developers to specify different images for different
device conditions in order to solve both the performance and art direction problems.
However, the `<picture>` element introduces a whole new problem: developers must
now generate a separate asset for every image at every breakpoint. What developers
really need is a solution that automatically generates smaller images for smaller
devices from a single high resolution image. Ideally, this automatic solution would
only make one request per image and would be 100% semantic and backwards compatible. 

This solution is possible using Mobify.js. Its Image API will automatically resizes
and compresses `<img>` and `<picture>` elements, and can do so without needing to
modify a single `<img>` tag in your existing backend markup through the use of Capturing
(an API in Mobify.js that allows for modification to the DOM before any resources
have loaded).

##Speaker Bio

![jansepar](images/jansepar.png)

I am a software engineer and dev lead on the Product Team at Mobify where I
get to hack both on the front-end and back-end, with a heavy focus on the
user experience. When I'm not hacking, you likely find me playing hockey/video
games, eating donairs, or travelling. 
