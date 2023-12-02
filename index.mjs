// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.1.1-esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";function o(d,m,l){var f,u,h,p,j,v,a;if(!t(d))throw new TypeError(i("0Ph46,G5",d));if(!r(m))throw new TypeError(i("0Ph2H,G6",m));return p=-1,v=-1,a=-1,j=0,e(u={},"next",(function(){var e;if(h)return{done:!0};for(;p+=1,(v+=1)>=j;){if((e=d.next()).done)return h=!0,e;if(f=e.value,a+=1,j=m.call(l,f,a,p),!n(j))throw new TypeError(i("0Ph4I,Lu",j));if(v=0,j>0)break}return{value:f,done:!1}})),e(u,"return",(function(e){if(h=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),s&&r(d[s])&&e(u,s,(function(){return o(d[s](),m,l)})),u}export{o as default};
//# sourceMappingURL=index.mjs.map
