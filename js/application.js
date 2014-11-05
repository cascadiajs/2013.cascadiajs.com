function renderPeeps(peeps) {
  peeps.forEach(function(peep) {
    $('<a href="' + peep.url + '"><img width="80" height="80" src="' + peep.avatar_url + '"/></a>').appendTo('#community');
  });
}

$(document).ready(function() {
  var peeps = {};
  var forksUrl = 'https://api.github.com/repos/cascadiajs/2013.cascadiajs.com/forks?per_page=200&callback=?';
  var collabsUrl = 'https://api.github.com/repos/cascadiajs/2013.cascadiajs.com/collaborators?callback=?';
  $.when( $.getJSON(forksUrl+'&page=1'), $.getJSON(forksUrl+'&page=2'), $.getJSON(collabsUrl) ).done(function(forks1, forks2, collabs) {
    //console.log(forks);
    forks1[0].data.forEach(function(fork) {
      peeps[fork.owner.login] = {url: 'https://github.com/'+fork.owner.login, avatar_url: fork.owner.avatar_url};
    });
    forks2[0].data.forEach(function(fork) {
      peeps[fork.owner.login] = {url: 'https://github.com/'+fork.owner.login, avatar_url: fork.owner.avatar_url};
    });
    collabs[0].data.forEach(function(collab) {
      peeps[collab.login] = {url: 'https://github.com/'+collab.login, avatar_url: collab.avatar_url};
    });
    renderPeeps(_.values(peeps));
  });
});


/*
 * SVGeezy.js 1.0
 *
 * Copyright 2012, Ben Howdle http://twostepmedia.co.uk
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 *
 * Date: Sun Aug 26 20:38 2012 GMT
 *  //call like so, pass in a class name that you don't want it to check and a filetype to replace .svg with
 *  svgeezy.init('nocheck', 'png');
*/
var svgeezy=function(){return{init:function(a,b){this.avoid=a||!1,this.filetype=b||"png",this.svgSupport=this.supportsSvg(),this.svgSupport||(this.images=document.getElementsByTagName("img"),this.imgL=this.images.length,this.fallbacks())},fallbacks:function(){for(;this.imgL--;)if(!this.hasClass(this.images[this.imgL],this.avoid)||!this.avoid){var a=this.images[this.imgL].getAttribute("src");if(null===a)continue;if("svg"==this.getFileExt(a)){var b=a.replace(".svg","."+this.filetype);this.images[this.imgL].setAttribute("src",b)}}},getFileExt:function(a){var b=a.split(".").pop();return-1!==b.indexOf("?")&&(b=b.split("?")[0]),b},hasClass:function(a,b){return(" "+a.className+" ").indexOf(" "+b+" ")>-1},supportsSvg:function(){return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")}}}();
svgeezy.init(false, 'png');