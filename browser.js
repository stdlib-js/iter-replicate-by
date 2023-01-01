// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).iterReplicateBy=e()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,f=n.__lookupGetter__,c=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var l,a,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(f.call(t,e)||c.call(t,e)?(l=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=l):t[e]=r.value),y="get"in r,p="set"in r,a&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,e,r.get),p&&i&&i.call(t,e,r.set),t};var l=e;function a(t,e,r){l(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var y=/./;function p(t){return"boolean"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return b&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(t,e){return null!=t&&d.call(t,e)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var j=s()?function(t){var e,r,n;if(null==t)return v.call(t);r=t[w],e=m(t,w);try{t[w]=void 0}catch(e){return v.call(t)}return n=v.call(t),e?t[w]=r:delete t[w],n}:function(t){return v.call(t)},_=Boolean.prototype.toString;var g=s();function h(t){return"object"==typeof t&&(t instanceof Boolean||(g?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function S(t){return p(t)||h(t)}function E(){return new Function("return this;")()}a(S,"isPrimitive",p),a(S,"isObject",h);var T="object"==typeof self?self:null,O="object"==typeof window?window:null,I="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},A="object"==typeof I?I:null;var P=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return E()}if(T)return T;if(O)return O;if(A)return A;throw new Error("unexpected error. Unable to resolve global object.")}(),N=P.document&&P.document.childNodes,x=Int8Array;function B(){return/^\s*function\s*([^(]*)/i}var C=/^\s*function\s*([^(]*)/i;a(B,"REGEXP",C);var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};function k(t){return null!==t&&"object"==typeof t}function F(t){var e,r,n,o;if(("Object"===(r=j(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=C.exec(n.toString()))return e[1]}return k(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}a(k,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!V(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(k));var G="function"==typeof y||"object"==typeof x||"function"==typeof N?function(t){return F(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?F(t).toLowerCase():e};function L(t){return"function"===G(t)}function M(t){return"number"==typeof t}var R=Number,U=R.prototype.toString;var Y=s();function J(t){return"object"==typeof t&&(t instanceof R||(Y?function(t){try{return U.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function X(t){return M(t)||J(t)}a(X,"isPrimitive",M),a(X,"isObject",J);var q=Number.POSITIVE_INFINITY,z=R.NEGATIVE_INFINITY,D=Math.floor;function H(t){return t<q&&t>z&&D(e=t)===e;var e}function K(t){return M(t)&&H(t)}function Q(t){return J(t)&&H(t.valueOf())}function W(t){return K(t)||Q(t)}a(W,"isPrimitive",K),a(W,"isObject",Q);var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function $(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}return function t(e,r,n){var o,u,i,f,c,l,y;if(!function(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)&&L(t.next)}(e))throw new TypeError($("0Cl4J",e));if(!L(r))throw new TypeError($("0Cl2S",r));return f=-1,l=-1,y=-1,c=0,a(u={},"next",(function(){var t;if(i)return{done:!0};for(;f+=1,(l+=1)>=c;){if((t=e.next()).done)return i=!0,t;if(o=t.value,y+=1,!K(c=r.call(n,o,y,f)))throw new TypeError($("0Cl4V",c));if(l=0,c>0)break}return{value:o,done:!1}})),a(u,"return",(function(t){if(i=!0,arguments.length)return{value:t,done:!0};return{done:!0}})),Z&&L(e[Z])&&a(u,Z,(function(){return t(e[Z](),r,n)})),u}}));
//# sourceMappingURL=browser.js.map
