parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"toOI":[function(require,module,exports) {
"use strict";var t=document.querySelector(".main__slider"),n=document.querySelector(".main__cards"),e=document.querySelectorAll(".main__cards-container"),i=0;function o(){e.forEach(function(t){t.style.transform="scale(0.9)",t.style.width="55vw"}),e[i].style.width="68vw",e[i].style.transform="none"}function r(){n.style.transform="translateX(-".concat(e[i].offsetWidth*i,"px)"),o()}window.innerWidth<1280&&o(),window.addEventListener("resize",function(){window.innerWidth<1280?o():e.forEach(function(t){return t.style.width="382px"})});var c=function(){i<e.length&&(i++,r()),console.log(e[0].offsetWidth)},s=function(){i>0&&(i--,r())},l=null,a=null;function u(t){return t.touches}function d(t){var n=u(t)[0];l=n.clientX,a=n.clientY}function f(t){if(l&&a){var n=t.touches[0].clientX,e=t.touches[0].clientY,i=l-n,o=a-e;if(Math.abs(i)>Math.abs(o))i>0?c():s();else if(o>0)return;l=null,a=null}}t.addEventListener("touchstart",d,{passive:!0}),t.addEventListener("touchmove",f,{passive:!0});
},{}]},{},["toOI"], null)
//# sourceMappingURL=cards.8681a9db.js.map