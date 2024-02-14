// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).iterReplicateBy=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function s(e){return"string"==typeof e}var l=Math.abs,u=String.prototype.toLowerCase,p=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":l(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=f.call(i,y,"$1e"),i=f.call(i,v,"e"),i=f.call(i,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,d,"e-0$1"),e.alternate&&(i=f.call(i,h,"$1."),i=f.call(i,w,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===p.call(e.specifier)?p.call(i):u.call(i)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function x(e,r,t){var i=r-e.length;return i<0?e:e=t?e+E(i):E(i)+e}var k=String.fromCharCode,S=isNaN,T=Array.isArray;function V(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function j(e){var r,t,i,a,o,l,u,p,f;if(!T(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",u=1,p=0;p<e.length;p++)if(s(i=e[p]))l+=i;else{if(r=void 0!==i.precision,!(i=V(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+i+"`.");for(i.mapping&&(u=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[u],10),u+=1,S(i.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[u],10),u+=1,S(i.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[u],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!S(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=S(o)?String(i.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=x(i.arg,i.width,i.padRight)),l+=i.arg||"",u+=1}return l}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function _(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function $(e){var r,t,i,n;for(t=[],n=0,i=I.exec(e);i;)(r=e.slice(n,I.lastIndex-i[0].length)).length&&t.push(r),t.push(_(i)),n=I.lastIndex,i=I.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function F(e){return"string"==typeof e}function A(e){var r,t;if(!F(e))throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[$(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return j.apply(null,r)}var C,R=Object.prototype,O=R.toString,N=R.__defineGetter__,Z=R.__defineSetter__,P=R.__lookupGetter__,L=R.__lookupSetter__;C=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===O.call(e))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(P.call(e,r)||L.call(e,r)?(i=e.__proto__,e.__proto__=R,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&N&&N.call(e,r,t.get),o&&Z&&Z.call(e,r,t.set),e};var W=C;function G(e,r,t){W(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var B=/./;function U(e){return"boolean"==typeof e}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return X&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;function q(e,r){return null!=e&&Y.call(e,r)}var D="function"==typeof Symbol?Symbol:void 0,H="function"==typeof D?D.toStringTag:"";var J=M()?function(e){var r,t,i;if(null==e)return z.call(e);t=e[H],r=q(e,H);try{e[H]=void 0}catch(r){return z.call(e)}return i=z.call(e),r?e[H]=t:delete e[H],i}:function(e){return z.call(e)},K=Boolean,Q=Boolean.prototype.toString;var ee=M();function re(e){return"object"==typeof e&&(e instanceof K||(ee?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===J(e)))}function te(e){return U(e)||re(e)}function ie(e){return"number"==typeof e}function ne(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function ae(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+ne(n):ne(n)+e,i&&(e="-"+e)),e}G(te,"isPrimitive",U),G(te,"isObject",re);var oe=String.prototype.toLowerCase,ce=String.prototype.toUpperCase;function se(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!ie(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=ae(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=ae(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===ce.call(e.specifier)?ce.call(t):oe.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function le(e){return"string"==typeof e}var ue=Math.abs,pe=String.prototype.toLowerCase,fe=String.prototype.toUpperCase,ge=String.prototype.replace,de=/e\+(\d)$/,he=/e-(\d)$/,we=/^(\d+)$/,be=/^(\d+)e/,ve=/\.0$/,ye=/\.0*e/,me=/(\..*[^0])0*e/;function Ee(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!ie(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":ue(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=ge.call(t,me,"$1e"),t=ge.call(t,ye,"e"),t=ge.call(t,ve,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=ge.call(t,de,"e+0$1"),t=ge.call(t,he,"e-0$1"),e.alternate&&(t=ge.call(t,we,"$1."),t=ge.call(t,be,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===fe.call(e.specifier)?fe.call(t):pe.call(t)}function xe(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function ke(e,r,t){var i=r-e.length;return i<0?e:e=t?e+xe(i):xe(i)+e}var Se=String.fromCharCode,Te=isNaN,Ve=Array.isArray;function je(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Ie(e){var r,t,i,n,a,o,c,s,l;if(!Ve(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(le(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=je(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Te(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Te(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=se(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Te(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Te(a)?String(i.arg):Se(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Ee(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=ae(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=ke(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var _e=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $e(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Fe(e){var r,t,i,n;for(t=[],n=0,i=_e.exec(e);i;)(r=e.slice(n,_e.lastIndex-i[0].length)).length&&t.push(r),t.push($e(i)),n=_e.lastIndex,i=_e.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Ae(e){return"string"==typeof e}function Ce(e){var r,t;if(!Ae(e))throw new TypeError(Ce("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Fe(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return Ie.apply(null,r)}function Re(){return new Function("return this;")()}var Oe="object"==typeof self?self:null,Ne="object"==typeof window?window:null,Ze="object"==typeof global?global:null,Pe="object"==typeof globalThis?globalThis:null;var Le=function(e){if(arguments.length){if(!U(e))throw new TypeError(Ce("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Re()}if(Pe)return Pe;if(Oe)return Oe;if(Ne)return Ne;if(Ze)return Ze;throw new Error("unexpected error. Unable to resolve global object.")}(),We=Le.document&&Le.document.childNodes,Ge=Int8Array;function Be(){return/^\s*function\s*([^(]*)/i}var Ue=/^\s*function\s*([^(]*)/i;G(Be,"REGEXP",Ue);var Xe=Array.isArray?Array.isArray:function(e){return"[object Array]"===J(e)};function Me(e){return null!==e&&"object"==typeof e}function ze(e){var r,t,i,n;if(("Object"===(t=J(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(i=e.constructor).name)return i.name;if(r=Ue.exec(i.toString()))return r[1]}return Me(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}G(Me,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(Ce("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!Xe(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}(Me));var Ye="function"==typeof B||"object"==typeof Ge||"function"==typeof We?function(e){return ze(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?ze(e).toLowerCase():r};function qe(e){return"function"===Ye(e)}function De(e){return"number"==typeof e}var He=Object.prototype.toString;var Je="function"==typeof Symbol?Symbol:void 0,Ke="function"==typeof Je?Je.toStringTag:"";var Qe=M()?function(e){var r,t,i;if(null==e)return He.call(e);t=e[Ke],r=q(e,Ke);try{e[Ke]=void 0}catch(r){return He.call(e)}return i=He.call(e),r?e[Ke]=t:delete e[Ke],i}:function(e){return He.call(e)},er=Number,rr=er.prototype.toString;var tr=M();function ir(e){return"object"==typeof e&&(e instanceof er||(tr?function(e){try{return rr.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Qe(e)))}function nr(e){return De(e)||ir(e)}G(nr,"isPrimitive",De),G(nr,"isObject",ir);var ar=Number.POSITIVE_INFINITY,or=er.NEGATIVE_INFINITY,cr=Math.floor;function sr(e){return e<ar&&e>or&&cr(r=e)===r;var r}function lr(e){return De(e)&&sr(e)}function ur(e){return ir(e)&&sr(e.valueOf())}function pr(e){return lr(e)||ur(e)}G(pr,"isPrimitive",lr),G(pr,"isObject",ur);var fr="function"==typeof Symbol?Symbol:void 0;var gr="function"==typeof fr&&"symbol"==typeof fr("foo")&&q(fr,"iterator")&&"symbol"==typeof fr.iterator?Symbol.iterator:null;function dr(e){return"number"==typeof e}function hr(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function wr(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+hr(n):hr(n)+e,i&&(e="-"+e)),e}var br=String.prototype.toLowerCase,vr=String.prototype.toUpperCase;function yr(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!dr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=wr(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=wr(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===vr.call(e.specifier)?vr.call(t):br.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function mr(e){return"string"==typeof e}var Er=Math.abs,xr=String.prototype.toLowerCase,kr=String.prototype.toUpperCase,Sr=String.prototype.replace,Tr=/e\+(\d)$/,Vr=/e-(\d)$/,jr=/^(\d+)$/,Ir=/^(\d+)e/,_r=/\.0$/,$r=/\.0*e/,Fr=/(\..*[^0])0*e/;function Ar(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!dr(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":Er(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=Sr.call(t,Fr,"$1e"),t=Sr.call(t,$r,"e"),t=Sr.call(t,_r,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Sr.call(t,Tr,"e+0$1"),t=Sr.call(t,Vr,"e-0$1"),e.alternate&&(t=Sr.call(t,jr,"$1."),t=Sr.call(t,Ir,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===kr.call(e.specifier)?kr.call(t):xr.call(t)}function Cr(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Rr(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Cr(i):Cr(i)+e}var Or=String.fromCharCode,Nr=isNaN,Zr=Array.isArray;function Pr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Lr(e){var r,t,i,n,a,o,c,s,l;if(!Zr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(mr(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Pr(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Nr(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Nr(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=yr(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Nr(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Nr(a)?String(i.arg):Or(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Ar(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=wr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Rr(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Wr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Gr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Br(e){var r,t,i,n;for(t=[],n=0,i=Wr.exec(e);i;)(r=e.slice(n,Wr.lastIndex-i[0].length)).length&&t.push(r),t.push(Gr(i)),n=Wr.lastIndex,i=Wr.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Ur(e){return"string"==typeof e}function Xr(e){var r,t,i;if(!Ur(e))throw new TypeError(Xr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Br(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return Lr.apply(null,t)}return function e(r,t,i){var n,a,o,c,s,l,u;if(!function(e){var r=typeof e;return null!==e&&("object"===r||"function"===r)&&qe(e.next)}(r))throw new TypeError(Xr("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!qe(t))throw new TypeError(Xr("invalid argument. Second argument must be a function. Value: `%s`.",t));return c=-1,l=-1,u=-1,s=0,G(a={},"next",(function(){var e;if(o)return{done:!0};for(;c+=1,(l+=1)>=s;){if((e=r.next()).done)return o=!0,e;if(n=e.value,u+=1,!lr(s=t.call(i,n,u,c)))throw new TypeError(Xr("invalid return value. Callback function must return an integer. Value: `%s`.",s));if(l=0,s>0)break}return{value:n,done:!1}})),G(a,"return",(function(e){if(o=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),gr&&qe(r[gr])&&G(a,gr,(function(){return e(r[gr](),t,i)})),a}}));
//# sourceMappingURL=index.js.map
