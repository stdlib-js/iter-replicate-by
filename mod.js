// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,f=n.__lookupGetter__,c=n.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var l,a,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(f.call(r,t)||c.call(r,t)?(l=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=l):r[t]=e.value),y="get"in e,p="set"in e,a&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,t,e.get),p&&i&&i.call(r,t,e.set),r};var l=t;function a(r,t,e){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var y=/./;function p(r){return"boolean"==typeof r}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return b&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(r,t){return null!=r&&d.call(r,t)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var _=s()?function(r){var t,e,n;if(null==r)return v.call(r);e=r[w],t=m(r,w);try{r[w]=void 0}catch(t){return v.call(r)}return n=v.call(r),t?r[w]=e:delete r[w],n}:function(r){return v.call(r)},j=Boolean.prototype.toString;var g=s();function h(r){return"object"==typeof r&&(r instanceof Boolean||(g?function(r){try{return j.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===_(r)))}function S(r){return p(r)||h(r)}function E(){return new Function("return this;")()}a(S,"isPrimitive",p),a(S,"isObject",h);var O="object"==typeof self?self:null,T="object"==typeof window?window:null,I="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},A="object"==typeof I?I:null;var P=function(r){if(arguments.length){if(!p(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return E()}if(O)return O;if(T)return T;if(A)return A;throw new Error("unexpected error. Unable to resolve global object.")}(),N=P.document&&P.document.childNodes,x=Int8Array;function B(){return/^\s*function\s*([^(]*)/i}var C=/^\s*function\s*([^(]*)/i;a(B,"REGEXP",C);var V=Array.isArray?Array.isArray:function(r){return"[object Array]"===_(r)};function k(r){return null!==r&&"object"==typeof r}function F(r){var t,e,n,o;if(("Object"===(e=_(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=C.exec(n.toString()))return t[1]}return k(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}a(k,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!V(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(k));var G="function"==typeof y||"object"==typeof x||"function"==typeof N?function(r){return F(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?F(r).toLowerCase():t};function L(r){return"function"===G(r)}function M(r){return"number"==typeof r}var R=Number,U=R.prototype.toString;var Y=s();function J(r){return"object"==typeof r&&(r instanceof R||(Y?function(r){try{return U.call(r),!0}catch(r){return!1}}(r):"[object Number]"===_(r)))}function X(r){return M(r)||J(r)}a(X,"isPrimitive",M),a(X,"isObject",J);var q=Number.POSITIVE_INFINITY,z=R.NEGATIVE_INFINITY,D=Math.floor;function H(r){return r<q&&r>z&&D(t=r)===t;var t}function K(r){return M(r)&&H(r)}function Q(r){return J(r)&&H(r.valueOf())}function W(r){return K(r)||Q(r)}a(W,"isPrimitive",K),a(W,"isObject",Q);var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function $(){var r,t=arguments,e=t[0],n="https://stdlib.io/e/"+e+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}function rr(r,t,e){var n,o,u,i,f,c,l;if(!function(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&L(r.next)}(r))throw new TypeError($("0Cl4J",r));if(!L(t))throw new TypeError($("0Cl2S",t));return i=-1,c=-1,l=-1,f=0,a(o={},"next",(function(){var o;if(u)return{done:!0};for(;i+=1,(c+=1)>=f;){if((o=r.next()).done)return u=!0,o;if(n=o.value,l+=1,!K(f=t.call(e,n,l,i)))throw new TypeError($("0Cl4V",f));if(c=0,f>0)break}return{value:n,done:!1}})),a(o,"return",(function(r){if(u=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Z&&L(r[Z])&&a(o,Z,(function(){return rr(r[Z](),t,e)})),o}export{rr as default};
//# sourceMappingURL=mod.js.map
