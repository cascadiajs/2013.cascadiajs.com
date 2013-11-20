#Make Art Not Money

* Name      : Brad Bouse
* Twitter   : [@bradbouse]
* Github    : [doolittle]
* Website   : [bradwearsglasses.com]

##Abstract

Forget those lucrative contracting jobs and make something useless! Between Node.js, WebGL, and the ever-faster evolution of JS engines, Javascript is an ideal platform to make interactive and/or generative art.

This talk will have three parts:

A) A survey of the tools for creating art with JavaScript (graphics, tweening, 3D) and how to connect to input devices (webcam, Kinect, LeapMotion, Arduino) to make amazing things.

B) A demo and walkthrough of a Leap/JavaScript app I wrote. Users form and destroy particle-based words with their fingertips. I'll explain how to get started with Leap + JS, describe the app's architecture (receiving position information from the Leap SDK via node, updating the application state, and optimizing performance), and cover some common (and unexpected) problems. This Leap project is a gallery installation that is a followup to Between Page and Screen, a digital popup book of poetry (more on that [here](http://www.youtube.com/watch?v=1s-JFxEmtpY) and [here](http://betweenpageandscreen.com)).

C) Practical takeways from creative code: become a better engineer by stretching the boundaries.
- Performance. When you're trying to maintain >30FPS you need to be zealous about writing tight, efficient code.
- Memory Leaks. Installed pieces can run for days without a refresh. With single-page apps, users can sit on a single screen for hours. How does your app manage memory use and garbage collection?
- Event-based interaction. The Leap spits out events at >90FPS--that's far messier than simply handling user clicks. How do you coordinate your app's internal events with this firehose of user input?
- Learn far more about CSS-vs-SVG-vs-Canvas performance than you ever wanted to know.
- Dive into the bizarro world of GPUs! It makes IE look downright sensible.

##Speaker Bio

![doolittle](https://raw.github.com/cascadiajs/2013.cascadiajs.com/master/images/doolittle.png)

I went to film school and somehow ended up doing startups. As a very early employee, I designed and coded the family tree interface for [Geni](http://geni.com) and the desktop app for [Yammer](http://yammer.com). With the poet Amaranth Borsuk, I wrote the software for [Between Page and Screen](http://betweenpageandscreen.com), a digital popup book of poetry that has written up in Wired, Salon, The Economist, and even American Scientist. Now I help early-stage startups figure out how to design and build the first version of their product. On the side, I build weird things.

[@bradbouse]:http://twitter.com/bradbouse
[doolittle]:http://github.com/doolittle
[bradwearsglasses.com]:http://bradwearsglasses.com
