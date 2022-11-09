(()=>{var e={857:(e,r,t)=>{"use strict";function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}t.r(r),t.d(r,{__DO_NOT_USE__ActionTypes:()=>a,applyMiddleware:()=>b,bindActionCreators:()=>v,combineReducers:()=>l,compose:()=>E,createStore:()=>s,legacy_createStore:()=>d});var u="function"==typeof Symbol&&Symbol.observable||"@@observable",f=function(){return Math.random().toString(36).substring(7).split("").join(".")},a={INIT:"@@redux/INIT"+f(),REPLACE:"@@redux/REPLACE"+f(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+f()}};function p(e){if("object"!=typeof e||null===e)return!1;for(var r=e;null!==Object.getPrototypeOf(r);)r=Object.getPrototypeOf(r);return Object.getPrototypeOf(e)===r}function s(e,r,t){var n;if("function"==typeof r&&"function"==typeof t||"function"==typeof t&&"function"==typeof arguments[3])throw new Error(c(0));if("function"==typeof r&&void 0===t&&(t=r,r=void 0),void 0!==t){if("function"!=typeof t)throw new Error(c(1));return t(s)(e,r)}if("function"!=typeof e)throw new Error(c(2));var o=e,i=r,f=[],d=f,l=!1;function y(){d===f&&(d=f.slice())}function v(){if(l)throw new Error(c(3));return i}function E(e){if("function"!=typeof e)throw new Error(c(4));if(l)throw new Error(c(5));var r=!0;return y(),d.push(e),function(){if(r){if(l)throw new Error(c(6));r=!1,y();var t=d.indexOf(e);d.splice(t,1),f=null}}}function b(e){if(!p(e))throw new Error(c(7));if(void 0===e.type)throw new Error(c(8));if(l)throw new Error(c(9));try{l=!0,i=o(i,e)}finally{l=!1}for(var r=f=d,t=0;t<r.length;t++)(0,r[t])();return e}function O(e){if("function"!=typeof e)throw new Error(c(10));o=e,b({type:a.REPLACE})}function h(){var e,r=E;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new Error(c(11));function t(){e.next&&e.next(v())}return t(),{unsubscribe:r(t)}}})[u]=function(){return this},e}return b({type:a.INIT}),(n={dispatch:b,subscribe:E,getState:v,replaceReducer:O})[u]=h,n}var d=s;function l(e){for(var r=Object.keys(e),t={},n=0;n<r.length;n++){var o=r[n];"function"==typeof e[o]&&(t[o]=e[o])}var i,u=Object.keys(t);try{!function(e){Object.keys(e).forEach((function(r){var t=e[r];if(void 0===t(void 0,{type:a.INIT}))throw new Error(c(12));if(void 0===t(void 0,{type:a.PROBE_UNKNOWN_ACTION()}))throw new Error(c(13))}))}(t)}catch(e){i=e}return function(e,r){if(void 0===e&&(e={}),i)throw i;for(var n=!1,o={},f=0;f<u.length;f++){var a=u[f],p=t[a],s=e[a],d=p(s,r);if(void 0===d)throw r&&r.type,new Error(c(14));o[a]=d,n=n||d!==s}return(n=n||u.length!==Object.keys(e).length)?o:e}}function y(e,r){return function(){return r(e.apply(this,arguments))}}function v(e,r){if("function"==typeof e)return y(e,r);if("object"!=typeof e||null===e)throw new Error(c(16));var t={};for(var n in e){var o=e[n];"function"==typeof o&&(t[n]=y(o,r))}return t}function E(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return 0===r.length?function(e){return e}:1===r.length?r[0]:r.reduce((function(e,r){return function(){return e(r.apply(void 0,arguments))}}))}function b(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(e){return function(){var t=e.apply(void 0,arguments),n=function(){throw new Error(c(15))},o={getState:t.getState,dispatch:function(){return n.apply(void 0,arguments)}},u=r.map((function(e){return e(o)}));return n=E.apply(void 0,u)(t.dispatch),i(i({},t),{},{dispatch:n})}}}},883:e=>{e.exports={INCREMENTO:"INCREMENTO",DECREMENTO:"DECREMENTO"}},518:(e,r,t)=>{const{INCREMENTO:n,DECREMENTO:o}=t(883);e.exports={incremento:()=>({type:n}),decremento:()=>({type:o})}},616:(e,r,t)=>{const{INCREMENTO:n,DECREMENTO:o}=t(883),i={contador:0};e.exports=function(e=i,r){switch(r.type){case n:return{...e,contador:e.contador+1};case o:return{...e,contador:e.contador-1};default:return{...e}}}}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return e[n](i,i.exports,t),i.exports}t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const{createStore:e}=t(857),r=t(616),{incremento:n,decremento:o}=t(518);var i=e(r),c=document.querySelector("#valor");function u(){let e=i.getState().contador;c.innerHTML=e}u(),i.subscribe(u);const f=document.querySelector("#incremento"),a=document.querySelector("#decremento"),p=document.querySelector("#incrementoImpar"),s=document.querySelector("#incrementoAsync");f.addEventListener("click",(()=>{i.dispatch(n())})),a.addEventListener("click",(()=>{i.dispatch(o())})),p.addEventListener("click",(()=>{i.getState().contador%2!=0&&i.dispatch(n())})),s.addEventListener("click",(()=>{setTimeout((()=>{i.dispatch(n())}),1e3)}))})()})();