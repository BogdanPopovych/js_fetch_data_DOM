parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var t="https://mate-academy.github.io/phone-catalogue-static/api/phones.json",n="https://mate-academy.github.io/phone-catalogue-static/api/phones/",e=document.querySelector("body"),r=document.createElement("ul");e.append(r);var o=function(t){return fetch(t).then(function(t){if(!t.ok)throw new Error("Error from server",t.status);return t.json()})};function c(t){setTimeout(function(){throw new Error("Can't recieve data from server",t)},1e3)}function a(t){r.innerHTML=t.map(function(t){return"<li>".concat(t.name,"</li>")}).join("")}o(t).then(a).catch(c);var i=function(t,n){return fetch("".concat(t).concat(n,".json")).then(function(t){if(!t.ok)throw new Error("Error from server",t.status);return t.json()})},u=[];o(t).then(function(t){t.map(function(t){i(n,t.id).then(function(n){u.push([t,n])})})});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.b9755457.js.map