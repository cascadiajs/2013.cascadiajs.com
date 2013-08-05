#Message Passing vs. Data Synchronization

* Name      : Anant Narayanan
* Twitter   : [@anantn](http://twitter.com/anantn)
* Github    : [anantn](http://github.com/anantn)
* Website   : [kix.in](http://kix.in)

##Abstract

The words "real-time" usually conjure up images of "message-passing" in
developer's minds - but it doesn't have to be that way.

Message passing systems have been the de-facto way of doing real-time on the
web, but new technologies like [Firebase](https://www.firebase.com) and
[Meteor](http://www.meteor.com) treat it as a data synchronization problem.
All apps had to have persistence for some of their data anyway, so by
combining persistence and message passing into one problem instead of two,
real-time apps are vastly easier to build and within the reach
of everyone.

In this talk we'll go into the nitty gritty of building a real-time web
app and understanding what the advantages of the data synchronization
approach over message passing are.

##Speaker Bio

![anantn](https://raw.github.com/cascadiajs/2013.cascadiajs.com/master/images/anantn.png)

I'm a longtime JS hacker and a fan of the web!

I worked at [Mozilla Labs](http://mozillalabs.com) on a wide range of
projects like Firefox Sync, the Add-On SDK, Open Web Apps and Firefox OS. I
also represented Mozilla at the W3C and IETF, and most recently worked on
defining and implementing a suite of JS APIs for real-time communication on
the web (also known as [WebRTC](http://webrtc.org)).

I currently work at Firebase, which provides an easy-to-use JS library for
data synchronization, aimed primarily at developers writing real-time apps.

[@anantn]:http://twitter.com/anantn
[anantn]:http://github.com/anantn
[kix.in]:http://kix.in
