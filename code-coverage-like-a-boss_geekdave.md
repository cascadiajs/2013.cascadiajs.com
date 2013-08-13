#Code Coverage (Like a Boss)

* Name      : Dave Cadwallader
* Twitter   : [@geek_dave][]
* Github    : [geekdave][]
* Website   : [geekdave.com][]

##Abstract

Code Coverage tools can prove to be invaluable resources in software projects large and small.  But just like putting a hammer in your toolbox won't build you a safer house, Code Coverage tools will do little for you on their own, without a process to follow.

In this talk, you'll learn:

### Bossy Code Coverage
Code Coverage is meaningless if it's not enforced.  But nobody likes being the one who chronically nags their teammates.  By automating the process of enforcing a minimum coverage threshold, this responsibility is passed on to a robot.  We'll look into using Grunt to handle this task, and how you can configure a solution that runs on popular CI frameworks like TravisCI and Jenkins.  Over time, this process can change the culture of teams to a "test-first" mindset.

### Lies, Damn Lies, & Statistics
Now that you love Code Coverage, find out how your tool's statistics are *lying to you.*  It's easy to get a false sense of security based on coverage percentages.  But as it turns out, there are many ways that developers can (intentionally or not) manipulate the system to produce misleading coverage statistics.  Luckily, there are a few simple strategies that can mitigate this issue, and keep your numbers honest.

### The Zen of Coverage
How much coverage is "good enough"? 50%? 75%? 90%? Just as a Zen master lives in a constant pursuit of enlightenment, so must we never cease to pursue better code coverage.  But is it really about the numbers?  Learn why chasing a high coverage percentage is a bad strategy, and how to explain that to your number-oriented boss.  

### Feature Coverage FTW
Code Coverage serves as a great "fail safe" for catching untested or under-tested code.  But it does nothing to ensure that the tests we write are actually *meaningful*.  To accomplish this, we need actual human brains, eyeballs, and conversations.  Learn how to implement a "Feature Coverage" process as an essential companion to Code Coverage, and how this will instill harmony in your team between Product Managers, QA, and developers. 

##Speaker Bio

![geekdave](https://raw.github.com/cascadiajs/2013.cascadiajs.com/master/images/geekdave.png)

Dave works from the mountains of Colorado as the lead UI Architect for Model N, Inc.  He describes solving complex coding problems as "pulling splinters out of his brain," insisting that it "feels better than it sounds." When not coding, he enjoys playing the drums, running, biking, and snowshoeing.

## Open Source Contributions:

* [Backbone.Geppetto](https://github.com/ModelN/backbone.geppetto): An event-driven Command framework for Backbone.
* [Backbone.Subroute](https://github.com/ModelN/backbone.subroute): Module-specific bite-sized routers that break up monolithic global state.
* [grunt-blanket-qunit](https://github.com/ModelN/grunt-blanket-qunit): Headless Blanket.js code coverage and QUnit testing via PhantomJS
* [grunt-blanket-mocha](https://github.com/ModelN/grunt-blanket-mocha): Headless Blanket.js code coverage and Mocha testing via PhantomJS

## Popular Blog Posts

* [Automated Code Coverage Enforcement for Mocha Using Grunt and Blanket](http://www.geekdave.com/2013/08/02/automated-code-coverage-enforcement-for-mocha-using-grunt-and-blanket/)
* [Module-Specific Subroutes in Backbone](http://www.geekdave.com/2012/04/05/module-specific-subroutes-in-backbone/)
* [Mindful Disconnection](http://www.geekdave.com/2013/07/22/mindful-disconnection/)


[@geek_dave]:http://twitter.com/geek_dave
[geekdave]:http://github.com/geekdave
[geekdave.com]:http://geekdave.com
