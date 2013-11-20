# Don't (Always) Combine Your Scripts

* Name      : Shawn Jansepar
* Twitter   : [@shawnjan8](http://twitter.com/shawnjan8)
* Github    : [jansepar](http://github.com/jansepar)

##Abstract

You've heard it time an time again from Google and Yahoo - combining your
external scripts to reduce the number of requests will improve the load-time
of your website. Up until now, this has been common knowledge that people
have accepted, because intuitively, it makes a lot of sense. But this advice
was dished out in the early days of the web - before the look-ahead
pre-parser/pre-loader (a feature of the browser that attempts to start
downloading scripts as fast as possible by spawning a separate thread outside
of the main rendering thread, whose only job is to locate resources
and download them in parallel) had been added to browsers.

Today in modern browsers, leaving your JavaScript separated actually *improves*
the performance of your site for a majority of different scenarios - even on
mobile networks. In this talk, I will be discussing why this is, and showing
some data collected around the world using RUM to prove this claim. As well,
I will be discussing why leaving scripts separate will be even more important
for the SPDY web.

##Speaker Bio

![jansepar](images/jansepar.png)

I am a software engineer and dev lead on the Product Team at Mobify, where I
get to hack both on the front-end and back-end with a heavy focus on the
user experience. When I'm not hacking, you likely find me playing hockey/video
games, eating donairs, or travelling. 
