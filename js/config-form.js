!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){!function(){e.exports=this.wp.compose}()},function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var c=o.apply(null,r);c&&e.push(c)}else if("object"===i)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),i=n(0),c=n(3),l=n(1),a=n(4),u=n(5),s=n.n(u),f=Object(i.createElement)(l.SVG,{width:"24px",height:"24px",viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg",className:"onedash__logo"},Object(i.createElement)(l.G,{id:"24x24-icon",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},Object(i.createElement)(l.Rect,{id:"Rectangle",fill:"#0070FE",x:"4",y:"19",width:"16",height:"4"}),Object(i.createElement)(l.Rect,{id:"Rectangle",fill:"#00BAFF",x:"4",y:"10",width:"16",height:"4"}),Object(i.createElement)(l.Rect,{id:"Rectangle",fill:"#00CF8A",x:"4",y:"1",width:"16",height:"4"})));function p(e){try{var t=new URL(e).searchParams;return t.get("target")&&new URL(t.get("config"))}catch(e){return!1}}Object(c.registerBlockType)("onedash/configform",{title:"OneDash",category:"widgets",icon:f,attributes:{url:{type:"string",selector:"input"}},edit:Object(a.withState)({isValid:!0})((function(e){var t=e.className,n=e.attributes,r=e.isValid,c=e.setState,a=e.setAttributes;return Object(i.createElement)(l.Placeholder,{icon:f,label:"OneDash SDK URL",instructions:"Paste a link to the player config you want to display on your site.",className:t},Object(i.createElement)(l.TextControl,{type:"url",className:s()("".concat(t,"__control"),o()({},"".concat(t,"__control__state_invalid"),!r)),value:n.url,placeholder:"Enter URL here...",onChange:function(e){a({url:e}),c({isValid:p(e)||0===e.length})}}))})),save:function(){return null}})}]);